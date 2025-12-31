import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Facebook, Instagram, Twitter, Youtube, Shield, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Section } from '../components/ui/Section';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { cities } from '../data/cities';
import { useEffect } from 'react';

export default function Contact() {
    const [searchParams] = useSearchParams();
    const cityId = searchParams.get('city');
    const subjectParam = searchParams.get('subject');

    const selectedCity = cityId ? cities.find(c => c.id === cityId) : null;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: subjectParam || '',
        message: selectedCity ? `Bonjour, je souhaite rejoindre l'équipe de ${selectedCity.name}.` : ''
    });

    useEffect(() => {
        if (selectedCity) {
            setFormData(prev => ({ ...prev, message: `Bonjour, je souhaite rejoindre l'équipe de ${selectedCity.name}.` }));
        }
        if (subjectParam) {
            setFormData(prev => ({ ...prev, subject: subjectParam }));
        }
    }, [selectedCity, subjectParam]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to handle form submission (e.g., API call)
        console.log('Form submitted:', formData);
        alert("Merci ! Votre message a bien été envoyé."); // Temporary feedback
    };

    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            {/* HERO SECTION - Tighter & Premium */}
            <section className="relative bg-brand-950 text-white py-16 px-4 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-emerald-950 to-teal-950 opacity-90" />
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl" />
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                </div>

                <div className="max-w-6xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full mb-4 border border-white/10 shadow-lg">
                            <Sparkles className="h-4 w-4 text-emerald-300" />
                            <span className="text-xs font-semibold text-emerald-100 tracking-wide">SUPPORT & INFORMATIONS</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-teal-200">Contactez-nous</span>
                        </h1>
                        <p className="text-emerald-100/90 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                            Une question, un partenariat ou une envie de rejoindre le mouvement ?<br className="hidden md:block" /> Notre équipe est à votre écoute.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* MAIN SECTION - Side by Side Layout with Floating Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 pb-16">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* LEFT COLUMN - Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="w-full lg:w-1/3 space-y-4"
                    >
                        {/* Header for Info */}
                        <div className="bg-white rounded-2xl p-6 shadow-xl shadow-gray-200/50 border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="bg-emerald-100 p-2 rounded-lg text-emerald-700"><MapPin className="h-5 w-5" /></span>
                                Nos Coordonnées
                            </h3>

                            <div className="space-y-4">
                                {[
                                    { icon: MapPin, title: "Siège Social", text: "Conakry, Guinée", sub: "Commune de Ratoma", action: "Voir sur la carte", gradient: "from-blue-500 to-indigo-500" },
                                    { icon: Mail, title: "Email", text: "contact@villepropre-gn.org", sub: "Réponse sous 24h", action: "Envoyer un mail", href: "mailto:contact@villepropre-gn.org", gradient: "from-emerald-500 to-teal-500" },
                                    { icon: Phone, title: "Téléphone", text: "+224 620 00 00 00", sub: "Du Lundi au Vendredi", action: "Appeler", href: "tel:+224620000000", gradient: "from-orange-500 to-red-500" },
                                    { icon: Clock, title: "Horaires", text: "08h00 - 17h00", sub: "Jours ouvrables", gradient: "from-purple-500 to-pink-500" }
                                ].map((item, i) => (
                                    <div key={i} className="group flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-lg hover:border-emerald-100 transition-all duration-300">
                                        <div className={`mt-1 h-10 w-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                                            <item.icon className="h-5 w-5" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">{item.title}</p>
                                            <p className="font-bold text-gray-900 text-base">{item.text}</p>
                                            <p className="text-sm text-gray-500 mb-2">{item.sub}</p>
                                            {item.href && (
                                                <a href={item.href} className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 group/link">
                                                    {item.action} <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Socials */}
                        <div className="bg-gradient-to-br from-brand-900 to-emerald-900 rounded-2xl p-6 shadow-xl text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10" />
                            <h3 className="text-lg font-bold mb-4 relative z-10">Suivez notre actualité</h3>
                            <div className="flex gap-3 relative z-10">
                                {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                                    <a key={i} href="#" className="h-10 w-10 rounded-xl bg-white/10 hover:bg-white hover:text-emerald-900 flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/10">
                                        <Icon className="h-5 w-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN - Main Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="w-full lg:w-2/3"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl shadow-gray-200/50 p-8 md:p-10 border border-gray-100 relative overflow-hidden">
                            {/* Decorative Background */}
                            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-70 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl -ml-20 -mb-20 opacity-70 pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-2xl">📝</div>
                                    <h2 className="text-2xl font-bold text-gray-900">Envoyez-nous un message</h2>
                                </div>
                                <p className="text-gray-500 mb-8 ml-14 max-w-lg">
                                    Remplissez ce formulaire pour nous faire part de vos questions, suggestions ou demandes de partenariat.
                                    {selectedCity && (
                                        <span className="block mt-2 font-bold text-emerald-600 bg-emerald-50 p-2 rounded-lg border border-emerald-100">
                                            Je contacte l'antenne de : {selectedCity.name}
                                        </span>
                                    )}
                                </p>

                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="group">
                                            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1 group-focus-within:text-emerald-600 transition-colors">Nom complet <span className="text-red-500">*</span></label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all duration-300"
                                                    placeholder="Votre nom"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="group">
                                            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1 group-focus-within:text-emerald-600 transition-colors">Email <span className="text-red-500">*</span></label>
                                            <div className="relative">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all duration-300"
                                                    placeholder="votre@email.com"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="group">
                                            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1 group-focus-within:text-emerald-600 transition-colors">Téléphone</label>
                                            <div className="relative">
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all duration-300"
                                                    placeholder="+224 ..."
                                                />
                                            </div>
                                        </div>
                                        <div className="group">
                                            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1 group-focus-within:text-emerald-600 transition-colors">Sujet <span className="text-red-500">*</span></label>
                                            <div className="relative">
                                                <select
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all duration-300 appearance-none cursor-pointer"
                                                    required
                                                >
                                                    <option value="" disabled>Sélectionnez un motif</option>
                                                    <option value="partenariat">🤝 Proposition de Partenariat</option>
                                                    <option value="info">ℹ️ Demande d'information</option>
                                                    <option value="presse">📰 Presse & Médias</option>
                                                    <option value="autre">✨ Autre sujet</option>
                                                </select>
                                                <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none rotate-90" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label className="block text-sm font-bold text-gray-700 mb-2 ml-1 group-focus-within:text-emerald-600 transition-colors">Message <span className="text-red-500">*</span></label>
                                        <textarea
                                            rows={5}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all duration-300 resize-none"
                                            placeholder="Dites-nous en plus sur votre demande..."
                                            required
                                        />
                                    </div>

                                    <div className="pt-4 flex justify-end">
                                        <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl shadow-xl shadow-emerald-600/20 text-base font-bold transition-all hover:scale-[1.02] active:scale-[0.98] w-full md:w-auto">
                                            <span className="flex items-center justify-center gap-2">
                                                Envoyer le message <Send className="h-5 w-5" />
                                            </span>
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* PRIVACY CARD - Separate and visible below form */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-6 bg-white/80 backdrop-blur-sm border border-emerald-100 p-5 rounded-2xl shadow-lg flex items-start gap-4"
                        >
                            <div className="bg-emerald-100 p-2.5 rounded-xl text-emerald-600 shrink-0">
                                <Shield className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-2">
                                    🔐 Protection des données
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Les informations collectées via ce formulaire sont traitées de manière confidentielle et utilisées uniquement pour répondre à votre demande.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div >

            {/* SEPARATE SECTIONS RESTORED BUT COMPACT */}

            {/* National Presence - Compact */}
            <Section className="py-12 bg-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#059669 1px, transparent 1px), linear-gradient(90deg, #059669 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="max-w-5xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-left md:w-2/3">
                        <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-gray-900">Présence Nationale</h3>
                            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase">Partout en Guinée</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Notre mouvement s'étend à travers les communes et préfectures. Trouvez l'antenne la plus proche de chez vous.
                        </p>
                    </div>
                    <div className="md:w-1/3 flex justify-end">
                        <Link to="/villes">
                            <Button size="lg" variant="outline" className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-bold rounded-xl px-8 h-14 flex items-center gap-2 text-lg">
                                Voir la carte <ChevronRight className="h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>

            {/* Final CTA - "Un message ouvert à tous" */}
            <Section className="py-20 bg-brand-950 text-white text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto px-4"
                >
                    <div className="text-7xl mb-6">🌱</div>
                    <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent">
                        Un message ouvert à tous
                    </h3>
                    <p className="text-xl md:text-2xl text-emerald-100/90 mb-10 font-light leading-relaxed">
                        Chaque message compte.<br />
                        Chaque prise de contact contribue à une Guinée plus propre, plus verte et plus durable.
                    </p>
                    <Link to="/participer">
                        <Button className="bg-white text-brand-900 hover:bg-emerald-50 font-bold px-12 py-5 rounded-full shadow-2xl shadow-emerald-500/20 transition-all hover:-translate-y-1 hover:shadow-emerald-500/30 text-lg">
                            Participer au mouvement
                        </Button>
                    </Link>
                </motion.div>
            </Section>
        </div >
    );
}
