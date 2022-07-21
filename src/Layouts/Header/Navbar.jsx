import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

//Slices
import { showTransition } from "../../Features/TransitionHomeSlice"
import { hidePage } from "../../Features/ShowPageSlice"
import { hideMobileMenu } from "../../Features/MobileMenuSlice"
import { motion } from "framer-motion"

//navigations
import MobileNav from "./MobileNav"
import DesktopNav from "./DesktopNav"
import HamburgerMenu from "../../Components/HamburgerMenu"

const Navbar = () => {
  const showMobileMenu = useSelector(
    ({ showMobileMenu }) => showMobileMenu.show,
  )
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    if (location.pathname !== "/") {
      dispatch(showTransition())
    }

    dispatch(hideMobileMenu())

    setTimeout(() => {
      dispatch(hidePage())
    }, 2000)
  }, [location.pathname])

  return (
    <motion.div
      className="navigation"
      key={location.key}
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 2,
      }}
      exit={{
        y: -20,
        transition: {
          ease: "easeOut",
          duration: 1.5,
        },
      }}
    >
      <div className="home-route">
        <NavLink to="/">LEMMY</NavLink>
      </div>
      <HamburgerMenu />
      <DesktopNav />
      {showMobileMenu && <MobileNav />}
    </motion.div>
  )
}

export default Navbar
