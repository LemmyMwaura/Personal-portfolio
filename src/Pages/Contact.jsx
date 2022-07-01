import Transition from '../Components/Transition'
import {useSelector} from 'react-redux'

const Contact = () => {
  const showPageData = useSelector(({showPage}) => showPage.show)

  return (
    <div>
      <Transition pagename="Contact" />
      {showPageData && <div className="contact-container">Contact</div>}
    </div>
  )
}

export default Contact
