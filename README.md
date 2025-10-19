# **Guía de Desarrollo \- YieldFusion**

Bienvenido a la documentación técnica de YieldFusion. Este documento está diseñado para que los desarrolladores, tanto nuevos como existentes, comprendan la arquitectura, las tecnologías y las convenciones utilizadas en el proyecto.

### **1\. Visión General del Proyecto**

**YieldFusion** es una aplicación descentralizada (dApp) que funciona como un agregador de staking y yield farming. Su objetivo es simplificar la experiencia del usuario en el ecosistema de las Finanzas Descentralizadas (DeFi) al presentar una interfaz única, limpia e intuitiva para interactuar con diversos pools de liquidez y staking.

**Funcionalidades Clave:**

* **Conexión Segura:** Integración con las wallets Web3 más populares de forma segura.  
* **Dashboard Intuitivo:** Visualización del capital total invertido, recompensas acumuladas y APY promedio.  
* **Exploración de Pools:** Una lista de los pools de staking disponibles con datos relevantes (APY, TVL).  
* **Gestión de Inversiones:** Un modal para depositar y retirar activos de los pools de manera sencilla.

### **2\. Stack Tecnológico**

La aplicación está construida sobre un stack moderno de desarrollo Web3, priorizando la velocidad, la seguridad y una excelente experiencia de desarrollador.

* **Framework Frontend:** **Vite \+ React 18**  
  * **Por qué:** Vite ofrece un entorno de desarrollo ultrarrápido (HMR) y una configuración optimizada para la construcción de sitios estáticos, ideal para desplegar en plataformas como GitHub Pages o Vercel.  
* **Lenguaje:** **TypeScript**  
  * **Por qué:** Aporta seguridad de tipos al código, lo que reduce drásticamente los errores en tiempo de ejecución y mejora la autocompletación y la mantenibilidad del proyecto a largo plazo.  
* **Integración Web3:**  
  * **Wagmi v2 & Viem:** Es el corazón de nuestra conexión con la blockchain. Wagmi proporciona un conjunto de Hooks de React potentes y sencillos para interactuar con la wallet, leer datos de contratos, firmar transacciones, etc. Viem es un cliente Ethereum ligero y eficiente que potencia a Wagmi.  
  * **RainbowKit:** Proporciona componentes de UI pulidos y listos para usar para el flujo de conexión de la wallet. Gestiona la selección de wallet, la visualización de la dirección, el cambio de red y la desconexión, ahorrando semanas de trabajo de desarrollo.  
* **Gestión de Estado Global:** **Zustand**  
  * **Por qué:** Es una librería de gestión de estado minimalista y potente. La usamos para estados globales que necesitan ser compartidos entre componentes no relacionados directamente, como el estado del modal de staking (si está abierto, qué pool está seleccionado, etc.). Es menos verboso que Redux y evita el "prop drilling" sin la complejidad del Context API para cada caso.  
* **Estilos y Componentes de UI:** **Tailwind CSS**  
  * **Por qué:** Nos permite construir diseños complejos directamente en el HTML/JSX de forma rápida y consistente, sin necesidad de escribir CSS personalizado. Es un framework "utility-first" que agiliza enormemente el desarrollo de la interfaz.

### **3\. Estructura del Proyecto**

La estructura de carpetas está organizada para ser intuitiva y escalable.

/  
├── public/                \# Archivos estáticos (imágenes, fuentes, etc.)  
├── src/  
│   ├── assets/            \# Activos específicos de componentes (SVGs)  
│   ├── components/        \# Componentes de React reutilizables  
│   │   ├── dashboard/     \# Componentes específicos del dashboard  
│   │   ├── web3/          \# Componentes relacionados con Web3 (ConnectButton)  
│   │   └── StakeModal.tsx  
│   ├── hooks/             \# Custom Hooks de React (ej. para data fetching)  
│   ├── lib/               \# Lógica auxiliar y configuración  
│   │   └── web3.ts        \# Configuración de Wagmi y RainbowKit  
│   ├── providers/         \# Componentes proveedores de contexto (Web3Provider)  
│   ├── store/             \# Stores de Zustand para el estado global  
│   │   └── useAppStore.ts  
│   ├── App.tsx            \# Componente raíz de la aplicación  
│   ├── main.tsx           \# Punto de entrada de la aplicación  
│   └── index.css          \# Estilos globales  
├── index.html             \# Punto de entrada HTML para Vite  
├── package.json           \# Dependencias y scripts  
├── tailwind.config.js     \# Configuración de Tailwind CSS  
└── vite.config.ts         \# Configuración de Vite

### **4\. Guía de Inicio Rápido**

Sigue estos pasos para configurar el entorno de desarrollo local.

**Prerrequisitos:**

* [Node.js](https://nodejs.org/) (versión 18 o superior)  
* [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)  
* Una wallet de navegador como [MetaMask](https://metamask.io/)

**Pasos de Instalación:**

1. **Clonar el repositorio:**  
   git clone \<URL\_DEL\_REPOSITORIO\>  
   cd \<NOMBRE\_DEL\_PROYECTO\>

2. **Instalar dependencias:**  
   npm install

3. **Configurar variables de entorno:**  
   * Necesitas un projectId de WalletConnect para que RainbowKit funcione.  
   * Ve a [WalletConnect Cloud](https://cloud.walletconnect.com/).  
   * Crea un nuevo proyecto y copia tu projectId.  
   * Pégalo en el archivo src/lib/web3.ts en la línea correspondiente.  
4. **Ejecutar el servidor de desarrollo:**  
   npm run dev  
