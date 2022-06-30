import gsap from 'gsap'

const loaderAnimation = (node1, node2, node3, node4, resetLoader) => {
  gsap
    .timeline({
      onComplete: () => {
        resetLoader()
      },
    })
    .to([node1.current, node2.current], {
      opacity: 0,
      duration: 0.7,
      delay: 4,
    })
    .to(
      [node3.current, node4.current],
      {
        y: '-100%',
        duration: 0.7,
        ease: 'power3.inOut',
        stagger: {
          amount: 0.1,
        },
      },
      '<0.5',
    )
}

export default loaderAnimation
