import { useAppStore } from '../../store/useAppStore';

// Definimos el tipo para las props del pool
type Pool = {
  id: number;
  name: string;
  asset: string;
  apy: number;
  tvl: number;
  userStaked: number;
};

type PoolCardProps = {
  pool: Pool;
};

// Añadimos 'export' aquí para que el componente pueda ser importado desde otros archivos.
export function PoolCard({ pool }: PoolCardProps) {
  const { openModal } = useAppStore();

  const handleStakeClick = () => {
    openModal(pool);
  };

  return (
    <div className="bg-gray-800/50 rounded-lg p-5 border border-gray-700/60 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          {/* Aquí podrías poner un ícono del token */}
          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center font-bold">
            {pool.asset.charAt(0)}
          </div>
          <div>
            <h3 className="font-semibold text-lg text-white">{pool.name}</h3>
            <p className="text-sm text-gray-400">{pool.asset}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-green-400 font-semibold text-lg">{pool.apy.toFixed(2)}%</p>
          <p className="text-xs text-gray-500">APY</p>
        </div>
      </div>

      <div className="space-y-3 my-5">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Total Value Locked</span>
          <span className="font-medium text-white">${pool.tvl.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Your Stake</span>
          <span className="font-medium text-white">${pool.userStaked.toLocaleString()}</span>
        </div>
      </div>

      <button
        onClick={handleStakeClick}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 rounded-lg transition-all duration-200"
      >
        Stake
      </button>
    </div>
  );
}