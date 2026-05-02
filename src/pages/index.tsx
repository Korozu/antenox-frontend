import Header from '../components/Header';
import AudioPlayer from '../components/AudioPlayer';
import Footer from '../components/Footer';
import SectionApropos from '../components/sections/SectionApropos';
import SectionConcerts from '../components/sections/SectionConcerts';
import SectionStream from '../components/sections/SectionStream';
//import SectionVideos from '../components/sections/SectionVideos';
//import SectionPhotos from '../components/sections/SectionPhotos';
import SectionContact from '../components/sections/SectionContact';
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
                }
                <SectionContact/>
                <SectionDocuments/>
            </main>

            <Footer />

            <AudioPlayer tracks={TRACKS}/>
        </>
    );
}
