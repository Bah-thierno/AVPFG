import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe2, Map, Users, Recycle, HeartHandshake, CheckCircle2, Quote, Mountain, Landmark, MapPinned, Building2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Section } from '../components/ui/Section';

export default function Home() {
    return (
        <>
            {/* HERO Section */}
            <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-brand-950 px-4 py-16 text-center text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-900/80 to-brand-950/95 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
                        alt="Guinée Verte"
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="relative z-20 max-w-5xl space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                            Ensemble, bâtissons une <br />
                            <span className="bg-gradient-to-r from-brand-400 to-emerald-400 bg-clip-text text-transparent">
                                Guinée Verte, Propre & Durable
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mx-auto max-w-3xl text-lg text-gray-200 sm:text-xl font-light"
                    >
                        "Une ville propre est le reflet de ses habitants."
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="mx-auto max-w-2xl text-base text-gray-300"
                    >
                        Nous agissons pour transformer durablement nos villes, quartiers et villages en espaces propres, sains et respectueux de l’environnement. À travers un mouvement citoyen indépendant, apolitique et profondément patriotique.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row pt-8">
                            {/* Button 1: Green (Volontaire) */}
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link to="/participer">
                                    <Button size="lg" className="h-14 px-8 text-lg font-bold shadow-lg shadow-brand-500/30 bg-brand-600 hover:bg-brand-700 text-white border-none">
                                        Devenir volontaire
                                    </Button>
                                </Link>
                            </motion.div>

                            {/* Button 2: Amber (Soutenir) */}
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link to="/contact">
                                    <Button size="lg" className="h-14 px-8 text-lg font-bold shadow-lg shadow-orange-500/30 bg-orange-500 hover:bg-orange-600 text-white border-none">
                                        Soutenir le mouvement
                                    </Button>
                                </Link>
                            </motion.div>

                            {/* Button 3: Blue (Découvrir) */}
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link to="/villes">
                                    <Button size="lg" className="h-14 px-8 text-lg font-bold shadow-lg shadow-blue-500/30 bg-blue-600 hover:bg-blue-700 text-white border-none">
                                        Découvrir nos villes <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Engagement Section */}
            <Section className="bg-white py-24 overflow-hidden relative">
                <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 space-y-8"
                    >
                        <div className="inline-flex items-center rounded-full bg-brand-100 px-5 py-2 text-sm font-bold text-brand-700 border border-brand-200 shadow-sm">
                            <Globe2 className="mr-2 h-4 w-4" /> Notre engagement
                        </div>
                        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl leading-tight">
                            Un environnement sain,<br />
                            <span className="text-brand-600">base de toute société prospère.</span>
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed font-light">
                            Notre mission est de fédérer les citoyens, les collectivités locales, les institutions et les partenaires autour d’un objectif commun : <strong>bâtir une Guinée propre, verte et durable</strong> pour les générations actuelles et futures.
                        </p>

                        <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                            <div className="h-1.5 w-24 bg-gradient-to-r from-brand-500 to-emerald-400 rounded-full" />
                            <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Vision 2030</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 relative"
                    >
                        {/* Decorative elements */}
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-200 rounded-full blur-3xl opacity-40 mix-blend-multiply animate-blob" />
                        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-200 rounded-full blur-3xl opacity-40 mix-blend-multiply animate-blob animation-delay-2000" />

                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:rotate-1 transition-transform duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1591195853828-111717904036?auto=format&fit=crop&q=80"
                                alt="Engagement communautaire"
                                className="w-full h-[550px] object-cover hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute bottom-6 left-6 right-6">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/40"
                                >
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                        <div className="p-2 bg-brand-100 rounded-lg mr-3">
                                            <Users className="h-5 w-5 text-brand-600" />
                                        </div>
                                        Engagement communautaire
                                    </h3>
                                    <p className="text-gray-700 font-medium italic leading-relaxed pl-2 border-l-4 border-brand-500">
                                        "L'écologie et la participation communautaire au cœur du développement."
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Impact Stats */}
            <section className="bg-brand-900 py-16 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-10"><Map className="w-64 h-64" /></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold">Notre impact en chiffres</h2>
                        <p className="text-brand-200 mt-2">(données mises à jour en temps réel)</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
                        {[
                            { number: "33", label: "Villes actives" },
                            { number: "150+", label: "Opérations réalisées" },
                            { number: "120T", label: "Déchets valorisés" },
                            { number: "5000+", label: "Agents mobilisés" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="space-y-2 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <div className="text-4xl font-extrabold text-brand-400 md:text-5xl">{stat.number}</div>
                                <div className="text-sm font-medium text-gray-300 uppercase tracking-wide">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-center mt-8 text-brand-300 text-sm italic">Chaque chiffre représente une action concrète sur le terrain.</p>
                </div>
            </section>

            {/* Cities Section */}
            <Section className="bg-blue-50 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

                <div className="relative z-10 text-center max-w-4xl mx-auto mb-20">
                    <div className="inline-flex items-center justify-center p-4 rounded-full bg-blue-50 text-blue-600 mb-6 shadow-sm">
                        <Map className="h-8 w-8" />
                    </div>
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-6">Nos villes, notre fierté</h2>
                    <p className="text-xl text-gray-600 font-light">
                        Notre plateforme couvre l’ensemble du territoire national, organisée par régions naturelles, administratives, préfectures et communes.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    {[
                        { title: 'Régions naturelles', icon: Mountain, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                        { title: 'Régions administratives', icon: Landmark, color: 'text-blue-600', bg: 'bg-blue-50' },
                        { title: 'Préfectures', icon: MapPinned, color: 'text-orange-600', bg: 'bg-orange-50' },
                        { title: 'Communes et villes', icon: Building2, color: 'text-purple-600', bg: 'bg-purple-50' }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 flex flex-col items-center text-center group hover:border-brand-200 transition-all"
                        >
                            <div className={`h-16 w-16 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <item.icon className={`h-8 w-8 ${item.color}`} />
                            </div>
                            <h3 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-brand-600 transition-colors">{item.title}</h3>
                            <div className="w-12 h-1 bg-gray-200 rounded-full mt-4 group-hover:bg-brand-400 transition-colors" />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 text-center"
                >
                    <p className="mb-10 text-xl text-gray-600 font-medium">Chaque ville dispose de sa propre fiche avec ses actions, résultats, médias et chaîne vidéo.</p>
                    <div className="inline-block relative group">
                        <div className="absolute inset-0 bg-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition-opacity" />
                        <Link to="/villes">
                            <Button className="relative h-14 px-10 rounded-full text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-xl text-white">
                                Explorer toutes nos villes <Globe2 className="ml-3 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </Section>

            {/* Education / Benefits Section */}
            <Section className="bg-emerald-50 overflow-hidden">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 space-y-8"
                    >
                        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
                            <span className="text-brand-600">Assainissement</span> &<br /> développement durable
                        </h2>
                        <p className="text-xl text-gray-600 font-light leading-relaxed">
                            L’assainissement ne se limite pas au nettoyage. Il contribue directement à la transformation de notre société par :
                        </p>
                        <div className="space-y-4">
                            {[
                                "La santé publique et l'hygiène",
                                "La protection de l’environnement",
                                "La préservation des ressources naturelles",
                                "Le développement du tourisme",
                                "La création d’emplois locaux"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 + 0.3 }}
                                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-brand-50 transition-colors border border-transparent hover:border-brand-100 group"
                                >
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition-colors">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <span className="text-lg text-gray-700 font-medium group-hover:text-gray-900">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                        <p className="text-gray-500 italic border-l-4 border-brand-200 pl-6 py-4 bg-gray-50 rounded-r-lg">
                            "Nous intégrons une approche durable basée sur la sensibilisation, la valorisation des déchets et l’implication des communautés locales."
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 relative"
                    >
                        <div className="absolute -inset-10 bg-brand-100/50 rounded-full opacity-50 blur-3xl z-0" />
                        <div className="relative z-10 grid grid-cols-2 gap-6">
                            <motion.div whileHover={{ y: -5 }} className="space-y-6 mt-12">
                                <div className="bg-emerald-100 p-8 rounded-3xl h-56 flex flex-col items-center justify-center text-center shadow-lg transform transition-transform hover:shadow-xl">
                                    <Recycle className="h-16 w-16 text-emerald-600 mb-4" />
                                    <span className="font-bold text-emerald-800">Recyclage & Valorisation</span>
                                </div>
                                <div className="bg-brand-600 p-8 rounded-3xl h-64 flex flex-col justify-end text-white shadow-lg relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-20 transform group-hover:scale-110 transition-transform"><CheckCircle2 className="h-32 w-32" /></div>
                                    <span className="text-5xl font-extrabold mb-1">100%</span>
                                    <span className="text-brand-100 text-lg">Engagement Citoyen</span>
                                </div>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} className="space-y-6">
                                <div className="bg-gray-900 p-8 rounded-3xl h-64 flex flex-col justify-between text-white shadow-xl relative overflow-hidden">
                                    <div className="absolute -bottom-4 -right-4 h-32 w-32 bg-gray-800 rounded-full opacity-50 blur-2xl" />
                                    <Users className="h-12 w-12 text-brand-400" />
                                    <div>
                                        <div className="text-3xl font-bold mb-1">Futur</div>
                                        <span className="text-gray-400">Pour les générations à venir</span>
                                    </div>
                                </div>
                                <div className="bg-blue-50 p-8 rounded-3xl h-56 flex flex-col items-center justify-center text-center shadow-lg border-2 border-dashed border-blue-200">
                                    <Globe2 className="h-16 w-16 text-blue-600 mb-4" />
                                    <span className="font-bold text-blue-800">Impact Global</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Testimonials */}
            <Section className="bg-white">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">Ils témoignent</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {[
                        {
                            text: "Grâce à ce programme, notre quartier est devenu plus propre et plus organisé. Les populations sont désormais impliquées et fières de leur environnement.",
                            author: "Responsable communautaire",
                            role: "Commune de Ratoma"
                        },
                        {
                            text: "Cette initiative redonne de l’espoir et montre que le changement est possible quand les citoyens s’unissent.",
                            author: "Fatoumata B.",
                            role: "Volontaire"
                        }
                    ].map((t, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                            <Quote className="absolute top-6 left-6 h-8 w-8 text-brand-200" />
                            <p className="text-gray-600 italic mb-6 relative z-10 pt-4">"{t.text}"</p>
                            <div>
                                <div className="font-bold text-gray-900">{t.author}</div>
                                <div className="text-sm text-brand-600">{t.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Support / Why Us */}
            <Section className="bg-amber-50 py-24">
                <div className="relative rounded-[2.5rem] bg-brand-950 text-white p-12 md:p-24 overflow-hidden border border-brand-800 shadow-2xl">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/95 to-transparent" />

                    <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center rounded-full bg-brand-900/50 px-4 py-1.5 text-sm font-medium text-brand-400 border border-brand-800 mb-6 backdrop-blur-sm">
                                    <HeartHandshake className="mr-2 h-4 w-4" /> Participation Citoyenne
                                </div>
                                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                                    Pourquoi nous <span className="text-brand-500">soutenir ?</span>
                                </h2>
                                <p className="text-brand-100 text-lg leading-relaxed font-light">
                                    Chaque geste compte. En nous soutenant, vous participez directement à la transformation de notre cadre de vie.
                                </p>
                            </motion.div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link to="/contact">
                                        <Button variant="primary" size="lg" className="bg-brand-600 hover:bg-brand-500 text-white border-0 shadow-lg shadow-brand-900/50 h-14 px-8 text-lg font-bold">
                                            Soutenir le mouvement
                                        </Button>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {[
                                { text: "Investir dans un avenir plus sain", icon: HeartHandshake, color: "text-rose-400", bg: "bg-rose-950/30" },
                                { text: "Encourager la responsabilité citoyenne", icon: Users, color: "text-blue-400", bg: "bg-blue-950/30" },
                                { text: "Renforcer l’image des villes guinéennes", icon: Map, color: "text-amber-400", bg: "bg-amber-950/30" },
                                { text: "Accompagner une initiative transparente", icon: CheckCircle2, color: "text-emerald-400", bg: "bg-emerald-950/30" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-6 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
                                >
                                    <div className={`h-12 w-12 rounded-full ${item.bg} flex items-center justify-center border border-white/10`}>
                                        <item.icon className={`h-6 w-6 ${item.color}`} />
                                    </div>
                                    <span className="text-lg font-medium text-gray-200">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Final CTA */}
            <section className="relative py-32 overflow-hidden bg-brand-50">
                <div className="absolute inset-0 bg-brand-50" />
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
                    <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
                    <div className="absolute top-1/3 right-10 w-72 h-72 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
                    <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
                </div>

                <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mx-auto h-24 w-24 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-8 rotate-3 hover:rotate-6 transition-transform duration-300">
                            <HeartHandshake className="h-12 w-12 text-brand-600" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tight">
                            Rejoignez le <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-500">mouvement</span>
                        </h2>
                        <p className="text-2xl text-gray-600 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
                            La protection de l’environnement est l’affaire de tous.<br />
                            Que vous soyez citoyen, volontaire, partenaire technique ou financier, <span className="font-semibold text-gray-900 underline decoration-brand-400 decoration-4 underline-offset-4">votre engagement compte.</span>
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link to="/participer">
                                    <Button size="lg" className="h-16 px-12 text-xl font-bold bg-brand-600 hover:bg-brand-700 text-white shadow-xl shadow-brand-500/30 rounded-full">
                                        Devenir volontaire
                                    </Button>
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link to="/contact">
                                    <Button size="lg" variant="outline" className="h-16 px-12 text-xl font-bold bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-full">
                                        Nous contacter
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
