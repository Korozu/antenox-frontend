import { useParams } from 'react-router-dom';
import { allPhotosAlbums } from 'content-collections';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';

export const AlbumPage = () => {
    const { t } = useTranslation();
    const albumTitle = useParams().title;
    const album = allPhotosAlbums.find((album) => album.title === albumTitle);
    const titleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        titleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, [albumTitle]);

    if (!album) {
        return (
            <div className="flex flex-col items-center justify-center py-24 gap-6">
                <p className="font-mono text-xl font-black uppercase tracking-widest text-[#1A1A1A]">{t('album.not_found')}</p>
                <a
                    href="/#photos"
                    className="font-mono text-xs font-black uppercase tracking-[0.15em]
                               px-4 py-2 border-2 border-[#1A1A1A] rounded-[2px]
                               bg-[#E5E5E5] text-[#1A1A1A]
                               hover:bg-[#1A1A1A] hover:text-[#E5E5E5]
                               shadow-[3px_3px_0_0_rgba(26,26,26,0.3)]
                               transition-all duration-150"
                >
                    ← {t('album.back')}
                </a>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-8 py-8">
            {/* Header */}
            <div ref={titleRef} className="flex flex-col gap-4">
                <a
                    href="/#photos"
                    className="inline-flex items-center gap-2
                               font-mono text-xs font-black uppercase tracking-[0.15em]
                               px-4 py-2 border-2 border-[#1A1A1A] rounded-[2px]
                               bg-[#E5E5E5] text-[#1A1A1A] self-start
                               hover:bg-[#1A1A1A] hover:text-[#E5E5E5]
                               shadow-[3px_3px_0_0_rgba(26,26,26,0.3)]
                               transition-colors duration-150"
                >
                    ← {t('album.back')}
                </a>
                <div className="border-l-4 border-[#2D4B73] pl-4">
                    <h1 className="font-display text-4xl md:text-5xl text-[#1A1A1A] leading-none tracking-tight">
                        {album.venue}
                    </h1>
                    <div className="flex flex-col gap-2 mt-2">
                        <time dateTime={album.date} className="font-mono text-sm text-[#555] tracking-wide">
                            {new Date(album.date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' })}
                        </time>
                        {album.photographer && (
                            <span className="font-mono text-xs font-bold text-[#1A1A1A] uppercase tracking-[0.12em]">
                                {album.photographer.instagram
                                    ? (
                                        <a
                                            href={`https://instagram.com/${album.photographer.instagram.replace(/^@/, '').replace(/^https?:\/\/(www\.)?instagram\.com\/?/, '')}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 px-2 py-0.5
                                                       border border-[#1A1A1A] rounded-[2px]
                                                       bg-[#E5E5E5] text-[#1A1A1A]
                                                       hover:bg-[#1A1A1A] hover:text-[#E5E5E5]
                                                       shadow-[2px_2px_0_0_rgba(26,26,26,0.2)]
                                                       transition-all duration-150"
                                        >
                                            {/* Instagram icon */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                                                <circle cx="12" cy="12" r="4"/>
                                                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                                            </svg>
                                            @{album.photographer.name}
                                        </a>
                                    )
                                    : album.photographer.name
                                }
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Grille de photos */}
            <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
                {album.photos.map((photo, index) => (
                    <div
                        key={photo}
                        className="break-inside-avoid overflow-hidden border-2 border-[#1A1A1A] bg-[#1A1A1A]"
                    >
                        <img
                            src={photo}
                            alt={`Concert ${index + 1}`}
                            decoding="async"
                            loading={index < 12 ? 'eager' : 'lazy'}
                            className="w-full h-auto block"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
