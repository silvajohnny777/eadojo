import React from 'react';
import { NavLink } from "react-router-dom";

    function Navbar() {
        return(
            <div>
                <nav className="navbar has-shadow is-fixed-top" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <NavLink to="./" className="navbar-item">
                        <h2>EADOJO</h2>
                        </NavLink>
                    </div>

                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                        <NavLink to="./" className="navbar-item">
                            Home
                        </NavLink>

                        <NavLink to="/documentation" className="navbar-item">
                            Documentation
                        </NavLink>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                            More
                            </a>

                            <div className="navbar-dropdown">
                            <a className="navbar-item">
                                About
                            </a>
                            <a className="navbar-item">
                                Jobs
                            </a>
                            <a className="navbar-item">
                                Contact
                            </a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item">
                                Report an issue
                            </a>
                            </div>
                        </div>
                        </div>

                        <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                            <a className="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <NavLink to="/login" className="button is-light">
                                Log in
                            </NavLink>
                            </div>
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

export default Navbar;