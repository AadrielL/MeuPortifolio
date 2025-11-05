// src/sections/Contato.tsx
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const Contato: React.FC = () => {
    // SEUS LINKS SOCIAIS (GITHUB E LINKEDIN)
    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/AadrielL' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/adriel-morais-232031239/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BvYlDFZ3rT0ykZbRq3L0QjQ%3D%3D/' },
    ];

    return (
        <section id="contato" className="contato-section">


            <div className="contato-content">
                <AnimatedSection direction="down" delay={0.1}>
                    <h2 className="section-title">Vamos Conversar!</h2>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={0.3}>
                    <p className="contato-text">
                        Estou sempre aberto a desafios, aprendizados e oportunidades em soluções de tecnologia.
                        Entre em contato através do email ou das minhas redes.
                    </p>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={0.6}>
                    <p className="contato-email">
                        Email: <a href="mailto:Adrie3lmorais@gmail.com">Adrie3lmorais@gmail.com</a>

                    </p>
                </AnimatedSection>

                <div className="social-links">
                    {socialLinks.map((link, index) => (
                        <AnimatedSection
                            key={link.name}
                            direction="up"
                            delay={0.8 + index * 0.1}
                        >
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link-button"
                            >
                                {link.name}
                            </a>
                        </AnimatedSection>
                    ))}
                </div>
            </div>

            {/* SLOT PARA A SUA FOTO */}
            <div className="photo-slot">
                {/* SUBSTITUA ESTE CONTEÚDO PELA SUA IMAGEM:
                    Exemplo: <img src="/caminho/para/sua/foto.jpg" alt="Foto de Perfil do Adriel" />
                */}
                <p>Coloque sua foto aqui</p>
            </div>

        </section>
    );
};

export default Contato;