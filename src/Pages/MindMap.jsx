import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

//svg + icons
import Underline from "../Assets/SVG/Underline"
import { GiArrowDunk } from "react-icons/gi"
import {
  FaReact,
  FaPython,
  FaAngular,
  FaSass,
  FaBootstrap,
  FaHtml5,
} from "react-icons/fa"
import {
  SiJavascript,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiCss3,
  SiNextdotjs,
  SiReactivex,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si"

const MindMap = () => {
  const showPageData = useSelector(({ showPage }) => showPage.show)

  return (
    <div>
      {showPageData && (
        <div id="mind-map">
          <section
            style={{
              paddingTop: "2rem",
            }}
            className="mindmap-container "
          >
            <div className="mindmap-content">
              <h3>About</h3>
              <div className="desc-wrapper">
                <div className="desc">
                  <div className="details detail-1">
                    <span> - </span>
                    <span id="content">
                      Hi, I'm Lemmy Mwaura a full-stack web developer and I
                      enjoy creating beautiful things that live on the internet.
                      I have a lot of passion for software development and that
                      includes all aspects of it, from front-end development (UI
                      design, animations, effects, dynamic-responsive design) to
                      API design and back-end development. I also have a rich
                      foundational knowledge in system design and Data
                      Structures & Algorithms.
                    </span>
                  </div>
                  <div className="details detail-2">
                    <span> - </span>
                    <span id="content">
                      My main focus at the moment is creating intuitive digital
                      user experiences on the web for my clients. I'm
                      well-organised, proficient, passionate, intelligent and a
                      strategic team player skilled in problem-solving with a
                      rich solid back background in Javascript(Vanilla, React,
                      Angular), Typescript, Python(Flask, Fast API, Django) and
                      currently adding Go lang and it's frameworks to my stack.
                    </span>
                  </div>
                  <div className="details detail-3">
                    <span> - </span>
                    <span id="content">
                      Here are a few technologies i've been working with
                      recently:
                    </span>
                  </div>
                  <div className="social-links">
                    <a>
                      <FaHtml5 className="social-icon" />
                    </a>
                    <a>
                      <SiCss3 className="social-icon" />
                    </a>
                    <a>
                      <FaBootstrap className="social-icon" />
                    </a>
                    <a>
                      <FaSass className="social-icon" />
                    </a>
                    <a>
                      <SiTailwindcss className="social-icon" />
                    </a>
                    <a>
                      <SiJavascript className="social-icon" />
                    </a>
                    <a>
                      <SiTypescript className="social-icon" />
                    </a>
                    <a>
                      <SiNodedotjs className="social-icon" />
                    </a>
                    <a>
                      <FaAngular className="social-icon" />
                    </a>
                    <a>
                      <SiReactivex className="social-icon" />
                    </a>
                    <a>
                      <FaReact className="social-icon" />
                    </a>
                    <a>
                      <SiNextdotjs className="social-icon" />
                    </a>
                    <a>
                      <FaPython className="social-icon" />
                    </a>
                    <a>
                      <SiDjango className="social-icon" />
                    </a>
                    <a>
                      <SiFlask className="social-icon" />
                    </a>
                    <a>
                      <SiFastapi className="social-icon" />
                    </a>
                    <a>
                      <SiPostgresql className="social-icon" />
                    </a>
                  </div>
                </div>
                <div className="underline-wrapper">
                  <Underline />
                </div>
              </div>
            </div>
            <div className="about-footer">
              <div className="about-footer-content">
                <div className="item item-1">
                  <h4>Mobile and Web Design</h4>
                  <p>
                    I always strive to create memorable experiences that are
                    aesthetically appealing, functional and distinctive. Whether
                    it's inspiring marketing websites, convincing e-commerce
                    sites or apps that are truly beneficial to users without compensating for the user experience.
                  </p>
                </div>
                <div className="item item-2">
                  <h4>Api Design & Development</h4>
                  <p>
                    Good understanding of the different API protocols (RPC, REST, GRAPHQL) and  Can comfortably build full-fledged APIs that are easy to use and easy to maintain. This includes routes, serialization, deserialization, error handling, schema validation, models, caching, and more.
                  </p>
                </div>
                <div className="item item-3">
                  <h4>Rich Foundational Knowledge </h4>
                  <p>
                  By using my expertise in Javascript and Python. I can comfortably build robust and scalable applications that are easy to use, maintain and bug-free in the most efficient and secure way with optimization of performance, mitigated network calls and also memory.
                  </p>
                </div>
                <div className="item item-4">
                  <GiArrowDunk className="arrow-icon" />
                  <button className="btn btn-about">
                    <Link to="/projects">Projects</Link>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export default MindMap
