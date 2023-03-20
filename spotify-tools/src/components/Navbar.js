import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">
                LOGO
            </Link>
            
            <button className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarToggleable" 
                    aria-controls="navbarToggleable" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarToggleable">
                <ul className="navbar-nav mr-auto">
                    <NavbarLink address="/about" name="About" />
                    <NavbarLink address="/splitter" name="Playlist Splitter" />
                </ul>
                <Link className="btn btn-outline-primary" to="/sign-in" role="button">Sign-in</Link>
            </div>



        </nav>
    )
}

const NavbarLink = ({address, name}) => {
    return (
        <li className="nav-item">
            <NavLink className="nav-link" to={address}> {name} </NavLink>
        </li>
    )
}

export default Navbar