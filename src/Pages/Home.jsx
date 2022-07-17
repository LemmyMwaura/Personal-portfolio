import { useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"

//Components
import Banner from "../Components/Banner"
import Loader from "../components/Loader"
import Transition from "../Components/Transition"

//Pages
import MindMap from "../Pages/MindMap"
import Projects from "../Pages/Projects"
import Contact from "../Pages/Contact"

import useLocoScroll from "../Hooks/useLocoScroll"

const Home = () => {
  const showLoader = useSelector(({ loader }) => loader.show)
  const showTransition = useSelector(({ transition }) => transition.show)
  const showPageData = useSelector(({ showPage }) => showPage.show)
  const location = useLocation()
  const scrollRef = useRef(null)
  const [locoScrollRef] = useLocoScroll(
    scrollRef,
    location.pathname,
    showPageData,
    true,
  )

  useEffect(() => {
    if (!showPageData) return

    const setInterval = setTimeout(() => {
      locoScrollRef.current?.update()
    }, 300)

    return () => clearTimeout(setInterval)
  }, [locoScrollRef.current, showPageData])

  return (
    <div>
      {showLoader ? (
        <Loader />
      ) : (
        <div className="container">
          {showTransition && <Transition pagename={"HOME"} />}
          {showPageData && (
            <div
              ref={scrollRef}
              data-scroll-container
              className=""
              id="scroller"
            >
              <div className="banner-wrapper">
                <Banner />
              </div>
              <MindMap />
              <Projects />
              <Contact />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Home
