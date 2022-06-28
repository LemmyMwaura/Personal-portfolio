import {useState} from 'react'
import Transition from '../Components/Transition'

const MindMap = () => {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div>
      <Transition pagename="MindMap" setShowInfo={setShowInfo} />
      {showInfo && <div className="mind-map-container">Mindmap</div>}
    </div>
  )
}

export default MindMap
