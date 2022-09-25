import './list.scss'
export default function List({ users }) {
  return (
    <section className="table">
      <table>
        <thead>
          <th>Nome</th>
          <th>E-mail</th>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
