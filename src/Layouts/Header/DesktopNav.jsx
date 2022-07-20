import { motion } from "framer-motion"
import NavLinks from "./NavLinks"
import { useLocation } from "react-router-dom"

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
      exit={{
        y: -20,
        transition: {
          ease: "easeOut",
          duration: 1.5,
        },
      }}
    >
      <NavLinks />
    </motion.div>
  )
}

export default DesktopNav
