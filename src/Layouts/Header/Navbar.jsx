import { NavLink } from 'react-router-dom';

const Navbar = () => {
  // const { user } = useContext(AuthContext)
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline'
    }
  }

  return (
    <nav className='primary-nav'>
      <NavLink style={navLinkStyles} to='/'>Home</NavLink>
      {/* <NavLink style={navLinkStyles} to='/about'>About</NavLink>
      <NavLink style={navLinkStyles} to='/products'>Products</NavLink>
      <NavLink style={navLinkStyles} to='/profile'>Profile</NavLink>
      {!user && (
        <NavLink style={navLinkStyles} to='/login'>Login</NavLink>
      )} */}
    </nav>
  )
}

export default Navbar