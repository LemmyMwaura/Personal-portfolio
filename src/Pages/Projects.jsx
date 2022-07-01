import {useSelector} from 'react-redux'
import Transition from '../Components/Transition'

const Projects = () => {
  const showPageData = useSelector(({showPage}) => showPage.show)

  return (
    <div>
      <Transition pagename="Projects"/>
      {showPageData && <div className="projects-container">Projects</div>}
    </div>
  )
}

export default Projects
