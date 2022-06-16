import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { User } from './pages/User'
import { Repositories } from './pages/Repositories'
import { Contact } from './pages/Contact'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<User />} />
      <Route path="/repositories" element={<Repositories />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
