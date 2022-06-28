import { useState } from 'react'
import Transition from '../Components/Transition'

const Contact = () => {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div>
      <Transition pagename="Contact" setShowInfo={setShowInfo}/>
      {showInfo && (
        <div className="contact-container">Contact</div>
      )}
    </div>
  )
}

export default Contact
