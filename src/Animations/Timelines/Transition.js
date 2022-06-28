import gsap from 'gsap';

const showMenu = (main, sec, name) => {
  gsap
    .timeline()
    .to([sec.current, main.current], {
      height: '100%',
      duration: 0.8,
      ease: 'power3.inOut',
      stagger: {
        amount: 0.07,
      },
    })
    .to(name.current, {opacity: 1, duration: 1, ease: 'power3.inOut'})
}

const hideMenu = (main, sec, name) => {
  gsap
    .timeline()
    .to([main.current, sec.current], {
      delay: 2,
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
        css: {
          display: 'None',
        },
        duration: 0.2,
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
