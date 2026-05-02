interface SectionLabelProps {
  children: React.ReactNode
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="font-mono text-[11px] text-[#2D4B73] tracking-[0.4em] uppercase block mb-2">
      — {children}
    </span>
  )
}

