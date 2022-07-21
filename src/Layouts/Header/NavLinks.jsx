import { NavLink } from "react-router-dom"

const NavLinks = () => {
  return (
    <>
      <div className="nav-group">
        <NavLink to="/mind-map">MIND-MAP</NavLink>
        <NavLink to="/projects">PROJECTS</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </div>
    </>
  )
}

export default NavLinks
