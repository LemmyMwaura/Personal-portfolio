const menu = {
  initial: {
    y: -200,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.075, 0.82, 0.165, 1],
      duration: 0.5,
      delaychildren: 0.5,
      staggerChildren: 0.2,
    },
  },
  exit: {
    y: -200,
    transition: {
      ease: 'easeOut',
      duration: 1,
    },
  },
}

const links = {
  initial: {
    y: 200,
    opacity:0,
  },
  animate: {
    y: 0,
    opacity:1,
    transition:{
      duration: 0.5,
      ease: 'easeInOut',
    }
  },
}

const icon = {
  initial: {opacity: 0},
  animate: {opacity: 1, transition: {delay: 0.5, duration: 0.5}},
}

const MobileMenuVariants = {
  menu,
  links,
  icon,
}

export default MobileMenuVariants
