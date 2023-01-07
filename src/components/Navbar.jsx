import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from "react-dom";

function Navbar(){
    return (
        <div className="navi">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                
                <a style={{marginLeft:'15%'}} className="navbar-brand" href=""><i className="head-icon fas fa-film"></i>    CINEFLIX</a>
        
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                    <span className="navbar-toggler-icon"></span>
                </button>
        
                <div style={{marginLeft:'10%'}} className="collapse navbar-collapse" id="navbarTogglerDemo02">
        
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" 
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fas fa-user"></i>   USERNAME
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Home</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            
                            <li><a className="dropdown-item" href="#">Diary</a></li>
                            <li><a className="dropdown-item" href="#">Reviews</a></li>
                            <li><a className="dropdown-item" href="#">Lists</a></li>
                        </ul>
                    </li>  
                    <li className="nav-item">
                      <a className="nav-link" href="#">FILMS</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">LIST</a>
                    </li>
                  </ul>
        
                </div>
            </nav>
        </div>
        
    );
}

export default Navbar;