export default function InfoPage({
  label,
  title,
  text,
  children,
}: {
  label: string
  title: string
  text?: string
  children?: React.ReactNode
}) {
  return (
    <main className="pageWrap">
      <p className="smallLabel">{label}</p>
      <h1>{title}</h1>
      {text && <p className="pageText">{text}</p>}
      {children}
    </main>
  )
}