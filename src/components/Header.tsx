import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="w-full flex justify-center items-center mx-auto py-4 bg-slate-600 text-slate-100">
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/repositories">Repositories</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
