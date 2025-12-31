import { motion } from 'framer-motion';
import { useState } from 'react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Map, Search, CheckCircle2, Clock, Calendar } from 'lucide-react';
import { cities } from '../data/cities';
import { Link } from 'react-router-dom';

export default function Cities() {
    const [filter, setFilter] = useState('Tous');
    const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'in-progress' | 'upcoming'>('all');
    const [searchQuery, setSearchQuery] = useState('');

    const regions = ['Tous', 'Basse-Guinée', 'Moyenne-Guinée', 'Haute-Guinée', 'Guinée Forestière', 'Conakry'];

    const filteredCities = cities.filter(city => {
        const matchesRegion = filter === 'Tous' || city.naturalRegion === filter;
        const matchesStatus = statusFilter === 'all' || city.status === statusFilter;
        const matchesSearch = searchQuery === '' ||
            city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            city.prefecture.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesRegion && matchesStatus && matchesSearch;
    });

    const getStatusConfig = (status: 'active' | 'in-progress' | 'upcoming') => {
        switch (status) {
            case 'active':
                return {
                    label: 'Active',
                    icon: CheckCircle2,
                    bgColor: 'bg-emerald-100',
                    textColor: 'text-emerald-700',
                    borderColor: 'border-emerald-300',
                    emoji: '🟩'
                };
            case 'in-progress':
                return {
                    label: 'En cours d\'implantation',
                    icon: Clock,
                    bgColor: 'bg-amber-100',
                    textColor: 'text-amber-700',
                    borderColor: 'border-amber-300',
                    emoji: '🟨'
                };
            case 'upcoming':
                return {
                    label: 'Non encore implantée',
                    icon: Calendar,
                    bgColor: 'bg-gray-100',
                    textColor: 'text-gray-700',
                    borderColor: 'border-gray-300',
                    emoji: '🟥'
                };
        }
    };

    return (
        <>
            {/* HERO */}
            <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-slate-900 px-4 py-16 text-center text-white">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1572085313466-6710de0d7b19?auto=format&fit=crop&q=80"
                        alt="Villes de Guinée"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="relative z-10 max-w-4xl">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-4">
                        Nos Villes Engagées
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">
                        Découvrez le réseau national des associations "Ville Propre et Fleurie".
                        <br /><span className="italic text-emerald-400">"Une ville propre est le reflet de ses habitants"</span>
                    </p>
                </div>
            </section>

            {/* STATUS INTRO */}
            <Section className="bg-white border-b border-gray-200">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">État d'implantation</h2>
                    <p className="text-gray-600 mb-6">
                        Notre mouvement s'étend progressivement à travers toute la Guinée.
                        Chaque ville est classée selon son niveau d'engagement actuel.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">🟩</span>
                            <span className="font-semibold">Villes Actives</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">🟨</span>
                            <span className="font-semibold">En cours d'implantation</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">🟥</span>
                            <span className="font-semibold">À venir</span>
                        </div>
                    </div>
                </div>
            </Section>

            {/* FILTERS & LIST */}
            <Section className="bg-gray-50 min-h-screen">

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-8">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Rechercher une ville (ex: Labé, Conakry, Kindia...)"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-brand-500 focus:outline-none text-lg font-medium transition-colors"
                        />
                    </div>
                    {searchQuery && (
                        <p className="mt-3 text-sm text-gray-600 text-center">
                            {filteredCities.length} ville{filteredCities.length > 1 ? 's' : ''} trouvée{filteredCities.length > 1 ? 's' : ''}
                        </p>
                    )}
                </div>

                {/* Status Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                    <button
                        onClick={() => setStatusFilter('all')}
                        className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${statusFilter === 'all'
                            ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/30'
                            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                            }`}
                    >
                        Toutes
                    </button>
                    <button
                        onClick={() => setStatusFilter('active')}
                        className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${statusFilter === 'active'
                            ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30'
                            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                            }`}
                    >
                        <span>🟩</span> Actives
                    </button>
                    <button
                        onClick={() => setStatusFilter('in-progress')}
                        className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${statusFilter === 'in-progress'
                            ? 'bg-amber-600 text-white shadow-lg shadow-amber-500/30'
                            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                            }`}
                    >
                        <span>🟨</span> En cours
                    </button>
                    <button
                        onClick={() => setStatusFilter('upcoming')}
                        className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${statusFilter === 'upcoming'
                            ? 'bg-gray-600 text-white shadow-lg shadow-gray-500/30'
                            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                            }`}
                    >
                        <span>🟥</span> À venir
                    </button>
                </div>

                {/* Region Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {regions.map((region) => (
                        <button
                            key={region}
                            onClick={() => setFilter(region)}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${filter === region
                                ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/30'
                                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            {region}
                        </button>
                    ))}
                </div>

                {/* Cities Grid */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {filteredCities.map((city) => {
                        const statusConfig = getStatusConfig(city.status);
                        const StatusIcon = statusConfig.icon;
                        const isActive = city.status === 'active';

                        return (
                            <motion.div
                                key={city.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className={`bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 border-2 ${statusConfig.borderColor} flex flex-col`}
                            >
                                {/* Status Badge */}
                                <div className={`${statusConfig.bgColor} ${statusConfig.textColor} px-4 py-2 flex items-center gap-2 font-bold text-sm`}>
                                    <StatusIcon className="h-4 w-4" />
                                    <span>{statusConfig.emoji} {statusConfig.label}</span>
                                </div>

                                {/* Card Image */}
                                <div className={`h-48 overflow-hidden relative group ${!isActive && 'opacity-60'}`}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                    <img
                                        src={city.media.heroImage}
                                        alt={city.name}
                                        className={`w-full h-full object-cover ${isActive && 'transform group-hover:scale-110 transition-transform duration-700'}`}
                                    />
                                    <div className="absolute bottom-4 left-4 z-20 text-white">
                                        <h2 className="text-3xl font-bold">{city.name}</h2>
                                        <p className="text-sm text-gray-200 flex items-center gap-1">
                                            <Map className="h-3 w-3" /> {city.naturalRegion}
                                        </p>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="mb-6">
                                        <h3 className="text-lg font-bold text-brand-800 mb-1">{city.associationName}</h3>
                                        <p className="text-xs text-gray-500 italic mb-3">"{city.slogan}"</p>
                                        <p className="text-gray-600 text-sm line-clamp-2">{city.description}</p>
                                    </div>

                                    {isActive && (
                                        <div className="grid grid-cols-3 gap-2 mb-6 bg-gray-50 p-3 rounded-xl border border-gray-100">
                                            <div className="text-center">
                                                <div className="text-xl font-bold text-brand-600">{city.stats.agents}</div>
                                                <div className="text-[10px] uppercase text-gray-400 font-bold">Agents</div>
                                            </div>
                                            <div className="text-center border-x border-gray-200">
                                                <div className="text-xl font-bold text-orange-500">{city.stats.donors}</div>
                                                <div className="text-[10px] uppercase text-gray-400 font-bold">Donateurs</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-xl font-bold text-blue-500">{city.stats.members}</div>
                                                <div className="text-[10px] uppercase text-gray-400 font-bold">Membres</div>
                                            </div>
                                        </div>
                                    )}

                                    <div className="mt-auto space-y-3">
                                        {isActive ? (
                                            <Link to={`/villes/${city.id}`}>
                                                <Button className="w-full bg-brand-600 hover:bg-brand-700 text-white">
                                                    Découvrir {city.name}
                                                </Button>
                                            </Link>
                                        ) : (
                                            <Button
                                                disabled
                                                className="w-full bg-gray-300 text-gray-500 cursor-not-allowed"
                                            >
                                                {city.status === 'in-progress' ? 'Bientôt disponible' : 'Demander l\'implantation'}
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {filteredCities.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-gray-500 text-lg">Aucune ville trouvée avec ces critères.</p>
                    </div>
                )}
            </Section>
        </>
    );
}
