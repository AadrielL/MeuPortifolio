// src/components/Header.tsx
import React from 'react';
// Se você está usando react-scroll, não precisa do @types/react-scroll
// Se o erro persistir, desinstale o @types/react-scroll e confira as docs
import { Link } from 'react-scroll';

interface SectionLink { // Tipagem para os objetos do array
    name: string;
    to: string;
}

// Tipagem de componente funcional sem props
const Header: React.FC = () => {
    const sections: SectionLink[] = [ // Tipagem do array
        { name: 'Apresentação', to: 'apresentacao' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projetos', to: 'projetos' },
        { name: 'Contato', to: 'contato' },
    ];

    // ... (O return e o JSX são os mesmos)

    return (
        <header className="main-header">
            <nav>
                {sections.map((section) => (
                    <Link
                        key={section.to}
                        to={section.to}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="nav-link"
                        activeClass="active"
                    >
                        {section.name}
                    </Link>
                ))}
            </nav>
        </header>
    );
};

export default Header;