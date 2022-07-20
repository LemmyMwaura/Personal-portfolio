import { useEffect, useState, useRef } from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"

//components
import Transition from "../Components/Transition"
import ProjectItem from "../Components/Project"

//utility & hooks
import projects from "../utils/projects"
import useLocoScroll from "../Hooks/useLocoScroll"

const Projects = () => {
  const showPageData = useSelector(({ showPage }) => showPage.show)
  const [showTransition, setShowTransition] = useState(false)
  const [showTitle, setShowTitle] = useState(false)
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
      setShowTitle(true)
    }
  }, [location.pathname])

  useEffect(() => {
    if (!showPageData) return

    const initLocoScroll = setTimeout(() => {
      locoScrollRef.current?.update()
    }, 300)

    return () => clearTimeout(initLocoScroll)
  }, [locoScrollRef.current, showPageData])

  return (
    <div>
      {showTransition && <Transition pagename="Projects" />}
      {showPageData && (
        <section
          ref={projectsRef}
          data-scroll-section
          className="projects-container"
        >
          <div className="projects-wrapper">
            {showTitle && <h3 className="title">Projects</h3>}
            {projects.map((project) => {
              return (
                <ProjectItem
                  project={project}
                  total={projects.length}
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

export default Projects
