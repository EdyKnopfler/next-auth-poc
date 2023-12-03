export default function Home() {
  return (
    <form>
      <p>
        <input type="text" name="email" placeholder="E-mail" />
      </p>
      <p>
        <input type="password" name="password" placeholder="Senha" />
      </p>
      <p className="formButtons">
        <button type="submit">Entrar</button>
      </p>
    </form>
  )
}
