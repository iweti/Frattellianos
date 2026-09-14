import { Eyebrow } from "@/components/ui/eyebrow";
import { listUsers } from "@/services/user.service";

export default async function UsersPage() {
  const users = await listUsers();

  return (
    <section className="max-w-[760px]">
      <Eyebrow>Painel</Eyebrow>
      <h1 className="mb-[0.67em] text-balance font-serif text-[clamp(2.2rem,6vw,4rem)] leading-none font-normal">
        Usuários
      </h1>
      {users.length ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p className="text-base leading-7 text-muted">Nenhum usuário cadastrado.</p>
      )}
    </section>
  );
}
