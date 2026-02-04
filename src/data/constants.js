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
        image: Masaje
    },
    {
        id: "02",
        title: "Descontracturante",
        description: "Terapia profunda enfocada en liberar la rigidez muscular y restaurar la movilidad natural.",
        image: Descontractura
    },
    {
        id: "03",
        title: "Masaje Reductivo",
        description: "Técnica vigorosa que remodela la silueta y estimula la vitalidad de la piel.",
        image: Reductor
    },
    {
        id: "04",
        title: "Facial Hidratante",
        description: "Ritual de luminosidad que nutre profundamente y revela el resplandor natural de tu rostro.",
        image: Facial
    }
];

export const FULL_MENU = {
    facial: [
        "Limpieza facial", "Facial Galvánica", "Facial Premium", "Exfoliación", "Perfilado de ceja", "Conoterapia"
    ],
    body: [
        "Mesoterapia", "Masaje Reductivo", "Cavitación", "Radiofrecuencia", "Ultrasonido", "Lipoláser", "Vacumterapia", "Gimnasia Pasiva", "Electroestimulación", "Maderoterapia"
    ],
    relax: [
        "Relajante", "Descontracturante", "Tejido Profundo", "Piedras Calientes", "Bambú", "Ventosas", "Pistola acupresión", "Almohadillas Calientes", "Exfoliación corporal"
    ],
    health: [
        "Desintoxicación Iónica", "Auriculoterapia", "Drenaje Linfático", "Presoterapia"
    ],
    specialized: [
        "Deportivo", "Post operatorio", "Post parto", "Geriátrico", "Empacho", "Bebés"
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
    specialized: { title: "Rituales Especializados", image: Camillas }
};
