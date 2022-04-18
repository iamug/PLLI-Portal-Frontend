import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { Form, Container, FormControl } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import { toast } from "react-toastify";
import { Input } from "../components/elements/form";
const { REACT_APP_BASEURL } = process.env;

const Login: React.FC = () => {
  const history = useHistory();
  const initialValues = {};
  const [loading, setLoading] = useState(true);
  const [initialState, setIntialState] = useState<Record<string, string>>(initialValues);

  const { REACT_APP_BASEURL } = process.env;

  const config = {
    headers: {
      "Content-Type": "application/json",
      // withCredentials: false,
      // "Access-Control-Allow-Origin": "*",
    },
  };

  const schema = yup.object().shape({
    email: yup.string().email().required("Required").label("Email Address"),
  });

  const forgotpassword = async (data: Record<string, string>) => {
    try {
      setLoading(true);
      let body = { ...data };
      const res: any = await axios.post(`${REACT_APP_BASEURL}auth/forgotpassword`, body, config);
      const { message } = res?.data?.payload || {};
      toast.success(message, { autoClose: 6000 });
      setLoading(false);
    } catch (error: any) {
      // console.log({ error });
      let msg = error?.response?.data?.message ?? "Kindly try again.";
      toast.error(msg);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div
      className="py-5 min-vh-100 "
      style={{
        background: `linear-gradient( rgba(0,0,0,0.7), rgba(0,0,0, 0.7)) , url(http://lab.plli.org/web/wp-content/uploads/2022/04/leadership-min.jpg) center / cover fixed `,
      }}
    >
      <Container className="py-lg-5">
        <div className="bg-white rounded rounded-3 col-12 col-md-8 offset-md-2 col-xl-6 offset-xl-6 my-auto py-5 px-4 border border-2 shadow-lg">
          <Formik
            validationSchema={schema}
            validateOnChange={true}
            validateOnBlur={true}
            validateOnMount={true}
            initialValues={initialState}
            onSubmit={(data) => forgotpassword(data)}
          >
            {({ values, errors, validateForm, handleChange, isValid, handleSubmit }) => (
              <>
                <form noValidate onChange={(e) => validateForm()} onSubmit={handleSubmit}>
                  <div className="text-center w-100 mb-4">
                    <img
                      className="mb-4 mx-auto"
                      src="https://lab.plli.org/web/wp-content/uploads/2020/12/logo-light-e1636397894245.png"
                      alt=""
                      // width={72}
                      height={100}
                    />
                    <h1 className="h3 mb-3 fw-normal">Forgot your password ?</h1>
                    <p className="text-muted mb-3 fw-normal">
                      Enter your email address and we&apos;ll send you an email with instructions to reset your password.
                    </p>
                  </div>
                  <div className="my-3">
                    <Form.Group className="mb-3">
                      <Input name="email" label="Email Address" placeholder="Enter email" />
                    </Form.Group>
                  </div>
                  {/* <pre>{JSON.stringify({ errors, values, isValid }, null, 2)}</pre> */}
                  <button className="w-100 btn btn-lg btn-primary" type="submit">
                    {/* Sign in */}
                    {loading ? "Please wait...." : "Recover Password"}
                  </button>
                </form>
                <div className="row mt-5 hidden">
                  <div className="col-12 text-center mt-4">
                    <p className="text-dark">
                      Back to{" "}
                      <Link to="./login" className="text-decoration-none h5">
                        Login
                      </Link>
                    </p>
                  </div>{" "}
                  {/* end col */}
                </div>
              </>
            )}
          </Formik>
        </div>
      </Container>
    </div>
  );
};

export default Login;
