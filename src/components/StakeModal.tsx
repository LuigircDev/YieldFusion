import { useState } from 'react';
import { useAppStore } from '../store/useAppStore';

// Añadimos 'export' a la función para que pueda ser importada.
export function StakeModal() {
  const { isModalOpen, closeModal, selectedPool } = useAppStore();
  const [amount, setAmount] = useState('');
  const [isDepositing, setIsDepositing] = useState(true); // Para alternar entre Depósito y Retiro

  const handleAction = () => {
    // Aquí iría la lógica para interactuar con el smart contract
    if (isDepositing) {
      console.log(`Depositing ${amount} ${selectedPool?.asset} into ${selectedPool?.name}`);
    } else {
      console.log(`Withdrawing ${amount} ${selectedPool?.asset} from ${selectedPool?.name}`);
    }
    // Simular una notificación y cerrar
    alert(`${isDepositing ? 'Deposit' : 'Withdrawal'} successful!`);
    closeModal();
    setAmount('');
  };

  if (!isModalOpen || !selectedPool) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 border border-gray-700/80 rounded-lg shadow-xl w-full max-w-md p-6 text-white transform transition-all">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Manage Stake</h2>
          <button onClick={closeModal} className="text-gray-400 hover:text-white">&times;</button>
        </div>

        <div className="mb-4 bg-gray-900/50 p-3 rounded-lg">
          <p className="text-sm text-gray-400">You are staking in</p>
          <p className="font-semibold text-lg">{selectedPool.name} ({selectedPool.asset})</p>
        </div>

        {/* Pestañas para Depósito/Retiro */}
        <div className="flex border-b border-gray-700 mb-4">
            <button
                onClick={() => setIsDepositing(true)}
                className={`flex-1 py-2 text-sm font-semibold transition-colors ${isDepositing ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400'}`}
            >
                Deposit
            </button>
            <button
                onClick={() => setIsDepositing(false)}
                className={`flex-1 py-2 text-sm font-semibold transition-colors ${!isDepositing ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400'}`}
            >
                Withdraw
            </button>
        </div>

        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-2">
            Amount
          </label>
          <div className="relative">
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">{selectedPool.asset}</span>
          </div>
          <p className="text-xs text-gray-500 mt-1 text-right">Your balance: 0.00 {selectedPool.asset}</p>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={handleAction}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-200"
          >
            {isDepositing ? 'Confirm Deposit' : 'Confirm Withdrawal'}
          </button>
          <button
            onClick={closeModal}
            className="w-full bg-gray-700 hover:bg-gray-600 text-gray-300 font-semibold py-3 rounded-lg transition-all duration-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

