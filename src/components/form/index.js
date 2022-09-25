import React, { useState } from 'react'
import './form.scss'
import Botao from '../buttons'

export default function Form({ users, setUsers }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  function addUser(event) {
    event.preventDefault()
    console.log(name, email)
    setUsers(content => [...content, { name, email }])
    setName('')
    setEmail('')
  }
  return (
    <section>
      <form className="form" onSubmit={addUser}>
        <label htmlFor="name_input">Nome</label>
        <input
          value={name}
          onChange={event => {
            setName(event.target.value)
          }}
          id="name-input"
          type="text"
          placeholder="Nome Completo"
          required
        />
        <label htmlFor="email_input">E-mail</label>
        <input
          value={email}
          onChange={event => {
            setEmail(event.target.value)
          }}
          id="email_input"
          type="text"
          placeholder="E-mail"
          required
        />
        <Botao type={'submit'}>Adicionar</Botao>
      </form>
    </section>
  )
}
