import { Link } from 'react-router-dom'

interface IPeopleCardProps {
  id: number
  email: string
  firstName: string
  lastName: string
  avatar: string
}

export function PeopleCard({
  id,
  avatar,
  email,
  firstName,
  lastName
}: IPeopleCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <img
        className="rounded-full"
        src={avatar}
        alt={`${firstName} ${lastName}`}
      />
      <Link
        className="font-bold hover:text-slate-600 hover:underline transition duration-300"
        to={`/user/${id}`}
      >{`${firstName} ${lastName}`}</Link>
      <p>{email}</p>
    </div>
  )
}
