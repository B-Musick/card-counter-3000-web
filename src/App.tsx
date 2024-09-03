import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Count from './pages/Count';
import Flash from './pages/Flash';
import BasicStrategy from './pages/BasicStrategy';

function App() {
  return (
    <>
      <Router> 
        <nav className="flex justify-evenly w-full border-b">
          <NavLink to="/" className="bg-red-200 w-full text-center hover:bg-red-300 p-1">Home</NavLink>
          <NavLink to="/count" className="bg-red-200 w-full text-center hover:bg-red-300 p-1">Count</NavLink>
          <NavLink to="/flash" className="bg-red-200 w-full text-center hover:bg-red-300 p-1">Flash</NavLink>
          <NavLink to="/strategy" className="bg-red-200 w-full text-center hover:bg-red-300 p-1">Basic Strategy</NavLink>
        </nav>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="count" element={<Count />} />
          <Route path="flash" element={<Flash />}/>
          <Route path="strategy" element={<BasicStrategy />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
