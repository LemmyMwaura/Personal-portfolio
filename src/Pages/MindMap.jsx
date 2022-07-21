import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

//components
import Transition from "../Components/Transition"
import useLocoScroll from "../Hooks/useLocoScroll"

//svg + icons + variants
import Underline from "../Assets/SVG/Underline"
import { GiArrowDunk } from "react-icons/gi"
import exitVariant from "../Animations/Variants/ExitVariants"

const MindMap = () => {
  const showPageData = useSelector(({ showPage }) => showPage.show)
  const [showTransition, setShowTransition] = useState(false)
  const [atMindRoute, setAtMindRoute] = useState(false)
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
      setAtMindRoute(true)
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
      {showTransition && <Transition pagename="MIND-MAP" />}
      {showPageData && (
        <motion.div variants={atMindRoute ? exitVariant : ""} exit="exit">
          <section
            ref={mindRef}
            style={{
              paddingTop: atMindRoute ? "4rem" : "2rem",
            }}
            data-scroll-section
            data-scroll-speed="-1"
            className="mindmap-container "
          >
            <div className="mindmap-content">
              <h3>About</h3>
              <div className="desc-wrapper">
                <div className="desc">
                  <div className="details detail-1">
                    <span> - </span>
                    <span id="content">
                      Hello! My name is Brittany and I enjoy creating things
                      that live on the internet. My interest in web development
                      started back in 2012 when I decided to try editing custom
                      Tumblr themes — turns out hacking together a custom reblog
                      button taught me a lot about HTML & CSS! Fast-forward to
                      today, and I’ve had the privilege of working at an
                      advertising agency, a start-up, a huge corporation, and a
                      student-led design studio.
                    </span>
                  </div>
                  <div className="details detail-2">
                    <span> - </span>
                    <span id="content">
                      My main focus these days is building accessible, inclusive
                      products and digital experiences at Upstatement for a
                      variety of clients. I also recently launched a course that
                      covers everything you need to build a web app with the
                      Spotify API using Node & React.
                    </span>
                  </div>
                </div>
                <div className="underline-wrapper">
                  <Underline />
                </div>
              </div>
            </div>
            <div className="about-footer">
              <div className="about-footer-content">
                <div className="item item-1">
                  <h4>Mobile and Web Design</h4>
                  <p>
                    I always strive to create memorable experiences that are
                    aesthetically appealing, functional and distinctive. Whether
                    it's inspiring marketing websites, convincing e-commerce
                    sites or apps that are truly beneficial to users.
                  </p>
                </div>
                <div className="item item-2">
                  <h4>Art Direction</h4>
                  <p>
                    With my extensive experience in creating everything digital,
                    I'm able to establish a strong foundation in the choice of
                    typography, color and photography to ensure that users
                    perceive the brand and presence in a consistent way.
                  </p>
                </div>
                <div className="item item-3">
                  <h4>Visual Design</h4>
                  <p>
                    By using my expertise as a digital designer, I make sure
                    that a visual identity can be used to its full extent
                    throughout all touchpoints in an accessible and
                    user-friendly way. Not just timeless, but usable in todays
                    digital world.
                  </p>
                </div>
                <div className="item item-4">
                  <GiArrowDunk className="arrow-icon" />
                  <button className="btn btn-about">
                    <Link to="/projects">Projects</Link>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      )}
    </div>
  )
}

export default MindMap
