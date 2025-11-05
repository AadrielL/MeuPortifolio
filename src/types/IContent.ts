// src/types/IContent.ts

// Define o conteúdo das páginas do FlipBook
export interface IFlipPageContent {
    id: number;
    title: string;
    body: JSX.Element;
    isCover: boolean;
    themeClass: string;
}

// Define os dados para cada item da Galeria 3D
export interface IPhotoItem {
    id: number;
    url: string;
    theme: 'Editorial' | 'Beauty' | 'Comercial' | 'Projeto';
    photographer?: string;
    videoUrl?: string;
}