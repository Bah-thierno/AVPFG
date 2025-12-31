
export interface BureauMember {
    role: string;
    name: string;
    telephone?: string;
    photo?: string;
}

export interface CityBureau {
    president: BureauMember;
    vicePresident: BureauMember;
    treasurer: BureauMember;
    exGeneralSecretary: BureauMember;
    secretary: BureauMember;
    commSecretary: BureauMember;
    envSecretary: BureauMember;
    fundSecretary: BureauMember;
}

export interface CityStats {
    agents: number;
    tonnesCollected: number;
    members: number;
    donors: number;
    operations: number;
}

export interface CitySocials {
    youtube?: string;
    facebook?: string;
}

export interface CityMedia {
    launchVideo?: string;
    heroImage: string;
    beforePhotos?: string[];
    afterPhotos?: string[];
    gallery?: string[]; // General gallery for operations
}

export interface PastBureau {
    period: string; // e.g., "2021-2023"
    members: CityBureau;
}

export interface Founder {
    name: string;
    role: string;
    photo?: string;
    bio?: string;
}

export interface City {
    id: string;
    name: string;
    naturalRegion: 'Basse-Guinée' | 'Moyenne-Guinée' | 'Haute-Guinée' | 'Guinée Forestière' | 'Conakry';
    adminRegion: string;
    prefecture: string;
    status: 'active' | 'in-progress' | 'upcoming';
    associationName: string;
    slogan: string;
    creationDate: string;
    description: string;
    media: CityMedia;
    bureau: CityBureau;
    stats: CityStats;
    socials: CitySocials;
    founders?: Founder[];
    pastBureaus?: PastBureau[];
}

// Helper function to generate consistent bureau data
const generateBureau = (cityPrefix: string): CityBureau => ({
    president: { role: 'Président', name: `${cityPrefix} Président`, telephone: '+224 620 00 00 01' },
    vicePresident: { role: 'Vice-Président', name: `${cityPrefix} Vice-Président`, telephone: '+224 620 00 00 02' },
    exGeneralSecretary: { role: 'Secrétaire Général Exécutif', name: `${cityPrefix} SG Exécutif`, telephone: '+224 620 00 00 03' },
    secretary: { role: 'Secrétaire', name: `${cityPrefix} Secrétaire`, telephone: '+224 620 00 00 04' },
    treasurer: { role: 'Trésorier', name: `${cityPrefix} Trésorier`, telephone: '+224 620 00 00 05' },
    commSecretary: { role: 'Secrétaire à la Communication', name: `${cityPrefix} Sec. Comm`, telephone: '+224 620 00 00 06' },
    envSecretary: { role: 'Secrétaire à l\'Environnement', name: `${cityPrefix} Sec. Env`, telephone: '+224 620 00 00 07' },
    fundSecretary: { role: 'Secrétaire à la Collecte de Fonds', name: `${cityPrefix} Sec. Fonds`, telephone: '+224 620 00 00 08' }
});

export const cities: City[] = [
    // CONAKRY - 5 Communes Urbaines
    {
        id: 'kaloum',
        name: 'Kaloum',
        naturalRegion: 'Conakry',
        adminRegion: 'Conakry (Capitale)',
        prefecture: 'Conakry',
        status: 'active' as const,
        associationName: 'Kaloum Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-01-15',
        description: 'Commune centrale abritant les institutions, Kaloum est le cœur administratif et économique de la capitale.',
        bureau: generateBureau('Kaloum'),
        stats: { agents: 80, tonnesCollected: 1200, members: 1800, donors: 95, operations: 150 },
        socials: { youtube: 'https://youtube.com/@KaloumVillePropreFleurie', facebook: 'https://facebook.com/KaloumVillePropreFleurie' },
        founders: [
            { name: "Elhadj Mamadou Sylla", role: "Initiateur & 1er Président", bio: "Visionnaire engagé pour l'assainissement de Kaloum.", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80" },
            { name: "Hadja Fatou Camara", role: "Co-fondatrice", bio: "Militante infatigable de la première heure.", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80" }
        ],
        pastBureaus: [
            {
                period: "2021-2023",
                members: {
                    president: { role: 'Président', name: 'Moussa Keita' },
                    vicePresident: { role: 'Vice-Président', name: 'Fode Soumah' },
                    treasurer: { role: 'Trésorier', name: 'Aminata Diallo' },
                    exGeneralSecretary: { role: 'SG Exécutif', name: 'Ibrahima Conte' },
                    secretary: { role: 'Secrétaire', name: 'Ousmane Barry' },
                    commSecretary: { role: 'Sec. Comm', name: 'Salematou Bah' },
                    envSecretary: { role: 'Sec. Env', name: 'Jean Kolié' },
                    fundSecretary: { role: 'Sec. Fonds', name: 'Mariama Sow' }
                }
            }
        ],
        media: {
            heroImage: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80',
            beforePhotos: [
                "https://images.unsplash.com/photo-1621451968567-c25dbb2c9389?auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1611288870280-4a331d279998?auto=format&fit=crop&q=80"
            ],
            afterPhotos: [
                "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1498059869680-e5989b52a5f3?auto=format&fit=crop&q=80"
            ]
        }
    },
    {
        id: 'dixinn',
        name: 'Dixinn',
        naturalRegion: 'Conakry',
        adminRegion: 'Conakry (Capitale)',
        prefecture: 'Conakry',
        status: 'active' as const,
        associationName: 'Dixinn Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-02-01',
        description: 'Commune résidentielle en développement avec une forte urbanisation.',
        stats: { agents: 65, tonnesCollected: 980, members: 1500, donors: 72, operations: 125 },
        bureau: generateBureau('Dixinn'),
        socials: { youtube: 'https://youtube.com/@DixinnVillePropreFleurie', facebook: 'https://facebook.com/DixinnVillePropreFleurie' },
        founders: [
            { name: "Thierno Bah", role: "Premier Président", bio: "Initiateur du projet Dixinn Verte.", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" }
        ],
        pastBureaus: [
            {
                period: "2022-2023",
                members: generateBureau("Ancien Dixinn")
            }
        ],
        media: {
            heroImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80',
            beforePhotos: ["https://images.unsplash.com/photo-1611288870280-4a331d279998?auto=format&fit=crop&q=80"],
            afterPhotos: ["https://images.unsplash.com/photo-1498059869680-e5989b52a5f3?auto=format&fit=crop&q=80"]
        }
    },
    {
        id: 'matam',
        name: 'Matam',
        naturalRegion: 'Conakry',
        adminRegion: 'Conakry (Capitale)',
        prefecture: 'Conakry',
        status: 'active' as const,
        associationName: 'Matam Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-02-05',
        description: 'Commune centrale densément peuplée, Matam fait face à des défis importants d\'assainissement.',
        stats: { agents: 90, tonnesCollected: 1450, members: 2100, donors: 110, operations: 175 },
        bureau: generateBureau('Matam'),
        socials: { youtube: 'https://youtube.com/@MatamVillePropreFleurie', facebook: 'https://facebook.com/MatamVillePropreFleurie' },
        founders: [
            { name: "Aissatou Diallo", role: "Fondatrice", bio: "Pionnière de l'assainissement à Matam.", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80" }
        ],
        pastBureaus: [
            {
                period: "2021-2023",
                members: generateBureau("Ancien Matam")
            }
        ],
        media: {
            heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80',
            beforePhotos: ["https://images.unsplash.com/photo-1621451968567-c25dbb2c9389?auto=format&fit=crop&q=80"],
            afterPhotos: ["https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"]
        }
    },
    {
        id: 'ratoma',
        name: 'Ratoma',
        naturalRegion: 'Conakry',
        adminRegion: 'Conakry (Capitale)',
        prefecture: 'Conakry',
        status: 'active' as const,
        associationName: 'Ratoma Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-02-08',
        description: 'Commune en pleine expansion, Ratoma mobilise sa jeunesse pour maintenir la propreté.',
        stats: { agents: 100, tonnesCollected: 1800, members: 2800, donors: 135, operations: 200 },
        bureau: generateBureau('Ratoma'),
        socials: { youtube: 'https://youtube.com/@RatomaVillePropreFleurie', facebook: 'https://facebook.com/RatomaVillePropreFleurie' },
        founders: [
            { name: "Ousmane Souare", role: "Leader Communautaire", bio: "A mobilisé la jeunesse de l'axe.", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80" }
        ],
        pastBureaus: [],
        media: {
            heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80',
            beforePhotos: ["https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80"],
            afterPhotos: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80"]
        }
    },
    {
        id: 'matoto',
        name: 'Matoto',
        naturalRegion: 'Conakry',
        adminRegion: 'Conakry (Capitale)',
        prefecture: 'Conakry',
        status: 'active' as const,
        associationName: 'Matoto Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-02-10',
        description: 'Commune la plus peuplée de Conakry, Matoto coordonne des opérations de grande envergure.',
        stats: { agents: 120, tonnesCollected: 2400, members: 3500, donors: 180, operations: 220 },
        bureau: generateBureau('Matoto'),
        socials: { youtube: 'https://youtube.com/@MatotoVillePropreFleurie', facebook: 'https://facebook.com/MatotoVillePropreFleurie' },
        founders: [
            { name: "Dr. Fode Camara", role: "Initiateur", bio: "Medecin engagé pour la santé publique.", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80" }
        ],
        pastBureaus: [
            {
                period: "2021-2023",
                members: generateBureau("Ancien Matoto")
            }
        ],
        media: {
            heroImage: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80',
            beforePhotos: ["https://images.unsplash.com/photo-1621451968567-c25dbb2c9389?auto=format&fit=crop&q=80"],
            afterPhotos: ["https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"]
        }
    },

    // BASSE-GUINÉE - Région de Boké
    {
        id: 'boke',
        name: 'Boké',
        naturalRegion: 'Basse-Guinée',
        adminRegion: 'Boké',
        prefecture: 'Boké',
        status: 'active' as const,
        associationName: 'Boké Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-03-20',
        description: 'Centre minier important, Boké œuvre pour l\'équilibre entre développement économique et préservation environnementale.',

        stats: { agents: 42, tonnesCollected: 680, members: 920, donors: 48, operations: 95 },
        bureau: generateBureau('Boké'),
        socials: { youtube: 'https://youtube.com/@BokeVillePropreFleurie', facebook: 'https://facebook.com/BokeVillePropreFleurie' },
        founders: [
            { name: "Mamadou Sylla", role: "Initiateur", bio: "Protecteur de l'environnement minier.", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" }
        ],
        pastBureaus: [],
        media: {
            heroImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80',
            beforePhotos: ["https://images.unsplash.com/photo-1611288870280-4a331d279998?auto=format&fit=crop&q=80"],
            afterPhotos: ["https://images.unsplash.com/photo-1498059869680-e5989b52a5f3?auto=format&fit=crop&q=80"]
        }
    },
    {
        id: 'boffa',
        name: 'Boffa',
        naturalRegion: 'Basse-Guinée',
        adminRegion: 'Boké',
        prefecture: 'Boffa',
        status: 'active' as const,
        associationName: 'Boffa Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-04-05',
        description: 'Ville côtière tournée vers la protection des mangroves et des zones marines.',

        stats: { agents: 28, tonnesCollected: 420, members: 580, donors: 32, operations: 68 },
        bureau: generateBureau('Boffa'),
        socials: { youtube: 'https://youtube.com/@BoffaVillePropreFleurie', facebook: 'https://facebook.com/BoffaVillePropreFleurie' },
        founders: [
            { name: "Fatoumata Camara", role: "Fondatrice", bio: "Engagée pour la mangrove.", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80" }
        ],
        pastBureaus: [],
        media: {
            heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80',
            beforePhotos: ["https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80"],
            afterPhotos: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80"]
        }
    },
    {
        id: 'gaoual',
        name: 'Gaoual',
        naturalRegion: 'Basse-Guinée',
        adminRegion: 'Boké',
        prefecture: 'Gaoual',
        status: 'active' as const,
        associationName: 'Gaoual Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-04-12',
        description: 'Petite ville au patrimoine naturel riche nécessitant une préservation continue.',

        stats: { agents: 18, tonnesCollected: 280, members: 420, donors: 22, operations: 52 },
        bureau: generateBureau('Gaoual'),
        socials: { youtube: 'https://youtube.com/@GaoualVillePropreFleurie', facebook: 'https://facebook.com/GaoualVillePropreFleurie' },
        founders: [
            { name: "Mamadou Diallo", role: "Leader", bio: "Engagé pour le reboisement.", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" }
        ],
        pastBureaus: [],
        media: {
            heroImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80',
            beforePhotos: ["https://images.unsplash.com/photo-1611288870280-4a331d279998?auto=format&fit=crop&q=80"],
            afterPhotos: ["https://images.unsplash.com/photo-1498059869680-e5989b52a5f3?auto=format&fit=crop&q=80"]
        }
    },
    {
        id: 'koundara',
        name: 'Koundara',
        naturalRegion: 'Basse-Guinée',
        adminRegion: 'Boké',
        prefecture: 'Koundara',
        status: 'active' as const,
        associationName: 'Koundara Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-04-18',
        description: 'Zone frontalière dynamique engagée dans l\'assainissement transfrontalier.',

        stats: { agents: 22, tonnesCollected: 320, members: 480, donors: 26, operations: 58 },
        bureau: generateBureau('Koundara'),
        socials: { youtube: 'https://youtube.com/@KoundaraVillePropreFleurie', facebook: 'https://facebook.com/KoundaraVillePropreFleurie' },
        founders: [
            { name: "Alpha Diallo", role: "Pionnier", bio: "A lancé le tri sélectif à Koundara.", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80" }
        ],
        pastBureaus: [],
        media: {
            heroImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80',
            beforePhotos: ["https://images.unsplash.com/photo-1621451968567-c25dbb2c9389?auto=format&fit=crop&q=80"],
            afterPhotos: ["https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"]
        }
    },
    {
        id: 'fria',
        name: 'Fria',
        naturalRegion: 'Basse-Guinée',
        adminRegion: 'Boké',
        prefecture: 'Fria',
        status: 'active' as const,
        associationName: 'Fria Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-04-22',
        description: 'Ville industrielle pionnière dans la gestion écologique des déchets miniers.',

        stats: { agents: 35, tonnesCollected: 580, members: 720, donors: 42, operations: 82 },
        bureau: generateBureau('Fria'),
        socials: { youtube: 'https://youtube.com/@FriaVillePropreFleurie', facebook: 'https://facebook.com/FriaVillePropreFleurie' },
        founders: [
            { name: "Marie Condé", role: "Présidente", bio: "Engagée pour la reconversion verte.", photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80" }
        ],
        pastBureaus: [],
        media: {
            heroImage: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80',
            beforePhotos: ["https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80"],
            afterPhotos: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80"]
        }
    },

    // BASSE-GUINÉE - Région de Kindia
    {
        id: 'kindia',
        name: 'Kindia',
        naturalRegion: 'Basse-Guinée',
        adminRegion: 'Kindia',
        prefecture: 'Kindia',
        status: 'active' as const,
        associationName: 'Kindia Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-04-18',
        description: 'Carrefour stratégique, la ville jardin s\'engage pour préserver son patrimoine naturel.',

        stats: { agents: 32, tonnesCollected: 540, members: 780, donors: 48, operations: 95 },
        bureau: generateBureau('Kindia'),
        socials: { youtube: 'https://youtube.com/@KindiaVillePropreFleurie', facebook: 'https://facebook.com/KindiaVillePropreFleurie' },
        founders: [
            { name: "Ibrahima Sory", role: "Initiateur", bio: "Défenseur du Voile de la Mariée.", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80" }
        ],
        pastBureaus: [],
        media: {
            heroImage: 'https://images.unsplash.com/photo-1572085313466-6710de0d7b19?auto=format&fit=crop&q=80',
            beforePhotos: ["https://images.unsplash.com/photo-1611288870280-4a331d279998?auto=format&fit=crop&q=80"],
            afterPhotos: ["https://images.unsplash.com/photo-1498059869680-e5989b52a5f3?auto=format&fit=crop&q=80"]
        }
    },
    {
        id: 'coyah',
        name: 'Coyah',
        naturalRegion: 'Basse-Guinée',
        adminRegion: 'Kindia',
        prefecture: 'Coyah',
        status: 'active' as const,
        associationName: 'Coyah Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-05-02',
        description: 'Ville de transit engagée dans la lutte contre les pollutions routières.',

        stats: { agents: 25, tonnesCollected: 380, members: 620, donors: 35, operations: 72 },
        bureau: generateBureau('Coyah'),
        socials: { youtube: 'https://youtube.com/@CoyahVillePropreFleurie', facebook: 'https://facebook.com/CoyahVillePropreFleurie' },
        founders: [
            { name: "Salimatou Barry", role: "Fondatrice", bio: "Engagée contre la pollution plastique.", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80" }
        ],
        pastBureaus: [],
        media: {
            heroImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80',
            beforePhotos: ["https://images.unsplash.com/photo-1621451968567-c25dbb2c9389?auto=format&fit=crop&q=80"],
            afterPhotos: ["https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"]
        }
    },
    {
        id: 'dubreka',
        name: 'Dubréka',
        naturalRegion: 'Basse-Guinée',
        adminRegion: 'Kindia',
        prefecture: 'Dubréka',
        status: 'active' as const,
        associationName: 'Dubréka Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-05-08',
        description: 'Ville périurbaine mobilisée pour des quartiers sains et agréables.',

        stats: { agents: 30, tonnesCollected: 480, members: 690, donors: 40, operations: 78 },
        bureau: generateBureau('Dubréka'),
        socials: { youtube: 'https://youtube.com/@DubrekaVillePropreFleurie', facebook: 'https://facebook.com/DubrekaVillePropreFleurie' },
        founders: [
            { name: "Oumar Sylla", role: "Leader", bio: "Mobilisateur communautaire.", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80" }
        ],
        pastBureaus: [],
        media: {
            heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80',
            beforePhotos: ["https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80"],
            afterPhotos: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80"]
        }
    },
    {
        id: 'forecariah',
        name: 'Forécariah',
        naturalRegion: 'Basse-Guinée',
        adminRegion: 'Kindia',
        prefecture: 'Forécariah',
        status: 'active' as const,
        associationName: 'Forécariah Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-05-12',
        description: 'Ville côtière protégeant ses plages et mangroves face à l\'urbanisation.',

        stats: { agents: 27, tonnesCollected: 410, members: 580, donors: 33, operations: 68 },
        bureau: generateBureau('Forécariah'),
        socials: { youtube: 'https://youtube.com/@ForeacariahVillePropreFleurie', facebook: 'https://facebook.com/ForeacariahVillePropreFleurie' },
        founders: [
            { name: "Amina Touré", role: "Présidente", bio: "Protectrice du littoral.", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80" }
        ],
        pastBureaus: [],
        media: {
            heroImage: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&q=80',
            beforePhotos: ["https://images.unsplash.com/photo-1621451968567-c25dbb2c9389?auto=format&fit=crop&q=80"],
            afterPhotos: ["https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"]
        }
    },
    {
        id: 'telimele',
        name: 'Télimélé',
        naturalRegion: 'Basse-Guinée',
        adminRegion: 'Kindia',
        prefecture: 'Télimélé',
        status: 'active' as const,
        associationName: 'Télimélé Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-05-18',
        description: 'Région montagneuse au climat agréable, Télimélé valorise son écosystème unique.',

        stats: { agents: 24, tonnesCollected: 360, members: 520, donors: 30, operations: 65 },
        bureau: generateBureau('Télimélé'),
        socials: { youtube: 'https://youtube.com/@TelimeleVillePropreFleurie', facebook: 'https://facebook.com/TelimeleVillePropreFleurie' },
        founders: [
            { name: "Madiou Diallo", role: "Fondateur", bio: "Engagé pour la propreté des montagnes.", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" }
        ],
        pastBureaus: [],
        media: {
            heroImage: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80',
            beforePhotos: ["https://images.unsplash.com/photo-1611288870280-4a331d279998?auto=format&fit=crop&q=80"],
            afterPhotos: ["https://images.unsplash.com/photo-1498059869680-e5989b52a5f3?auto=format&fit=crop&q=80"]
        }
    },

    // MOYENNE-GUINÉE - Région de Labé
    {
        id: 'labe',
        name: 'Labé',
        naturalRegion: 'Moyenne-Guinée',
        adminRegion: 'Labé',
        prefecture: 'Labé',
        status: 'active' as const,
        associationName: 'Labé Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-03-15',
        description: 'Capitale du Fouta, Labé protège le château d\'eau de l\'Afrique de l\'Ouest.',

        stats: { agents: 45, tonnesCollected: 850, members: 1250, donors: 65, operations: 120 },
        bureau: generateBureau('Labé'),
        socials: { youtube: 'https://youtube.com/@LabeVillePropreFleurie', facebook: 'https://facebook.com/LabeVillePropreFleurie' },
        founders: [
            { name: "Dr. Baldé", role: "Premier Président", bio: "A initié le mouvement Labé Verte.", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80" }
        ],
        pastBureaus: [],
        media: {
            heroImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80',
            beforePhotos: ["https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80"],
            afterPhotos: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80"]
        }
    },
    {
        id: 'koubia',
        name: 'Koubia',
        naturalRegion: 'Moyenne-Guinée',
        adminRegion: 'Labé',
        prefecture: 'Koubia',
        status: 'active' as const,
        associationName: 'Koubia Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-06-05',
        description: 'Petite ville rurale du Fouta engagée dans la préservation de ses sources d\'eau.',

        stats: { agents: 15, tonnesCollected: 220, members: 380, donors: 20, operations: 48 },
        bureau: generateBureau('Koubia'),
        socials: { youtube: 'https://youtube.com/@KoubiaVillePropreFleurie', facebook: 'https://facebook.com/KoubiaVillePropreFleurie' },
        founders: [
            { name: "Mamadou Sow", role: "Fondateur", bio: "Protecteur des sources.", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80" }
        ],
        pastBureaus: [],
        media: {
            heroImage: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&q=80',
            beforePhotos: ["https://images.unsplash.com/photo-1621451968567-c25dbb2c9389?auto=format&fit=crop&q=80"],
            afterPhotos: ["https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"]
        }
    },
    {
        id: 'lelouma',
        name: 'Lélouma',
        naturalRegion: 'Moyenne-Guinée',
        adminRegion: 'Labé',
        prefecture: 'Lélouma',
        status: 'active' as const,
        associationName: 'Lélouma Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-06-10',
        description: 'Zone agricole du Fouta sensibilisée à la gestion durable des déchets organiques.',

        stats: { agents: 16, tonnesCollected: 240, members: 400, donors: 22, operations: 52 },
        bureau: generateBureau('Lélouma'),
        socials: { youtube: 'https://youtube.com/@LéloumaVillePropreFleurie', facebook: 'https://facebook.com/LéloumaVillePropreFleurie' },
        founders: [
            { name: "Fatou Barry", role: "Initiatrice", bio: "Engagée pour le compostage.", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80" }
        ],
        pastBureaus: [],
        media: {
            heroImage: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80',
            beforePhotos: ["https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80"],
            afterPhotos: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80"]
        }
    },
    {
        id: 'tougue',
        name: 'Tougué',
        naturalRegion: 'Moyenne-Guinée',
        adminRegion: 'Labé',
        prefecture: 'Tougué',
        status: 'active' as const,
        associationName: 'Tougué Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-06-15',
        description: 'Ville stratégique mobilisée pour la protection des bassins versants.',

        stats: { agents: 18, tonnesCollected: 280, members: 430, donors: 24, operations: 55 },
        bureau: generateBureau('Tougué'),
        socials: { youtube: 'https://youtube.com/@TougueVillePropreFleurie', facebook: 'https://facebook.com/TougueVillePropreFleurie' },
        founders: [
            { name: "Amadou Diallo", role: "Fondateur", bio: "Engagé pour la biodiversité.", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" }
        ],
        pastBureaus: [],
        media: {
            heroImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80',
            beforePhotos: ["https://images.unsplash.com/photo-1611288870280-4a331d279998?auto=format&fit=crop&q=80"],
            afterPhotos: ["https://images.unsplash.com/photo-1498059869680-e5989b52a5f3?auto=format&fit=crop&q=80"]
        }
    },

    // MOYENNE-GUINÉE - Région de Mamou
    {
        id: 'mamou',
        name: 'Mamou',
        naturalRegion: 'Moyenne-Guinée',
        adminRegion: 'Mamou',
        prefecture: 'Mamou',
        status: 'active' as const,
        associationName: 'Mamou Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-05-25',
        description: 'Carrefour du Fouta, Mamou coordonne des initiatives régionales d\'assainissement.',

        stats: { agents: 38, tonnesCollected: 620, members: 890, donors: 52, operations: 98 },
        bureau: generateBureau('Mamou'),
        socials: { youtube: 'https://youtube.com/@MamouVillePropreFleurie', facebook: 'https://facebook.com/MamouVillePropreFleurie' },
        founders: [
            { name: "Halimatou Bah", role: "Fondatrice", bio: "Pour une ville carrefour propre.", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80" }
        ],
        pastBureaus: [],
        media: {
            heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80',
            beforePhotos: ["https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80"],
            afterPhotos: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80"]
        }
    },
    {
        id: 'dalaba',
        name: 'Dalaba',
        naturalRegion: 'Moyenne-Guinée',
        adminRegion: 'Mamou',
        prefecture: 'Dalaba',
        status: 'active' as const,
        associationName: 'Dalaba Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-06-01',
        description: 'Station climatique historique, Dalaba préserve sa réputation de ville verte.',

        stats: { agents: 26, tonnesCollected: 390, members: 580, donors: 34, operations: 72 },
        bureau: generateBureau('Dalaba'),
        socials: { youtube: 'https://youtube.com/@DalabaVillePropreFleurie', facebook: 'https://facebook.com/DalabaVillePropreFleurie' },
        founders: [
            { name: "Thierno Sow", role: "Pionnier", bio: "Gardien de la ville climatique.", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80" }
        ],
        pastBureaus: [],
        media: {
            heroImage: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80',
            beforePhotos: ["https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80"],
            afterPhotos: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80"]
        }
    },
    {
        id: 'pita',
        name: 'Pita',
        naturalRegion: 'Moyenne-Guinée',
        adminRegion: 'Mamou',
        prefecture: 'Pita',
        status: 'active' as const,
        associationName: 'Pita Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-06-08',
        description: 'Cité des cascades, Pita protège ses sites naturels exceptionnels.',

        stats: { agents: 29, tonnesCollected: 450, members: 650, donors: 38, operations: 78 },
        bureau: generateBureau('Pita'),
        socials: { youtube: 'https://youtube.com/@PitaVillePropreFleurie', facebook: 'https://facebook.com/PitaVillePropreFleurie' },
        founders: [
            { name: "Mariama Barry", role: "Fondatrice", bio: "Engagée pour la propreté des chutes.", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80" }
        ],
        pastBureaus: [],
        media: {
            heroImage: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80',
            beforePhotos: ["https://images.unsplash.com/photo-1611288870280-4a331d279998?auto=format&fit=crop&q=80"],
            afterPhotos: ["https://images.unsplash.com/photo-1498059869680-e5989b52a5f3?auto=format&fit=crop&q=80"]
        }
    },

    // HAUTE-GUINÉE - Région de Kankan
    {
        id: 'kankan',
        name: 'Kankan',
        naturalRegion: 'Haute-Guinée',
        adminRegion: 'Kankan',
        prefecture: 'Kankan',
        status: 'active' as const,
        associationName: 'Kankan Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-05-20',
        description: 'Deuxième ville du pays, Kankan reverdit la savane et protège le fleuve Milo.',

        stats: { agents: 35, tonnesCollected: 620, members: 980, donors: 42, operations: 85 },
        bureau: generateBureau('Kankan'),
        socials: { youtube: 'https://youtube.com/@KankanVillePropreFleurie', facebook: 'https://facebook.com/KankanVillePropreFleurie' },
        founders: [
            { name: "Mory Kanté", role: "Initiateur", bio: "Ambassadeur de la ville propre.", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" }
        ],
        pastBureaus: [],
        media: {
            heroImage: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80',
            beforePhotos: ["https://images.unsplash.com/photo-1621451968567-c25dbb2c9389?auto=format&fit=crop&q=80"],
            afterPhotos: ["https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"]
        }
    },
    {
        id: 'kerouane',
        name: 'Kérouané',
        naturalRegion: 'Haute-Guinée',
        adminRegion: 'Kankan',
        prefecture: 'Kérouané',
        status: 'active' as const,
        associationName: 'Kérouané Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-07-05',
        description: 'Ville frontalière engagée dans la coopération régionale pour l\'environnement.',

        stats: { agents: 20, tonnesCollected: 310, members: 460, donors: 26, operations: 58 },
        bureau: generateBureau('Kérouané'),
        socials: { youtube: 'https://youtube.com/@KerouaneVillePropreFleurie', facebook: 'https://facebook.com/KerouaneVillePropreFleurie' },
        founders: [
            { name: "Fanta Camara", role: "Fondatrice", bio: "Militante écologiste.", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80" }
        ],
        pastBureaus: [],
        media: {
            heroImage: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80',
            beforePhotos: ["https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80"],
            afterPhotos: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80"]
        }
    },
    {
        id: 'mandiana',
        name: 'Mandiana',
        naturalRegion: 'Haute-Guinée',
        adminRegion: 'Kankan',
        prefecture: 'Mandiana',
        status: 'active' as const,
        associationName: 'Mandiana Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-07-10',
        description: 'Zone minière sensibilisée à l\'équilibre entre extraction et protection environnementale.',

        stats: { agents: 25, tonnesCollected: 420, members: 590, donors: 32, operations: 68 },
        bureau: generateBureau('Mandiana'),
        socials: { youtube: 'https://youtube.com/@MandianaVillePropreFleurie', facebook: 'https://facebook.com/MandianaVillePropreFleurie' },
        founders: [
            { name: "Sekou Diakité", role: "Leader", bio: "Engagé pour un Mandiana vert.", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80" }
        ],
        pastBureaus: [],
        media: {
            heroImage: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80',
            beforePhotos: ["https://images.unsplash.com/photo-1611288870280-4a331d279998?auto=format&fit=crop&q=80"],
            afterPhotos: ["https://images.unsplash.com/photo-1498059869680-e5989b52a5f3?auto=format&fit=crop&q=80"]
        }
    },
    {
        id: 'siguiri',
        name: 'Siguiri',
        naturalRegion: 'Haute-Guinée',
        adminRegion: 'Kankan',
        prefecture: 'Siguiri',
        status: 'active' as const,
        associationName: 'Siguiri Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-07-15',
        description: 'Capitale de l\'or, Siguiri œuvre pour un développement minier propre et responsable.',

        stats: { agents: 32, tonnesCollected: 580, members: 820, donors: 45, operations: 88 },
        bureau: generateBureau('Siguiri'),
        socials: { youtube: 'https://youtube.com/@SiguiriVillePropreFleurie', facebook: 'https://facebook.com/SiguiriVillePropreFleurie' },
        founders: [
            { name: "Keita Fodé", role: "Pionnier", bio: "Pour un Siguiri durable.", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80" }
        ],
        pastBureaus: [],
        media: {
            heroImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80',
            beforePhotos: ["https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80"],
            afterPhotos: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80"]
        }
    },
    {
        id: 'kouroussa',
        name: 'Kouroussa',
        naturalRegion: 'Haute-Guinée',
        adminRegion: 'Kankan',
        prefecture: 'Kouroussa',
        status: 'active' as const,
        associationName: 'Kouroussa Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-07-20',
        description: 'Berceau de Camara Laye, Kouroussa protège son patrimoine culturel et naturel.',

        stats: { agents: 27, tonnesCollected: 440, members: 620, donors: 36, operations: 72 },
        bureau: generateBureau('Kouroussa'),
        socials: { youtube: 'https://youtube.com/@KouroussaVillePropreFleurie', facebook: 'https://facebook.com/KouroussaVillePropreFleurie' },
        founders: [
            { name: "Camara Laye Jr", role: "Pionnier", bio: "Héritier de la tradition, gardien de la nature.", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80" }
        ],
        pastBureaus: [],
        media: {
            heroImage: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80',
            beforePhotos: ["https://images.unsplash.com/photo-1611288870280-4a331d279998?auto=format&fit=crop&q=80"],
            afterPhotos: ["https://images.unsplash.com/photo-1498059869680-e5989b52a5f3?auto=format&fit=crop&q=80"]
        }
    },

    // HAUTE-GUINÉE - Région de Faranah
    {
        id: 'faranah',
        name: 'Faranah',
        naturalRegion: 'Haute-Guinée',
        adminRegion: 'Faranah',
        prefecture: 'Faranah',
        status: 'active' as const,
        associationName: 'Faranah Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-06-20',
        description: 'Carrefour central, Faranah coordonne la transition vers une savane verte.',
        media: { heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80' },
        stats: { agents: 30, tonnesCollected: 510, members: 720, donors: 40, operations: 82 },
        bureau: generateBureau('Faranah'),
        socials: { youtube: 'https://youtube.com/@FaranahVillePropreFleurie', facebook: 'https://facebook.com/FaranahVillePropreFleurie' }
    },
    {
        id: 'dabola',
        name: 'Dabola',
        naturalRegion: 'Haute-Guinée',
        adminRegion: 'Faranah',
        prefecture: 'Dabola',
        status: 'active' as const,
        associationName: 'Dabola Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-07-25',
        description: 'Ville minière mobilisée pour la gestion responsable des ressources naturelles.',
        media: { heroImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80' },
        stats: { agents: 24, tonnesCollected: 380, members: 550, donors: 31, operations: 65 },
        bureau: generateBureau('Dabola'),
        socials: { youtube: 'https://youtube.com/@DabolaVillePropreFleurie', facebook: 'https://facebook.com/DabolaVillePropreFleurie' }
    },
    {
        id: 'dinguiraye',
        name: 'Dinguiraye',
        naturalRegion: 'Haute-Guinée',
        adminRegion: 'Faranah',
        prefecture: 'Dinguiraye',
        status: 'active' as const,
        associationName: 'Dinguiraye Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-07-28',
        description: 'Ville sainte protégeant ses sites religieux et son environnement naturel.',
        media: { heroImage: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&q=80' },
        stats: { agents: 22, tonnesCollected: 340, members: 490, donors: 28, operations: 58 },
        bureau: generateBureau('Dinguiraye'),
        socials: { youtube: 'https://youtube.com/@DinguirayeVillePropreFleurie', facebook: 'https://facebook.com/DinguirayeVillePropreFleurie' }
    },
    {
        id: 'kissidougou',
        name: 'Kissidougou',
        naturalRegion: 'Haute-Guinée',
        adminRegion: 'Faranah',
        prefecture: 'Kissidougou',
        status: 'active' as const,
        associationName: 'Kissidougou Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-08-01',
        description: 'Porte de la forêt, Kissidougou fait le lien entre savane et zone forestière.',
        media: { heroImage: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80' },
        stats: { agents: 28, tonnesCollected: 460, members: 640, donors: 37, operations: 75 },
        bureau: generateBureau('Kissidougou'),
        socials: { youtube: 'https://youtube.com/@KissidougouVillePropreFleurie', facebook: 'https://facebook.com/KissidougouVillePropreFleurie' }
    },

    // GUINÉE FORESTIÈRE - Région de Nzérékoré
    {
        id: 'nzerekore',
        name: 'Nzérékoré',
        naturalRegion: 'Guinée Forestière',
        adminRegion: 'Nzérékoré',
        prefecture: 'Nzérékoré',
        status: 'active' as const,
        associationName: 'Nzérékoré Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-06-12',
        description: 'Capitale de la région forestière, Nzérékoré protège la biodiversité exceptionnelle.',
        media: { heroImage: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80' },
        stats: { agents: 28, tonnesCollected: 480, members: 850, donors: 35, operations: 70 },
        bureau: generateBureau('Nzérékoré'),
        socials: { youtube: 'https://youtube.com/@NzerekoreVillePropreFleurie', facebook: 'https://facebook.com/NzerekoreVillePropreFleurie' }
    },
    {
        id: 'macenta',
        name: 'Macenta',
        naturalRegion: 'Guinée Forestière',
        adminRegion: 'Nzérékoré',
        prefecture: 'Macenta',
        status: 'active' as const,
        associationName: 'Macenta Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-08-10',
        description: 'Au cœur de la forêt, Macenta sensibilise à la conservation écologique.',
        media: { heroImage: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&q=80' },
        stats: { agents: 25, tonnesCollected: 410, members: 590, donors: 32, operations: 68 },
        bureau: generateBureau('Macenta'),
        socials: { youtube: 'https://youtube.com/@MacentaVillePropreFleurie', facebook: 'https://facebook.com/MacentaVillePropreFleurie' }
    },
    {
        id: 'gueckedou',
        name: 'Guéckédou',
        naturalRegion: 'Guinée Forestière',
        adminRegion: 'Nzérékoré',
        prefecture: 'Guéckédou',
        status: 'active' as const,
        associationName: 'Guéckédou Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-08-15',
        description: 'Ville frontalière tripartite engagée dans la coopération environnementale régionale.',
        media: { heroImage: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80' },
        stats: { agents: 30, tonnesCollected: 520, members: 740, donors: 42, operations: 78 },
        bureau: generateBureau('Guéckédou'),
        socials: { youtube: 'https://youtube.com/@GueckedouVillePropreFleurie', facebook: 'https://facebook.com/GueckedouVillePropreFleurie' }
    },
    {
        id: 'lola',
        name: 'Lola',
        naturalRegion: 'Guinée Forestière',
        adminRegion: 'Nzérékoré',
        prefecture: 'Lola',
        status: 'active' as const,
        associationName: 'Lola Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-08-20',
        description: 'Gardienne du mont Nimba, Lola protège un patrimoine mondial de l\'UNESCO.',
        media: { heroImage: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80' },
        stats: { agents: 22, tonnesCollected: 350, members: 480, donors: 28, operations: 62 },
        bureau: generateBureau('Lola'),
        socials: { youtube: 'https://youtube.com/@LolaVillePropreFleurie', facebook: 'https://facebook.com/LolaVillePropreFleurie' }
    },
    {
        id: 'yomou',
        name: 'Yomou',
        naturalRegion: 'Guinée Forestière',
        adminRegion: 'Nzérékoré',
        prefecture: 'Yomou',
        status: 'active' as const,
        associationName: 'Yomou Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-08-25',
        description: 'Petite ville forestière préservant son écosystème fragile et unique.',
        media: { heroImage: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80' },
        stats: { agents: 18, tonnesCollected: 280, members: 420, donors: 24, operations: 55 },
        bureau: generateBureau('Yomou'),
        socials: { youtube: 'https://youtube.com/@YomouVillePropreFleurie', facebook: 'https://facebook.com/YomouVillePropreFleurie' }
    },
    {
        id: 'beyla',
        name: 'Beyla',
        naturalRegion: 'Guinée Forestière',
        adminRegion: 'Nzérékoré',
        prefecture: 'Beyla',
        status: 'active' as const,
        associationName: 'Beyla Ville Propre et Fleurie',
        slogan: 'Une ville propre est le reflet de ses habitants',
        creationDate: '2023-08-28',
        description: 'Ville historique entre forêt et savane, Beyla valorise son héritage culturel.',
        media: { heroImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80' },
        stats: { agents: 26, tonnesCollected: 430, members: 620, donors: 35, operations: 70 },
        bureau: generateBureau('Beyla'),
        socials: { youtube: 'https://youtube.com/@BeylaVillePropreFleurie', facebook: 'https://facebook.com/BeylaVillePropreFleurie' }
    }
];
