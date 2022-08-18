import { useRef } from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"

//components & utils
import projects from "../Utils/projects"
import ProjectItem from "../Components/Project"

//gsap
import gsap from "gsap"
import scrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(scrollTrigger)

const Projects = () => {
  const showPageData = useSelector(({ showPage }) => showPage.show)
  const projectsRef = useRef(null)
  const scrollTriggerRef = useRef(null)

  useEffect(() => {
    if (showPageData) {
      const sections = gsap.utils.toArray(".project-wrapper")
      let mm = gsap.matchMedia()

      mm.add("(min-width: 999.98px)", () => {
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            start: "top top",
            trigger: projectsRef.current,
            pin: true,
            scrub: 0.5,
            snap: 1 / (sections.length - 1),
            end: () => `+=${projectsRef.current.offsetWidth}`,
          },
        })
      })
    }

  }, [showPageData, scrollTriggerRef.current, gsap])

  return (
    <div>
      {showPageData && (
        <div id="projects">
          <section ref={projectsRef} className="projects-container">
            <div className="projects-wrapper" ref={scrollTriggerRef}>
              {projects.map((project) => {
                return (
                  <ProjectItem
                    key={project.id}
                    project={project}
                    total={projects.length}
                  />
                )
              })}
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export default Projects
