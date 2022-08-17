import { useSelector } from "react-redux"

//Components
import Banner from "../Components/Banner"
import Loader from "../Components/Loader"
import Footer from "../Layouts/Footer/Footer"

//Pages
import MindMap from "../Pages/MindMap"
import Contact from "../Pages/Contact"
import Projects from "../Pages/Projects"

const Home = () => {
  const showLoader = useSelector(({ loader }) => loader.show)
  const showPageData = useSelector(({ showPage }) => showPage.show)

  return (
    <div>
      {showLoader ? (
        <Loader />
      ) : (
        <div className="container">
          {showPageData && (
            <div>
              <section id="scroller">
                <div className="banner-wrapper">
                  <Banner />
                </div>
                <MindMap />
                <Projects />
                <Contact />
                <Footer />
              </section>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Home
