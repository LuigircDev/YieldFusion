import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, sepolia } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'nexus DeFi',
  projectId: '8d53a5362ce987d8c215b95fdac16d3d', // Reemplaza con tu Project ID de WalletConnect
  chains: [mainnet, sepolia],
  ssr: false, // Lo establecemos en false ya que es una app del lado del cliente (Vite)
});
