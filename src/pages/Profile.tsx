import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../controllers/api";
import { Input } from "../components/elements/form";
import { FloatingLabel, Form, Spinner } from "react-bootstrap";
const { REACT_APP_BASEURL } = process.env;

const Profile = () => {
  const history = useHistory();
  let [user, setUser] = useState<any>({});
  let [refreshData, setRefreshData] = useState(false);
  let [loading, setLoading] = useState(true);
  let token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "./login";
    // history.push("/hospital/login");
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      // withCredentials: false,
      // "Access-Control-Allow-Origin": "*",
    },
  };

  const fetchprofile = async () => {
    try {
      setLoading(true);
      const res: any = await axios.get(`${REACT_APP_BASEURL}auth/profile`, config);
      const { user } = res?.data?.payload || {};
      setUser(user);
      const { fullname, email } = user;
      const userData = { fullname, email };
      localStorage.setItem("user", JSON.stringify(userData));
      //   toast.success("Login Successful.");
      //   history.push("./dashboard");
      setLoading(false);
    } catch (error: any) {
      // console.log({ error });
      let msg = error?.response?.data?.message ?? "Kindly try again.";
      toast.error(msg);
      setLoading(false);
    }
  };

  useEffect(() => {
    // let userInfo = localStorage.getItem("user");
    // setUser(JSON.parse(userInfo as string));
    fetchprofile();
  }, [refreshData]);

  return (
    <div className="container mt-4 px-4 px-lg-2">
      <div className="px-2">
        <div className="mt-3">
          <div className="row   mt-3 mt-xl-4  justify-content-between">
            <div className="text-start col-8">
              <h5 className="text-primary">
                <button className="btn btn-outline-primary" onClick={() => history.push("./dashboard")}>
                  <i className="fa fa-arrow-left mx-2" />
                  Home
                </button>
              </h5>
            </div>
            <div className=" col-4 col-lg-3">
              {/* <div className="text-right">
                <button type="button" onClick={() => handleLogout()} className="btn btn-outline-primary  mb-2">
                  <span className="d-none d-md-inline-block">Logout</span>

                  <i className="fas fa-power-off px-1 mx-2" />
                </button>
              </div> */}
            </div>
          </div>
          <div>
            {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 align-items-stretch py-4 gy-5">
              <div className="bg-primary bg-opacity-25 h-100 overflow-hidden text-white rounded-3 shadow-lg">
                <div className="d-flex flex-column p-4 pb-5  text-white text-shadow-1">
                  <h2 className="pt-5 mb-4 text-primary  lh-1 fw-normal">Profile</h2>
                  <Link to={`./profile`} className="d-inline-block">
                    {" "}
                    <button className="btn btn-primary mt-3">View Profile</button>{" "}
                  </Link>
                </div>
              </div>
            </div> */}
            <div className="row my-4 mb-5">
              <h4 className="display-4 text-primary "> Profile</h4>
            </div>
            <div className="row">
              <div className="d-block w-100">
                <div className="mx-auto text-center">
                  {loading ? (
                    <>
                      <Spinner animation="border" variant="primary" style={{ width: "5rem", height: "5rem" }} />
                      <br />
                      <h4 className=" text-primary my-3">Loading...</h4>
                    </>
                  ) : (
                    <>
                      <div className="row col-12 col-lg-8 px-0">
                        <div className="col-12 col-lg-6">
                          <FloatingLabel label="First Name" className="mb-3">
                            <Form.Control type="text" value={user?.firstname} />
                          </FloatingLabel>
                        </div>
                        <div className="col-12 col-lg-6">
                          <FloatingLabel label="Last Name" className="mb-3">
                            <Form.Control type="text" value={user?.lastname} />
                          </FloatingLabel>
                        </div>

                        <div className="col-12 col-lg-6">
                          <FloatingLabel label="Email Address" className="mb-3">
                            <Form.Control type="email" value={user?.email} />
                          </FloatingLabel>
                        </div>

                        <div className="col-12 col-lg-6">
                          <FloatingLabel label="Phone Number" className="mb-3">
                            <Form.Control type="text" value={user?.phone} />
                          </FloatingLabel>
                        </div>

                        <div className="col-12 mb-2">
                          <hr className="my-3 w-100 mx-auto bg-primary border border-primary" />
                        </div>

                        <div className="col-12 col-lg-6">
                          <FloatingLabel label="Current Vocation" className="mb-3">
                            <Form.Control type="text" value={user?.currentVocationDescription} />
                          </FloatingLabel>
                        </div>

                        {user?.OthersCurrentVocationDescription && (
                          <div className="col-12 col-lg-6">
                            <FloatingLabel label="Current Vocation ( Others )" className="mb-3">
                              <Form.Control type="text" value={user?.OthersCurrentVocationDescription} />
                            </FloatingLabel>
                          </div>
                        )}

                        <div className="col-12 col-lg-6">
                          <FloatingLabel label="Designation" className="mb-3">
                            <Form.Control type="text" value={user?.designation} />
                          </FloatingLabel>
                        </div>

                        {user?.othersDesignation && (
                          <div className="col-12 col-lg-6">
                            <FloatingLabel label="Designation ( Others )" className="mb-3">
                              <Form.Control type="text" value={user?.othersDesignation} />
                            </FloatingLabel>
                          </div>
                        )}

                        <div className="col-12 col-lg-6">
                          <FloatingLabel label="Academic Qualification" className="mb-3">
                            <Form.Control type="text" value={user?.academicQualification} />
                          </FloatingLabel>
                        </div>

                        <div className="col-12 col-lg-6">
                          <FloatingLabel label="Means of Livelihood" className="mb-3">
                            <Form.Control type="text" value={user?.livelihood} />
                          </FloatingLabel>
                        </div>

                        {/* {user?.livelihood == "Business Owner" && (
                            <>

                            
                        <div className="col-12 col-lg-6">
                          <FloatingLabel label="Corporate Affairs Commission (CAC) registered " className="mb-3">
                            <Form.Control type="text" value={user?.livelihood} />
                          </FloatingLabel>
                        </div>

                        
                        <div className="col-12 col-lg-6">
                          <FloatingLabel label="Means of Livelihood" className="mb-3">
                            <Form.Control type="text" value={user?.livelihood} />
                          </FloatingLabel>
                        </div>
                            
                            
                            </>
                        )} */}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
