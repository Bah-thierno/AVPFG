import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Calendar, Users, Trash2, Heart, Award,
    Youtube, Facebook, Phone, ArrowLeft, ExternalLink,
    Building2, UserPlus
} from 'lucide-react';
import { cities } from '../data/cities';
import { Button } from '../components/ui/Button';
import { Section } from '../components/ui/Section';

export default function CityDetails() {
    const { id } = useParams();
    const city = cities.find(c => c.id === id);

    if (!city) {
        return <Navigate to="/villes" replace />;
    }

    return (
        <>
            {/* HERO with Breadcrumb */}
            <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-slate-900 px-4 py-16 text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                    <img
                        src={city.media.heroImage}
                        alt={city.name}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="container mx-auto relative z-20 space-y-6 pb-8">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Link to="/villes" className="hover:text-white transition-colors flex items-center gap-1">
                            <ArrowLeft className="h-4 w-4" /> Nos Villes
                        </Link>
                        <span>/</span>
                        <span className="text-brand-400">{city.naturalRegion}</span>
                        <span>/</span>
                        <span className="text-gray-400">{city.adminRegion}</span>
                        <span>/</span>
                        <span className="text-gray-400">{city.prefecture}</span>
                    </div>

                    {/* Title */}
                    <div>
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-3">{city.name}</h1>
                        <h2 className="text-2xl font-bold text-brand-400">{city.associationName}</h2>
                        <p className="text-lg italic text-gray-300 mt-2">"{city.slogan}"</p>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3">
                        {city.socials.youtube && (
                            <a
                                href={city.socials.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-bold transition-colors"
                            >
                                <Youtube className="h-5 w-5" /> Voir en vidéo
                            </a>
                        )}
                        {city.socials.facebook && (
                            <a
                                href={city.socials.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition-colors"
                            >
                                <Facebook className="h-5 w-5" /> Suivre l'association
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <Section className="bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 text-gray-600 mb-6">
                        <Calendar className="h-5 w-5 text-brand-600" />
                        <span className="font-medium">Créée le {new Date(city.creationDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                    <p className="text-xl text-gray-700 leading-relaxed">{city.description}</p>
                </div>
            </Section>

            {/* Stats Section */}
            <Section className="bg-gray-50">
                <h2 className="text-3xl font-bold text-center mb-12">📊 Indicateurs clés</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    <StatCard icon={Users} label="Agents" value={city.stats.agents} color="blue" />
                    <StatCard icon={Trash2} label="Tonnes collectées" value={`${city.stats.tonnesCollected}T`} color="green" />
                    <StatCard icon={Award} label="Membres" value={city.stats.members} color="purple" />
                    <StatCard icon={Heart} label="Donateurs" value={city.stats.donors} color="red" />
                </div>
            </Section>

            {/* Bureau Section */}
            <Section className="bg-white">
                <h2 className="text-3xl font-bold text-center mb-12">🏛️ Bureau Exécutif Local</h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <BureauCard member={city.bureau.president} highlight />
                    <BureauCard member={city.bureau.vicePresident} />
                    <BureauCard member={city.bureau.exGeneralSecretary} />
                    <BureauCard member={city.bureau.secretary} />
                    <BureauCard member={city.bureau.treasurer} />
                    <BureauCard member={city.bureau.commSecretary} />
                    <BureauCard member={city.bureau.envSecretary} />
                    <BureauCard member={city.bureau.fundSecretary} />
                </div>
            </Section>

            {/* Actions Section & Gallery */}
            <Section className="bg-brand-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">♻️ Actions & opérations</h2>
                    <p className="text-xl text-brand-100 mb-8">
                        {city.stats.operations} opérations menées sur le terrain depuis la création de l'association.
                    </p>

                    {/* GALLERY PREVIEW */}
                    {city.media.beforePhotos && city.media.afterPhotos && (
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <div className="relative group overflow-hidden rounded-xl shadow-lg border-2 border-white/20">
                                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">AVANT</div>
                                <img src={city.media.beforePhotos[0]} alt="Avant nettoyage" className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="relative group overflow-hidden rounded-xl shadow-lg border-2 border-white/20">
                                <div className="absolute top-2 left-2 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">APRÈS</div>
                                <img src={city.media.afterPhotos[0]} alt="Après nettoyage" className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                            </div>
                        </div>
                    )}

                    <Link to="/projets">
                        <Button className="bg-white text-brand-700 hover:bg-gray-100 font-bold h-14 px-8 text-lg">
                            Voir toutes les opérations <ExternalLink className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </Section>

            {/* FOUNDERS & HISTORY ARCHIVE */}
            {(city.founders || city.pastBureaus) && (
                <Section className="bg-white border-t border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        {city.founders && (
                            <div className="mb-16">
                                <h2 className="text-3xl font-bold mb-8 text-gray-800">🏛️ Pères Fondateurs</h2>
                                <div className="grid sm:grid-cols-2 gap-8 justify-center">
                                    {city.founders.map((founder, idx) => (
                                        <div key={idx} className="flex flex-col items-center text-center">
                                            <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-brand-100 mb-4 shadow-lg">
                                                <img src={founder.photo || "https://ui-avatars.com/api/?name=" + founder.name} alt={founder.name} className="h-full w-full object-cover" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">{founder.name}</h3>
                                            <p className="text-brand-600 font-medium mb-2">{founder.role}</p>
                                            <p className="text-gray-500 text-sm max-w-xs">{founder.bio}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {city.pastBureaus && (
                            <div>
                                <h2 className="text-2xl font-bold mb-6 text-gray-700 flex items-center justify-center gap-2">
                                    <Clock className="w-6 h-6" /> Archives des Bureaux
                                </h2>
                                <div className="space-y-4">
                                    {city.pastBureaus.map((archive, idx) => (
                                        <details key={idx} className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                                            <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-100 transition-colors">
                                                <span className="font-bold text-gray-800">Mandat {archive.period}</span>
                                                <span className="text-sm text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="p-4 border-t border-gray-200 bg-white grid grid-cols-2 gap-4 text-left">
                                                <div>
                                                    <div className="text-xs text-brand-600 font-bold uppercase">Président</div>
                                                    <div className="font-medium text-gray-900">{archive.members.president.name}</div>
                                                </div>
                                                <div>
                                                    <div className="text-xs text-brand-600 font-bold uppercase">Vice-Président</div>
                                                    <div className="font-medium text-gray-900">{archive.members.vicePresident.name}</div>
                                                </div>
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </Section>
            )}

            {/* Get Involved Section */}
            <Section className="bg-gradient-to-br from-emerald-50 to-blue-50">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">🤝 S'engager avec nous</h2>
                    <p className="text-xl text-gray-600">Rejoignez le mouvement et participez à la transformation de {city.name}</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <Link to="/contact">
                        <ActionCard
                            icon={UserPlus}
                            title="Adhérer à l'association"
                            description="Devenez membre officiel et participez aux décisions"
                            color="bg-blue-500"
                        />
                    </Link>
                    <Link to="/contact">
                        <ActionCard
                            icon={Users}
                            title="Devenir bénévole"
                            description="Participez aux opérations de terrain"
                            color="bg-emerald-500"
                        />
                    </Link>
                    <Link to="/contact">
                        <ActionCard
                            icon={Heart}
                            title="Soutenir financièrement"
                            description="Contribuez au développement des actions"
                            color="bg-orange-500"
                        />
                    </Link>
                </div>
            </Section>

            {/* Contact Section */}
            <Section className="bg-gray-900 text-white">
                <div className="max-w-2xl mx-auto text-center">
                    <Building2 className="h-16 w-16 text-brand-400 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Contactez l'association</h3>
                    <p className="text-gray-400 mb-8">Pour toute information, adhésion ou partenariat</p>
                    <div className="flex justify-center items-center gap-2 text-lg">
                        <Phone className="h-5 w-5 text-brand-400" />
                        <a href={`tel:${city.bureau.president.telephone}`} className="hover:text-brand-400 transition-colors font-medium">
                            {city.bureau.president.telephone}
                        </a>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Contact du Président</p>
                </div>
            </Section>
        </>
    );
}

// Add Clock to imports if missing, or use existing icon
import { Clock } from 'lucide-react';

// Helper Components
interface StatCardProps {
    icon: any;
    label: string;
    value: number | string;
    color: 'blue' | 'green' | 'purple' | 'red';
}

function StatCard({ icon: Icon, label, value, color }: StatCardProps) {
    const colorClasses = {
        blue: 'bg-blue-50 text-blue-600 border-blue-200',
        green: 'bg-green-50 text-green-600 border-green-200',
        purple: 'bg-purple-50 text-purple-600 border-purple-200',
        red: 'bg-red-50 text-red-600 border-red-200'
    };

    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className={`${colorClasses[color]} p-6 rounded-2xl border-2 text-center shadow-sm`}
        >
            <Icon className="h-8 w-8 mx-auto mb-3" />
            <div className="text-4xl font-extrabold mb-1">{value}</div>
            <div className="text-sm font-bold uppercase tracking-wide opacity-80">{label}</div>
        </motion.div>
    );
}

interface BureauCardProps {
    member: { role: string; name: string; telephone?: string };
    highlight?: boolean;
}

function BureauCard({ member, highlight }: BureauCardProps) {
    return (
        <div className={`p-5 rounded-xl border-2 ${highlight ? 'bg-brand-50 border-brand-300' : 'bg-gray-50 border-gray-200'}`}>
            <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${highlight ? 'text-brand-600' : 'text-gray-500'}`}>
                {member.role}
            </div>
            <div className="text-lg font-bold text-gray-900 mb-2">{member.name}</div>
            {member.telephone && (
                <a
                    href={`tel:${member.telephone}`}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand-600 transition-colors"
                >
                    <Phone className="h-4 w-4" /> {member.telephone}
                </a>
            )}
        </div>
    );
}

interface ActionCardProps {
    icon: any;
    title: string;
    description: string;
    color: string;
}

function ActionCard({ icon: Icon, title, description, color }: ActionCardProps) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center group cursor-pointer"
        >
            <div className={`${color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </motion.div>
    );
}
