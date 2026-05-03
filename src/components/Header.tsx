import Navbar from './Navbar'

export default function Header() {

  return (
    <>
      <header className="relative w-full overflow-hidden border-b-2 border-[#1A1A1A]">
        <div className="relative h-[280px] md:h-[560px] w-full bg-[#E5E5E5]">
          {/* Image de header */}
          <img
            src="/photos/header.jpg"
            alt="Antenox sur scène"
            className="absolute inset-0 w-full h-full object-cover object-top grayscale"
          />

          {/* Grain/Texture grunge */}
          <div
            className="absolute inset-0 opacity-30 mix-blend-multiply"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='5' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Dégradé noir en bas pour le logo - plus accentué */}
          <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-[#1A1A1A]/85 via-[#1A1A1A]/50 to-transparent" />

          {/* Logo ANTENOX */}
          <div className="absolute bottom-0 left-0 right-0 py-4 md:py-6">
            <h1
              className="font-display text-[clamp(2rem,8vw,6rem)] leading-none text-[#E5E5E5] select-none text-center"
              style={{
                textShadow: '2px 2px 0px #2D4B73, 4px 4px 8px rgba(0,0,0,0.8)',
              }}
            >
              ANTENOX
            </h1>
          </div>
        </div>
      </header>

      <Navbar />
    </>
  )
}
