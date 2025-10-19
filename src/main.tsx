import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Web3Provider } from './providers/Web3Provider.tsx'

// CORRECCIÓN: Nos aseguramos de que Web3Provider envuelva toda la aplicación.
// Esto soluciona el error WagmiProviderNotFoundError.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Web3Provider>
      <App />
    </Web3Provider>
  </React.StrictMode>,
)

