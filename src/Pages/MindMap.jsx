import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'

//components
import Transition from '../Components/Transition'

const MindMap = () => {
  const showPageData = useSelector(({showPage}) => showPage.show)
  const [showTransition, setShowTransition] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') {
      setShowTransition(true)
    }
  }, [location.pathname])

  return (
    <div>
      {showTransition && <Transition pagename="MIND-MAP" />}
      {showPageData && <div className="mindmap-container">Mind-map</div>}
    </div>
  )
}

export default MindMap
