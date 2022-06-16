import { useQuery } from 'react-query'

interface Repo {
  id: number
  name: string
  html_url: string
  language: string
  owner: {
    login: string
    avatar_url: string
    url: string
  }
}

async function getRepos(user: string): Promise<Repo[]> {
  const req = await fetch(`https://api.github.com/users/${user}/repos`)
  const res = await req.json()
  return res
}

export function useGetRepos(user: string) {
  return useQuery(['repos', user], () => getRepos(user))
}
