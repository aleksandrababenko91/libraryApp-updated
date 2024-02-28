import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom";
import '../Styles/NavBar.css'

const navBarStyle= {
  backgroundColor:  "#5c5829"
}
const NavBar = ({currentUser, handleLogOut}) => {

  
  return(
    <div style={{navBarStyle}}>

    <nav  className="navbar navbar-expand-lg bg-body-tertiary" >
      <div style={{navBarStyle}} className="container-fluid" >
        <a className="navbar-brand"  href="#">
          Library
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page" >
                Main Page
              </Link>
            </li>
            <li className="nav-item">
              <Link  to="/BookList" className="nav-link">
                Book list
              </Link>
            </li>
            <li className="nav-item">
              <Link  to="/RegisterForm" className="nav-link">
                Register Form
              </Link>
            </li>
            <li className="nav-item">
              <Link  to="/MyProfile" className="nav-link">
                My Profile
              </Link>
            </li>
            {currentUser ? <li className="nav-item">
              <button onClick={handleLogOut} className="nav-link">
                Log Out
              </button>
            </li> : <li className="nav-item">
              <Link to="/UserLoginForm" className="nav-link">
                Log In
              </Link>
            </li>}
          
          </ul>
        </div>
      </div>
    </nav>
          </div>
  )
}

// NavBar.propTypes = {
//   currentUser: PropTypes.object.isRequired, 
//   handleLogOut: PropTypes.func.isRequired
// };

export default NavBar
