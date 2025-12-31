import { motion } from 'framer-motion';
import {
    Trees,
    Droplets,
    Users,
    Leaf,
    Recycle,
    Megaphone,
    ShieldCheck,
    Map,
    BarChart3,
    HandHeart,
    ArrowRight,
    CheckCircle2
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Section } from '../components/ui/Section';
import { Link } from 'react-router-dom';

export default function Projects() {
    return (
        <>
            {/* HERO Section */}
            <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-brand-950 px-4 py-16 text-center text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-900/80 to-brand-950/95 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
                        alt="Projets Environnementaux"
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="relative z-20 max-w-4xl space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center rounded-full bg-brand-500/20 px-4 py-1.5 text-sm font-medium text-brand-300 border border-brand-500/30 mb-6 backdrop-blur-sm">
                            <Leaf className="mr-2 h-4 w-4" /> Nos Actions
                        </div>
                        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl leading-tight">
                            Nos Projets pour une <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-400">Guinée Durable</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mx-auto max-w-3xl text-lg text-gray-200 sm:text-xl font-light leading-relaxed"
                    >
                        Découvrez comment nous transformons nos ambitions en actions concrètes sur le terrain à travers nos quatre axes majeurs d'intervention.
                    </motion.p>
                </div>
            </section>

            {/* Axes d'intervention */}
            <Section className="bg-white">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">🌱 Nos axes d’intervention</h2>
                    <p className="text-xl text-gray-600 font-light">
                        Nos projets s’articulent autour de plusieurs priorités stratégiques pour un impact global.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Assainissement & Propreté", icon: Recycle, color: "text-blue-500", bg: "bg-blue-50" },
                        { title: "Protection de l'Environnement", icon: ShieldCheck, color: "text-emerald-500", bg: "bg-emerald-50" },
                        { title: "Sensibilisation Citoyenne", icon: Megaphone, color: "text-orange-500", bg: "bg-orange-50" },
                        { title: "Développement Durable", icon: Leaf, color: "text-green-600", bg: "bg-green-50" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all bg-white group"
                        >
                            <div className={`h-12 w-12 rounded-xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <item.icon className={`h-6 w-6 ${item.color}`} />
                            </div>
                            <h3 className="font-bold text-gray-900">{item.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* PROJECT 1 */}
            <Section className="bg-slate-50 relative overflow-hidden">
                <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center gap-2 text-blue-600 font-bold tracking-wider uppercase text-sm">
                            <span className="w-8 h-0.5 bg-blue-600"></span> Projet 01
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                            ♻️ Assainissement des villes et quartiers
                        </h2>
                        <h3 className="text-xl text-blue-600 font-medium">Des actions régulières pour des villes plus propres</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Ce projet vise à organiser des opérations d’assainissement dans les quartiers, les marchés, les routes principales et les espaces publics.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 pt-4">
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <ShieldCheck className="h-5 w-5 text-blue-500" /> Objectifs
                                </h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-blue-400" />Réduire l’insalubrité</li>
                                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-blue-400" />Améliorer le cadre de vie</li>
                                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-blue-400" />Impliquer les citoyens</li>
                                </ul>
                            </div>
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <Map className="h-5 w-5 text-orange-500" /> Actions
                                </h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-orange-400" />Journées de nettoyage</li>
                                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-orange-400" />Collecte des déchets</li>
                                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-orange-400" />Sensibilisation locale</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img
                            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80"
                            alt="Assainissement"
                            className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
                        />
                    </div>
                </div>
            </Section>

            {/* PROJECT 2 */}
            <Section className="bg-white">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center gap-2 text-emerald-600 font-bold tracking-wider uppercase text-sm">
                            <span className="w-8 h-0.5 bg-emerald-600"></span> Projet 02
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                            🌍 Sensibilisation environnementale & citoyenne
                        </h2>
                        <h3 className="text-xl text-emerald-600 font-medium">Changer les comportements pour protéger l’avenir</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Ce projet met l’accent sur le réveil de conscience face aux dangers du réchauffement climatique et de la dégradation de l’environnement.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 pt-4">
                            <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
                                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <Megaphone className="h-5 w-5 text-emerald-600" /> Objectifs
                                </h4>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" />Informer sur les enjeux</li>
                                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" />Responsabiliser</li>
                                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" />Renforcer la citoyenneté</li>
                                </ul>
                            </div>
                            <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
                                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <Users className="h-5 w-5 text-emerald-600" /> Actions
                                </h4>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-emerald-500 mt-0.5" />Campagnes média</li>
                                    <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-emerald-500 mt-0.5" />Activités éducatives</li>
                                    <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-emerald-500 mt-0.5" />Communication digitale</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img
                            src="https://images.unsplash.com/photo-1544396821-4dd40b938ad3?auto=format&fit=crop&q=80"
                            alt="Sensibilisation"
                            className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
                        />
                    </div>
                </div>
            </Section>

            {/* PROJECT 3 & 4 GRID */}
            <Section className="bg-brand-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative z-10 grid lg:grid-cols-2 gap-12">

                    {/* Project 3 */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
                    >
                        <div className="h-14 w-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400 border border-blue-500/30">
                            <Droplets className="h-7 w-7" />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">💧 Projet 3 : Protection des ressources</h2>
                        <p className="text-gray-400 mb-6 font-light">
                            Préserver les forêts, les fleuves et les écosystèmes. La Guinée, château d’eau de l’Afrique de l’Ouest.
                        </p>
                        <div className="space-y-4 bg-black/20 p-6 rounded-2xl">
                            <h4 className="font-bold text-blue-300 text-sm uppercase tracking-wide">Actions Phares</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-3 text-sm text-gray-300">
                                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div> Nettoyage des berges
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-300">
                                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div> Sensibilisation protection
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-300">
                                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div> Appui conservation locale
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Project 4 */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
                    >
                        <div className="h-14 w-14 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400 border border-emerald-500/30">
                            <Trees className="h-7 w-7" />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">🌿 Projet 4 : Environnement & Tourisme</h2>
                        <p className="text-gray-400 mb-6 font-light">
                            Un environnement propre pour un tourisme responsable. Renforcer l’attractivité des villes et sites naturels.
                        </p>
                        <div className="space-y-4 bg-black/20 p-6 rounded-2xl">
                            <h4 className="font-bold text-emerald-300 text-sm uppercase tracking-wide">Actions Phares</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-3 text-sm text-gray-300">
                                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div> Assainissement zones touristiques
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-300">
                                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div> Mise en valeur sites naturels
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-300">
                                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div> Tourisme durable
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Monitoring & Participation */}
            <Section className="bg-orange-50/50">
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* Monitoring */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 p-2 bg-orange-100 rounded-lg text-orange-700 w-fit">
                            <BarChart3 className="h-5 w-5" />
                            <span className="font-bold text-sm">Transparence</span>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">📊 Suivi des projets</h3>
                        <p className="text-gray-600">
                            Pour garantir la redevabilité, tous nos projets suivent un processus rigoureux :
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Planifiés et organisés méthodiquement",
                                "Mis en œuvre avec les communautés locales",
                                "Suivis à travers des indicateurs simples",
                                "Documentés et partagés sur la plateforme"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-orange-100 shadow-sm">
                                    <CheckCircle2 className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Participation */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 p-2 bg-blue-100 rounded-lg text-blue-700 w-fit">
                            <HandHeart className="h-5 w-5" />
                            <span className="font-bold text-sm">Inclusivité</span>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">🤝 Des projets ouverts à tous</h3>
                        <p className="text-gray-600">
                            Chacun peut contribuer selon ses moyens et ses compétences. Nos projets sont ouverts à :
                        </p>
                        <div className="flex flex-wrap gap-2 text-sm">
                            {[
                                "Volontaires", "Collectivités locales", "ONG & Associations",
                                "Entreprises", "Institutions publiques"
                            ].map((tag, i) => (
                                <span key={i} className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-gray-600 font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="bg-brand-600 text-white p-6 rounded-2xl shadow-lg mt-4">
                            <h4 className="font-bold text-lg mb-2">🌱 Construire ensemble l’avenir</h4>
                            <p className="text-brand-100 text-sm mb-4">
                                À travers ces projets, nous construisons une Guinée plus propre, plus verte et plus résiliente.
                            </p>
                            <Link to="/participer">
                                <Button className="w-full bg-white text-brand-700 hover:bg-brand-50 border-none font-bold">
                                    Rejoindre un projet
                                </Button>
                            </Link>
                        </div>
                    </div>

                </div>
            </Section>

            {/* Final CTA Strip */}
            <div className="bg-gray-900 text-white py-12 px-4 text-center">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <h3 className="text-2xl font-bold">Prêt à faire la différence ?</h3>
                    <div className="flex gap-4">
                        <Link to="/participer">
                            <Button className="bg-brand-500 hover:bg-brand-400 text-white border-none rounded-full px-8">
                                Participer aux projets
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-800 rounded-full px-8">
                                Voir nos résultats
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
