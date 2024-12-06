import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Router>
        <header>
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Home/>  } />
          <Route path="/login" element={<Login />  } />
          <Route path="/register" element={<Register /> } />
        </Routes>
      </Router>
      </div>
   
    </>
  )
}

export default App
