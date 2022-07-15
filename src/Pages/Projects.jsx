import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'

//components
import Banner from '../Components/Banner'
import Transition from '../Components/Transition'

const Projects = () => {
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
      {showTransition && <Transition pagename="Projects" />}
      {showPageData && (
        <>
          <div className="projects-container">Projects</div>
          <Banner />
        </>
      )}
    </div>
  )
}

export default Projects
