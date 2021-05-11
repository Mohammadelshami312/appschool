/* Readable Scalable Seure */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Import Logout Page
import Logout from "../../pages/Logout";
//Import Language Component
import LangComponent from "./LangComponent";
// Import Style
import "./style.css";
// test select lang

const NavLinks = (props) => {
  //Links value
  const links = [
    { linkName: "Add Student", to: "/dashboard/addstudent" },
    { linkName: "Add Grade", to: "/dashboard/addgrade" },
  ];

  const [activeLinks, setActive] = useState([]);

  //use effect
  useEffect(() => {
    links.map((link, index) =>
      index === 0 ? (activeLinks[index] = "active") : (activeLinks[index] = " ")
    );
    //console.log(activeLinks);
  }, []);

  // On Click Func
  const onClickLink = (e) => {
    e.stopPropagation();
    let newActiveLinks = [];
    for (let i = 0; i < activeLinks.length; i++) {
      e.target.id == i
        ? (newActiveLinks[i] = "active")
        : (newActiveLinks[i] = " ");
    }
    setActive([...newActiveLinks]);
    console.log(activeLinks);
  };
  return (
    <div className="middle-section">
      <ul class="navbar-nav">
        {links.map((link, index) => (
          <li key={index} className={`nav-item ${activeLinks[index]}`}>
            <Link
              to={links[index].to}
              id={index}
              className={`nav-item`}
              onClick={onClickLink}
            >
              {links[index].linkName}
            </Link>
            <span></span>
          </li>
        ))}
      </ul>
    </div>
  );
};
const Navbar = (props) => {
  return (
    <>
      {/* Start Bootstrap navbar */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="left-section col-2">School</div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Middle section*/}
          <NavLinks />

          {/* Start Right section*/}
          <div className="right-section">
            <Logout />
          </div>
        </div>
      </nav>

      {/* End Bootstrap navbar */}
      {/* 
            <nav className='nav-bar'>
                <h1>
                    <a href="#"> Notre Echool</a>
                </h1>
                <Logout />
            </nav>       
            
            */}
    </>
  );
};
export default Navbar;
