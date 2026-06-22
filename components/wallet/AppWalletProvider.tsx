"use client";

/**
 * AppWalletProvider — wagmi + react-query wrapper for EVM wallet connection.
 * Chains: Ethereum mainnet + Base.
 * Wallets: Injected (MetaMask, Rabby, Brave) + Coinbase Wallet.
 */

import { ReactNode } from "react";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { wagmiConfig } from "@/lib/wagmi";

const queryClient = new QueryClient();

export function AppWalletProvider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}