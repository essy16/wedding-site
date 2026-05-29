import { supabase } from '@/lib/supabase'
import { redirect } from 'next/navigation'

type SearchParams = Promise<{ password?: string }>

type RSVP = {
  id: string
  created_at: string
  name: string
  email: string | null
  attending: string
  guests: number
  dietary: string | null
  message: string | null
}

export default async function AdminPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams
  if (params.password !== process.env.ADMIN_PASSWORD) redirect('/')

  const { data } = await supabase.from('rsvps').select('*').order('created_at', { ascending: false })
  const rsvps = (data || []) as RSVP[]

  return (
    <main className="min-h-screen bg-ivory px-6 py-12 text-ink">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold">Private Admin</p>
            <h1 className="font-serif text-5xl italic">RSVP Responses</h1>
          </div>
          <div className="rounded-full bg-white px-5 py-3 shadow-sm">Total responses: {rsvps.length}</div>
        </div>
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-luxury">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="bg-ink text-white">
              <tr>
                <th className="p-4">Date</th><th className="p-4">Name</th><th className="p-4">Email</th><th className="p-4">Attending</th><th className="p-4">Guests</th><th className="p-4">Dietary</th><th className="p-4">Message</th>
              </tr>
            </thead>
            <tbody>
              {rsvps.map((r) => (
                <tr key={r.id} className="border-b border-gold/10">
                  <td className="p-4">{new Date(r.created_at).toLocaleDateString()}</td>
                  <td className="p-4 font-medium">{r.name}</td>
                  <td className="p-4">{r.email}</td>
                  <td className="p-4 capitalize">{r.attending}</td>
                  <td className="p-4">{r.guests}</td>
                  <td className="p-4">{r.dietary}</td>
                  <td className="p-4">{r.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
