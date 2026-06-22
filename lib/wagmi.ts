import { http, createConfig } from "wagmi";
import { mainnet, base } from "wagmi/chains";
import { injected, coinbaseWallet } from "wagmi/connectors";

/**
 * Wagmi config — EVM chains + injected (MetaMask/Rabby/etc) + Coinbase Wallet.
 * No WalletConnect projectId required (Sprint 2: add WC if needed).
 */

export const wagmiConfig = createConfig({
  chains: [mainnet, base],
  connectors: [
    injected({ shimDisconnect: true }),
    coinbaseWallet({ appName: "Cineora" }),
  ],
  transports: {
    [mainnet.id]: http(
      process.env.NEXT_PUBLIC_MAINNET_RPC || undefined
    ),
    [base.id]: http(
      process.env.NEXT_PUBLIC_BASE_RPC || undefined
    ),
  },
  ssr: true,
});

declare module "wagmi" {
  interface Register {
    config: typeof wagmiConfig;
  }
}