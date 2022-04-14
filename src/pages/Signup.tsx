import { Formik, Field } from "formik";
import React, { useState } from "react";
import { Modal, Form, FloatingLabel, Button } from "react-bootstrap";
import * as yup from "yup";
import Container from "react-bootstrap/Container";
import { Input, Select } from "../components/elements/form";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Signup: React.FC = () => {
  const initialValues = {};

  const [step, setStep] = useState<number>(0);
  const [initialState, setIntialState] = useState<any>(initialValues);

  const schema = yup.object().shape({
    fullname: yup.string().required().min(4).label("Fullname"),
    gender: yup.string().required().min(4).label("Gender"),
    email: yup.string().email().required().label("Email Address"),
    phone: yup.string().required().min(8).max(14).label("Phone Number"),
    currentVocationDescription: yup.string().optional().label("Field"),
    OthersCurrentVocationDescription: yup.string().optional().label("Field"),
    designation: yup.string().optional().label("Field"),
    othersDesignation: yup.string().optional().label("Field"),
    essay: yup.string().optional().label("Field"),
    academicQualification: yup.string().required().label("Field"),
    livelihood: yup.string().required().label("Field"),
    //busines owners
    cacRegistered: yup.string().when("livelihood", {
      is: "Business Owner",
      then: yup.string().required("Field"),
      otherwise: yup.string().optional(),
    }),
    businessLocation: yup.string().when("livelihood", {
      is: "Business Owner",
      then: yup.string().required("Field"),
      otherwise: yup.string().optional(),
    }),
    location: yup.string().when("livelihood", {
      is: "Business Owner",
      then: yup.string().required("Field"),
      otherwise: yup.string().optional(),
    }),
    annualTurnover: yup.string().when("livelihood", {
      is: "Business Owner",
      then: yup.string().required("Field"),
      otherwise: yup.string().optional(),
    }),
    ownershipStructure: yup.string().when("livelihood", {
      is: "Business Owner",
      then: yup.string().required("Field"),
      otherwise: yup.string().optional(),
    }),
    financialRecordingProcess: yup.string().when("livelihood", {
      is: "Business Owner",
      then: yup.string().required("Field"),
      otherwise: yup.string().optional(),
    }),
    yearsOperation: yup.string().when("livelihood", {
      is: "Business Owner",
      then: yup.string().required("Field"),
      otherwise: yup.string().optional(),
    }),
    staffStrength: yup.string().when("livelihood", {
      is: "Business Owner",
      then: yup.string().required("Field"),
      otherwise: yup.string().optional(),
    }),
    businessSector: yup.string().when("livelihood", {
      is: "Business Owner",
      then: yup.string().required("Field"),
      otherwise: yup.string().optional(),
    }),
    //corporate professionals
    workExpereience: yup.string().when("livelihood", {
      is: "Paid Employment (9-5)",
      then: yup.string().required("Field"),
      otherwise: yup.string().optional(),
    }),
    industry: yup.string().when("livelihood", {
      is: "Paid Employment (9-5)",
      then: yup.string().required("Field"),
      otherwise: yup.string().optional(),
    }),
    noPeopleReport: yup.string().when("livelihood", {
      is: "Paid Employment (9-5)",
      then: yup.string().required("Field"),
      otherwise: yup.string().optional(),
    }),
    noProfessionalDevelopmentCourses: yup.string().when("livelihood", {
      is: "Paid Employment (9-5)",
      then: yup.string().required("Field"),
      otherwise: yup.string().optional(),
    }),
  });

  const validateStep0 = (errors: any) => {
    const neededKeys = ["fullname", "gender", "email", "phone"];
    if (neededKeys.some((key) => Object.keys(errors).includes(key))) {
      const arr = neededKeys.filter((i) => errors[i]);
      if (arr.length > 0) return toast.error(`Error. ${errors[arr[0]]}`);
    }
    setStep(1);
  };

  const validateStep1 = (errors: any) => {
    const neededKeys = [
      "currentVocationDescription",
      "OthersCurrentVocationDescription",
      "designation",
      "othersDesignation",
      "academicQualification",
    ];
    if (neededKeys.some((key) => Object.keys(errors).includes(key))) {
      const arr = neededKeys.filter((i) => errors[i]);
      if (arr.length > 0) return toast.error(`Error. ${errors[arr[0]]}`);
    }
    setStep(2);
  };

  const validateStep2 = (errors: any) => {
    const neededKeys = ["essay", "livelihood"];
    if (neededKeys.some((key) => Object.keys(errors).includes(key))) {
      const arr = neededKeys.filter((i) => errors[i]);
      if (arr.length > 0) return toast.error(`Error. ${errors[arr[0]]}`);
    }
    setStep(3);
  };

  const validateStep3 = (errors: any) => {
    const neededKeys = [
      "cacRegistered",
      "businessLocation",
      "location",
      "annualTurnover",
      "ownershipStructure",
      "financialRecordingProcess",
      "yearsOperation",
      "staffStrength",
      "businessSector",
      "workExpereience",
      "industry",
      "noPeopleReport",
      "noProfessionalDevelopmentCourses",
      "professionalCourses",
    ];
    if (neededKeys.some((key) => Object.keys(errors).includes(key))) {
      const arr = neededKeys.filter((i) => errors[i]);
      if (arr.length > 0) return toast.error(`Error. ${errors[arr[0]]}`);
    }
    // setStep(4);
  };

  return (
    <div
      className="py-5 min-vh-100 "
      style={{
        background: `linear-gradient( rgba(0,0,0,0.7), rgba(0,0,0, 0.7)) , url(http://lab.plli.org/web/wp-content/uploads/2022/04/leadership-min.jpg) center / cover fixed `,
      }}
      //   style={{ background: `url('https://spruko.com/demo/sash/sash/assets/images/media/bg2.jpg') center center / cover` }}
    >
      <Container className="py-lg-1">
        <div className="bg-white rounded rounded-3 col-12 col-md-8 offset-md-2 col-xl-6 offset-xl-6 my-auto py-5 px-4 border border-2 shadow-lg">
          <div className="text-center w-100 mb-4  border-bottom ">
            <img
              className="mb-4 mx-auto"
              src="https://lab.plli.org/web/wp-content/uploads/2020/12/logo-light-e1636397894245.png"
              alt=""
              // width={72}
              height={100}
            />
            <h1 className="h3 mb-3 fw-normal">Sign Up Here</h1>
          </div>

          <Formik
            validationSchema={schema}
            validateOnChange={true}
            validateOnBlur={true}
            validateOnMount={true}
            initialValues={initialState}
            onSubmit={(data) => {
              console.log({ data });
              // !dataUpdate && createPage(data);
            }}
          >
            {({ values, errors, validateForm, handleChange, isValid, handleSubmit }) => (
              <>
                <form noValidate onChange={(e) => validateForm()} onSubmit={handleSubmit}>
                  <div className="">
                    <div className="row align-items-stretch pt-4 mt-0 pb-2 gy-5 gx-2">
                      {step == 0 && (
                        <>
                          <div className="col-lg-6 mt-2">
                            <Form.Group className="mb-3">
                              <Input name="fullname" placeholder="Enter full name" />
                            </Form.Group>
                          </div>
                          <div className="col-lg-6 mt-2">
                            <Form.Group className="mb-3">
                              <Select
                                name="gender"
                                label="Gender"
                                options={[
                                  { label: "Male", value: "male" },
                                  { label: "Feale", value: "female" },
                                ]}
                              />
                            </Form.Group>
                          </div>
                          <div className="col-lg-6 mt-2">
                            <Form.Group className="mb-3">
                              <Input name="email" label="Email Address" placeholder="Enter email" />
                            </Form.Group>
                          </div>
                          <div className="col-lg-6 mt-2">
                            <Form.Group className="mb-3">
                              <Input name="phone" label="Phone Number" placeholder="Enter phone number" />
                            </Form.Group>
                          </div>
                        </>
                      )}
                      {step == 1 && (
                        <>
                          <div className="col-lg-12 mt-2">
                            <Form.Group className="mb-3">
                              <Select
                                name="currentVocationDescription"
                                label="What best describes your current vocation "
                                firstItem="Select Option"
                                options={[
                                  "Business Owner",
                                  "Techpreneur / Tech Founder",
                                  "Senior Corporate Executive",
                                  "9 - 5 with side hustle",
                                  "Freelance / Self Employed",
                                  "Planning on transiting paid employment to entrepreneurship",
                                  "Civil Servant",
                                  "Clergy",
                                  "Student",
                                  "Unemployed",
                                  "Others",
                                ]}
                              />
                            </Form.Group>
                          </div>
                          {values.currentVocationDescription == "Others" && (
                            <div className="col-lg-12 mt-2">
                              <Form.Group className="mb-3">
                                <Input name="OthersCurrentVocationDescription" label="Others" placeholder="Kindly specify" />
                              </Form.Group>
                            </div>
                          )}
                          <div className="col-lg-12 mt-2">
                            <Form.Group className="mb-3">
                              <Select
                                name="designation"
                                label="Designation / Position "
                                firstItem="Select Option"
                                options={[
                                  "CEO",
                                  "COO",
                                  "CFO",
                                  "CTO",
                                  "CMO",
                                  "GMD",
                                  "Founder / Co-Founder",
                                  "Group Head",
                                  "General Manager",
                                  "Team Lead",
                                  "Others",
                                ]}
                              />
                            </Form.Group>
                          </div>
                          {values.designation == "Others" && (
                            <div className="col-lg-12 mt-2">
                              <Form.Group className="mb-3">
                                <Input name="othersDesignation" label="Designation / Position" placeholder="Kindly specify designation" />
                              </Form.Group>
                            </div>
                          )}
                          <div className="col-lg-12 mt-2">
                            <Form.Group className="mb-3">
                              <Select
                                name="academicQualification"
                                label="Academidc Qualification"
                                firstItem="Select Option"
                                options={["Secondary School Certificate", "National Diploma", "BSC", "HND", "Masters", "MBA", "PHD"]}
                              />
                            </Form.Group>
                          </div>
                        </>
                      )}

                      {step == 2 && (
                        <>
                          <div className="col-12 mt-2">
                            <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                              <Form.Label>
                                Write an essay on Why you are registering for a business carrer now. What results you desire it will help
                                you achieve. What problems or challenges you hope it will help you solve or address.
                              </Form.Label>
                              <Input
                                name="essay"
                                as="textarea"
                                disableLabel={true}
                                label=""
                                placeholder="Start essay"
                                style={{ height: "150px" }}
                                errors={errors}
                              />
                            </Form.Group>
                          </div>

                          <div className="col-lg-12 mt-2">
                            <Form.Group className="mb-3">
                              <Select
                                name="livelihood"
                                label="Means of Livelihood"
                                firstItem="Select Option"
                                options={["Business Owner", "Paid Employment (9-5)"]}
                              />
                            </Form.Group>
                          </div>
                        </>
                      )}

                      {/* // steps 3 */}

                      {step == 3 && (
                        <>
                          {values.livelihood == "Business Owner" && (
                            <>
                              <div className="col-lg-12 mt-2">
                                <Form.Group className="mb-3">
                                  <Select
                                    name="cacRegistered"
                                    label="Is your business registered with Corporate Affairs Commission (CAC)"
                                    firstItem="Select Option"
                                    options={["Yes", "No"]}
                                  />
                                </Form.Group>
                              </div>

                              <div className="col-lg-6 mt-2">
                                <Form.Group className="mb-3">
                                  <Input name="businessLocation" label="Where is your business located ?" placeholder="" />
                                </Form.Group>
                              </div>

                              <div className="col-lg-6 mt-2">
                                <Form.Group className="mb-3">
                                  <Input name="location" label="Where do you reside ?" placeholder="" />
                                </Form.Group>
                              </div>

                              <div className="col-lg-6 mt-2">
                                <Form.Group className="mb-3">
                                  <Select
                                    name="annualTurnover"
                                    label="Annual Turnover"
                                    firstItem="Select Option"
                                    options={[
                                      "NGN 5M - NGN 10M",
                                      "NGN 10M - NGN 50M",
                                      "NGN 50M - NGN 250M",
                                      "NGN 250M - NGN 500M",
                                      "NGN 500M - NGN 1 Billion",
                                      "NGN 1 Billion and above",
                                    ]}
                                  />
                                </Form.Group>
                              </div>

                              <div className="col-lg-6 mt-2">
                                <Form.Group className="mb-3">
                                  <Select
                                    name="ownershipStructure"
                                    label="Ownership Structure of the Business"
                                    firstItem="Select Option"
                                    options={[
                                      "Sole Proprietorship",
                                      "Partnership or Joint Venture",
                                      "Private Limited Liability",
                                      "Public Limited Liability",
                                      "Co-operative",
                                      "Non-Profit Organization",
                                      "Other",
                                    ]}
                                  />
                                </Form.Group>
                              </div>

                              <div className="col-lg-12 mt-2">
                                <Form.Group className="mb-3">
                                  <Select
                                    name="financialRecordingProcess"
                                    label="Financial Recording Processs-in-place"
                                    firstItem="Select Option"
                                    options={["Basic Bookkeeping", "Formal Financial Recording", "Auditing of Financial Records Annually"]}
                                  />
                                </Form.Group>
                              </div>

                              <div className="col-lg-6 mt-2">
                                <Form.Group className="mb-3">
                                  <Select
                                    name="yearsOperation"
                                    label="Number of years in operation"
                                    firstItem="Select Option"
                                    options={[
                                      "20+ years",
                                      "16 - 20 years",
                                      "11 - 15 years",
                                      "6 - 10 years",
                                      "2 - 5 years",
                                      "less than 2 years",
                                    ]}
                                  />
                                </Form.Group>
                              </div>

                              <div className="col-lg-6 mt-2">
                                <Form.Group className="mb-3">
                                  <Select
                                    name="staffStrength"
                                    label="Current Staff Strength"
                                    firstItem="Select Option"
                                    options={[
                                      "1 - 9 employees",
                                      "10 - 50 employees",
                                      "50 - 99 employees",
                                      "100 - 199 employees",
                                      "200 - 500 employees",
                                      "Above employees",
                                    ]}
                                  />
                                </Form.Group>
                              </div>

                              <div className="col-lg-12 mt-2">
                                <Form.Group className="mb-3">
                                  <Input name="businessSector" label="Business Sector" placeholder="" />
                                </Form.Group>
                              </div>
                            </>
                          )}

                          {values.livelihood == "Paid Employment (9-5)" && (
                            <>
                              <div className="col-lg-12 mt-2">
                                <Form.Group className="mb-3">
                                  <Select
                                    name="workExpereience"
                                    label="Years of Work Expereience"
                                    firstItem="Select Option"
                                    options={[
                                      "20+ years",
                                      "16 - 20 years",
                                      "11 - 15 years",
                                      "6 - 10 years",
                                      "2 - 5 years",
                                      "less than 2 years",
                                    ]}
                                  />
                                </Form.Group>
                              </div>

                              <div className="col-lg-12 mt-2">
                                <Form.Group className="mb-3">
                                  <Input name="industry" label="Field Industry ( of Past & Present Work Experience )" placeholder="" />
                                </Form.Group>
                              </div>

                              <div className="col-lg-12 mt-2">
                                <Form.Group className="mb-3">
                                  <Select
                                    name="noPeopleReport"
                                    label="Number of people who report to you"
                                    firstItem="Select Option"
                                    options={["0 - 4", "5 - 24", "25 - 99", "100 - 499", "Above 500"]}
                                  />
                                </Form.Group>
                              </div>

                              <div className="col-lg-12 mt-2">
                                <Form.Group className="mb-3">
                                  <Select
                                    name="noProfessionalDevelopmentCourses"
                                    label="Number of professional development courses taken the past five years"
                                    firstItem="Select Option"
                                    options={["0 - 3", "4 - 9", "10 - 14", "Above 15"]}
                                  />
                                </Form.Group>
                              </div>
                            </>
                          )}
                        </>
                      )}

                      {/* <pre>{JSON.stringify({ errors, values, isValid }, null, 2)}</pre> */}
                    </div>
                    {step == 3 && (
                      <button className="w-100 btn btn-lg btn-primary" type="submit">
                        Sign Up
                      </button>
                    )}
                  </div>

                  <div className="d-flex row g-0 mt-4 justify-content-between">
                    <div className="col-5 col-lg-3">
                      {step > 0 && (
                        <button className="w-100 btn btn-lg btn-outline-primary" type="button" onClick={() => setStep(step - 1)}>
                          Previous
                        </button>
                      )}
                    </div>

                    <div className="col-5 col-lg-3">
                      {step < 3 && (
                        <button
                          className="w-100 btn btn-lg btn-outline-primary"
                          type="button"
                          onClick={() => {
                            step == 0
                              ? validateStep0(errors)
                              : step == 1
                              ? validateStep1(errors)
                              : step == 2
                              ? validateStep2(errors)
                              : step == 3
                              ? validateStep3(errors)
                              : null;
                          }}
                        >
                          Next
                        </button>
                      )}
                    </div>
                  </div>
                </form>
                <div className="row mt-5 hidden">
                  <div className="col-12 text-center mt-4">
                    <p className="text-dark">
                      Already have an account ?{" "}
                      <Link to="./login" className="text-decoration-none h5">
                        {" "}
                        Signin{" "}
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

export default Signup;
