// src/sections/Skills.tsx

import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

// Tipagem para os dados de cada Skill
interface Skill {
    name: string;
    category: 'Backend' | 'Frontend' | 'Database' | 'DevOps' | 'Versionamento' | 'Outros'; // Adicionado "Outros" para ter 6 categorias
}

// Seus dados de Habilidades (Adicione uma sexta categoria para teste)
const hardSkills: Skill[] = [
    { name: 'Java', category: 'Backend' },
    { name: 'Spring Boot (Web/Security)', category: 'Backend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'React', category: 'Frontend' },
    { name: 'JavaScript / TypeScript', category: 'Frontend' },
    { name: 'HTML5 / CSS3', category: 'Frontend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Git & GitHub/GitLab', category: 'Versionamento' },
    { name: 'Deploy (Render, etc.)', category: 'DevOps' },
    // Exemplo para completar as 6 categorias:
    { name: 'Automação Industrial', category: 'Outros' },
];

// Função auxiliar para agrupar as skills por categoria (mantida)
const groupSkillsByCategory = (skills: Skill[]) => {
    // Usamos um array predefinido para garantir a ordem (e que são 6)
    const predefinedOrder: Skill['category'][] = ['Frontend', 'Backend', 'Database', 'Versionamento', 'DevOps', 'Outros'];

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
                    Em constante aprendizado em Análise de Sistemas e aprofundando em automação industrial,
                    sempre buscando a otimização de processos e a excelência em código.
                </p>
            </AnimatedSection>

        </section>
    );
};

export default Skills;