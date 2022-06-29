import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

//Components
import Home from '../../Pages/Home'
import Contact from '../../Pages/Contact'
import MindMap from '../../Pages/MindMap'
import Projects from '../../Pages/Projects'

function Header() {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home/>} />
        <Route path="/mind-map" element={<MindMap/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </AnimatePresence>
  )
}

export default Header
