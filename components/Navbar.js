import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/meal-planning">Meal Planning</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar; 