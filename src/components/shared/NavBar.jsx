
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <ul>
      <li><Link to='/home'>Home</Link></li>
      <li><Link to='/name'>Name</Link></li>
      <li><Link to='/language'>Language</Link></li>
    </ul>
  )
}

export default NavBar