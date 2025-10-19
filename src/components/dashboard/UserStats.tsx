// Componente interno para mostrar una estadística individual
function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/60 text-center shadow-md backdrop-blur-sm">
      <p className="text-sm text-gray-400 mb-1">{label}</p>
      <p className="text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}

// Añadimos 'export' aquí para que el componente pueda ser importado desde App.tsx
export function UserStats() {
  // Estos serían datos reales obtenidos de la wallet o un contrato
  const totalStaked = '$12,503.45';
  const rewardsEarned = '$845.12';
  const averageApy = '12.75%';

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard label="Total Staked" value={totalStaked} />
      <StatCard label="Rewards Earned" value={rewardsEarned} />
      <StatCard label="Average APY" value={averageApy} />
    </div>
  );
}

