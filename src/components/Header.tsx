// src/components/Header.tsx
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
// IMPORTAÇÃO DE ÍCONES REMOVIDA

const Header: React.FC = () => {
    return (
        <header className="main-header">
            <nav>
                {/* O logo agora é apenas o texto, mantendo a classe para o estilo CSS */}
                <div className="logo">
                    ADRIEL
                </div>

                {/* Links de navegação */}
                <ScrollLink to="apresentacao" smooth={true} duration={500} className="nav-link">
                    Início
                </ScrollLink>
                <ScrollLink to="skills" smooth={true} duration={500} className="nav-link">
                    Skills
                </ScrollLink>
                <ScrollLink to="projetos" smooth={true} duration={500} className="nav-link">
                    Projetos
                </ScrollLink>
                <ScrollLink to="contato" smooth={true} duration={500} className="nav-link">
                    Contato
                </ScrollLink>
            </nav>
        </header>
    );
};

export default Header;