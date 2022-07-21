import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"
import { useDispatch } from "react-redux/es/hooks/useDispatch"

// icon
import { BiX } from "react-icons/bi"

//slice
import { hideMobileMenu } from "../../Features/MobileMenuSlice"

//animations
import MobileMenuVariants from "../../Animations/Variants/MobileMenu"

const MobileNav = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const { menu, links, icon } = MobileMenuVariants

  return (
    <motion.div
      className="mobile-nav"
      key={location.key}
      variants={menu}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div className="icon-wrapper" variants={icon}>
        <BiX
          className="mobile-menu-icon"
          onClick={() => dispatch(hideMobileMenu())}
        />
      </motion.div>
      <motion.div className="nav-group" variants={menu}>
        <motion.div className="wrapper" variants={links}>
          <NavLink to="/mind-map">MIND-MAP</NavLink>
        </motion.div>
        <motion.div className="wrapper" variants={links}>
          <NavLink to="/projects">PROJECTS</NavLink>
        </motion.div>
        <motion.div className="wrapper" variants={links}>
          <NavLink to="/contact">CONTACT</NavLink>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default MobileNav
