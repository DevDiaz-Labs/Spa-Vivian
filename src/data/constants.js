import Masaje from '../assets/masaje.webp';
import Descontractura from '../assets/descontracturante.webp';
import Reductor from '../assets/reductor.webp';
import Facial from '../assets/facial.webp';
import Camillas from '../assets/galeria-camillas.webp';
import Cabina from '../assets/galeria-cabina.webp';

export const THEME = {
    colors: {
        bg: '#fff0f5', // Soft Blush
        richBlack: '#0a0a0a', // Deep Rich Black
        gold: '#D4AF37',
        goldGradient: 'linear-gradient(135deg, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c)', // Metallic Gold
        footerBg: '#0a0a0a',
    },
    fonts: {
        serif: '"Playfair Display", serif', // Luxury Serif
        sans: '"Montserrat", sans-serif',
    }
};

export const FEATURED_SERVICES = [
    {
        id: "01",
        title: "Masaje Relajante",
        description: "Una sinfonía de movimientos fluidos que disuelven la tensión y armonizan cuerpo y mente.",
        image: Masaje,
        price: 850
    },
    {
        id: "02",
        title: "Descontracturante",
        description: "Terapia profunda enfocada en liberar la rigidez muscular y restaurar la movilidad natural.",
        image: Descontractura,
        price: 950
    },
    {
        id: "03",
        title: "Masaje Reductivo",
        description: "Técnica vigorosa que remodela la silueta y estimula la vitalidad de la piel.",
        image: Reductor,
        price: 1100
    },
    {
        id: "04",
        title: "Facial Hidratante",
        description: "Ritual de luminosidad que nutre profundamente y revela el resplandor natural de tu rostro.",
        image: Facial,
        price: 700
    }
];

export const FULL_MENU = {
    facial: [
        { title: "Conoterapia", price: 450 },
        { title: "Facial Galvánica", price: 850 },
        { title: "Facial Premium", price: 1200 },
        { title: "Limpieza facial", price: 600 }
    ],
    body: [
        { title: "Chocolaterapia", price: 900 },
        { title: "Masaje con electroestimulación", price: 750 },
        { title: "Masaje con Maderoterapia", price: 850 },
        { title: "Masaje Reductivo", price: 1100 },
    ],
    relax: [
        { title: "Masaje relajante", price: 850 },
        { title: "Masaje Descontracturante", price: 950 },
        { title: "Masaje de Tejido Profundo", price: 1100 },
        { title: "Masaje con piedras Calientes", price: 950 },
        { title: "Masaje con barras de Bambú", price: 850 },
        { title: "Masaje con ventosas", price: 800 },
        { title: "Masaje con pistola acupresión", price: 750 },
        { title: "Masaje con almohadillas Calientes", price: 800 },
        { title: "Exfoliación corporal", price: 650 }
    ],
    health: [
        { title: "Auriculoterapia", price: 400 },
        { title: "Desintoxicación Iónica", price: 500 },
        { title: "Presoterapia", price: 600 },
        { title: "Presoterapia para piernas", price: 450 }
    ],
    specialized: [
        { title: "Masaje deportivo", price: 1000 },
        { title: "Masaje geriátrico", price: 850 },
        { title: "Masaje para bebés e infantíl", price: 600 },
        { title: "Masaje para empacho", price: 450 },
        { title: "Masaje post operatorio", price: 1200 },
        { title: "Masaje post parto", price: 1100 }
    ]
};

export const SOCIAL = {
    whatsapp: "https://wa.me/525514753188",
    instagram: "https://www.instagram.com/spa_vivian/"
};

export const CATEGORY_CONFIG = {
    facial: { title: "Cuidado Facial y Diseño", image: Facial },
    body: { title: "Moldeado Corporal", image: Reductor },
    relax: { title: "Masajes Relajantes", image: Masaje },
    health: { title: "Salud & Detox", image: Cabina },
    specialized: { title: "Especializados", image: Camillas }
};
