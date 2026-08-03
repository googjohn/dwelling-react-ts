export function SectionTitle({ title }: { title: string }) {
  return (
    <div className="section-title text-center">
      <h2 className="txt-title gradient-text">{title}</h2>
      <div className="h-1 w-15 mx-auto bg-logo rounded"></div>
    </div>
  )
}