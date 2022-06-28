import {useState} from 'react'
import Transition from '../Components/Transition'

const Projects = () => {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div>
      <Transition pagename="Projects" setShowInfo={setShowInfo}/>
      {showInfo && <div className="projects-container">Projects</div>}
    </div>
  )
}

export default Projects
