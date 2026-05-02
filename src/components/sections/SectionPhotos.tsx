import SectionLabel from '../SectionLabel'
import PhotoGallery from '../PhotoGallery'

export default function SectionPhotos() {
  return (
    <section id="photos" aria-labelledby="photos-title" className="hidden">
      <SectionLabel>05</SectionLabel>
      <h2 id="photos-title" className="font-display text-5xl md:text-8xl text-[#1A1A1A] leading-none mb-8">
        PHOTOS
      </h2>
      <PhotoGallery />
    </section>
  )
}
