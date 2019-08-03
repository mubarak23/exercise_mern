import React from 'react';
import { Link } from 'react-router-dom';

function MainNavbar (){
    return(
        <div>
            
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Exercise Tracker App</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li></li>
                        <li className="navbar-item">
                            <Link to="/" className="navbar-link">Exercises</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/createxercise" className="navbar-link">Create Exercises</Link>
                        </li>
                        <li></li>
                        <li className="navbar-item">
                            <Link to="/createuser" className="navbar-link">Create User</Link>
                        </li>
                    </ul>
                </div>
                </nav>
        </div>
    )
}

export default MainNavbar;