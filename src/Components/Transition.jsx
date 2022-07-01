import {useEffect, useRef} from 'react'
import {useDispatch} from 'react-redux'

//Animations
import menuTransitions from '../Animations/Timelines/Transition'

//Slices
import {showPage} from '../Features/ShowPageSlice'

const Transition = ({pagename}) => {
  const {showMenu, hideMenu} = menuTransitions
  const transition = useRef(null)
  const secTransition = useRef(null)
  const page = useRef(null)
  const dispatch = useDispatch()

  const showPageData = () => {
    dispatch(showPage())
  }

  useEffect(() => {
    showMenu(transition, secTransition, page)
    hideMenu(transition, secTransition, page, showPageData)
  }, [transition, secTransition, page, showPageData])

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
