// src/sections/Skills.tsx

import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

// Tipagem para os dados de cada Skill
interface Skill {
    name: string;
    category: 'IA Generativa & Dados' | 'Backend' | 'Frontend' | 'Database' | 'DevOps' | 'Versionamento';
}

// Seus dados de Habilidades
const hardSkills: Skill[] = [
    { name: 'Agentes ReAct & Prompt Engineering', category: 'IA Generativa & Dados' },
    { name: 'Gemini API, Ollama (SLMs) & Guardrails', category: 'IA Generativa & Dados' },
    { name: 'Pandas, NumPy & Power BI', category: 'IA Generativa & Dados' },
    { name: 'Python (FastAPI)', category: 'Backend' },
    { name: 'Java & Spring Boot (Web/Security)', category: 'Backend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'React & Ionic (Mobile-First)', category: 'Frontend' },
    { name: 'Angular & TypeScript', category: 'Frontend' },
    { name: 'HTML5 / CSS3', category: 'Frontend' },
    { name: 'PostgreSQL, SQL Server & SQLite', category: 'Database' },
    { name: 'Docker & Docker Compose', category: 'DevOps' },
    { name: 'Linux & Deploy (Render / VPS)', category: 'DevOps' },
    { name: 'Git, GitHub/GitLab & Pull Requests', category: 'Versionamento' },
];

// Função auxiliar para agrupar as skills por categoria (mantida)
const groupSkillsByCategory = (skills: Skill[]) => {
    const predefinedOrder: Skill['category'][] = ['IA Generativa & Dados', 'Frontend', 'Backend', 'Database', 'DevOps', 'Versionamento'];

    const grouped = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill.name);
        return acc;
    }, {} as Record<Skill['category'], string[]>);

    // Filtra apenas as categorias que existem dados e garante a ordem
    return predefinedOrder.filter(cat => grouped[cat]).map(cat => ({
        category: cat,
        skills: grouped[cat]
    }));
};

const Skills: React.FC = () => {
    const groupedCategories = groupSkillsByCategory(hardSkills);

    // Para fins de demonstração, garantimos que 6 categorias serão exibidas se houver dados para elas
    const categoriesToRender = groupedCategories.slice(0, 6);

    return (
        <section id="skills" className="skills-section">

            <AnimatedSection direction="down" delay={0.1}>
                <h2 className="section-title">Minhas Habilidades Técnicas</h2>
                <p className="section-subtitle">Foco em soluções Full-Stack.</p>
            </AnimatedSection>

            <div className="skills-grid">
                {categoriesToRender.map((group, catIndex) => (
                    <AnimatedSection
                        key={group.category}
                        direction="up" // Mudamos para 'up' para um efeito mais direto
                        delay={0.2 + catIndex * 0.15}
                    >
                        <div className="skill-category-card">
                            {/* Ícone removido */}

                            <h3>{group.category}</h3>

                            <ul className="skill-list">
                                {group.skills.map((skillName, skillIndex) => (
                                    <li key={skillIndex}>{skillName}</li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>
                ))}
            </div>

            <AnimatedSection direction="up" delay={0.2 + 6 * 0.15 + 0.5}>
                <p className="learning-note">
                    Em constante evolução em Inteligência Artificial (UFT) e Sistemas de Informação,
                    unindo engenharia de software, microsserviços e IA Generativa para resolver problemas reais.
                </p>
            </AnimatedSection>

        </section>
    );
};

export default Skills;