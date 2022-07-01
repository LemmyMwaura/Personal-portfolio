import {useDispatch} from 'react-redux/es/exports'
import {showMobileMenu} from '../Features/MobileMenuSlice'

const HamburgerMenu = () => {
  const dispatch = useDispatch()

  return (
    <button
      className={`menu`}
      onClick={() => {
        dispatch(showMobileMenu())
      }}
    >
      MENU
    </button>
  )
}

export default HamburgerMenu
