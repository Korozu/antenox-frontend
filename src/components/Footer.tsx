import { useTranslation } from 'react-i18next'

const SOCIAL_LINKS = [
    { name: 'Instagram', url: 'https://www.instagram.com/antenox.rockband/' },
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100094263515368' },
    { name: 'YouTube', url: 'https://www.youtube.com/@AntenoxRockBand' },
];

export default function Footer() {
    const { t } = useTranslation()

    return (
        <footer className="border-t-2 border-[#1A1A1A]">
            <div className="site-wrapper px-4 md:px-8 py-8
                    flex flex-col md:flex-row items-center justify-between gap-4">
                <span className="font-display text-3xl text-[#1A1A1A]">ANTENOX</span>
                <p className="font-mono text-[11px] text-[#7a7a7a] text-center">
                    © {new Date().getFullYear()} Antenox — {t('footer.rights')}
                </p>
                <div className="flex gap-4">
                    {SOCIAL_LINKS.map(({ name, url }) => (
                        <a
                            key={name}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[10px] uppercase tracking-widest text-[#7a7a7a]
                                hover:text-[#2D4B73] transition-colors"
                        >
                            {name}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
