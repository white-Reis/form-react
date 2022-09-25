import { useState } from 'react'
import './App.scss'
import Form from './components/form'
import List from './components/lista'

function App() {
  const [users, setUsers] = useState([
    {
      name: 'Yasmin',
      email: 'gostosa@linda.temamo'
    }
  ])
  return (
    <div>
      <Form setUsers={setUsers} />
      <List users={users} />
    </div>
  )
}

export default App
