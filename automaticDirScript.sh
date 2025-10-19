#!/bin/bash

# Este script crea la estructura de directorios y archivos para el proyecto DeFi Nexus,
# adaptado para una aplicación estática con Vite + React, ideal para GitHub Pages.

echo "Creando la estructura del proyecto DeFi Nexus (Vite + React)..."

# 1. Crear directorios principales
mkdir -p src/components/ui \
         src/components/web3 \
         src/components/dashboard \
         src/lib \
         src/hooks \
         src/store \
         public \
         contracts

# 2. Crear archivos dentro del directorio /src
touch src/App.tsx \
      src/main.tsx \
      src/index.css

# 3. Crear archivos dentro del directorio /src/components
touch src/components/web3/ConnectButton.tsx \
      src/components/dashboard/PoolList.tsx \
      src/components/dashboard/PoolCard.tsx \
      src/components/dashboard/UserStats.tsx \
      src/components/StakeModal.tsx

# 4. Crear archivos dentro del directorio /src/lib
touch src/lib/utils.ts \
      src/lib/web3.ts

# 5. Crear archivos dentro del directorio /src/hooks
touch src/hooks/usePoolData.ts \
      src/hooks/useUserBalances.ts

# 6. Crear archivos dentro del directorio /src/store
touch src/store/useAppStore.ts

# 7. Crear archivos dentro del directorio /contracts
touch contracts/StakingContract.json

# 8. Crear archivos en el directorio raíz
touch index.html \
      vite.config.ts \
      tsconfig.json \
      tailwind.config.js \
      postcss.config.js

echo "¡Estructura del proyecto creada exitosamente!"
ls -R

