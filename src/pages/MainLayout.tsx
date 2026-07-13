import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import AudioPlayer from '../components/AudioPlayer.tsx';
import { TRACKS } from '../data/tracks.ts';

export const MainLayout = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            // Petit délai pour laisser le temps à la page de se rendre
            const timeout = setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                }
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [location]);

    return (
        <div className="overflow-x-hidden w-full">
            <Header/>
            <main className="site-wrapper p-4 md:p-8">
                <Outlet/>
            </main>
            <Footer />

            <AudioPlayer tracks={TRACKS}/>
        </div>
)
}
