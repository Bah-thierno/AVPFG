import { useState } from 'react';
import { Section } from '../components/ui/Section';
import { Search, MapPin, User as UserIcon, Shield, Heart, Filter } from 'lucide-react';
import { users, type User } from '../data/users'; // Import User type
import { cities } from '../data/cities'; // Import cities data
import { motion, AnimatePresence } from 'framer-motion';

export default function Community() {
    const [searchTerm, setSearchTerm] = useState('');
    const [roleFilter, setRoleFilter] = useState<'all' | 'volunteer' | 'member' | 'donor'>('all');
    const [cityFilter, setCityFilter] = useState('all');
    const [searchCity, setSearchCity] = useState(''); // Added city search state
    const [selectedUser, setSelectedUser] = useState<User | null>(null); // State for selected user modal

    // Cities are now imported from data/cities

    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.matricule.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRole = roleFilter === 'all' || user.role === roleFilter;
        const matchesCity = cityFilter === 'all' || user.cityId === cityFilter;
        const matchesCitySearch = searchCity === '' || user.cityId.toLowerCase().includes(searchCity.toLowerCase());
        return matchesSearch && matchesRole && matchesCity && matchesCitySearch;
    });

    const getRoleBadge = (role: string) => {
        switch (role) {
            case 'volunteer':
                return <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold flex items-center gap-1"><UserIcon className="w-3 h-3" /> Bénévole</span>;
            case 'member':
                return <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold flex items-center gap-1"><Shield className="w-3 h-3" /> Membre</span>;
            case 'donor':
                return <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold flex items-center gap-1"><Heart className="w-3 h-3" /> Donateur</span>;
            default:
                return null;
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen pt-20">
            {/* Header */}
            <div className="bg-slate-900 text-white py-16 px-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 relative z-10">La Communauté</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto relative z-10">
                    Découvrez les visages de ceux qui s'engagent chaque jour pour une Guinée plus propre et plus belle.
                </p>
            </div>

            {/* Filters & Search */}
            <Section className="pb-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 -mt-20 relative z-20 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                type="text"
                                placeholder="Rechercher par nom ou matricule..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:outline-none"
                            />
                        </div>

                        {/* City Search - Text Input */}
                        <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                type="text"
                                placeholder="Saisir une ville..."
                                value={searchCity}
                                onChange={(e) => setSearchCity(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:outline-none"
                            />
                        </div>

                        {/* City Filter */}
                        <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <select
                                value={cityFilter}
                                onChange={(e) => setCityFilter(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:outline-none appearance-none"
                            >
                                <option value="all">Toutes les villes</option>
                                {cities.map(city => (
                                    <option key={city.id} value={city.id} className="capitalize">{city.name}</option>
                                ))}
                            </select>
                        </div>

                        {/* Role Filter */}
                        <div className="relative">
                            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <select
                                value={roleFilter}
                                onChange={(e) => setRoleFilter(e.target.value as any)}
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:outline-none appearance-none"
                            >
                                <option value="all">Tous les rôles</option>
                                <option value="volunteer">Bénévoles</option>
                                <option value="member">Membres</option>
                                <option value="donor">Donateurs</option>
                            </select>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Users Grid */}
            <Section className="pt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {filteredUsers.map((user) => (
                            <motion.div
                                key={user.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all group cursor-pointer"
                                onClick={() => setSelectedUser(user)} // Make clickable
                            >
                                <div className="flex items-start gap-4">
                                    <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-brand-100">
                                        <img src={user.photo} alt={user.name} className="h-full w-full object-cover group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-bold text-gray-900 text-lg">{user.name}</h3>
                                                <p className="text-xs text-brand-600 font-mono mb-2">{user.matricule}</p>
                                            </div>
                                            {getRoleBadge(user.role)}
                                        </div>
                                        <p className="text-gray-600 text-sm line-clamp-2 mb-3">{user.bio}</p>
                                        <div className="flex items-center gap-2 text-xs text-gray-400">
                                            <MapPin className="h-3 w-3" />
                                            <span className="capitalize">{cities.find(c => c.id === user.cityId)?.name}</span>
                                            <span>•</span>
                                            <span>Membre depuis {new Date(user.joinDate).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="text-center py-20 text-gray-500">
                    <UserIcon className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                    <p className="text-xl">Aucun membre trouvé avec ces critères.</p>
                </div>
            </Section>
            {/* User Details Modal */}
            <AnimatePresence>
                {selectedUser && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md" onClick={() => setSelectedUser(null)}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-auto overflow-y-auto"
                        >
                            {/* Left Side: Photo & Quick Info */}
                            <div className="bg-emerald-600 md:w-2/5 p-8 flex flex-col items-center text-center justify-center relative text-white shrink-0">
                                <div className="h-40 w-40 rounded-full border-4 border-white/30 shadow-2xl mb-6 overflow-hidden bg-white shrink-0">
                                    <img
                                        src={selectedUser.photo}
                                        alt={selectedUser.name}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{selectedUser.name}</h3>
                                <div className="mb-6 opacity-90 font-mono text-emerald-100">{selectedUser.matricule}</div>
                                {getRoleBadge(selectedUser.role)}
                            </div>

                            {/* Right Side: Details */}
                            <div className="p-8 md:w-3/5 bg-gray-50 relative">
                                <button
                                    onClick={() => setSelectedUser(null)}
                                    className="absolute top-4 right-4 p-2 bg-gray-200 hover:bg-gray-300 rounded-full text-gray-600 transition-colors z-10"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>

                                <div className="space-y-6 mt-4">
                                    <div>
                                        <h4 className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                                            <MapPin className="h-4 w-4" /> Localisation
                                        </h4>
                                        <p className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2">
                                            {cities.find(c => c.id === selectedUser?.cityId)?.name}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                                            <Shield className="h-4 w-4" /> Engagement
                                        </h4>
                                        <p className="text-gray-700 italic leading-relaxed bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                            "{selectedUser.bio}"
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 text-sm text-gray-400">
                                        <span>Membre depuis le</span>
                                        <span className="font-semibold text-gray-600">{new Date(selectedUser.joinDate).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
