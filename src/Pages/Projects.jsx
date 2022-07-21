import { useEffect, useState, useRef } from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { motion } from "framer-motion"

//components
import Transition from "../Components/Transition"
import ProjectItem from "../Components/Project"

//utility & hooks & variants
import projects from "../Utils/projects"
import useLocoScroll from "../Hooks/useLocoScroll"
import exitVariant from "../Animations/Variants/ExitVariants"

const Projects = () => {
  const showPageData = useSelector(({ showPage }) => showPage.show)
  const [showTransition, setShowTransition] = useState(false)
  const [atProjectsRoute, setAtProjectsRoute] = useState(false)
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
      setAtProjectsRoute(true)
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
        <motion.div variants={atProjectsRoute ? exitVariant : ""} exit="exit">
          <section
            ref={projectsRef}
            data-scroll-section
            className="projects-container"
          >
            <div className="projects-wrapper">
              {atProjectsRoute && <h3 className="title">Projects</h3>}
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
        </motion.div>
      )}
    </div>
  )
}

export default Projects
