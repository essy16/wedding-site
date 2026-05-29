# Luxury Wedding Website - Phase 1

## Features
- Full-screen luxury hero section
- English/Spanish language switcher
- Smooth Framer Motion animations
- Timeline-style wedding schedule
- Travel/venue section
- Gallery placeholders
- Animated RSVP form
- Supabase RSVP backend
- Private admin RSVP table
- SEO metadata and image alt text
- Mobile-first responsive design

## Setup
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Supabase
1. Create a Supabase project.
2. Run `supabase.sql` in the Supabase SQL editor.
3. Add your Supabase URL and anon key to `.env.local`.
4. Set `ADMIN_PASSWORD`.

## Admin
Visit:
`/admin?password=your-password`

## Images
Add these files inside `public/images`:
- hero.jpg
- story.jpg
- gallery-1.jpg
- gallery-2.jpg
- gallery-3.jpg
- gallery-4.jpg
- gallery-5.jpg
- gallery-6.jpg

Pinterest images should only be used as temporary design references/placeholders unless usage rights are confirmed.
