import { Routes, Route } from 'react-router-dom'
import { AppLayout } from './layouts/App'
import { AuthLayout } from './layouts/Auth'
import { CreateNote } from './pages/AppNotes/AppPages/CreateNote'
import { Notes } from './pages/AppNotes/AppPages/Notes'
import { LoginPage } from './pages/Login'
import { RegisterPage } from './pages/Register'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<AuthLayout />}>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>
      <Route path='/app' element={<AppLayout />}>
        <Route path='/app' element={<Notes />}/>
        <Route path='/app/create' element={<CreateNote />} />
        {/* <Route path='/app/config' element={<ConfigPage />} /> */}
      </Route>
    </Routes>
  )
}