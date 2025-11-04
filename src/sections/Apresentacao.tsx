// src/sections/Apresentacao.tsx
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

// Tipagem de componente funcional sem props
const Apresentacao: React.FC = () => {
    return (
        <section id="apresentacao" className="apresentacao-section">
            <div className="apresentacao-content">

                {/* Animação do nome, vindo da esquerda */}
                <AnimatedSection direction="left" delay={0.2} amount={0.8}>
                    <h1 className="main-title">Olá, eu sou Adriel Morais da Silva.</h1>
                </AnimatedSection>

                {/* Animação do título, vindo da direita */}
                <AnimatedSection direction="right" delay={0.5} amount={0.8}>
                    <h2 className="sub-title">Desenvolvedor Full-Stack | Soluções em Tecnologia</h2>
                </AnimatedSection>

                {/* Animação do texto de background, vindo de baixo */}
                <AnimatedSection direction="up" delay={0.8} amount={0.5}>
                    <p className="background-text">
                        22 anos. Estudante de Análise e Desenvolvimento de Sistemas (1º período)
                        e Técnico em Automação Industrial. Meu foco é na utilização de tecnologias
                        (Java, React, Node.js, Spring) para criar soluções eficientes e facilitar processos.
                    </p>
                </AnimatedSection>

                {/* Link/Botão de CTA (opcional) */}
                <AnimatedSection direction="up" delay={1.1} amount={0.2}>
                    <a href="#projetos" className="cta-button">Ver meus Projetos</a>
                </AnimatedSection>

            </div>
        </section>
    );
};

export default Apresentacao;