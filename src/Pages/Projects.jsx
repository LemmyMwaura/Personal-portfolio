import { useEffect, useState, useRef } from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

//components
import Transition from "../Components/Transition"
import useLocoScroll from "../Hooks/useLocoScroll"

//utility & images
import projects from "../utils/projects"
import ProjectItem from "../Components/Project"

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

    const check = () => {
      if (location.pathname !== "/") {
        return projectsRef.current
      } else return "#scroller"
    }

    const runTrigger = () => {
      gsap.to(sections, {
        xPercent: - 100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: scrollTriggerRef.current,
          scroller: check(),
          pin: true,
          scrub: 0.5,
          span: 1 / sections.length,
          end: () => `+=${scrollTriggerRef.current.offsetWidth } + 4000px`,
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
          className="projects-container"
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

export default Projects
