export interface User {
    id: string;
    matricule: string;
    name: string;
    role: 'volunteer' | 'member' | 'donor' | 'admin';
    cityId: string;
    bio: string;
    photo: string;
    joinDate: string;
    status: 'active' | 'pending';
}

export const users: User[] = [
    {
        id: 'u1',
        matricule: 'VPF-KLM-001',
        name: 'Moussa Camara',
        role: 'member',
        cityId: 'kaloum',
        bio: 'Passionné par l\'environnement, je suis engagé depuis le début.',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
        joinDate: '2023-01-20',
        status: 'active'
    },
    {
        id: 'u2',
        matricule: 'VPF-RAT-042',
        name: 'Aissatou Diallo',
        role: 'volunteer',
        cityId: 'ratoma',
        bio: 'Étudiante en écologie, je veux changer ma commune.',
        photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
        joinDate: '2023-03-15',
        status: 'active'
    },
    {
        id: 'u3',
        matricule: 'VPF-DIX-101',
        name: 'Ibrahima Sory Barry',
        role: 'donor',
        cityId: 'dixinn',
        bio: ' Entrepreneur local soutenant les initiatives vertes.',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
        joinDate: '2023-02-10',
        status: 'active'
    },
    {
        id: 'u4',
        matricule: 'VPF-MAT-088',
        name: 'Fatoumata Sylla',
        role: 'volunteer',
        cityId: 'matoto',
        bio: 'Toujours prête pour le nettoyage du weekend !',
        photo: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80',
        joinDate: '2023-05-01',
        status: 'active'
    },
    {
        id: 'u5',
        matricule: 'VPF-KAN-202',
        name: 'Sekou Traoré',
        role: 'member',
        cityId: 'kankan',
        bio: 'Ancien du bureau, toujours actif.',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
        joinDate: '2023-06-12',
        status: 'active'
    },
    {
        id: 'u6',
        matricule: 'VPF-LAB-305',
        name: 'Mariama Bah',
        role: 'volunteer',
        cityId: 'labe',
        bio: 'La propreté de Labé est ma priorité.',
        photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80',
        joinDate: '2023-04-18',
        status: 'active'
    },
    {
        id: 'u7',
        matricule: 'VPF-NZE-404',
        name: 'Jean Loua',
        role: 'member',
        cityId: 'nzerekore',
        bio: 'Défenseur de la forêt sacrée.',
        photo: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80',
        joinDate: '2023-07-22',
        status: 'active'
    },
    {
        id: 'u8',
        matricule: 'VPF-KIN-505',
        name: 'Ousmane Soumah',
        role: 'volunteer',
        cityId: 'kindia',
        bio: 'Citoyen engagé pour une ville fleurie.',
        photo: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80',
        joinDate: '2023-05-30',
        status: 'active'
    }
];
