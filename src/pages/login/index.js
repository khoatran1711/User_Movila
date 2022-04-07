import react from 'react'
import './styles.scss'

function App() {
  return (
    <div className="App">
      <form className="loginForm">
        <h1>Login</h1>
        <div className="input-container">
          <label>
            Username 
            <input type="text" name="username" required/>
          </label>
        </div>
        <div className="input-container">
          <label>
            Password 
            <input type="password" name="password" required/>
          </label>
        </div>
        <div className="submit-container">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default App
