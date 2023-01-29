import { Outlet } from 'react-router-dom'
import { AppNotes } from '../../pages/AppNotes'

export function AppLayout() {
  return (
        <AppNotes>
          <Outlet />
        </AppNotes>
  )
}