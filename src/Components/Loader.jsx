import {timeline} from 'motion'
import gsap from 'gsap'
import {useEffect, useRef} from 'react'
import {useDispatch} from 'react-redux'
import {hideLoader} from '../Features/LoaderSlice'

const Loader = () => {
  const dispatch = useDispatch()
  const countRef = useRef(null)
  const countRef2 = useRef(null)
  const loaderRef = useRef(null)
  const loaderBgRef = useRef(null)

  const getSectionHeight = (el) => {
    const {height} = el.getBoundingClientRect()
    const {childElementCount} = el

    return height / childElementCount
  }

  useEffect(() => {
    if (countRef.current && countRef2.current) {
      const transformAmount = getSectionHeight(countRef.current)
      const sequence = new Array(4).fill('').flatMap((_, index) => [
        [countRef.current, {y: `-${transformAmount * index + 1}px`}],
        [
          countRef2.current,
          {y: `-${transformAmount * index + 1}px`},
          {at: '-0.85'},
        ],
      ])

      timeline(sequence, {
        defaultOptions: {easing: [0.77, 0, 0.175, 1], duration: 1},
      })

      gsap
        .timeline({
          onComplete: () => {
            dispatch(hideLoader())
          },
        })
        .to([countRef.current, countRef2.current], {
          opacity: 0,
          duration: 0.7,
          delay: 4,
        })
        .to(
          [loaderRef.current, loaderBgRef.current],
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
  }, [])

  return (
    <>
      <div className="loader-background" ref={loaderBgRef}></div>
      <div className="loader" ref={loaderRef}>
        <div className="counter-container">
          <ul className="counter-list" ref={countRef}>
            <li>
              <h3>2</h3>
            </li>
            <li>
              <h3>4</h3>
            </li>
            <li>
              <h3>7</h3>
            </li>
            <li>
              <h3>9</h3>
            </li>
          </ul>
        </div>

        <div className="counter-container">
          <ul className="counter-list" ref={countRef2}>
            <li>
              <h3>4</h3>
            </li>
            <li>
              <h3>8</h3>
            </li>
            <li>
              <h3>1</h3>
            </li>
            <li>
              <h3>9</h3>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Loader
