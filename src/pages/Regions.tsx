import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Waves, Mountain, Wheat, Trees, MapPin, AlertTriangle, Target } from 'lucide-react';

export default function Regions() {
    return (
        <>
            {/* HERO */}
            <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 px-4 py-20 text-white">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
                            Les Régions Naturelles de Guinée
                        </h1>
                        <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                            Quatre grandes régions naturelles, chacune avec des caractéristiques géographiques,
                            climatiques et environnementales spécifiques.
                        </p>
                        <p className="mt-4 text-lg text-emerald-200">
                            La base territoriale de l'action du mouvement Ville Propre & Fleurie – Guinée
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* BASSE-GUINÉE */}
            <Section className="bg-gradient-to-br from-blue-50 to-cyan-50">
                <RegionCard
                    icon={Waves}
                    number="1"
                    title="Basse-Guinée"
                    subtitle="Région côtière et urbaine"
                    color="blue"
                    characteristics={[
                        "Zone côtière ouverte sur l'océan Atlantique",
                        "Climat chaud et humide",
                        "Forte densité de population",
                        "Importantes activités économiques et portuaires",
                        "Présence de mangroves, fleuves et zones marécageuses"
                    ]}
                    challenges={[
                        "Gestion des déchets urbains",
                        "Pollution des eaux et des mangroves",
                        "Inondations saisonnières",
                        "Insalubrité dans les zones urbaines denses"
                    ]}
                    priorities={[
                        "Assainissement urbain et côtier",
                        "Sensibilisation à la gestion des déchets",
                        "Protection des mangroves et zones humides",
                        "Amélioration du cadre de vie urbain"
                    ]}
                />
            </Section>

            {/* MOYENNE-GUINÉE */}
            <Section className="bg-gradient-to-br from-green-50 to-emerald-50">
                <RegionCard
                    icon={Mountain}
                    number="2"
                    title="Moyenne-Guinée (Fouta Djallon)"
                    subtitle="Château d'eau de l'Afrique de l'Ouest"
                    color="green"
                    characteristics={[
                        "Région montagneuse et plateau central",
                        "Climat plus frais",
                        "Sources de grands fleuves (Niger, Sénégal, Gambie)",
                        "Forte couverture végétale et forestière",
                        "Zone stratégique pour l'équilibre hydrique régional"
                    ]}
                    challenges={[
                        "Déforestation",
                        "Érosion des sols",
                        "Dégradation des sources d'eau",
                        "Pollution des cours d'eau"
                    ]}
                    priorities={[
                        "Protection des forêts et bassins versants",
                        "Préservation des sources d'eau",
                        "Assainissement des villes et villages",
                        "Sensibilisation écologique communautaire"
                    ]}
                />
            </Section>

            {/* HAUTE-GUINÉE */}
            <Section className="bg-gradient-to-br from-amber-50 to-yellow-50">
                <RegionCard
                    icon={Wheat}
                    number="3"
                    title="Haute-Guinée"
                    subtitle="Région de savane et de production agricole"
                    color="amber"
                    characteristics={[
                        "Climat chaud et sec",
                        "Zones de savane",
                        "Forte activité agricole et pastorale",
                        "Présence du fleuve Niger",
                        "Importantes zones minières"
                    ]}
                    challenges={[
                        "Désertification progressive",
                        "Pollution liée aux activités minières",
                        "Gestion des déchets agricoles",
                        "Dégradation des sols"
                    ]}
                    priorities={[
                        "Assainissement des zones urbaines et rurales",
                        "Protection des cours d'eau",
                        "Sensibilisation aux pratiques durables",
                        "Lutte contre la dégradation des sols"
                    ]}
                />
            </Section>

            {/* GUINÉE FORESTIÈRE */}
            <Section className="bg-gradient-to-br from-teal-50 to-green-50">
                <RegionCard
                    icon={Trees}
                    number="4"
                    title="Guinée Forestière"
                    subtitle="Région de biodiversité et de forêts"
                    color="teal"
                    characteristics={[
                        "Région fortement boisée",
                        "Pluviométrie élevée",
                        "Riche biodiversité (faune et flore)",
                        "Agriculture de rente",
                        "Zones naturelles sensibles"
                    ]}
                    challenges={[
                        "Déforestation rapide",
                        "Menaces sur la biodiversité",
                        "Pollution des sols et des eaux",
                        "Pression humaine sur les forêts"
                    ]}
                    priorities={[
                        "Protection des forêts et de la biodiversité",
                        "Assainissement des localités",
                        "Sensibilisation à la conservation",
                        "Promotion de pratiques durables"
                    ]}
                />
            </Section>

            {/* APPROCHE ADAPTÉE */}
            <Section className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">🌍 Une approche adaptée à chaque région</h2>
                    <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                        Chaque région naturelle présente des réalités environnementales spécifiques.
                        Le mouvement adapte donc ses actions en fonction :
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <ApproachCard title="Contexte local" description="Adaptation aux réalités du terrain" />
                        <ApproachCard title="Priorités environnementales" description="Actions ciblées selon les enjeux" />
                        <ApproachCard title="Besoins des populations" description="Réponses adaptées aux attentes" />
                    </div>
                    <p className="text-lg text-purple-200">
                        Cette approche territoriale garantit un <span className="font-bold text-emerald-300">impact réel, durable et mesurable</span>.
                    </p>
                </div>
            </Section>

            {/* LIEN AVEC LES VILLES */}
            <Section className="bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">🏙️ Lien avec les villes</h2>
                    <div className="bg-gradient-to-br from-brand-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-2 border-brand-200">
                        <p className="text-xl text-gray-700 mb-8 text-center leading-relaxed">
                            Chaque ville de la plateforme est rattachée à une organisation territoriale précise :
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <LinkCard icon={MapPin} title="Région naturelle" />
                            <LinkCard icon={MapPin} title="Région administrative" />
                            <LinkCard icon={MapPin} title="Préfecture" />
                        </div>
                        <div className="bg-white rounded-xl p-6 border border-brand-200">
                            <h3 className="text-2xl font-bold text-brand-800 mb-4 text-center">Cela permet :</h3>
                            <ul className="space-y-3 max-w-2xl mx-auto">
                                <BenefitItem text="Une recherche claire et intuitive" />
                                <BenefitItem text="Une analyse territoriale précise" />
                                <BenefitItem text="Un suivi des résultats par région" />
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}

// Helper Components
interface RegionCardProps {
    icon: any;
    number: string;
    title: string;
    subtitle: string;
    color: 'blue' | 'green' | 'amber' | 'teal';
    characteristics: string[];
    challenges: string[];
    priorities: string[];
}

function RegionCard({ icon: Icon, number, title, subtitle, color, characteristics, challenges, priorities }: RegionCardProps) {
    const colorClasses = {
        blue: { bg: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-200' },
        green: { bg: 'bg-green-500', text: 'text-green-600', border: 'border-green-200' },
        amber: { bg: 'bg-amber-500', text: 'text-amber-600', border: 'border-amber-200' },
        teal: { bg: 'bg-teal-500', text: 'text-teal-600', border: 'border-teal-200' }
    };

    const colors = colorClasses[color];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
        >
            <div className="flex items-center gap-4 mb-8">
                <div className={`${colors.bg} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                </div>
                <div>
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">Région {number}</div>
                    <h2 className={`text-4xl font-extrabold ${colors.text}`}>{title}</h2>
                    <p className="text-lg text-gray-600 italic">{subtitle}</p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <InfoBlock icon={MapPin} title="Caractéristiques" items={characteristics} color={colors} />
                <InfoBlock icon={AlertTriangle} title="Enjeux environnementaux" items={challenges} color={colors} />
                <InfoBlock icon={Target} title="Priorités d'action" items={priorities} color={colors} />
            </div>
        </motion.div>
    );
}

function InfoBlock({ icon: Icon, title, items, color }: { icon: any, title: string, items: string[], color: any }) {
    return (
        <div className={`bg-white rounded-2xl p-6 border-2 ${color.border} shadow-sm`}>
            <div className="flex items-center gap-2 mb-4">
                <Icon className={`h-5 w-5 ${color.text}`} />
                <h3 className="font-bold text-gray-900">{title}</h3>
            </div>
            <ul className="space-y-2">
                {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className={`${color.text} mt-1`}>•</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function ApproachCard({ title, description }: { title: string, description: string }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
        >
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-purple-200 text-sm">{description}</p>
        </motion.div>
    );
}

function LinkCard({ icon: Icon, title }: { icon: any, title: string }) {
    return (
        <div className="bg-white rounded-xl p-4 border border-brand-200 text-center">
            <Icon className="h-6 w-6 text-brand-600 mx-auto mb-2" />
            <div className="font-bold text-gray-800">{title}</div>
        </div>
    );
}

function BenefitItem({ text }: { text: string }) {
    return (
        <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
            <span className="text-gray-700 font-medium">{text}</span>
        </li>
    );
}
