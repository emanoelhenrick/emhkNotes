import { Form } from './styles'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export function RegisterPage() {

  const { register, handleSubmit } = useForm()

  function formSubmit(data: any){
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(formSubmit)}>
        <h1>Cadastro</h1>
        <input
          type="text"
          placeholder="Username"
          {...register('username')}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          {...register('email')}
          required
        />
        <input
          type="password"
          placeholder="Password"
          {...register('password')}
          required
        />
        <button type='submit'>Cadastrar</button>

        <NavLink to="/">Login</NavLink>
        
    </Form>
  )
}