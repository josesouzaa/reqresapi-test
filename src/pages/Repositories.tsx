import { useState } from 'react'

import { useGetRepos } from '../hooks/useGetRepos'

import { RepoCard } from '../components/RepoCard'

export function Repositories() {
  const [userValue, setUserValue] = useState('')

  const { data: repos } = useGetRepos(userValue)

  return (
    <section className="mx-auto max-w-5xl p-4">
      <div className="flex flex-col gap-2 items-start">
        <label htmlFor="user" className="text-xl font-semibold">
          Github User
        </label>
        <input
          className="bg-slate-400 text-slate-100 placeholder:text-slate-100 p-2 rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-700/70 transition"
          type="text"
          id="user"
          placeholder="Type Github User"
          required
          value={userValue}
          onChange={(e) => setUserValue(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <h2 className="font-semibold text-2xl mb-4">Repositories</h2>

        {repos?.length &&
          repos?.map((repo) => <RepoCard key={repo.id} repo={repo} />)}
      </div>
    </section>
  )
}
