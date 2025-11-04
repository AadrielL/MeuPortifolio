// src/components/AnimatedSection.tsx
import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

// 1. Tipagem das Props
interface AnimatedSectionProps {
    children: ReactNode;
    direction?: 'left' | 'right' | 'up' | 'down';
    delay?: number;
    amount?: number;
}

// Tipagem de componente funcional (React.FC)
const AnimatedSection: React.FC<AnimatedSectionProps> = ({
                                                             children,
                                                             direction = 'left',
                                                             delay = 0.2,
                                                             amount = 0.4
                                                         }) => {

    // Define o ponto de partida da animação
    const getInitialPosition = (dir: string) => { // Tipagem do parâmetro 'dir'
        switch (dir) {
            case 'left': return { x: -100, y: 0 };
            case 'right': return { x: 100, y: 0 };
            case 'up': return { x: 0, y: 50 };
            case 'down': return { x: 0, y: -50 };
            default: return { x: 0, y: 0 };
        }
    };

    const initialPos = getInitialPosition(direction);

    // Tipagem do objeto Variants do Framer Motion
    const variants: Variants = {
        hidden: {
            opacity: 0,
            ...initialPos // Posição inicial (escondida)
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0  // Posição final (visível)
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: false,
                amount: amount,
            }}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: 'easeOut',
            }}
            variants={variants}
            className="animated-element"
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;