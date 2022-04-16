import React from "react";
import { useHistory } from "react-router-dom";

const TopNav = () => {
  const history = useHistory();
  return (
    <div className="bg-light ">
      <header className="navbar navbar-primary d-flex justify-content-between align-content-center align-items-center  bg-light sticky-top py-3 px-1 shadow">
        <div className="col-2">
        <img
                      className=" "
                      src="https://lab.plli.org/web/wp-content/uploads/2020/12/logo-light-e1636397894245.png"
                      alt=""
                      // width={72}
                      height={60}
                    />
        </div>
        <div className="col-lg-4 col-8 text-right text-md-center">

          <h4 className="text-primary lh-sm ">PISTIS LIFE AND LEADERSHIP INSTITUTE</h4>
        </div>
        {/* <button
          className="navbar-toggler shadow-none text-primary position-relative  d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-align-left" />
        </button> */}
       

        {/* <div className="navbar-nav col-lg-4 col-2 text-right">
          <div className="nav-item text-nowrap">
            {/* <a href="#!" className=" px-3">
              <i className="bi bi-bell"></i>
            </a>
            <i className="bi bi-grip-vertical"></i> 
            <span
              className=" text-primary fw-bold  px-3"
              href="#"
            >
                 <i className="fas fa-power-off me-2"></i>
                 <span className="d-none d-md-inline-block">   Logout</span>
            
            </span>
          </div>
        </div> */}
      </header>
    </div>
  );
};

export default TopNav;

