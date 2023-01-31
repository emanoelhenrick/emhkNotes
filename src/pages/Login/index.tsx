import { DivContainer, Form } from "./styles";
import { NavLink } from 'react-router-dom'
import { useForm } from "react-hook-form";


export function LoginPage() {
  const { register, handleSubmit } = useForm()

  function formSubmit(data) {
    console.log(data);
    
  }

  return (
    <Form onSubmit={handleSubmit(formSubmit)}>
      <h1>login</h1>
      <input
        type="text"
        placeholder="Username"
        required
        {...register('username')}
      />
      <input
        type="password"
        placeholder="Password"
        required
        {...register('password')}
      />
      <button type="submit">Entrar</button>
      <NavLink to="/register">Cadastro</NavLink>
    </Form>
  )
}