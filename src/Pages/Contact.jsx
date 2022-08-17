import { useSelector } from "react-redux"

//icons
import { BiCopy } from "react-icons/bi"
import { FaGithubAlt } from "react-icons/fa"
import { SiHashnode, SiStackoverflow } from "react-icons/si"
import { GrLinkedinOption } from "react-icons/gr"
import { BsTwitter } from "react-icons/bs"
import { AiOutlineMedium } from "react-icons/ai"

const Contact = () => {
  const showPageData = useSelector(({ showPage }) => showPage.show)

  const handleCopy = (email) => {
    navigator.clipboard.writeText(email)
  }

  return (
    <div>
      {showPageData && (
        <div id="contact">
          <section
            style={{
              paddingTop: "2rem",
            }}
            className="contact-container"
          >
            <div className="contact-content">
              <h3>Contact</h3>
              <div className="contact-wrapper">
                <p className="info">
                  <span> - </span>
                  <span>
                    You can reach out/write to me via the Emails below, i'll
                    respond as soon as i can:
                  </span>
                </p>

                <div className="emails">
                  <div className="email-wrapper">
                    <span className="email-value">lemminton@gmail.com</span>
                    <button
                      className="btn-copy"
                      onClick={() => handleCopy("lemminton@gmail.com")}
                    >
                      <BiCopy className="copy-tooltip" />
                    </button>
                  </div>
                  <div className="email-wrapper">
                    <span className="email-value">
                      lemmymwauracodes@gmail.com
                    </span>
                    <button
                      className="btn-copy"
                      onClick={() => handleCopy("lemmymwauracodes@gmail.com")}
                    >
                      <BiCopy className="copy-tooltip" />
                    </button>
                  </div>
                </div>
                <p className="info">
                  <span> - </span>
                  <span>
                    Although i'm not active on my socials, you can still reach
                    me via the following links:
                  </span>
                </p>
                <div className="social-links">
                  <a href={"https://github.com/LemmyMwaura"} target="_blank">
                    <FaGithubAlt className="social-icon" />
                  </a>
                  <a href={"https://hashnode.com/@LemmyM"} target="_blank">
                    <SiHashnode className="social-icon" />
                  </a>
                  <a
                    href={"https://www.linkedin.com/in/lemmymwaura/"}
                    target="_blank"
                  >
                    <GrLinkedinOption className="social-icon" />
                  </a>
                  <a href={"https://twitter.com/lemmymwaura8"} target="_blank">
                    <BsTwitter className="social-icon" />
                  </a>
                  <a href={"https://medium.com/@Lemmymwaura8"} target="_blank">
                    <AiOutlineMedium className="social-icon" />
                  </a>
                  <a href={"https://stackoverflow.com/users/14240901/lemmy-mwaura"} target="_blank">
                    <SiStackoverflow className="social-icon" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export default Contact
