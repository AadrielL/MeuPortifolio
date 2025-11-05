import React from 'react';

// CORREÇÃO: Adicione 'export' para que seja um módulo
export interface Project {
    id: number;
    title: string;
    // Mude de JSX.Element para React.ReactNode (mais flexível)
    body: React.ReactNode;
    isCover: boolean;
    themeClass: string;
}
// Define os dados para cada item da Galeria 3D
// CORREÇÃO: Adicione 'export' para que seja um módulo
export interface IPhotoItem {
    id: number;
    url: string;
    theme: 'Editorial' | 'Beauty' | 'Comercial' | 'Projeto';
    photographer?: string;
    videoUrl?: string;
}