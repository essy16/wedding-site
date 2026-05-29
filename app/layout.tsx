import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Robert & Belén Wedding | Luxury Wedding Website',
  description: 'A bilingual luxury wedding website with RSVP, travel details, schedule, gallery and guest information.',
  keywords: ['wedding website', 'RSVP', 'bilingual wedding', 'luxury wedding', 'Spain wedding'],
  openGraph: {
    title: 'Robert & Belén Wedding',
    description: 'Join us for our wedding celebration.',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
