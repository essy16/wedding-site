import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, attending, guests, dietary, message } = body

    if (!name || !attending) {
      return NextResponse.json({ error: 'Name and attendance status are required' }, { status: 400 })
    }

    const { error } = await supabase.from('rsvps').insert({
      name,
      email: email || null,
      attending,
      guests: guests ? Number(guests) : 1,
      dietary: dietary || null,
      message: message || null
    })

    if (error) throw error
    return NextResponse.json({ ok: true })
  } catch (error) {
    return NextResponse.json({ error: 'Unable to save RSVP' }, { status: 500 })
  }
}
