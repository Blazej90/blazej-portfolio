-- Atomowe zwiększenie licznika likeów (bez wyścigu read-then-update).
-- Wymaga, aby kolumna likes.id była kluczem głównym lub miała ograniczenie UNIQUE.
create or replace function public.increment_likes(like_id text default 'global')
returns bigint
language sql
security definer
set search_path = public
as $$
  insert into likes (id, count)
  values (like_id, 1)
  on conflict (id) do update set count = likes.count + 1
  returning count::bigint;
$$;

revoke all on function public.increment_likes(text) from public;
grant execute on function public.increment_likes(text) to anon, authenticated;
