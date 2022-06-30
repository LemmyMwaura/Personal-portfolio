import Loader from '../components/Loader'
import Banner from '../Components/Banner'
import {useSelector} from 'react-redux'

const Home = () => {
  const showLoader = useSelector(({loader}) => loader.show)

  return (
    <div>
      {showLoader ? (
        <Loader/>
      ) : (
        <div className='container'>
          <Banner />
        </div>
      )}
    </div>
  )
}

export default Home
