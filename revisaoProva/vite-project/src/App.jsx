
import './App.css'
import { BrowserRouter as Routes, Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cep from './pages/Cep'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/busca" element={<Cep/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
