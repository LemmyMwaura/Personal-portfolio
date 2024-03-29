import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import BannerVariants from "../Animations/Variants/BannerVariants"
import SvgArrow from "../Assets/SVG/Arrow.jsx"

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false)
  const { banner } = BannerVariants

  useEffect(() => {
    const marqueeTimeout = setTimeout(() => {
      setPlayMarquee(true)
    }, 2000)

    return () => clearTimeout(marqueeTimeout)
  }, [])

  return (
    <motion.div
      data-scroll-section
      className="banner "
      variants={banner}
      animate="animate"
      exit="exit"
    >
      <BannerRowTop title={"Full-Stack"} />
      <BannerRowCenter
        title={"Stephen-Lemmy-Mwaura"}
        playMarquee={playMarquee}
      />
      <BannerRowBottom title={"Developer"} />
      <BannerFooter />
    </motion.div>
  )
}

export const AnimatedLetters = ({ title, disabled }) => {
  const { banner, letterAnimations } = BannerVariants

  return (
    <motion.span
      className="row-title"
      variants={disabled ? null : banner}
      initial="initial"
      animate="animate"
    >
      {[...title].map((letter, index) => (
        <motion.span
          className="row-letter"
          key={index}
          variants={letterAnimations}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  )
}

const BannerRowTop = ({ title }) => {
  return (
    <div className="banner-row">
      <div className="banner-row-col ">
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        className="banner-row-col secondary"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
      >
        <span className="banner-top--info">
          I am Specialised in setting up the foundation of your brand/company and
          setting you up for success.
        </span>
      </motion.div>
    </div>
  )
}

const BannerRowBottom = ({ title }) => {
  return (
    <div className="banner-row banner-bottom">
      <div className="svg-wrapper">
        <SvgArrow />
      </div>
      <div className="banner-bottom-wrapper">
        <AnimatedLetters title={title} />
      </div>
    </div>
  )
}

const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <div
      className={`banner-row banner-center marquee ${playMarquee && "animate"}`}
    >
      <div className="marquee__inner">
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </div>
    </div>
  )
}

const BannerFooter = () => {
  const { banner2, letterAnimations } = BannerVariants

  return (
    <motion.div className="banner-footer">
      <motion.div
        className="right"
        variants={banner2}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.a
          variants={letterAnimations}
          href="https://github.com/LemmyMwaura"
          target="_blank"
        >
          Github
        </motion.a>
        <motion.a
          variants={letterAnimations}
          href="https://www.linkedin.com/in/lemmymwaura/"
          target="_blank"
        >
          Linkedin
        </motion.a>
      </motion.div>
      <motion.div
        className="left"
        variants={banner2}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.a variants={letterAnimations} disabled>
          2022
        </motion.a>
      </motion.div>
    </motion.div>
  )
}

export default Banner
