import { Outlet, Link } from 'react-router-dom';
import './Navbar.css';
import '../../styles.css'

function Navbar() {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-md">
                <div className="container navbar-container">
                    <a className="navbar-brand lead" href="/"><h2 className="nav-link">Fabiha Islam</h2></a>
                    <div className="navbar-nav link-container row">
                        <a className="nav-link lead link" href="/#about">About</a>
                        <a className="nav-link lead link" href="/#portfolio">Projects</a>
                        <a className="nav-link lead link" href="/#contact">Contact</a>
                        <a className="nav-link lead link" href="../../Fabiha_Islam_Resume.pdf" target="_blank">Resume</a>
                        {/* <a className="nav-link lead button" href="#module2">Module 2</a>
                        <a className="nav-link lead button" href="#module1">Module 1</a> */}
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar;