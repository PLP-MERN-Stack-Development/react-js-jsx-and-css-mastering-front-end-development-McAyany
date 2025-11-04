import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <div className="p-6">
      <nav className="flex gap-4 mb-4">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        <Link to="/about" className="text-blue-600 hover:underline">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
