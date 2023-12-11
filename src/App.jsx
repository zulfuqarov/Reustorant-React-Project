import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import './index.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
