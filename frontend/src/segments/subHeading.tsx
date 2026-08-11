export function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="sub-heading max-w-2xl mx-auto mb-(--pad-margin-n) text-accent/80 text-center">
      <h3>{children}</h3>
    </div>
  )
}