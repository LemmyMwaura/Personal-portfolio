import { useLocation } from "react-router-dom"
import { motion } from "framer-motion"

const DesktopNav = () => {
  const location = useLocation()

  return (
    <motion.div
      key={location.key}
      className="desktop-nav"
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 2,
      }}
    >
      <div className="nav-group">
        <a href="#mind-map">MIND-MAP</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>
      </div>
    </motion.div>
  )
}

export default DesktopNav
