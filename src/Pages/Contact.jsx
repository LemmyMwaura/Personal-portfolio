import { useEffect, useState, useRef } from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { motion } from "framer-motion"

//components
import Transition from "../Components/Transition"
import useLocoScroll from "../Hooks/useLocoScroll"
import exitVariant from "../Animations/Variants/ExitVariants"

const Contact = () => {
  const showPageData = useSelector(({ showPage }) => showPage.show)
  const [showTransition, setShowTransition] = useState(false)
  const [atContactRoute, setAtContactRoute] = useState(false)
  const location = useLocation()
  const contactRef = useRef(null)
  const [locoScrollRef] = useLocoScroll(
    contactRef,
    location.pathname,
    showPageData,
    false,
  )

  useEffect(() => {
    if (location.pathname !== "/") {
      setShowTransition(true)
      setAtContactRoute(true)
    }
  }, [location.pathname])

  useEffect(() => {
    if (!showPageData) return

    const initLocoScroll = setTimeout(() => {
      locoScrollRef.current?.update()
    }, 300)

    return () => clearTimeout(initLocoScroll)
  }, [locoScrollRef.current, showPageData])

  return (
    <div>
      {showTransition && <Transition pagename="Contact" />}
      {showPageData && (
        <motion.div variants={atContactRoute ? exitVariant : ""} exit="exit">
          <section
            ref={contactRef}
            style={{
              paddingTop: atContactRoute ? "4rem" : "2rem",
            }}
            data-scroll-section
            className="contact-container data-scroll-section"
          >
            Contact
          </section>
        </motion.div>
      )}
    </div>
  )
}

export default Contact
