import heroImg from '../assets/hero.png'
import Navbar from './Navbar'

export default function Header() {
  return (
    <>
      <header className="relative w-full overflow-hidden border-b-2 border-[#1A1A1A]">
        <div className="relative h-[280px] md:h-[560px] w-full bg-[#1A1A1A]">
          <img
            src={heroImg}
            alt="Antenox sur scène"
            className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#E5E5E5]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 md:gap-2">
            <p className="font-mono text-[#E5E5E5] text-[10px] md:text-sm tracking-[0.4em] uppercase opacity-70">
              Rock Alternatif
            </p>
            <h1
              className="font-display text-[clamp(3.5rem,14vw,14rem)] leading-none text-[#E5E5E5] select-none"
              style={{ textShadow: '4px 4px 0px #2D4B73, 8px 8px 0px rgba(0,0,0,0.3)' }}
            >
              ANTENOX
            </h1>
            <p className="font-mono text-[#2D4B73] text-[10px] md:text-sm tracking-[0.4em] md:tracking-[0.6em] uppercase">
              ── Depuis 2019 ──
            </p>
          </div>
        </div>
      </header>

      <Navbar />
    </>
  )
}
