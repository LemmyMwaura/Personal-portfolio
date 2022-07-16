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
    if (showPageData) {
      setTimeout(() => {
        locoScrollRef.current?.update()
      }, 100)
    }

    return () => clearTimeout()
  }, [locoScrollRef.current, showPageData])

  return (
    <div>
      {showTransition && <Transition pagename="MIND-MAP" />}
      {showPageData && (
        <div ref={mindRef} data-scroll-section className="mindmap-container ">
          Mind-map
        </div>
      )}
    </div>
  )
}

export default MindMap
