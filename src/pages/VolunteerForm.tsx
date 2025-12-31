import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { cities } from '../data/cities';
import { Button } from '../components/ui/Button';
import { Section } from '../components/ui/Section';
import { Hand, MapPin, CheckCircle2, ArrowRight, User } from 'lucide-react';

export default function VolunteerForm() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const cityId = searchParams.get('city');

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        age: '',
        cityId: cityId || '',
        motivation: '',
        availability: 'weekends'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Validation logic
        if (!formData.cityId) {
            alert("Veuillez sélectionner une ville pour votre engagement.");
            return;
        }

        console.log('Volunteer Application:', formData);
        alert(`Merci ${formData.firstName} ! Votre demande pour rejoindre l'équipe de ${cities.find(c => c.id === formData.cityId)?.name} a été enregistrée.`);
        navigate('/');
    };

    return (
        <div className="bg-slate-50 min-h-screen pt-20">
            {/* Header */}
            <div className="bg-emerald-900 text-white py-12 px-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative z-10">
                    <div className="inline-flex items-center rounded-full bg-emerald-800/50 px-4 py-1.5 text-sm font-medium text-emerald-100 border border-emerald-500/30 mb-4 backdrop-blur-sm">
                        <Hand className="mr-2 h-4 w-4" /> Devenir Volontaire
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Rejoignez le mouvement</h1>
                    <p className="text-xl text-emerald-100 max-w-2xl mx-auto font-light">
                        Engagez-vous concrètement pour l'assainissement de votre ville.
                    </p>
                </div>
            </div>

            <Section className="py-12">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                        {/* Progress / Steps Visual */}
                        <div className="bg-gray-50 p-4 border-b border-gray-100 flex justify-between text-sm text-gray-500">
                            <span className="flex items-center text-emerald-600 font-bold"><CheckCircle2 className="w-4 h-4 mr-1" /> Engagement Citoyen</span>
                            <span>Formulaire d'inscription</span>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">

                            {/* 1. Choix de la ville (CRUCIAL) */}
                            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                                <label className="block text-lg font-bold text-emerald-900 mb-3 flex items-center gap-2">
                                    <MapPin className="h-5 w-5" /> Dans quelle ville souhaitez-vous agir ? <span className="text-red-500">*</span>
                                </label>
                                <p className="text-sm text-gray-600 mb-4">Votre inscription sera transmise directement au bureau local concerné.</p>
                                <select
                                    name="cityId"
                                    value={formData.cityId}
                                    onChange={handleChange}
                                    className="w-full p-4 bg-white border-2 border-emerald-200 rounded-xl font-bold text-gray-800 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                                    required
                                >
                                    <option value="" disabled>-- Sélectionnez votre ville --</option>
                                    {cities.map(c => (
                                        <option key={c.id} value={c.id}>{c.name}</option>
                                    ))}
                                </select>
                            </div>

                            {/* 2. Infos Personnelles */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-gray-900 border-b pb-2 flex items-center gap-2">
                                    <User className="h-5 w-5 text-gray-400" /> Informations Personnelles
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Prénom <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-emerald-500 outline-none transition-all"
                                            placeholder="Ex: Mamadou"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Nom <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-emerald-500 outline-none transition-all"
                                            placeholder="Ex: Diallo"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Email <span className="text-red-500">*</span></label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-emerald-500 outline-none transition-all"
                                            placeholder="votre@email.com"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Téléphone <span className="text-red-500">*</span></label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-emerald-500 outline-none transition-all"
                                            placeholder="+224 ..."
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Âge</label>
                                    <input
                                        type="number"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        className="w-full md:w-1/3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-emerald-500 outline-none transition-all"
                                        placeholder="Votre âge"
                                        min="16"
                                    />
                                    <p className="text-xs text-gray-500">L'âge minimum requis est généralement de 18 ans (ou 16 ans avec autorisation parentale).</p>
                                </div>
                            </div>

                            {/* 3. Motivation & Dispo */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Engagement</h3>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Disponibilités principales</label>
                                    <select
                                        name="availability"
                                        value={formData.availability}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-emerald-500 outline-none transition-all"
                                    >
                                        <option value="weekends">Week-ends uniquement (Assainissements)</option>
                                        <option value="weekdays">Semaine (Sensibilisation / Bureau)</option>
                                        <option value="all">Flexible (Tout moment)</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Pourquoi voulez-vous nous rejoindre ?</label>
                                    <textarea
                                        name="motivation"
                                        value={formData.motivation}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-emerald-500 outline-none transition-all"
                                        placeholder="Dites-nous ce qui vous motive..."
                                    />
                                </div>
                            </div>

                            {/* Submit */}
                            <div className="pt-6 border-t border-gray-100">
                                <Button className="w-full h-14 text-lg font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/30 rounded-xl">
                                    Valider ma candidature <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <p className="text-center text-xs text-gray-400 mt-4">
                                    En validant, vous acceptez d'être contacté par l'équipe locale de Ville Propre & Fleurie.
                                </p>
                            </div>

                        </form>
                    </div>
                </div>
            </Section>
        </div>
    );
}
