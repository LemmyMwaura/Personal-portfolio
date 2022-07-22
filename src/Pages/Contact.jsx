import { useEffect, useState, useRef } from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { motion } from "framer-motion"

//components
import Transition from "../Components/Transition"
import useLocoScroll from "../Hooks/useLocoScroll"
import exitVariant from "../Animations/Variants/ExitVariants"

//icons
import { BiCopy } from "react-icons/bi"
import { FaGithubAlt } from "react-icons/fa"
import { SiHashnode, SiStackoverflow } from "react-icons/si"
import { GrLinkedinOption } from "react-icons/gr"
import { BsTwitter } from "react-icons/bs"
import { AiOutlineMedium } from "react-icons/ai"

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

  const handleCopy = (email) => {
    navigator.clipboard.writeText(email)
  }

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
            <div className="contact-content">
              <h3>Contact</h3>
              <div className="contact-wrapper">
                <p className="info">
                  <span> - </span>
                  <span>
                    You can reach out/write to me via the Emails below, i'll
                    respond as soon as i can:
                  </span>
                </p>

                <div className="emails">
                  <div className="email-wrapper">
                    <span className="email-value">lemminton@gmail.com</span>
                    <button
                      className="btn-copy"
                      onClick={() => handleCopy("lemminton@gmail.com")}
                    >
                      <BiCopy className="copy-tooltip" />
                    </button>
                  </div>
                  <div className="email-wrapper">
                    <span className="email-value">
                      lemmymwauracodes@gmail.com
                    </span>
                    <button
                      className="btn-copy"
                      onClick={() => handleCopy("lemmymwauracodes@gmail.com")}
                    >
                      <BiCopy className="copy-tooltip" />
                    </button>
                  </div>
                </div>
                <p className="info">
                  <span> - </span>
                  <span>
                    Although i'm not active on my socials, you can still reach
                    me via the following links:
                  </span>
                </p>
                <div className="social-links">
                  <a href={"https://github.com/LemmyMwaura"} target="_blank">
                    <FaGithubAlt className="social-icon" />
                  </a>
                  <a href={"https://hashnode.com/@LemmyM"} target="_blank">
                    <SiHashnode className="social-icon" />
                  </a>
                  <a
                    href={"https://www.linkedin.com/in/lemmymwaura/"}
                    target="_blank"
                  >
                    <GrLinkedinOption className="social-icon" />
                  </a>
                  <a href={"https://twitter.com/lemmymwaura8"} target="_blank">
                    <BsTwitter className="social-icon" />
                  </a>
                  <a href={"https://medium.com/@Lemmymwaura8"} target="_blank">
                    <AiOutlineMedium className="social-icon" />
                  </a>
                  <a href={"https://stackoverflow.com/users/14240901/lemmy-mwaura"} target="_blank">
                    <SiStackoverflow className="social-icon" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      )}
    </div>
  )
}

export default Contact
