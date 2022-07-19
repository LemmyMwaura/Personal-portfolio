import { useEffect, useState, useRef } from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

//components
import Transition from "../Components/Transition"
import useLocoScroll from "../Hooks/useLocoScroll"
import useOnScreen from "../Hooks/useOnScreen"

//utility & images
import projects from "../utils/projects"
import sudokuImage from "../Assets/Images/Sudoku.png"
import NetflixImage from "../Assets/Images/NetflixClone.png"

const images = [sudokuImage, NetflixImage]

const Projects = () => {
  const showPageData = useSelector(({ showPage }) => showPage.show)
  const [activeProject, setActiveProject] = useState(1)
  const [showTransition, setShowTransition] = useState(false)
  const location = useLocation()
  const projectsRef = useRef(null)
  const scrollTriggerRef = useRef(null)
  const [locoScrollRef] = useLocoScroll(
    projectsRef,
    location.pathname,
    showPageData,
    false,
  )

  useEffect(() => {
    if (location.pathname !== "/") {
      setShowTransition(true)
    }
  }, [location.pathname])

  useEffect(() => {
    if (!showPageData) return

    const initLocoScroll = setTimeout(() => {
      locoScrollRef.current?.update()
    }, 300)

    return () => clearTimeout(initLocoScroll)
  }, [locoScrollRef.current, showPageData])

  useEffect(() => {
    const sections = gsap.utils.toArray(".project-wrapper")
    const runTrigger = () => {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: scrollTriggerRef.current,
          scroller: "#scroller",
          pin: true,
          scrub: 0.5,
          span: 1 / (sections.length - 1),
          end: () => `+=${scrollTriggerRef.current.offsetWidth}`,
        },
      })
      ScrollTrigger.refresh()
    }

    const scrollTriggerTimeout = setTimeout(runTrigger, 300)

    return () => clearTimeout(scrollTriggerTimeout)
  }, [scrollTriggerRef.current])

  return (
    <div>
      {showTransition && <Transition pagename="Projects" />}
      {showPageData && (
        <section
          ref={projectsRef}
          data-scroll-section
          className="projects-container data-scroll-section"
        >
          <div className="projects-wrapper" ref={scrollTriggerRef}>
            <div className="project-counter">
              <span>{activeProject}</span>
              <span className="divider" />
              <span>{projects.length}</span>
            </div>
            {projects.map((project) => {
              return (
                <ProjectItem
                  project={project}
                  setActiveProject={setActiveProject}
                  key={project.id}
                />
              )
            })}
          </div>
        </section>
      )}
    </div>
  )
}

const ProjectItem = ({ project, setActiveProject }) => {
  const ref = useRef(null)
  const onScreen = useOnScreen(ref, 0.5)

  useEffect(() => {
    if (onScreen) {
      setActiveProject(project.id)
    }
  })

  return (
    <div className={`project-wrapper ${onScreen && "is-reveal"}`}>
      <div />
      <div className="project-item">
        <div className="project-item-info">
          <h3 className="project-info-title">{project.name}</h3>
          <p className="project-info-desc">{project.description}</p>
          <a
            className="project-info-link"
            target="_blank"
            href={project.liveLink}
          >
            Link
          </a>
        </div>
        <div
          data-scroll
          className="project-item-image"
          style={{
            backgroundImage: `url(${images[project.id]})`,
          }}
        ></div>
      </div>
      <div />
    </div>
  )
}

export default Projects
