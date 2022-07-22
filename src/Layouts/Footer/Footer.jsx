import { useSelector } from "react-redux"
import wave from "../../Assets/Images/wave.png"
import waveMobile from "../../Assets/Images/waveMobile.png"

const Footer = () => {
  const showPageData = useSelector(({ showPage }) => showPage.show)

  const selectImage = () => {
    if (window.innerWidth < 699) {
      return waveMobile
    } else {
      return wave
    }
  }

  return (
    <div>
      {showPageData && (
        <section className="footer" data-scroll-section>
          <div className="footer-items">
            <span>BYE</span>
            <img className="footer-image" src={selectImage()} alt="image" />
            <span>BYE</span>
          </div>
          <div className="footer-userdetails">
            <div className="left">
              <span>Designed & Built by</span>
              <span> Lemmy Mwaura </span>
            </div>
            <div className="right">
              <span>2022</span>
              <span> All-Rights-Reserved</span>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default Footer
