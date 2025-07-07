import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

// | Element       | Vazifasi                         |
// | ------------- | -------------------------------- |
// | BrowserRouter | Routingni faollashtiradi         |
// | Routes        | Barcha yo‘nalishlarni yig‘adi    |
// | Route         | Bitta sahifa va yo‘l             |
// | Link          | Sahifa o‘tish tugmasi            |
// | NavLink       | Faol sahifani ajratib ko‘rsatish |
// | useNavigate   | Programmatik o‘tish              |
// | useParams     | URL dan dinamik ma’lumot olish   |
// | useLocation   | Hozirgi URL ma’lumotlari         |
// | Outlet        | Nested sahifa ko‘rsatish         |
// | Navigate      | Avtomatik yo‘naltirish           |


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
