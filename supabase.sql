create table if not exists rsvps (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default now(),
  name text not null,
  email text,
  attending text not null,
  guests integer default 1,
  dietary text,
  message text
);

alter table rsvps enable row level security;

create policy "Allow public RSVP inserts"
on rsvps for insert
to anon
with check (true);

-- For simple Phase 1 admin reading through the app, keep this disabled unless using service role.
-- Better production option: create an authenticated admin user and restrict select policy.
