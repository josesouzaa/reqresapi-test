import { useState } from 'react'

import { Link } from 'react-router-dom'

import { useGetUser } from '../hooks/useGetUser'

import { PeopleCard } from '../components/PeopleCard'

export function Home() {
  const [currentUserId, setCurrentUserId] = useState(1)

  const { data: user, isError, isLoading } = useGetUser(currentUserId)

  function Prev() {
    if (currentUserId > 1) setCurrentUserId((prev) => prev - 1)
    else return
  }

  function Next() {
    setCurrentUserId((prev) => prev + 1)
  }

  if (isLoading)
    return (
      <section className="flex flex-col items-center justify-center w-screen p-4">
        <p>Carregando...</p>
      </section>
    )

  if (isError)
    return (
      <section className="flex flex-col items-center justify-center w-screen p-4">
        <p>Algo deu errado!</p>
        <Link className="hover:underline transition" to="/">
          Tentar novamente
        </Link>
      </section>
    )

  if (user === undefined)
    return (
      <section className="flex flex-col items-center justify-center w-screen p-4">
        <p>Algo deu errado!</p>
        <Link className="hover:underline transition" to="/">
          Tentar novamente
        </Link>
      </section>
    )

  if (user)
    return (
      <section className="flex flex-col items-center justify-center w-screen p-4">
        <PeopleCard
          id={user.id}
          email={user.email}
          avatar={user.avatar}
          firstName={user.first_name}
          lastName={user.last_name}
        />

        <div className="flex gap-4 mt-8">
          <button
            className="bg-slate-600 text-slate-100 px-4 py-2 rounded"
            onClick={Prev}
          >
            Prev
          </button>
          <button
            className="bg-slate-600 text-slate-100 px-4 py-2 rounded"
            onClick={Next}
          >
            Next
          </button>
        </div>
      </section>
    )
}
