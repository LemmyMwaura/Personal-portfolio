import Transition from '../Components/Transition'
import {useSelector} from 'react-redux'

const MindMap = () => {
  const showPageData = useSelector(({showPage}) => showPage.show)

  return (
    <div>
      <Transition pagename="MIND-MAP"/>
      {showPageData && <div className="mindmap-container">Mind-map</div>}
    </div>
  )
}

export default MindMap
