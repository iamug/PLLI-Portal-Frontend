import React, { useEffect, useState } from "react";
import API from "../controllers/api";
import { Artist } from "../components/";
import { Link } from "react-router-dom";

const Artists = () => {
  let [user, setUser] = useState<any>({});
  let [refreshData, setRefreshData] = useState(false);
  let [loading, setLoading] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "./login";
    // history.push("/hospital/login");
  };

  useEffect(() => {
    let userInfo = localStorage.getItem("user");
    setUser(JSON.parse(userInfo as string));
  }, [refreshData]);

  return (
    <div className="container mt-4 px-4 px-lg-2">
      <div className="px-2">
        <div className="mt-3">
          <div className="row   mt-3 mt-xl-4  justify-content-between">
            <div className="text-start col-8">
              <h5 className="text-primary">
                <span className="d-none d-md-inline-block"> Welcome </span> <span className="h3 text-capitalize "> {user.fullname} </span>{" "}
              </h5>
            </div>
            <div className=" col-4 col-lg-3">
              <div className="text-right">
                <button type="button" onClick={() => handleLogout()} className="btn btn-outline-primary  mb-2">
                  <span className="d-none d-md-inline-block">Logout</span>

                  <i className="fas fa-power-off px-1 mx-2" />
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 align-items-stretch py-4 gy-5">
              <div className="bg-primary bg-opacity-25 h-100 overflow-hidden text-white rounded-3 shadow-lg">
                <div className="d-flex flex-column p-4 pb-5  text-white text-shadow-1">
                  <h2 className="pt-5 mb-4 text-primary  lh-1 fw-normal">Profile</h2>
                  <Link to={`./profile`} className="d-inline-block">
                    {" "}
                    <button className="btn btn-primary mt-3">View Profile</button>{" "}
                  </Link>
                </div>
              </div>

              {/* <div className="bg-primary bg-opacity-25 h-100 overflow-hidden text-white rounded-3 shadow-lg">
                <div className="d-flex flex-column p-4 pb-5  text-white text-shadow-1">
                  <h3 className="pt-5 mb-4 text-primary  lh-1 fw-normal">View Profil</h3>
                  <Link to={`./profile`} className="d-inline-block">
                    {" "}
                    <button className="btn btn-secondary mt-3">View Tweets</button>{" "}
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artists;
