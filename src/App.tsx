import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';
import Participate from './pages/Participate';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Projects from './pages/Projects';
import Cities from './pages/Cities';
import CityDetails from './pages/CityDetails';
import Results from './pages/Results';
import Regions from './pages/Regions';
import Community from './pages/Community'; // Added import for Community
import VolunteerForm from './pages/VolunteerForm';
import AdminLayout from './components/layout/AdminLayout';
import Dashboard from './pages/admin/Dashboard';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="villes" element={<Cities />} />
          <Route path="villes/:id" element={<CityDetails />} />
          <Route path="resultats" element={<Results />} />
          <Route path="communaute" element={<Community />} /> {/* Added /communaute route */}
          <Route path="tourisme" element={<div className="container mx-auto py-20 text-center text-3xl font-bold text-gray-400">Tourisme (Bientôt)</div>} />
          <Route path="participer" element={<Participate />} />
          <Route path="benevolat" element={<VolunteerForm />} />
          <Route path="projets" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="regions" element={<Regions />} />
          <Route path="login" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<div className="container mx-auto py-20 text-center text-3xl font-bold text-gray-400">404 - Page Non Trouvée</div>} />
        </Route>

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="cities" element={<div className="p-8">Gestion des Villes (À venir)</div>} />
          <Route path="volunteers" element={<div className="p-8">Gestion des Bénévoles (À venir)</div>} />
          <Route path="*" element={<div className="p-8">Page non trouvée</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
