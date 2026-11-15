// src/sections/Projetos.tsx
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

// 1. Tipagem para os dados de cada Projeto
interface Project {
    title: string;
    description: string;
    link: string;
    tech: string[];
    direction: 'left' | 'right';
}

// 2. Dados de seus Projetos
const projectData: Project[] = [
    {
        title: 'Agente Educacional Autônomo (GenAI / ReAct — OULAD)',
        description: 'Agente analítico em Python, FastAPI e React utilizando padrão ReAct com ferramentas determinísticas em Pandas, ContextGuard (anti-prompt injection), rotação de chaves Gemini, suporte 100% local via Ollama e benchmark de hardware em tempo real.',
        link: 'https://github.com/AadrielL',
        tech: ['Python', 'FastAPI', 'GenAI / ReAct', 'Ollama', 'Pandas', 'React'],
        direction: 'left'
    },
    {
        title: 'Ecossistema SaaS Multi-Tenant MyGo (Mobile & Web)',
        description: 'Arquitetura distribuída com 3 microsserviços em Java Spring Boot (Auth, Calculadora e Materiais), app Mobile-First em React + Ionic e painel Web em Angular, orquestrados com Docker Compose e PostgreSQL.',
        link: 'https://github.com/AadrielL/mobile-mygo',
        tech: ['Java', 'Spring Boot', 'React + Ionic', 'Angular', 'Docker', 'PostgreSQL'],
        direction: 'right'
    },
    {
        title: 'StepByMath — Tutor Interativo de Cálculo 1 (GenAI)',
        description: 'Tutor educacional em Python e Streamlit integrado à API do Gemini (google-genai) com engenharia de prompts socrática passo a passo, renderização em LaTeX e gráficos dinâmicos de funções e primitivas com Plotly.',
        link: 'https://github.com/AadrielL/stepbymath',
        tech: ['Python', 'Streamlit', 'Gemini API', 'Prompt Engineering', 'Plotly'],
        direction: 'left'
    },
    {
        title: 'Animelist - Catálogo Pessoal de Animes',
        description: 'Projeto Full-Stack com Back-end robusto em Java e Spring Boot (incluindo Web Security e Versionamento) e Front-end em React. Utiliza PostgreSQL para banco de dados.',
        link: 'https://bit.ly/seuanimelist',
        tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Web Security'],
        direction: 'left' // Anima da esquerda
    },
    {
        title: 'Landing Page + Orçamento Inteligente (Serviços Elétricos)',
        description: 'Landing page e gerador de orçamentos para cliente autônomo. Implementação complexa em React que calcula valores com base em m² da casa, pontos de elétrica/CFTV e valor de distância/combustível via CEP.',
        link: 'https://servi-oseletricos.onrender.com',
        tech: ['React', 'Node.js', 'Lógica de Negócios', 'APIs de Terceiros'],
        direction: 'right' // Anima da direita
    }
];

const Projetos: React.FC = () => {
    return (
        <section id="projetos" className="projects-section">

            <AnimatedSection direction="down" delay={0.1}>
                <h2 className="section-title">Projetos de Destaque</h2>
            </AnimatedSection>

            <div className="projects-grid">
                {projectData.map((project, index) => (
                    // Animação para cada card de projeto
                    <AnimatedSection
                        key={index}
                        direction={project.direction}
                        delay={0.3 + (index * 0.3)} // Atraso para um efeito sequencial
                    >
                        <div className="project-card">
                            <h3>{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tech">{project.tech.join(' | ')}</div>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                Ver Projeto (Link)
                            </a>
                        </div>
                    </AnimatedSection>
                ))}
            </div>

        </section>
    );
};

export default Projetos;