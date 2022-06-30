import {NavLink, useLocation} from 'react-router-dom'
import {motion} from 'framer-motion'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {showTransition} from '../../Features/TransitionHomeSlice'

const Navbar = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const show = useSelector(({transition}) => transition.show)
  const countDelay = () => (location.pathname === '/' ? 3 : 3)

  useEffect(() => {
    if (show) return
    if (location.pathname !== '/') {
      dispatch(showTransition())
    }
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
