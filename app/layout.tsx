import './globals.css'
import Header from '@/components/Header'

export const metadata = {
  title: 'Nataliya & Robert Wedding',
  description:
    'Wedding website for Nataliya and Robert at Hotel Sant Pere del Bosc, Lloret de Mar.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}