import { useState, useEffect } from 'react';

// Tipos y datos simulados
type Pool = {
  id: number;
  name: string;
  asset: string;
  apy: number;
  tvl: number;
  userStaked: number;
};

const mockPools: Pool[] = [
    { id: 1, name: 'Ether Staking', asset: 'ETH', apy: 4.5, tvl: 12500000, userStaked: 5.2 },
    { id: 2, name: 'Matic Yield Farm', asset: 'MATIC', apy: 8.2, tvl: 7800000, userStaked: 10500 },
    { id: 3, name: 'Stablecoin Pool', asset: 'USDC', apy: 2.1, tvl: 25000000, userStaked: 2500 },
];

export function usePoolData() {
  // CORRECCIÓN: Inicializamos 'pools' como un array vacío.
  // Esto previene el error .map() en el primer renderizado.
  const [pools, setPools] = useState<Pool[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular una llamada a una API o a un smart contract
    const timer = setTimeout(() => {
      setPools(mockPools);
      setIsLoading(false);
    }, 1500); // 1.5 segundos de retraso

    return () => clearTimeout(timer);
  }, []);

  return { pools, isLoading };
}
