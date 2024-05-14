import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo-light.png';

function Navbar() {

return (
<>
    <div class="navbar-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4">
                <div className="container">

                <Link className="navbar-brand" to="/"><img src={logo}/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Contact</Link>
                    </li>
                    </ul>

                </div>
                </div>
        </nav>
    </div>
</>
);
}

export default Navbar;
