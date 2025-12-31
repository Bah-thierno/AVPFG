import {
    Users,
    MapPin,
    Trash2,
    TrendingUp,
    AlertCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Dashboard() {
    // Note: These will be dynamic later
    const stats = [
        { label: 'Villes Actives', value: '24', icon: MapPin, color: 'bg-blue-500' },
        { label: 'Bénévoles Total', value: '1,250', icon: Users, color: 'bg-emerald-500' },
        { label: 'Déchets Collectés', value: '850 T', icon: Trash2, color: 'bg-orange-500' },
        { label: 'Opérations ce mois', value: '12', icon: TrendingUp, color: 'bg-purple-500' },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
                <p className="text-gray-500">Vue d'ensemble de l'activité Ville Propre & Fleurie</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10`}>
                                <stat.icon className={`w-6 h-6 ${stat.color.replace('bg-', 'text-')}`} />
                            </div>
                            <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-full">
                                +12% vs N-1
                            </span>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                        <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                    </motion.div>
                ))}
            </div>

            {/* Quick Actions & Recent Activity */}
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Recent Activity */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h2 className="font-bold text-gray-900 mb-6">Activités Récentes</h2>
                    <div className="space-y-6">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="flex gap-4 items-start pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                                <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Rapport mensuel soumis par <span className="text-brand-600">Kindia</span></p>
                                    <p className="text-xs text-gray-500 mt-1">Il y a 2 heures</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* System Status / Alerts */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h2 className="font-bold text-gray-900 mb-6">État du système</h2>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 p-3 bg-green-50 text-green-700 rounded-lg text-sm border border-green-100">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            API En ligne
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-green-50 text-green-700 rounded-lg text-sm border border-green-100">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            Base de données connectée
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-blue-50 text-blue-700 rounded-lg text-sm border border-blue-100">
                            <AlertCircle className="w-4 h-4" />
                            Version v1.0.0
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
