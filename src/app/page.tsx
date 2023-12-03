'use client'

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { SyntheticEvent, useState } from "react"

export default function Home() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [invalidLogin, setInvalidLogin] = useState<boolean>(false)
  const router = useRouter()

  async function doLogin(event: SyntheticEvent) {
    event.preventDefault()

    const result = await signIn('credentials',
      { email, password, redirect: false })
    
    if (result?.error) {
      if (result.error === 'CredentialsSignin') {
        setInvalidLogin(true)
      } else {
        console.error(result)
      }

      return
    }

    router.replace('/admin')
  }

  return (
    <form onSubmit={doLogin}>
      <p>
        <input 
          type="text" name="email" placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>
      <p>
        <input 
          type="password" name="password" placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>
      {invalidLogin && <p>Login inválido!</p>}
      <p className="formButtons">
        <button type="submit">Entrar</button>
      </p>
    </form>
  )
}
