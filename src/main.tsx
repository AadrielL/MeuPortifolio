// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './App.css'; // <-- CORRIGIDO para o nome correto
// ...
const rootElement = document.getElementById('root');

if (rootElement) {
    // TypeScript exige que você verifique se o elemento existe antes de usá-lo
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
// Se o 'root' não for encontrado (embora improvável em um projeto React),
// você pode adicionar um console.error ou lidar com o erro.