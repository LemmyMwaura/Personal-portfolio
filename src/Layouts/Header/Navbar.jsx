import {useLocation} from 'react-router-dom'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'

//Slices
import {showTransition} from '../../Features/TransitionHomeSlice'
import {hidePage} from '../../Features/ShowPageSlice'
import {hideMobileMenu} from '../../Features/MobileMenuSlice'

//navigations
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'
import HamburgerMenu from '../../Components/HamburgerMenu'

const Navbar = () => {
  const showMobileMenu = useSelector(({showMobileMenu}) => showMobileMenu.show)
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    if (location.pathname !== '/') {
      dispatch(showTransition())
    }

    dispatch(hideMobileMenu())
    
    setTimeout(() => {
      dispatch(hidePage())
    }, 2000)
  }, [location.pathname])

  return (
    <div className="navigation">
      <NavLink to="/">LEMMY</NavLink>
      <HamburgerMenu />
      <DesktopNav />
      {showMobileMenu && <MobileNav />}
    </div>
  )
}

export default Navbar
