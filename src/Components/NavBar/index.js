import React from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";



function NavBarWrapper({Open,cartS}) {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-red-600"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Badge color="secondary" badgeContent={cartS.length}>
                  <ShoppingCartIcon onClick={()=>{
                    Open()
                    
                  } } />
                </Badge>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBarWrapper;
