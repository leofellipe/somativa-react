import { useState } from "react";
import styles from '../login.module.css'

function Login() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const dataBase = [
    {
      user: 'mytest2@test.com',
      password: 12345
    }
  ]

  const handleSubmit = () => {
    if (dataBase[0].user == user && dataBase[0].password == password) {
      setMessage('Acessado com sucesso!')
    } else {
      setMessage('Usuário ou senha incorretos!')
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div>
          <p style={{ fontSize: '25px', fontWeight: 'bolder', color: 'white' }}>Login</p>
        </div>
        <div className={styles.text}>
          <label>E-mail:</label>
          <br />
          <input type="text" name="email" id="email" onChange={(e) => setUser(e.target.value)} />
        </div>
        <div className={styles.text}>
          <label>Password:</label>
          <br />
          <input type="text" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>Acessar</button>
        </div>
        <div>
          <p>{message}</p>
        </div>
      </div >
    </div >
  )
}

export default Login
