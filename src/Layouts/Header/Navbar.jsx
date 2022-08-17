import { useRef } from "react"
import { useLocation } from "react-router-dom"
import { motion } from "framer-motion"

//navigations
import MobileNav from "./MobileNav"
import DesktopNav from "./DesktopNav"

const Navbar = () => {
  const location = useLocation()
  const mobileMenuRef = useRef(null)

  const showMenu = () => {
    mobileMenuRef.current.style.transform = "translateY(0%)"
  }

  const hideMenu = () => {
    mobileMenuRef.current.style.transform = "translateY(-100%)"
  }

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
    >
      <div className="home-route">
        <a href="#">LEMMY</a>
      </div>
      <button
        className={`menu`}
        onClick={() => {
          showMenu()
        }}
      >
        MENU
      </button>
      <DesktopNav />
      <MobileNav ref={mobileMenuRef} hideMenu={hideMenu}></MobileNav>
    </motion.div>
  )
}

export default Navbar
