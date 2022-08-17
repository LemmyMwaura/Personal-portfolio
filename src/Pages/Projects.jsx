import { useRef } from "react"
import { useSelector } from "react-redux"
import projects from "../Utils/projects"
import ProjectItem from "../Components/Project"

const Projects = () => {
  const showPageData = useSelector(({ showPage }) => showPage.show)
  const projectsRef = useRef(null)

  return (
    <div>
      {showPageData && (
        <div id="projects">
          <section
            ref={projectsRef}
            className="projects-container"
          >
            <div className="projects-wrapper">
              <h3 className="title">Projects</h3>
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
