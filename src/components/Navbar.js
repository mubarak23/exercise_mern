import React, { component} from 'react';
import { Link } from 'react-router-dom';

class Navbar extends component {
    render(){
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Exercise Tracker App</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li class="navbar-item">
                            <Link to="/" className="navbar-link">Exercises</Link>
                        </li>
                        <li class="navbar-item">
                            <Link to="/create" className="navbar-link">Create Exercises</Link>
                        </li>
                        <li class="navbar-item">
                            <Link to="/createUser" className="navbar-link">Create User</Link>
                        </li>
                    </ul>
                </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;