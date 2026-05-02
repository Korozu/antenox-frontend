import Header from '../components/Header';
import AudioPlayer from '../components/AudioPlayer';
import SectionApropos from '../components/sections/SectionApropos';
import SectionConcerts from '../components/sections/SectionConcerts';
import SectionStream from '../components/sections/SectionStream';
//import SectionVideos from '../components/sections/SectionVideos';
//import SectionPhotos from '../components/sections/SectionPhotos';
//import SectionContact from '../components/sections/SectionContact';
import SectionDocuments from '../components/sections/SectionTechnique';
import { TRACKS } from '../data/tracks';

export default function HomePage() {
    return (
        <>
            <Header/>

            <main className="site-wrapper px-4 md:px-8">
                <SectionApropos/>
                <SectionConcerts/>
                <SectionStream/>
                {//<SectionVideos/>
                //<SectionPhotos />
                //<SectionContact/>
                }
                <SectionDocuments/>
            </main>

            <footer className="border-t-2 border-[#1A1A1A]">
                <div className="site-wrapper px-4 md:px-8 py-8
                        flex flex-col md:flex-row items-center justify-between gap-4">
                    <span className="font-display text-3xl text-[#1A1A1A]">ANTENOX</span>
                    <p className="font-mono text-[11px] text-[#7a7a7a] text-center">
                        © {new Date().getFullYear()} Antenox — Tous droits réservés
                    </p>
                    <div className="flex gap-4">
                        {['Instagram', 'Facebook', 'YouTube'].map((s) => (
                            <a
                                key={s}
                                href="#"
                                className="font-mono text-[10px] uppercase tracking-widest text-[#7a7a7a]
                           hover:text-[#2D4B73] transition-colors"
                            >
                                {s}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>

            <AudioPlayer tracks={TRACKS}/>
        </>
    );
}
