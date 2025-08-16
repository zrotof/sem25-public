// src/app/core/seo/seo-data.ts
export interface SeoPageData {
    title: string;
    description: string;
    keywords?: string;
    canonical?: string;
    openGraph?: {
        [key: string]: string;
    };
    twitter?: {
        card: string;
        title: string;
        description: string;
        image: string;
        url: string;
    };
}

export const SEO_DATA: Record<string, SeoPageData> = {
    home: {
        title: 'Serge Espoir MATOMBA | Élections Présidentielles 2025',
        description: "Suivez et soutenez la candidature de Serge Espoir MATOMBA pour les prochaines élections présidentielles d'Octobre 2025",
        keywords: 'agence, développement web, design',
        canonical: 'https://matomba2025.com/',
        openGraph: {
            type: 'website',
            url: "https://matomba2025.com/",
            title: "Serge Espoir MATOMBA, votre candidat aux éléctions présidentilles d'Octobre 2025",
            description: "Suivez et soutenez la candidature de Serge Espoir MATOMBA pour les prochaines élections présidentielles d'Octobre 2025",
            image: "https://matomba2025.com/assets/img/hero-banner/main/serge-espoir-matomba.webp",
            siteName: "Serge Espoir MATOMBA 2025"
        },
        twitter: {
            image: "https://matomba2025.com/assets/img/hero-banner/main/serge-espoir-matomba.webp",
            description: "Suivez et soutenez la candidature de Serge Espoir MATOMBA pour les prochaines élections présidentielles d'Octobre 2025",
            title: 'Accueil - Mon Site Pro',
            url: "https://matomba2025.com/",
            card: 'summary_large_image',
        }
    },
    about: {
        title: 'À propos - Mon Site Pro',
        description: 'Découvrez qui nous sommes et notre expertise en développement.',
        canonical: 'https://monsite.com/a-propos',
        openGraph: {
            type: 'article',
            url: 'https://monsite.com/a-propos',
            title: 'À propos - Mon Site Pro',
            description: 'Découvrez notre expertise',
            image: 'https://monsite.com/assets/about-og.jpg'
        },
        twitter: {
            card: 'summary',
            title: 'À propos - Mon Site Pro',
            description: 'Découvrez notre expertise',
            image: 'https://monsite.com/assets/about-og.jpg',
            url: ""
        }
    }
};
