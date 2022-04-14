import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <div
      className="py-5 min-vh-100 "
      style={{
        background: `linear-gradient( rgba(0,0,0,0.7), rgba(0,0,0, 0.7)) , url(http://lab.plli.org/web/wp-content/uploads/2022/04/leadership-min.jpg) center / cover fixed `,
      }}
    >
      <Container className="py-lg-5">
        <div className="bg-white rounded rounded-3 col-12 col-md-8 offset-md-2 col-xl-6 offset-xl-6 my-auto py-5 px-4 border border-2 shadow-lg">
          <form>
            <div className="text-center w-100 mb-4">
              <img
                className="mb-4 mx-auto"
                src="https://lab.plli.org/web/wp-content/uploads/2020/12/logo-light-e1636397894245.png"
                alt=""
                // width={72}
                height={100}
              />
              <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
              <p className="text-muted mb-3 fw-normal">Enter your email address and password to access your account.</p>
            </div>

            <div className="form-floating my-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating my-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>

            <div className="row mt-3 hidden">
              <div className="col-12 text-center mt-3">
                <p className="text-dark">
                  Don&apos;t have an account ?{" "}
                  <Link to="./signup" className="text-decoration-none h5">
                    {" "}
                    Signup{" "}
                  </Link>
                </p>
              </div>{" "}
              {/* end col */}
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
