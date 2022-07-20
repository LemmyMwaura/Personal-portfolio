import { useEffect, useRef } from "react"

//hooks
import useOnScreen from "../Hooks/useOnScreen"

//images
import sudokuImage from "../Assets/Images/Sudoku.png"
import NetflixImage from "../Assets/Images/NetflixClone.png"

const images = [sudokuImage, NetflixImage, sudokuImage, NetflixImage]

const ProjectItem = ({ project, setActiveProject }) => {
  const isOnScreenRef = useRef(null)
  const onScreen = useOnScreen(isOnScreenRef, 0.5)

  useEffect(() => {
    if (onScreen) {
      setActiveProject(() => project.id)
    }
  }, [])

  return (
    <div
      ref={isOnScreenRef}
      className={`project-wrapper ${onScreen && "is-reveal"}`}
    >
      <div />
      <div className="project-item">
        <div className={`project-item-info ${onScreen && "is-reveal"}`}>
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
          className={`project-item-image ${onScreen && "is-reveal"}`}
          style={{
            backgroundImage: `url(${images[project.id]})`,
          }}
        ></div>
      </div>
      <div />
    </div>
  )
}

export default ProjectItem
