import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <div>
            <nav>
                <a href="">Shopping</a>
                <Link to="/addp">Add Product</Link>
            </nav>

        </div>
    );
    
}