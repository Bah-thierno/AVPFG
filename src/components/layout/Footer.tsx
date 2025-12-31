import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart, ArrowRight } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-brand-950 text-white pt-20 pb-10 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-900/20 to-transparent pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-800/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link to="/" className="inline-block relative group">
                            <div className="absolute -inset-2 bg-white/5 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
                            <img src="/logo.png" alt="Guinée Propre et Fleurie" className="h-20 w-auto relative" />
                        </Link>
                        <p className="text-gray-400 leading-relaxed font-light">
                            Un mouvement citoyen indépendant, apolitique et engagé pour le développement environnemental et durable en République de Guinée.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="h-10 w-10 rounded-full bg-brand-900 flex items-center justify-center text-brand-400 hover:bg-brand-600 hover:text-white transition-all transform hover:scale-110 border border-brand-800">
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-brand-500 rounded-full" /> Navigation
                        </h3>
                        <ul className="space-y-3">
                            {['Accueil', 'A propos', 'Contact', 'Nos Projets'].map((item, i) => {
                                const path = item === 'Accueil' ? '/' :
                                    item === 'A propos' ? '/about' :
                                        item === 'Nos Projets' ? '/projets' :
                                            `/${item.toLowerCase()}`;
                                return (
                                    <li key={i}>
                                        <Link to={path} className="text-gray-400 hover:text-white transition-colors flex items-center group">
                                            <ArrowRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-brand-400" />
                                            {item}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    {/* Engagement Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-brand-500 rounded-full" /> Agir avec nous
                        </h3>
                        <ul className="space-y-3">
                            {['Devenir Bénévole', 'Devenir Partenaire', 'Faire un don'].map((item, i) => (
                                <li key={i}>
                                    <Link to="/" className="text-gray-400 hover:text-brand-400 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-brand-500 rounded-full" /> Contact
                        </h3>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4">
                                <div className="h-10 w-10 rounded-lg bg-brand-900 flex items-center justify-center flex-shrink-0 text-brand-400">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <span className="block text-sm text-gray-500 uppercase tracking-wider mb-1">Adresse</span>
                                    <span className="text-gray-300">Conakry, Guinée</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="h-10 w-10 rounded-lg bg-brand-900 flex items-center justify-center flex-shrink-0 text-brand-400">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <span className="block text-sm text-gray-500 uppercase tracking-wider mb-1">Email</span>
                                    <a href="mailto:contact@guineepropre.gn" className="text-gray-300 hover:text-white transition-colors">contact@guineepropre.gn</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="h-10 w-10 rounded-lg bg-brand-900 flex items-center justify-center flex-shrink-0 text-brand-400">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <span className="block text-sm text-gray-500 uppercase tracking-wider mb-1">Téléphone</span>
                                    <a href="tel:+224600000000" className="text-gray-300 hover:text-white transition-colors">+224 600 00 00 00</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-brand-900 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Guinée Propre et Fleurie. Tous droits réservés.</p>
                    <div className="flex items-center gap-2">
                        <span>Fait avec</span>
                        <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />
                        <span>pour la Guinée</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
