import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'

//components
import Transition from '../Components/Transition'
import Banner from '../Components/Banner'

const Contact = () => {
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
      {showTransition && <Transition pagename="Contact" />}
      {showPageData && (
        <>
          <div className="contact-container">Contact</div>
          <Banner />
        </>
      )}
    </div>
  )
}

export default Contact
