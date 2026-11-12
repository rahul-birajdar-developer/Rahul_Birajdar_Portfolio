create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 100),
  email text not null check (char_length(email) between 5 and 255),
  subject text not null check (char_length(subject) between 3 and 150),
  message text not null check (char_length(message) between 10 and 2000),
  created_at timestamptz not null default now()
);

grant insert on public.contact_messages to anon, authenticated;
grant all on public.contact_messages to service_role;

alter table public.contact_messages enable row level security;

create policy "Visitors can send a contact message"
  on public.contact_messages
  for insert
  to anon, authenticated
  with check (
    char_length(name) between 2 and 100
    and char_length(email) between 5 and 255
    and char_length(subject) between 3 and 150
    and char_length(message) between 10 and 2000
  );