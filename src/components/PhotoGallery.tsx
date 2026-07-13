import { allPhotosAlbums } from 'content-collections';
import { useNavigate } from 'react-router-dom';


export default function PhotoGallery() {
  const navigate = useNavigate()
  return (
    <div className="grid grid-cols-4 gap-4">
      {allPhotosAlbums.map((album) => (
        <button
          key={album.title+album.date}
          onClick={() => navigate(`/photos/${album.title}`)}
          className="group relative overflow-hidden
            border-2 border-[#1A1A1A] bg-[#1A1A1A] hover:cursor-pointer"
        >
          <img
            src={album.cover}
            alt={album.cover}
            loading="lazy"
            className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0
                       transition-all duration-500 group-hover:scale-105"
          />

          {/* Overlay info */}
          <div
            className="absolute inset-0 bg-[#1A1A1A]/80 opacity-0 group-hover:opacity-100
                       transition-opacity duration-300 flex flex-col justify-end p-4"
          >
            <p className="font-mono text-white text-[11px] mt-1 tracking-wide">
              {album.venue}
            </p>
            <div className="flex items-center justify-between mt-2">
              <time
                dateTime={album.date}
                className="font-mono text-[10px] text-gray-400"
              >
                {new Date(album.date).toLocaleDateString('fr-FR', {
                  day: '2-digit', month: 'long', year: 'numeric',
                })}
              </time>
              {album.photographer && (
                <a href={album.photographer.instagram} target="_blank" className="font-mono text-[10px] text-[#7a7a7a]">
                  © {album.photographer.name}
                </a>
              )}
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}
