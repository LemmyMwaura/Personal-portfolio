import {useState} from 'react'
import Loader from '../components/Loader'
import Banner from '../Components/Banner'

const Home = () => {
  const [loading, setLoading] = useState(true)

  return (
    <div>
      {loading ? (
        <Loader setLoading={setLoading}/>
      ) : (
        <div>
          <Banner />
        </div>
      )}
    </div>
  )
}

export default Home
