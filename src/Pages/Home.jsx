import { useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { motion } from "framer-motion"

//Components
import Banner from "../Components/Banner"
import Loader from "../Components/Loader"
import Transition from "../Components/Transition"
import Footer from "../Layouts/Footer/Footer"

//Pages
import MindMap from "../Pages/MindMap"
import Projects from "../Pages/Projects"
import Contact from "../Pages/Contact"
import exitVariant from "../Animations/Variants/ExitVariants"

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

    const initLocoScroll = setTimeout(() => {
      locoScrollRef.current?.update()
    })

    return () => clearTimeout(initLocoScroll)
  }, [locoScrollRef.current, showPageData])

  return (
    <div>
      {showLoader ? (
        <Loader />
      ) : (
        <div className="container">
          {showTransition && <Transition pagename={"HOME"} />}
          {showPageData && (
            <motion.div variants={exitVariant} exit="exit">
              <section ref={scrollRef} data-scroll-container id="scroller">
                <div className="banner-wrapper">
                  <Banner />
                </div>
                <MindMap />
                {/* <Projects /> */}
                <Contact />
                <Footer />
              </section>
            </motion.div>
          )}
        </div>
      )}
    </div>
  )
}

export default Home
