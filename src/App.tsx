import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { UserStats } from './components/dashboard/UserStats';
import { PoolList } from './components/dashboard/PoolList';
import { StakeModal } from './components/StakeModal';
import { useAppStore } from './store/useAppStore';

// Header Component
function Header() {
  return (
    <header className="flex justify-between items-center mb-8">
      <div className="flex items-center space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <h1 className="text-2xl font-bold text-white">YieldFusion</h1>
      </div>
      {/* Reemplazamos el botón simulado con el componente real de RainbowKit */}
      <ConnectButton />
    </header>
  );
}

// Pre-Connection View Component
function PreConnectionView() {
  return (
    // Usamos ConnectButton.Custom para mantener nuestro diseño de botón
    // pero obteniendo la funcionalidad de RainbowKit.
    <ConnectButton.Custom>
      {({ openConnectModal, mounted }) => {
        return (
          <div className="text-center mt-20 md:mt-32" hidden={!mounted}>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4">The Smartest Yields in DeFi.</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">Connect your wallet to discover and stake in the highest-performing yield farms across multiple chains.</p>
            <button
              onClick={openConnectModal}
              type="button"
              className="primary-button text-white font-bold py-4 px-10 rounded-full text-lg mt-10"
            >
              Connect Wallet
            </button>
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}

// Main App Component
export default function App() {
  // Usamos el hook useAccount de Wagmi para obtener el estado de conexión real.
  const { isConnected } = useAccount();
  const isModalOpen = useAppStore((state) => state.isModalOpen);

  return (
    <>
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-900/50 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-900/50 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto p-4 md:p-8 max-w-7xl">
        <Header />

        {/* La vista cambia dinámicamente según el estado de conexión real */}
        {isConnected ? (
          <main>
            <UserStats />
            <PoolList />
          </main>
        ) : (
          <PreConnectionView />
        )}
      </div>

      {isModalOpen && <StakeModal />}
    </>
  );
}

