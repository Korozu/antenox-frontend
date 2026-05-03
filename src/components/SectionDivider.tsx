// Séparateur entre les grandes sections du site
export default function SectionDivider() {
  return (
    <div className="my-16 md:my-24 flex items-center gap-6">
      {/* Ligne fine avec dégradé */}
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#1A1A1A] to-transparent" />

      {/* Point central grunge */}
      <div className="w-1.5 h-1.5 bg-[#1A1A1A] rotate-45" />

      {/* Ligne fine avec dégradé */}
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#1A1A1A] to-transparent" />
    </div>
  )
}
