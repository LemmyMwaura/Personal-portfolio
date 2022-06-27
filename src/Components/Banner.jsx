import {useState, useEffect} from 'react'
import {motion} from 'framer-motion'

const banner = {
  animate: {
    transition: {
      delaychildren: 0.4,
      staggerChildren: 0.1,
    },
  },
}

const letterAnimations = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
      duration: 1,
    },
  },
}

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true)
    }, 2000)
  }, [])

  return (
    <motion.div className="banner" variants={banner}>
      <BannerRowTop title={'Lemmy'} />
      <BannerRowCenter
        title={'Full-Stack Developer'}
        playMarquee={playMarquee}
      />
      <BannerRowBottom title={'Mwaura'} />
    </motion.div>
  )
}

const AnimatedLetters = ({title, disabled}) => {
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

const BannerRowTop = ({title}) => {
  return (
    <div className="banner-row">
      <div className="banner-row-col ">
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        className="banner-row-col secondary"
        initial={{opacity: 0, y: 80}}
        animate={{opacity: 1, y: 0}}
        transition={{
          ease: 'easeInOut',
          duration: 1,
          delay: 0.4,
        }}
      >
        <span className="banner-top--info">
          We are specialised in setting up the foundation of your brand and
          setting you up for success.
        </span>
      </motion.div>
    </div>
  )
}

const BannerRowBottom = ({title}) => {
  return (
    <div className="banner-row">
      <div>
        <AnimatedLetters title={title} />
      </div>
    </div>
  )
}

const BannerRowCenter = ({title, playMarquee}) => {
  return (
    <div className={`banner-row marquee ${playMarquee && 'animate'}`}>
      <div className="marquee__inner">
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </div>
    </div>
  )
}

export default Banner
