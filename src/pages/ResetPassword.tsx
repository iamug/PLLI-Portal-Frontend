import React, { useEffect, useState } from "react";
import { Formik, Field } from "formik";
import { Modal, Form, Container, FormControl, InputGroup, FloatingLabel } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import { toast } from "react-toastify";
import { Input, PasswordInput } from "../components/elements/form";
const { REACT_APP_BASEURL } = process.env;

const Login: React.FC = () => {
  const history = useHistory();
  const { resetToken } = useParams<{ resetToken: string }>();
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
    password: yup.string().trim().required("Please Enter your password"),
    confirmPassword: yup
      .string()
      .trim()
      .required()
      .test("passwords-match", "Passwords must match", function (value) {
        return this.parent.password === value;
      })
      .label("Confirm Password"),
  });

  const resetpassword = async (data: Record<string, string>) => {
    try {
      setLoading(true);
      let body = { ...data };
      const res: any = await axios.post(`${REACT_APP_BASEURL}auth/resetpassword/${resetToken}`, body, config);
      console.log({ res });
      const { message } = res?.data?.payload || {};
      toast.success(message, { autoClose: 7000 });
      setTimeout(() => {
        history.push("./login");
      }, 9000);
      // setLoading(false);
    } catch (error: any) {
      // console.log({ error });
      let msg = error?.response?.data?.message ?? "Kindly try again.";
      toast.error(msg);
      setLoading(false);
    }
  };

  // const fetch = async () => {
  //   try {
  //     const res: any = await axios.get(`${HospitalServiceUrl}prescription/all`, config);
  //     res.data?.payload?.status && setPrescriptions(res.data.payload.message || []);
  //   } catch (error) {}
  // };
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
            onSubmit={(data) => resetpassword(data)}
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
                    <h1 className="h3 mb-3 fw-normal">Reset Password</h1>
                    <p className="text-muted mb-3 fw-normal">Enter your new password and confirm it.</p>
                  </div>
                  <div className=" mt-2">
                    <Form.Group className=" my-3">
                      <PasswordInput name="password" placeholder="Enter password" />
                    </Form.Group>
                  </div>

                  <div className=" mt-2">
                    <Form.Group className=" my-3">
                      <PasswordInput name="confirmPassword" label="Confirm Password" placeholder="Confirm password" />
                    </Form.Group>
                  </div>

                  {/* <pre>{JSON.stringify({ errors, values, isValid }, null, 2)}</pre> */}
                  <button className="w-100 btn btn-lg btn-primary" type="submit">
                    {/* Sign in */}
                    {loading ? "Please wait...." : "Reset Password"}
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
