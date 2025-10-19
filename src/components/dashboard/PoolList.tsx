import { usePoolData } from '../../hooks/usePoolData';
import { PoolCard } from './PoolCard';

// La palabra clave 'export' aquí es la clave.
// Asegúrate de que no la hayas borrado accidentalmente.
export function PoolList() {
  const { pools, isLoading } = usePoolData();

  if (isLoading) {
    return (
      <div className="mt-8 text-center">
        <p className="text-gray-400">Loading available pools...</p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-white">Available Pools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pools.map((pool) => (
          <PoolCard key={pool.id} pool={pool} />
        ))}
      </div>
    </div>
  );
}

