import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="unorder-list">
    <li className="nav-menu-item">
      <Link to="/" className="nav-link">
        Home
      </Link>
    </li>
    <li className="nav-menu-item">
      <Link to="/about" className="nav-link">
        About
      </Link>
    </li>
  </ul>
)

export default Header
