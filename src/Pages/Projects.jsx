import { useEffect, useState, useRef } from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"

//components
import Transition from "../Components/Transition"
import useLocoScroll from "../Hooks/useLocoScroll"

const Projects = () => {
  const showPageData = useSelector(({ showPage }) => showPage.show)
  const [showTransition, setShowTransition] = useState(false)
  const location = useLocation()
  const projectsRef = useRef(null)
  const [locoScrollRef] = useLocoScroll(
    projectsRef,
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
      {showTransition && <Transition pagename="Projects" />}
      {showPageData && (
        <>
          <div
            ref={projectsRef}
            data-scroll-section
            className="projects-container data-scroll-section"
          >
            Projects
          </div>
        </>
      )}
    </div>
  )
}

export default Projects
