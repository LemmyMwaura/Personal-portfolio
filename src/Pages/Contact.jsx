import { useEffect, useState, useRef } from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"

//components
import Transition from "../Components/Transition"
import useLocoScroll from "../Hooks/useLocoScroll"

const Contact = () => {
  const showPageData = useSelector(({ showPage }) => showPage.show)
  const [showTransition, setShowTransition] = useState(false)
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
    }
  }, [location.pathname])

  useEffect(() => {
    if (!showPageData) return

    const setInterval = setTimeout(() => {
      locoScrollRef.current?.update()
    }, 300)

    return () => clearTimeout(setInterval)
  }, [locoScrollRef.current, showPageData])

  return (
    <div>
      {showTransition && <Transition pagename="Contact" />}
      {showPageData && (
        <>
          <div
            ref={contactRef}
            data-scroll-section
            className="contact-container data-scroll-section"
          >
            Contact
          </div>
        </>
      )}
    </div>
  )
}

export default Contact
