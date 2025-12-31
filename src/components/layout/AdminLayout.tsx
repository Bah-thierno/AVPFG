import { Navigate, Outlet, Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    MapPin,
    Users,
    MessageSquare,
    Settings,
    LogOut,
    Menu,
    X,
    FolderOpen,
    FileText
} from 'lucide-react';
import { useState } from 'react';

export default function AdminLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const location = useLocation();

    // Auth Check
    const token = localStorage.getItem('auth_token');
    const userDataStr = localStorage.getItem('user_data');
    const user = userDataStr ? JSON.parse(userDataStr) : null;

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    const handleLogout = () => {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user_data');
        window.location.href = '/login';
    };

    const menuItems = [
        { icon: LayoutDashboard, label: 'Tableau de bord', path: '/admin/dashboard' },
        { icon: MapPin, label: 'Villes & Stats', path: '/admin/cities' },
        { icon: Users, label: 'Bénévoles', path: '/admin/volunteers' },
        { icon: FolderOpen, label: 'Projets', path: '/admin/projects' },
        { icon: FileText, label: 'Opérations', path: '/admin/operations' },
        { icon: MessageSquare, label: 'Messages', path: '/admin/messages' },
        { icon: Settings, label: 'Paramètres', path: '/admin/settings' },
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex font-sans">
            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0`}
            >
                <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="h-16 flex items-center px-6 border-b border-slate-800">
                        <span className="text-xl font-bold bg-gradient-to-r from-brand-400 to-emerald-400 bg-clip-text text-transparent">
                            Admin VPF
                        </span>
                        <button className="ml-auto lg:hidden" onClick={() => setIsSidebarOpen(false)}>
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* User Info */}
                    <div className="p-6 border-b border-slate-800 bg-slate-800/50">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center font-bold text-white">
                                {user?.email?.[0].toUpperCase() || 'A'}
                            </div>
                            <div className="overflow-hidden">
                                <p className="font-medium text-sm truncate">{user?.fullName || 'Admin'}</p>
                                <p className="text-xs text-slate-400 truncate">{user?.role === 'super_admin' ? 'Super Admin' : 'Responsable'}</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                        {menuItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium ${isActive
                                        ? 'bg-brand-600 text-white shadow-md'
                                        : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
                                >
                                    <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Logout */}
                    <div className="p-4 border-t border-slate-800">
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-lg transition-colors"
                        >
                            <LogOut className="w-5 h-5" />
                            Déconnexion
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Mobile Header */}
                <header className="lg:hidden h-16 bg-white border-b border-gray-200 flex items-center px-4">
                    <button onClick={() => setIsSidebarOpen(true)} className="p-2 -ml-2 text-gray-600">
                        <Menu className="w-6 h-6" />
                    </button>
                    <span className="ml-4 font-bold text-gray-900">Administration</span>
                </header>

                {/* Content Area */}
                <main className="flex-1 overflow-y-auto p-4 md:p-8">
                    <Outlet />
                </main>
            </div>

            {/* Overlay for mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
        </div>
    );
}
