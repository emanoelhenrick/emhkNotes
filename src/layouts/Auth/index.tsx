import { InputAuth } from "../../components/InputAuth";
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
      <>
        <InputAuth>
        <Outlet />
        </InputAuth>
      </>
  )
}