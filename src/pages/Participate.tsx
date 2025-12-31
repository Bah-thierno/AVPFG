import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Hand, Handshake, Heart, ArrowRight, CheckCircle2, Users, Globe2, Leaf, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Section } from '../components/ui/Section';
import { cities } from '../data/cities';

export default function Participate() {
    return (
        <>
            {/* HERO Section */}
            <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-emerald-950 px-4 py-16 text-center text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 to-emerald-950/95 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80"
                        alt="Participation Citoyenne"
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="relative z-20 max-w-4xl space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center rounded-full bg-emerald-500/20 px-4 py-1.5 text-sm font-medium text-emerald-300 border border-emerald-500/30 mb-6 backdrop-blur-sm">
                            <Users className="mr-2 h-4 w-4" /> Rejoignez-nous
                        </div>
                        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl leading-tight mb-6">
                            Participer au <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">mouvement</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mx-auto max-w-3xl text-lg text-gray-200 sm:text-xl font-light leading-relaxed"
                    >
                        Un engagement citoyen au service du développement environnemental.
                        La propreté et la protection de l’environnement sont les piliers de notre avenir commun.
                    </motion.p>
                </div>
            </section>

            {/* Introduction */}
            <Section className="bg-white">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Un cadre structuré, transparent et inclusif
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed font-light">
                        Notre plateforme permet aux citoyens, aux institutions et aux partenaires de contribuer efficacement à l’assainissement et à la valorisation durable de nos villes.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        {[
                            { icon: Hand, label: "Citoyens", desc: "Agir sur le terrain" },
                            { icon: Handshake, label: "Partenaires", desc: "Soutenir l'initiative" },
                            { icon: Heart, label: "Donateurs", desc: "Financer l'impact" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-center"
                            >
                                <div className="h-14 w-14 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 text-brand-600">
                                    <item.icon className="h-7 w-7" />
                                </div>
                                <h3 className="font-bold text-lg text-gray-900">{item.label}</h3>
                                <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Volunteer Section */}
            <Section className="bg-emerald-50 relative overflow-hidden">
                <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-8"
                    >
                        <div className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-1 text-sm font-bold text-emerald-700">
                            <Hand className="mr-2 h-4 w-4" /> Bénévolat
                        </div>
                        <h2 className="text-4xl font-extrabold text-gray-900">
                            Devenir <span className="text-emerald-600">volontaire</span>
                        </h2>
                        <h3 className="text-xl font-medium text-gray-700">
                            S’engager librement dans une action structurée et encadrée
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Les volontaires constituent le cœur opérationnel du mouvement. C'est un engagement citoyen libre, ouvert à tous.
                        </p>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <p className="text-gray-700"><strong>Aucune compétence technique</strong> préalable n’est requise.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <p className="text-gray-700"><strong>Orientation et encadrement</strong> assurés pour des actions efficaces.</p>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">Les missions :</h4>
                            <ul className="space-y-3">
                                {[
                                    "Opérations d’assainissement dans les quartiers",
                                    "Actions de sensibilisation communautaire",
                                    "Collecte et suivi des données terrain"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-600">
                                        <div className="h-2 w-2 rounded-full bg-emerald-400" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="pt-4">
                            <Link to="/benevolat">
                                <Button size="lg" className="h-14 px-8 text-lg font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/30">
                                    Je deviens volontaire
                                </Button>
                            </Link>
                            <p className="text-xs text-gray-500 mt-3 italic">
                                * Le volontariat ne constitue ni un emploi ni une obligation.
                            </p>
                        </motion.div>
                    </motion.div>

                    <div className="flex-1 relative space-y-8">
                        {/* CITY SELECTION CARD */}
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-emerald-100 relative z-20">
                            <h4 className="text-xl font-bold text-gray-900 mb-4">Rejoindre une équipe locale</h4>
                            <p className="text-gray-600 mb-6 text-sm">Sélectionnez votre ville pour contacter directement le bureau local.</p>
                            <div className="space-y-4">
                                <select
                                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl font-medium focus:ring-2 focus:ring-emerald-500 outline-none"
                                    onChange={(e) => {
                                        if (e.target.value) window.location.href = `/benevolat?city=${e.target.value}`;
                                    }}
                                    defaultValue=""
                                >
                                    <option value="" disabled>Choisir ma ville...</option>
                                    {cities.map(c => (
                                        <option key={c.id} value={c.id}>{c.name}</option>
                                    ))}
                                </select>
                                <div className="text-center text-xs text-gray-400">
                                    Vous serez redirigé vers le formulaire d'adhésion
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-200 to-transparent rounded-[2rem] transform rotate-3 scale-105 opacity-50 z-0" />
                        <img
                            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80"
                            alt="Volontaires en action"
                            className="relative rounded-[2rem] shadow-2xl w-full object-cover h-[400px] z-10"
                        />
                    </div>
                </div>
            </Section>

            {/* Partner Section */}
            <Section className="bg-white">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-8"
                    >
                        <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-sm font-bold text-blue-700">
                            <Handshake className="mr-2 h-4 w-4" /> Partenariat
                        </div>
                        <h2 className="text-4xl font-extrabold text-gray-900">
                            Devenir <span className="text-blue-600">partenaire</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Les entreprises, ONG, collectivités et institutions jouent un rôle clé. Rejoignez un partenariat stratégique pour un impact durable.
                        </p>

                        <div className="grid gap-4">
                            {[
                                { title: "Appui financier ou matériel", icon: ShieldCheck },
                                { title: "Accompagnement technique", icon: Leaf },
                                { title: "Partenariat stratégique", icon: Globe2 }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition-colors">
                                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <span className="font-semibold text-gray-800">{item.title}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                            <p className="text-blue-800 text-sm font-medium">
                                "Chaque partenariat est valorisé, documenté et intégré dans une démarche transparente."
                            </p>
                        </div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="pt-4">
                            <Link to="/contact">
                                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold border-2 border-blue-600 text-blue-700 hover:bg-blue-50">
                                    Proposer un partenariat
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    <div className="flex-1">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 mt-8">
                                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" className="rounded-2xl shadow-lg w-full h-48 object-cover" alt="Meeting" />
                                <div className="bg-blue-600 p-6 rounded-2xl shadow-lg text-white">
                                    <h4 className="text-3xl font-bold mb-2">10+</h4>
                                    <p className="text-blue-100 text-sm">Entreprises engagées cette année</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-gray-900 p-6 rounded-2xl shadow-lg text-white h-40 flex flex-col justify-center">
                                    <Handshake className="h-10 w-10 mb-4 text-blue-400" />
                                    <p className="font-bold">Impact RSE</p>
                                </div>
                                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80" className="rounded-2xl shadow-lg w-full h-64 object-cover" alt="Collaboration" />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Support / Financial Section */}
            <Section className="bg-amber-50">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <div className="inline-flex items-center justify-center p-3 rounded-full bg-amber-100 text-amber-600 mb-4">
                            <Heart className="h-8 w-8" />
                        </div>
                        <h2 className="text-4xl font-extrabold text-gray-900">Soutenir financièrement</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Un mécanisme de soutien transparent et orienté résultats. Votre contribution renforce durablement nos actions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-amber-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Utilisation des fonds</h3>
                            <div className="space-y-6">
                                {[
                                    { label: "Emploi et équipement des agents", pct: "40%" },
                                    { label: "Matériels et logistique", pct: "30%" },
                                    { label: "Transport et traitement des déchets", pct: "20%" },
                                    { label: "Extension vers nouvelles localités", pct: "10%" }
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-700 font-medium">{stat.label}</span>
                                            <span className="font-bold text-amber-600">{stat.pct}</span>
                                        </div>
                                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: stat.pct }}
                                                transition={{ duration: 1, delay: 0.2 }}
                                                className="h-full bg-amber-500 rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-8 text-center md:text-left">
                            <h3 className="text-3xl font-bold text-gray-900">
                                Un impact concret et <span className="text-amber-600">mesurable</span>
                            </h3>
                            <p className="text-gray-600 leading-loose">
                                Chaque soutien, quel que soit son montant, contribue directement à la propreté de nos villes. Nous garantissons une traçabilité totale des dons.
                            </p>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link to="/contact">
                                    <Button size="lg" className="h-16 px-10 text-xl font-bold bg-amber-500 hover:bg-amber-600 text-white shadow-xl shadow-amber-500/20 rounded-full w-full md:w-auto">
                                        Faire un don maintenant
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Bottom CTA */}
            <section className="bg-brand-950 py-24 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Un engagement collectif pour une Guinée durable</h2>
                    <p className="text-xl text-brand-200 mb-12 max-w-3xl mx-auto font-light">
                        Citoyens, volontaires, partenaires et institutions unissent leurs efforts.
                        Les résultats des actions menées sont suivis, documentés et accessibles.
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to="/resultats">
                            <Button size="lg" className="h-14 px-8 text-lg font-bold bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg border-none rounded-full">
                                Consulter les résultats <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
