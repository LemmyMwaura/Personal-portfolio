import { forwardRef } from "react"
import { BiX } from "react-icons/bi"

const MobileNav = forwardRef(({ hideMenu }, ref) => {

  return (
    <div
      ref={ref}
      className="mobile-nav"
    >
      <div className="icon-wrapper">
        <BiX className="mobile-menu-icon" onClick={() => hideMenu()} />
      </div>
      <div className="nav-group">
        <div className="wrapper">
          <a onClick={() => hideMenu()} href="#mind-map">MIND-MAP</a>
        </div>
        <div className="wrapper">
          <a onClick={() => hideMenu()} href="#projects">PROJECTS</a>
        </div>
        <div className="wrapper">
          <a onClick={() => hideMenu()} href="#contact">CONTACT</a>
        </div>
      </div>
    </div>
  )
})

export default MobileNav
