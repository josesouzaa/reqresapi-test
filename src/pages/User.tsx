import { Link, useParams } from 'react-router-dom'

import { useGetUser } from '../hooks/useGetUser'
import { useGetRepos } from '../hooks/useGetRepos'

import { RepoCard } from '../components/RepoCard'

export function User() {
  const { id } = useParams()

  const { data: user, isError, isLoading } = useGetUser(Number(id))

  const { data: repos } = useGetRepos('josesouzaa')

  if (isLoading)
    return (
      <section className="grid place-items-center w-screen h-screen">
        <p>Carregando...</p>
      </section>
    )

  if (isError && !user)
    return (
      <section className="grid place-items-center w-screen h-screen">
        <p>Algo deu errado!</p>
      </section>
    )

  if (user)
    return (
      <section className="mx-auto max-w-5xl px-4">
        <div className="flex items-center gap-4 py-4 w-full">
          <img
            className="rounded-full"
            src={user.avatar}
            alt={`${user.first_name} ${user.last_name}`}
          />

          <div className="flex-grow">
            <h1 className="font-semibold text-xl">{`${user.first_name} ${user.last_name}`}</h1>

            <p>{user.email}</p>
          </div>

          <Link className="self-start hover:underline transition" to="/">
            Voltar
          </Link>
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <h2 className="font-semibold text-2xl mb-4">Repositories</h2>

          {repos?.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      </section>
    )
}
