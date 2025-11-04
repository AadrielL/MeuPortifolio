// src/App.tsx
import React from 'react';
// IMPORTS CORRIGIDOS (SEM .tsx)
import Header from './components/Header';
import Apresentacao from './sections/Apresentacao';
import Skills from './sections/Skills';
import Projetos from './sections/Projetos';
import Contato from './sections/Contato';

// Tipagem de componente funcional sem props
const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <main>
                {/* Usando "id" para navegação com react-scroll */}
                <div id="apresentacao"><Apresentacao /></div>
                <div id="skills"><Skills /></div>
                <div id="projetos"><Projetos /></div>
                <div id="contato"><Contato /></div>
            </main>
        </div>
    );
}

export default App;