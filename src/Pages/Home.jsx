import {useState, useEffect} from 'react'
import Loader from '../components/Loader'

const Home = () => {
  const [loading, setLoading] = useState(true)

  return (
    <div>
      {loading ? (
        <Loader setLoading={setLoading}/>
      ) : (
        <div>
          <h1>HOME</h1>
          <p>This is the home page</p>
        </div>
      )}
    </div>
  )
}

export default Home
