import SectionDivider from '../components/SectionDivider';
import SectionApropos from '../components/sections/SectionApropos';
import SectionConcerts from '../components/sections/SectionConcerts';
import SectionStream from '../components/sections/SectionStream';
import SectionContact from '../components/sections/SectionContact';
import SectionDocuments from '../components/sections/SectionTechnique';
import SectionPhotos from '../components/sections/SectionPhotos.tsx';

export default function HomePage() {
    return (<>
                <SectionApropos/>
                <SectionDivider />

                <SectionConcerts/>
                <SectionDivider />

                <SectionStream/>
                <SectionDivider />

                {
                    //<SectionVideos/>
                }
                <SectionPhotos />

                <SectionContact/>
                <SectionDivider />

                <SectionDocuments/>
            </>
    )
}
