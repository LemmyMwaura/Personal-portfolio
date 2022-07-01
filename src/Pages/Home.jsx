import {useSelector} from 'react-redux'

//Components
import Banner from '../Components/Banner'
import Loader from '../components/Loader'
import Transition from '../Components/Transition'

const Home = () => {
  const showLoader = useSelector(({loader}) => loader.show)
  const showTransition = useSelector(({transition}) => transition.show)
  const showPageData = useSelector(({showPage}) => showPage.show)

  return (
    <div>
      {showLoader ? (
        <Loader />
      ) : (
        <div className='container'>
          {showTransition && <Transition pagename={'HOME'}/>}
          {showPageData && <Banner />}
        </div>
      )}
    </div>
  )
}

export default Home
