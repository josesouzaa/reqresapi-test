import { useQuery } from 'react-query'

interface User {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

async function getUser(id: number): Promise<User> {
  const req = await fetch(`https://reqres.in/api/users/${id}`)
  const res = await req.json()
  return res.data
}

export function useGetUser(id: number) {
  return useQuery(['users', id], () => getUser(id))
}
