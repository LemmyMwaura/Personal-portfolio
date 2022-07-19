import { useEffect, useState, useRef } from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"

//components
import Transition from "../Components/Transition"
import useLocoScroll from "../Hooks/useLocoScroll"

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

    const setInterval = setTimeout(() => {
      locoScrollRef.current?.update()
    }, 300)

    return () => clearTimeout(setInterval)
  }, [locoScrollRef.current, showPageData])

  return (
    <div>
      {showTransition && <Transition pagename="Projects" />}
      {showPageData && (
        <section
          ref={projectsRef}
          data-scroll-section
          className="projects-container data-scroll-section"
        >
          <div className="projects-wrapper">
            <div className="project-counter">
              <span>{activeProject}</span>
              <span className="divider" />
              <span>{projects.length}</span>
            </div>
            {projects.map((project) => {
              return <ProjectItem project={project} key={project.id} />
            })}
          </div>
        </section>
      )}
    </div>
  )
}

const ProjectItem = ({ project }) => {
  return (
    <div className="project-wrapper">
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
