import {useEffect, useRef} from 'react'
import menuTransitions from '../Animations/Timelines/Transition'

const Transition = ({pagename, setShowInfo}) => {
  const {showMenu, hideMenu} = menuTransitions
  const transition = useRef(null)
  const secTransition = useRef(null)
  const page = useRef(null)

  useEffect(() => {
    showMenu(transition, secTransition, page)
    hideMenu(transition, secTransition, page)

    setTimeout(() => {
      setShowInfo(true)
    }, 2000)
  }, [transition, secTransition, page, setShowInfo])

  return (
    <div>
      <div className="transition-main-background" ref={transition}>
        <span className="transition-page-name" ref={page}>
          {pagename}
        </span>
      </div>
      <div className="transition-background" ref={secTransition} />
    </div>
  )
}

export default Transition
