'use client'

import { signOut } from "next-auth/react";
import { SyntheticEvent } from "react";

export default function Admin() {
  async function doLogout(event: SyntheticEvent) {
    event.preventDefault()
    await signOut()
  }

  return (
    <form onSubmit={doLogout}>
      <p>Área protegida</p>
      <p className="formButtons"><button type="submit">Sair</button></p>
    </form>
  )
}