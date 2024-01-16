import React from 'react'
import Register from './Register'
import Login from './Login'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>

      
      <header>
      <Link to="/register">Register</Link>
      <Link to="/login/:user_em">Login</Link>
     
      </header>
      
      <nav>Navabr</nav>

      <section>
        Slider
      </section>


      <section>

        Content
      </section>

<footer>Footer</footer>      
    </div>
  )
}

export default Home
