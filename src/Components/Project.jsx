import { useRef } from "react"
import useOnScreen from "../Hooks/useOnScreen"

//images
import sudokuImage from "../Assets/Images/Sudoku.jpg"
import NetflixImage from "../Assets/Images/NetflixClone.jpg"
import AwwardsImage from "../Assets/Images/AwwardsClone.jpg"
import GithubSearch from "../Assets/Images/GithubSearch.jpg"
import DailyNews from "../Assets/Images/DailyNews.jpg"
import Neighbourhood from "../Assets/Images/Neighbourhood.jpg"

//
import { HiLink } from "react-icons/hi"
import { FiGithub } from "react-icons/fi"

const images = [
  sudokuImage,
  NetflixImage,
  DailyNews,
  AwwardsImage,
  Neighbourhood,
  GithubSearch,
]

const ProjectItem = ({ project, total }) => {
  const isOnScreenRef = useRef(null)
  const onScreen = useOnScreen(isOnScreenRef, 0.5)

  return (
    <div
      ref={isOnScreenRef}
      className={`project-wrapper ${onScreen && "is-reveal"}`}
    >
      <div className="project-counter">
        <span>{project.id}</span>
        <span className="divider" />
        <span>{total}</span>
      </div>
      <div className="project-item">
        <div className={`project-item-info ${onScreen && "is-reveal"}`}>
          <div className="title-wrapper">
            <h3 className="project-info-title">{project.name}</h3>
            <div className="project-links">
              <a
                className="project-info-link"
                target="_blank"
                href={project.liveLink}
              >
                <HiLink className="project-tooltip" />
              </a>
              <a
                className="project-info-link"
                target="_blank"
                href={project.githubLink}
              >
                <FiGithub className="project-tooltip" />
              </a>
            </div>
          </div>
          <p className="project-info-desc">{project.description}</p>
          <div className="project-stats">
            {project.stats.map((stat, index) => {
              return <span key={index} className="project-info-stat">{stat}</span>
            })}
          </div>
        </div>
        <div
          className={`project-item-image ${onScreen && "is-reveal"}`}
          style={{
            backgroundImage: `url(${images[project.id - 1]})`,
          }}
        ></div>
      </div>
    </div>
  )
}

export default ProjectItem
