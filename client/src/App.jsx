import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import About from './pages/About'
function App() {
  return (
    <BrowserRouter>
    <Header />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/projects" element={<Projects/>}/>
           
        </Routes>
    </BrowserRouter>
  )
}

export default App