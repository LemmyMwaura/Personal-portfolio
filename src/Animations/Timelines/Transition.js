import gsap from 'gsap'

const showMenu = (main, sec, name) => {
  gsap
    .timeline()
    .to([sec.current, main.current], {
      height: '100%',
      duration: 0.8,
      ease: 'power3.inOut',
      stagger: {
        amount: 0.2,
      },
    })
    .to(
      name.current,
      {opacity: 1, duration: 0.4, ease: 'power3.inOut'},
      '-0.4<',
    )
}

const hideMenu = (main, sec, name) => {
  gsap
    .timeline({
      onComplete: () => {
        gsap.to([main.current, sec.current, name.current], {
          css: {display: 'none'},
        })
      },
    })
    .to([main.current, sec.current], {
      delay: 3,
      duration: 0.8,
      height: 0,
      ease: 'power3.inOut',
      stagger: {
        amount: 0.07,
      },
    })
    .to(
      name.current,
      {
        opacity: 0,
        duration: 0.4,
        ease: 'power3.inOut',
      },
      '<',
    )
}

const menuTransitions = {
  showMenu,
  hideMenu,
}

export default menuTransitions
