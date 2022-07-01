import {NavLink, useLocation} from 'react-router-dom'
import {motion} from 'framer-motion'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'

//Slices
import {showTransition} from '../../Features/TransitionHomeSlice'
import {hidePage} from '../../Features/ShowPageSlice'

const Navbar = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const countDelay = () => (location.pathname === '/' ? 2 : 2)

  useEffect(() => {
    if (location.pathname !== '/') {
      dispatch(showTransition())
    }

    setTimeout(() => {
      dispatch(hidePage())
    }, 2000)
  }, [location.pathname])

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
