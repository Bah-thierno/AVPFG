import { motion } from 'framer-motion';
import { Droplets, Sprout, Target, ShieldCheck, Users, BarChart3, Globe2, Building2, Map, Scale, Heart, Shield, Lock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Section } from '../components/ui/Section';

export default function About() {
    return (
        <>
            {/* HERO / VISION Section */}
            <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-brand-950 px-4 py-16 text-center text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-900/70 to-brand-950/95 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80"
                        alt="Nature Guinée"
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="relative z-20 max-w-4xl space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center rounded-full bg-blue-500/20 px-4 py-1.5 text-sm font-medium text-blue-200 border border-blue-500/30 mb-6 backdrop-blur-sm">
                            <Droplets className="mr-2 h-4 w-4" /> Le Château d'eau de l'Afrique
                        </div>
                        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl leading-tight mb-6">
                            Notre vision pour une <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-400">Guinée Verte & Durable</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mx-auto max-w-3xl text-lg text-gray-200 sm:text-xl font-light leading-relaxed"
                    >
                        Face à la dégradation de l’environnement, nous portons un réveil de conscience citoyenne.
                        Préserver nos forêts, nos fleuves et notre biodiversité, c'est protéger l'avenir de la sous-région.
                    </motion.p>
                </div>
            </section>

            {/* MISSION Section */}
            <Section className="bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Mission</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                            Mobiliser citoyens, collectivités et partenaires autour d’actions concrètes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Sprout, title: "Lutter contre le réchauffement", desc: "Réduire la dégradation environnementale et ses effets." },
                            { icon: ShieldCheck, title: "Protéger les écosystèmes", desc: "Sauvegarder nos forêts, cours d’eau et biodiversité." },
                            { icon: Heart, title: "Améliorer la santé publique", desc: "Un cadre de vie sain pour des populations en bonne santé." },
                            { icon: BarChart3, title: "Résultats mesurables", desc: "Produire de la donnée transparente et accessible." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-200 hover:shadow-lg transition-all group"
                            >
                                <div className="h-12 w-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-brand-600">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* APPROACH (4 Pillars) */}
            <Section className="bg-emerald-900 text-white overflow-hidden relative">
                {/* Decoration */}
                <div className="absolute top-0 right-0 p-12 opacity-5">
                    <Target className="w-96 h-96" />
                </div>

                <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-start">
                    <div className="lg:w-1/3">
                        <div className="inline-flex items-center rounded-full bg-emerald-800/50 px-4 py-1.5 text-sm font-bold text-emerald-300 border border-emerald-700 mb-6">
                            <Target className="mr-2 h-4 w-4" /> Notre Approche
                        </div>
                        <h2 className="text-4xl font-extrabold mb-6 leading-tight">
                            4 Piliers pour garantir <span className="text-emerald-400">un impact réel</span>
                        </h2>
                        <p className="text-emerald-100 text-lg leading-relaxed font-light mb-8">
                            Conçus pour assurer efficacité, cohérence et durabilité. Nous agissons dans une logique de responsabilité et de prévention.
                        </p>
                        <Button className="bg-emerald-500 hover:bg-emerald-400 text-white border-none font-bold">
                            Voir nos réalisations
                        </Button>
                    </div>

                    <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                        {[
                            {
                                number: "01",
                                title: "Engagement Citoyen",
                                desc: "Participation volontaire et bénévole pour renforcer la conscience environnementale.",
                                color: "bg-orange-500"
                            },
                            {
                                number: "02",
                                title: "Structuration",
                                desc: "Chaque intervention est encadrée et documentée pour assurer l'efficacité.",
                                color: "bg-blue-500"
                            },
                            {
                                number: "03",
                                title: "Partenariats Stratégiques",
                                desc: "Mutualiser les efforts avec ONG, entreprises et collectivités.",
                                color: "bg-purple-500"
                            },
                            {
                                number: "04",
                                title: "Transparence",
                                desc: "Résultats suivis, mesurés et partagés pour la redevabilité.",
                                color: "bg-brand-500"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/15 transition-colors"
                            >
                                <div className={`inline-block px-3 py-1 rounded mb-4 text-xs font-bold text-white ${item.color}`}>
                                    PILIER {item.number}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-emerald-100/80 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* ORGANIZATION */}
            <Section className="bg-blue-50">
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Une organisation nationale, ancrée localement</h2>
                    <p className="text-gray-600">
                        Pour agir au plus près des réalités locales tout en contribuant à un effort national.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 max-w-5xl mx-auto">
                    {[
                        { label: "Régions Naturelles", icon: Globe2 },
                        { label: "Régions Administratives", icon: Map },
                        { label: "Préfectures", icon: Building2 },
                        { label: "Communes & Villes", icon: Users }
                    ].map((item, i, arr) => (
                        <div key={i} className="flex items-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.2 }}
                                className="flex flex-col items-center gap-3 bg-white p-6 rounded-xl shadow-sm border border-blue-100 min-w-[160px]"
                            >
                                <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <span className="font-bold text-gray-800 text-sm">{item.label}</span>
                            </motion.div>
                            {i < arr.length - 1 && (
                                <div className="hidden md:block w-16 h-0.5 bg-blue-200 mx-2" />
                            )}
                        </div>
                    ))}
                </div>
            </Section>

            {/* VALUES */}
            <Section className="bg-white border-y border-gray-100">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80"
                            alt="Valeurs"
                            className="rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
                        />
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-4xl font-extrabold text-gray-900">Nos Valeurs</h2>
                        <p className="text-lg text-gray-600">Nos actions sont guidées par des principes forts qui définissent notre identité.</p>

                        <div className="space-y-6">
                            {[
                                { title: "Citoyenneté", desc: "Chaque citoyen a un rôle à jouer.", icon: Users },
                                { title: "Responsabilité", desc: "Agir aujourd’hui pour préserver demain.", icon: Scale },
                                { title: "Solidarité", desc: "Unir les efforts pour le bien commun.", icon: Heart },
                                { title: "Transparence", desc: "Rendre compte de chaque action menée.", icon: Lock },
                                { title: "Durabilité", desc: "Inscrire l’impact dans le long terme.", icon: Sprout }
                            ].map((val, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ x: 50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="h-10 w-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                                        <val.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{val.title}</h4>
                                        <p className="text-sm text-gray-500">{val.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* INDEPENDENT & APOLITICAL */}
            <Section className="bg-slate-900 text-white text-center py-20">
                <div className="max-w-3xl mx-auto space-y-8">
                    <Shield className="h-16 w-16 text-slate-400 mx-auto" />
                    <h2 className="text-3xl font-bold">Un mouvement indépendant et apolitique</h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                        Notre initiative est indépendante, apolitique et inclusive. Elle se veut un espace de rassemblement ouvert à tous, dédié <strong className="text-white">exclusivement</strong> à la protection de l’environnement, au bien-être des populations et au développement durable.
                    </p>
                </div>
            </Section>

            {/* FINAL CTA */}
            <section className="py-24 bg-brand-50 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Rejoindre une dynamique nationale</h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Depuis sa création, le mouvement fédère des milliers de citoyens engagés. Chacun peut contribuer à sa manière.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button size="lg" className="h-16 px-10 text-xl font-bold bg-brand-600 hover:bg-brand-700 text-white shadow-xl shadow-brand-500/20 rounded-full">
                                Participer au mouvement
                            </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button variant="outline" size="lg" className="h-16 px-10 text-xl font-bold border-2 border-gray-300 text-gray-700 hover:border-brand-600 hover:text-brand-600 rounded-full">
                                Découvrir nos actions
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
