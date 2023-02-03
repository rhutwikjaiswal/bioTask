import React from "react";
import './App.css';

const Navbar = () => {
  return (
      <nav className="navbar">
        <ul className="ulnavbar" >
          <li>
            <a className="" href="/">
               <div className="vector"><img src="electrocardiogram.png" alt="img" style={{color:'red'}} /></div>
            </a>
          </li>
          <li>
            <span className="nav-link" href="/">
            <img src="+.png"  alt="img" />
           <div className="navText">New</div> 
            </span>
          </li>
          <li>
            <span className="nav-link" href="/">
            <img src="image 897.png"  alt="img" />
           <div className="navText">Patient</div> 
            </span>
          </li>
          <li>
            <span className="nav-link" href="/">
            <img src="image 898.png"  alt="img" />
           <div className="navText">Folder</div> 
            </span>
          </li>
          <li>
            <a className="nav-link" href="/">
            <img src="image 899.png" alt="img"  />
           <div className="navText">Upload</div> 
            </a>
          </li>
          <li>
            <a className="nav-link" href="/">
            <img src="image 900.png" alt="img"  />
           <div className="navText">Report</div> 
            </a>
          </li>
          <li>
            <a className="nav-link" href="/">
            <img src="image 901.png"  alt="img" />
           <div className="navText">Setting</div> 
            </a>
          </li>
          <li>
            <a className="nav-link" href="/">
            <img src="image 902.png" alt="img"  />
           <div className="navText">Logout</div> 
            </a>
          </li>
         
        </ul>
      </nav>
  );
};

export default Navbar;
