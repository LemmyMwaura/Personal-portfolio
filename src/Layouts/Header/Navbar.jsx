import {NavLink, useLocation} from 'react-router-dom'
import {motion} from 'framer-motion'

const Navbar = () => {
  const location = useLocation()
  const countDelay = () => (location.pathname === '/' ? 6 : 3)

  return (
    <motion.div
      key={location.key}
      className="primary-nav"
      initial={{y: -200, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: countDelay(),
      }}
      exit={{
        y: -20,
        transition: {
          ease: 'easeOut',
          duration: 1.5,
        },
      }}
    >
      <NavLink to="/">LEMMY</NavLink>
      <div className="nav-group">
        <NavLink to="/mind-map">MIND-MAP</NavLink>
        <NavLink to="/projects">PROJECTS</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </div>
    </motion.div>
  )
}

export default Navbar
