import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Accueil', path: '/' },
        { name: 'Nos villes', path: '/villes' },
        { name: 'Resultats', path: '/resultats' },
        { name: 'A propos', path: '/about' },
        { name: 'Tourisme', path: '/tourisme' },
        { name: 'Participer', path: '/participer' },
        { name: 'Communauté', path: '/communaute' },
        { name: 'Nos Projets', path: '/projets' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                scrolled
                    ? "bg-white/95 backdrop-blur shadow-md py-2"
                    : "bg-white/80 backdrop-blur-sm py-4"
            )}
        >
            <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
                {/* Logo - Larger and animated */}
                <Link to="/" className="flex items-center space-x-2 group">
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <img
                            src="/logo.png"
                            alt="Guinée Propre"
                            className={cn(
                                "transition-all duration-300 w-auto",
                                scrolled ? "h-16" : "h-20" // Larger logo that shrinks slightly on scroll
                            )}
                        />
                    </motion.div>
                </Link>

                {/* Desktop Nav - Larger text and hover effects */}
                <div className="hidden xl:flex items-center space-x-6 2xl:space-x-8">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="relative group px-1 py-1 overflow-visible whitespace-nowrap"
                            >
                                <motion.div
                                    whileHover={{ y: -2 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <span className={cn(
                                        "text-base font-bold tracking-wide transition-colors duration-300",
                                        isActive ? "text-brand-600" : "text-gray-700 group-hover:text-brand-600"
                                    )}>
                                        {link.name}
                                    </span>
                                </motion.div>
                                {/* Animated active/hover indicator */}
                                <span className={cn(
                                    "absolute bottom-0 left-1/2 h-0.5 bg-brand-600 transition-all duration-300 -translate-x-1/2 rounded-full",
                                    isActive ? "w-4/5" : "w-0 group-hover:w-4/5"
                                )} />
                            </Link>
                        );
                    })}
                    <Link to="/login">
                        <motion.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative"
                        >
                            {/* Green glow effect */}
                            <div className="absolute inset-0 rounded-xl bg-emerald-400 blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                            <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-base font-bold px-6 py-2.5 rounded-xl shadow-xl relative z-10">
                                Connexion
                            </Button>
                        </motion.div>
                    </Link>
                </div>

                {/* Mobile Menu Button - Larger */}
                <button
                    className="flex items-center justify-center rounded-full p-2 text-gray-700 xl:hidden hover:bg-gray-100 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-b bg-white xl:hidden overflow-hidden"
                    >
                        <div className="flex flex-col space-y-4 p-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="text-xl font-medium text-gray-800 hover:text-brand-600 hover:pl-2 transition-all"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button className="w-full text-lg h-12 font-bold shadow-md" variant="primary">Connexion</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
