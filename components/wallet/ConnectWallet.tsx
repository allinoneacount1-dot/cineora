"use client";

/**
 * ConnectWallet — real EVM wallet connection via wagmi.
 * Disconnected: "Connect Wallet" CTA → opens modal with connector list.
 * Connected: shows truncated address + native balance (ETH on mainnet, ETH on Base).
 * Dropdown: Explorer link, Copy address, Switch chain, Disconnect.
 */

import { useEffect, useMemo, useState, useCallback } from "react";
import { useAccount, useConnect, useDisconnect, useBalance, useChainId } from "wagmi";
import { mainnet, base } from "wagmi/chains";

export function ConnectWallet() {
  const { address, isConnected, connector } = useAccount();
  const { connect, connectors, isPending: isConnecting } = useConnect();
  const { disconnect } = useDisconnect();
  const chainId = useChainId();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => setMounted(true), []);

  // Real native balance fetch via wagmi
  const { data: balance } = useBalance({
    address,
    chainId: chainId === mainnet.id ? mainnet.id : chainId === base.id ? base.id : mainnet.id,
    query: { enabled: !!address, refetchInterval: 30_000 },
  });

  const truncated = useMemo(() => {
    if (!address) return "";
    return `${address.slice(0, 6)}…${address.slice(-4)}`;
  }, [address]);

  const chainName = chainId === mainnet.id ? "Ethereum" : chainId === base.id ? "Base" : `Chain ${chainId}`;

  const explorerUrl = address
    ? chainId === base.id
      ? `https://basescan.org/address/${address}`
      : `https://etherscan.io/address/${address}`
    : "#";

  const onConnectClick = () => {
    if (connectors.length === 0) return;
    // Open connector selection modal
    setModalOpen(true);
    setOpen(false);
  };

  const onSelectConnector = (connectorId: string) => {
    const c = connectors.find((x) => x.id === connectorId);
    if (c) connect({ connector: c });
    setModalOpen(false);
  };

  const onCopyAddress = async () => {
    if (!address) return;
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("copy failed:", err);
    }
  };

  const onSwitchChain = () => {
    // Simple: try to switch to Base (cheaper for users)
    if (typeof window !== "undefined" && (window as { ethereum?: { request?: (args: { method: string; params: unknown[] }) => Promise<unknown> } }).ethereum?.request) {
      (window as { ethereum: { request: (args: { method: string; params: unknown[] }) => Promise<unknown> } }).ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x2105" }], // Base mainnet
      }).catch(() => {
        // ignore — user rejected or chain not added
      });
    }
  };

  // Avoid hydration mismatch — render placeholder until mounted
  if (!mounted) {
    return (
      <button className="btn-cineora group" aria-label="Connect wallet" suppressHydrationWarning>
        <span suppressHydrationWarning>Connect Wallet</span>
        <WalletGlyph />
      </button>
    );
  }

  // === DISCONNECTED STATE ===
  if (!isConnected) {
    return (
      <>
        <button
          onClick={onConnectClick}
          disabled={isConnecting}
          className="btn-cineora group"
          aria-label="Connect wallet"
        >
          <span>{isConnecting ? "Connecting…" : "Connect Wallet"}</span>
          <WalletGlyph />
        </button>
        {modalOpen && <ConnectorModal
          connectors={connectors.map((c) => ({ id: c.id, name: c.name }))}
          onSelect={onSelectConnector}
          onClose={() => setModalOpen(false)}
        />}
      </>
    );
  }

  // === CONNECTED STATE ===
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-3 px-4 py-2 border border-rule-strong bg-transparent hover:bg-[rgba(0,245,255,0.04)] transition-colors duration-500 ease-cineora"
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <PulseDot />
        <span className="font-mono text-[12px] tracking-wider text-text">
          {truncated}
        </span>
        <span className="text-text-muted text-[12px] hidden sm:inline">
          {balance
            ? `${parseFloat(balance.formatted).toFixed(3)} ${balance.symbol}`
            : "…"}
        </span>
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-30"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div
            className="absolute right-0 top-[calc(100%+8px)] z-40 min-w-[280px] border border-rule-strong bg-bg-deeper shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-md"
            role="menu"
          >
            <div className="px-5 py-4 border-b border-rule">
              <div className="label text-text-faint mb-2">Connected via {connector?.name}</div>
              <div className="font-mono text-[13px] text-text break-all">
                {address}
              </div>
              <div className="mt-2 text-[12px] text-text-muted flex items-center justify-between">
                <span>Network: <span className="text-text">{chainName}</span></span>
                {balance && (
                  <span>
                    {parseFloat(balance.formatted).toFixed(4)} {balance.symbol}
                  </span>
                )}
              </div>
            </div>

            <div className="py-2">
              <DropdownItem
                onClick={() => window.open(explorerUrl, "_blank", "noopener")}
                label={`View on ${chainId === base.id ? "BaseScan" : "Etherscan"}`}
              />
              <DropdownItem
                onClick={onCopyAddress}
                label={copied ? "Copied ✓" : "Copy address"}
              />
              {chainId !== base.id && (
                <DropdownItem
                  onClick={onSwitchChain}
                  label="Switch to Base"
                />
              )}
              <div className="my-2 mx-5 hairline" />
              <DropdownItem
                onClick={() => { disconnect(); setOpen(false); }}
                label="Disconnect"
                danger
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function ConnectorModal({
  connectors,
  onSelect,
  onClose,
}: {
  connectors: { id: string; name: string }[];
  onSelect: (id: string) => void;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[rgba(6,9,36,0.85)] backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="wallet-modal-title"
    >
      <div
        className="w-full max-w-[440px] border border-rule-strong bg-bg-deeper shadow-[0_30px_90px_rgba(0,0,0,0.7)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-5 border-b border-rule flex items-center justify-between">
          <h2 id="wallet-modal-title" className="font-display text-[22px] text-text">
            Connect a wallet
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-text-faint hover:text-text transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-3">
          {connectors.length === 0 ? (
            <div className="px-4 py-8 text-center text-text-muted text-[14px]">
              No wallet detected. Install MetaMask, Rabby, or Coinbase Wallet.
            </div>
          ) : (
            connectors.map((c) => (
              <button
                key={c.id}
                onClick={() => onSelect(c.id)}
                className="w-full flex items-center justify-between px-4 py-4 text-left hover:bg-[rgba(0,245,255,0.04)] transition-colors duration-300 border border-transparent hover:border-rule"
              >
                <span className="text-text text-[15px]">{c.name}</span>
                <span className="text-text-faint text-[11px] label">CONNECT</span>
              </button>
            ))
          )}
        </div>

        <div className="px-6 py-4 border-t border-rule">
          <p className="text-text-faint text-[11px] leading-[1.6]">
            By connecting, you agree to the Cineora protocol terms. Your wallet
            address is public on-chain. Cineora never custodies funds.
          </p>
        </div>
      </div>
    </div>
  );
}

function DropdownItem({
  onClick,
  label,
  danger = false,
}: {
  onClick: () => void;
  label: string;
  danger?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-5 py-2.5 text-[13px] transition-colors duration-300 ${
        danger
          ? "text-[#ff6b4a] hover:bg-[rgba(255,77,0,0.06)]"
          : "text-text-muted hover:text-text hover:bg-[rgba(0,245,255,0.04)]"
      }`}
      role="menuitem"
    >
      {label}
    </button>
  );
}

function PulseDot() {
  return (
    <span className="relative flex items-center justify-center w-2 h-2">
      <span className="absolute inset-0 rounded-full bg-aurora opacity-60 animate-ping" />
      <span className="relative w-2 h-2 rounded-full bg-aurora" />
    </span>
  );
}

function WalletGlyph() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 4 H11 V11 H2 Z M2 4 V3 a1 1 0 0 1 1 -1 H10"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="9.5" cy="7.5" r="0.9" fill="currentColor" />
    </svg>
  );
}