import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"

//components
import Transition from "../Components/Transition"
import useLocoScroll from "../Hooks/useLocoScroll"

const MindMap = () => {
  const showPageData = useSelector(({ showPage }) => showPage.show)
  const [showTransition, setShowTransition] = useState(false)
  const location = useLocation()
  const mindRef = useRef(null)
  const [locoScrollRef] = useLocoScroll(
    mindRef,
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
      {showTransition && <Transition pagename="MIND-MAP" />}
      {showPageData && (
        <div
          ref={mindRef}
          data-scroll-section
          data-scroll-speed="-1"
          className="mindmap-container "
        >
          <div className="mindmap-content">
            
          </div>
        </div>
      )}
    </div>
  )
}

export default MindMap
