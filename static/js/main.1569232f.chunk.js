(this["webpackJsonpactiveedge-exercise"]=this["webpackJsonpactiveedge-exercise"]||[]).push([[0],{111:function(e,t,a){},238:function(e,t,a){},240:function(e,t,a){},241:function(e,t,a){"use strict";a.r(t);var s=a(1),l=a.n(s),n=a(49),r=a.n(n),c=(a(111),a(9)),i=a(8),o=a(0),d=function(){Object(i.g)();return Object(o.jsx)("div",{className:"bg-light ",children:Object(o.jsxs)("header",{className:"navbar navbar-primary d-flex justify-content-between align-content-center align-items-center  bg-light sticky-top py-3 px-1 shadow",children:[Object(o.jsx)("div",{className:"col-2",children:Object(o.jsx)("img",{className:" ",src:"https://lab.plli.org/web/wp-content/uploads/2020/12/logo-light-e1636397894245.png",alt:"",height:60})}),Object(o.jsx)("div",{className:"col-lg-4 col-8 text-right text-md-center",children:Object(o.jsx)("h4",{className:"text-primary lh-sm ",children:"PISTIS LIFE AND LEADERSHIP INSTITUTE"})})]})})},b=function(e){var t=e.children;return Object(o.jsx)("div",{className:"d-flex row g-0",children:Object(o.jsxs)("main",{role:"main",className:"col",children:[Object(o.jsx)(d,{}),t]})})},m=a(2);function j(e){var t=Object.assign({},e);return localStorage.getItem("token")?Object(o.jsx)(i.b,Object(m.a)({},t)):Object(o.jsx)(i.a,{to:"./login"})}var u=a(6),h=function(){var e=Object(s.useState)({}),t=Object(u.a)(e,2),a=t[0],l=t[1],n=Object(s.useState)(!1),r=Object(u.a)(n,2),i=r[0],d=(r[1],Object(s.useState)(!1)),b=Object(u.a)(d,2);b[0],b[1];return Object(s.useEffect)((function(){var e=localStorage.getItem("user");l(JSON.parse(e))}),[i]),Object(o.jsx)("div",{className:"container mt-4 px-4 px-lg-2",children:Object(o.jsx)("div",{className:"px-2",children:Object(o.jsxs)("div",{className:"mt-3",children:[Object(o.jsxs)("div",{className:"row   mt-3 mt-xl-4  justify-content-between",children:[Object(o.jsx)("div",{className:"text-start col-8",children:Object(o.jsxs)("h5",{className:"text-primary",children:[Object(o.jsx)("span",{className:"d-none d-md-inline-block",children:" Welcome "})," ",Object(o.jsxs)("span",{className:"h3 text-capitalize ",children:[" ",a.fullname," "]})," "]})}),Object(o.jsx)("div",{className:" col-4 col-lg-3",children:Object(o.jsx)("div",{className:"text-right",children:Object(o.jsxs)("button",{type:"button",onClick:function(){return localStorage.clear(),void(window.location.href="./login")},className:"btn btn-outline-primary  mb-2",children:[Object(o.jsx)("span",{className:"d-none d-md-inline-block",children:"Logout"}),Object(o.jsx)("i",{className:"fas fa-power-off px-1 mx-2"})]})})})]}),Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 align-items-stretch py-4 gy-5",children:Object(o.jsx)("div",{className:"bg-primary bg-opacity-25 h-100 overflow-hidden text-white rounded-3 shadow-lg",children:Object(o.jsxs)("div",{className:"d-flex flex-column p-4 pb-5  text-white text-shadow-1",children:[Object(o.jsx)("h2",{className:"pt-5 mb-4 text-primary  lh-1 fw-normal",children:"Profile"}),Object(o.jsxs)(c.b,{to:"./profile",className:"d-inline-block",children:[" ",Object(o.jsx)("button",{className:"btn btn-primary mt-3",children:"View Profile"})," "]})]})})})})]})})})},p=a(22),O=a(14),x=a.n(O),v=a(19),g=a(106),f=a(243),N=a(23),y=a.n(N),w=a(3),S=a(10),C=a(4),F=a(105),k=(a(244),function(e){return e.replace(/(^\w|\s\w)/g,(function(e){return e.toUpperCase()}))}),P=["name","type","label","disableLabel","disableValidation"],E=["name","type","label","disableLabel","disableValidation"],G=["name","label","disableValidation","options","firstItem"],I=function(e){var t=e.name,a=e.type,s=e.label,l=e.disableLabel,n=void 0===l||l,r=e.disableValidation,c=void 0===r||r,i=Object(C.a)(e,P);return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(v.a,{name:t,children:function(e){var l=e.field,r=e.meta;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(F.a,{label:n?s||k(t):" ",className:"mb-2",children:Object(o.jsx)(f.a.Control,Object(m.a)(Object(m.a)({type:a||"text",isInvalid:!c&&(r.value||r.touched)&&r.error,isValid:!c&&(r.value||r.touched)&&!r.error},l),i))}),r.touched&&r.error&&Object(o.jsx)("span",{className:"text-danger",children:r.error})]})}})})},V=function(e){var t=e.name,a=(e.type,e.label),l=e.disableLabel,n=void 0===l||l,r=e.disableValidation,c=void 0===r||r,i=Object(C.a)(e,E),d=Object(s.useState)(!1),b=Object(u.a)(d,2),j=b[0],h=b[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(v.a,{name:t,children:function(e){var s=e.field,l=e.meta;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"w-100 d-flex mb-2  justify-content-between align-content-stretch align-items-stretch",children:[Object(o.jsx)(F.a,{label:n?a||k(t):" ",className:"mb-0",style:{flex:1},children:Object(o.jsx)(f.a.Control,Object(m.a)(Object(m.a)({type:j?"text":"password",isInvalid:!c&&(l.value||l.touched)&&l.error,isValid:!c&&(l.value||l.touched)&&!l.error},s),i))}),Object(o.jsx)("button",{className:" btn btn-lg btn-primaryLight",type:"button",onClick:function(){return h(!j)},children:Object(o.jsx)("i",{className:j?"far fa-eye ":"far fa-eye-slash "})})]}),l.touched&&l.error&&Object(o.jsx)("span",{className:"text-danger",children:l.error})]})}})})},q=function(e){var t=e.name,a=e.label,s=e.disableValidation,l=void 0===s||s,n=e.options,r=e.firstItem,c=Object(C.a)(e,G);return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(v.a,{name:t,children:function(e){var s=e.field,i=e.meta;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(F.a,{label:a||k(t),className:"mb-2",children:Object(o.jsxs)(f.a.Select,Object(m.a)(Object(m.a)(Object(m.a)({isInvalid:!l&&(i.value||i.touched)&&i.error,isValid:!l&&(i.value||i.touched)&&!i.error},c),s),{},{children:[Object(o.jsxs)("option",{selected:!0,disabled:!0,children:[" ",null!==r&&void 0!==r?r:"Select ".concat(a||k(t))]}),null===n||void 0===n?void 0:n.map((function(e,t){return Object(o.jsx)("option",{value:"object"==typeof e?e.value:e,children:"object"==typeof e?e.label:e},t)}))]}))}),i.touched&&i.error&&Object(o.jsx)("span",{className:"text-danger",children:i.error})]})}})})},B=function(){var e=Object(i.g)(),t=Object(s.useState)(!0),a=Object(u.a)(t,2),l=a[0],n=a[1],r=Object(s.useState)({}),d=Object(u.a)(r,2),b=d[0],j=(d[1],{headers:{"Content-Type":"application/json"}}),h=w.a().shape({email:w.b().email().required("Required").label("Email Address"),password:w.b().required("Required").label("Password")}),O=function(){var t=Object(p.a)(x.a.mark((function t(a){var s,l,r,c,i,o,d,b,u,h,p,O,v;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(!0),l=Object(m.a)({},a),t.next=5,y.a.post("".concat("https://lab.plli.org/dashboard-backend/api/","auth/login"),l,j);case 5:r=t.sent,c=(null===r||void 0===r||null===(s=r.data)||void 0===s?void 0:s.payload)||{},i=c.token,o=c.user,d=o.fullname,b=o.email,localStorage.setItem("token",i),u={fullname:d,email:b},localStorage.setItem("user",JSON.stringify(u)),S.b.success("Login Successful."),e.push("./dashboard"),n(!1),t.next=20;break;case 15:t.prev=15,t.t0=t.catch(0),v=null!==(h=null===t.t0||void 0===t.t0||null===(p=t.t0.response)||void 0===p||null===(O=p.data)||void 0===O?void 0:O.message)&&void 0!==h?h:"Kindly try again.",S.b.error(v),n(!1);case 20:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){n(!1)}),[]),Object(o.jsx)("div",{className:"py-5 min-vh-100 ",style:{background:"linear-gradient( rgba(0,0,0,0.7), rgba(0,0,0, 0.7)) , url(http://lab.plli.org/web/wp-content/uploads/2022/04/leadership-min.jpg) center / cover fixed "},children:Object(o.jsx)(g.a,{className:"py-lg-5",children:Object(o.jsx)("div",{className:"bg-white rounded rounded-3 col-12 col-md-8 offset-md-2 col-xl-6 offset-xl-6 my-auto py-5 px-4 border border-2 shadow-lg",children:Object(o.jsx)(v.b,{validationSchema:h,validateOnChange:!0,validateOnBlur:!0,validateOnMount:!0,initialValues:b,onSubmit:function(e){return O(e)},children:function(e){e.values,e.errors;var t=e.validateForm,a=(e.handleChange,e.isValid,e.handleSubmit);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("form",{noValidate:!0,onChange:function(e){return t()},onSubmit:a,children:[Object(o.jsxs)("div",{className:"text-center w-100 mb-4",children:[Object(o.jsx)("img",{className:"mb-4 mx-auto",src:"https://lab.plli.org/web/wp-content/uploads/2020/12/logo-light-e1636397894245.png",alt:"",height:100}),Object(o.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Please sign in"}),Object(o.jsx)("p",{className:"text-muted mb-3 fw-normal",children:"Enter your email address and password to access your account."})]}),Object(o.jsx)("div",{className:"my-3",children:Object(o.jsx)(f.a.Group,{className:"mb-3",children:Object(o.jsx)(I,{name:"email",label:"Email Address",placeholder:"Enter email"})})}),Object(o.jsxs)("div",{className:"row mt-2",children:[Object(o.jsx)("div",{className:"col-12 text-center my-1",children:Object(o.jsx)("p",{className:"text-dark text-end mb-0",children:Object(o.jsx)(c.b,{to:"./forgotpassword",className:"text-decoration-none h6 mb-0 text-muted",children:"Forgot your password ?"})})})," "]}),Object(o.jsx)("div",{className:"mb-",children:Object(o.jsx)(f.a.Group,{className:" my-2",children:Object(o.jsx)(V,{name:"password",placeholder:"Enter password"})})}),Object(o.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:l?"Please wait....":"Signin"})]}),Object(o.jsxs)("div",{className:"row mt-5 hidden",children:[Object(o.jsx)("div",{className:"col-12 text-center mt-4",children:Object(o.jsxs)("p",{className:"text-dark",children:["Don't have an account ?"," ",Object(o.jsx)(c.b,{to:"./signup",className:"text-decoration-none h5",children:"Signup"})]})})," "]})]})}})})})})},D=function(){var e=Object(i.g)(),t=Object(s.useState)(!0),a=Object(u.a)(t,2),l=(a[0],a[1]),n=Object(s.useState)(0),r=Object(u.a)(n,2),d=r[0],b=r[1],j=Object(s.useState)({}),h=Object(u.a)(j,2),O=h[0],N=(h[1],{headers:{"Content-Type":"application/json"}}),C=w.a().shape({firstname:w.b().required().label("Firstname"),lastname:w.b().required().label("Lastname"),gender:w.b().required().min(4).label("Gender"),email:w.b().email().required().label("Email Address"),phone:w.b().required().min(8).max(14).label("Phone Number"),currentVocationDescription:w.b().optional().label("Field"),OthersCurrentVocationDescription:w.b().optional().label("Field"),designation:w.b().optional().label("Field"),othersDesignation:w.b().optional().label("Field"),essay:w.b().optional().label("Field"),academicQualification:w.b().required().label("Field"),livelihood:w.b().required().label("Field"),cacRegistered:w.b().when("livelihood",{is:"Business Owner",then:w.b().required("Field"),otherwise:w.b().optional()}),businessLocation:w.b().when("livelihood",{is:"Business Owner",then:w.b().required("Field"),otherwise:w.b().optional()}),location:w.b().when("livelihood",{is:"Business Owner",then:w.b().required("Field"),otherwise:w.b().optional()}),annualTurnover:w.b().when("livelihood",{is:"Business Owner",then:w.b().required("Field"),otherwise:w.b().optional()}),ownershipStructure:w.b().when("livelihood",{is:"Business Owner",then:w.b().required("Field"),otherwise:w.b().optional()}),financialRecordingProcess:w.b().when("livelihood",{is:"Business Owner",then:w.b().required("Field"),otherwise:w.b().optional()}),yearsOperation:w.b().when("livelihood",{is:"Business Owner",then:w.b().required("Field"),otherwise:w.b().optional()}),staffStrength:w.b().when("livelihood",{is:"Business Owner",then:w.b().required("Field"),otherwise:w.b().optional()}),businessSector:w.b().when("livelihood",{is:"Business Owner",then:w.b().required("Field"),otherwise:w.b().optional()}),workExpereience:w.b().when("livelihood",{is:"Paid Employment (9-5)",then:w.b().required("Field"),otherwise:w.b().optional()}),industry:w.b().when("livelihood",{is:"Paid Employment (9-5)",then:w.b().required("Field"),otherwise:w.b().optional()}),noPeopleReport:w.b().when("livelihood",{is:"Paid Employment (9-5)",then:w.b().required("Field"),otherwise:w.b().optional()}),noProfessionalDevelopmentCourses:w.b().when("livelihood",{is:"Paid Employment (9-5)",then:w.b().required("Field"),otherwise:w.b().optional()}),password:w.b().trim().required("Please Enter your password"),confirmPassword:w.b().trim().required().test("passwords-match","Passwords must match",(function(e){return this.parent.password===e})).label("Confirm Password")}),F=function(){var t=Object(p.a)(x.a.mark((function t(a){var s,n,r,c,i,o,d,b,j,u,h,p,O,v;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,l(!0),n=Object(m.a)({},a),t.next=5,y.a.post("".concat("https://lab.plli.org/dashboard-backend/api/","auth/register"),n,N);case 5:r=t.sent,c=(null===r||void 0===r||null===(s=r.data)||void 0===s?void 0:s.payload)||{},i=c.token,o=c.user,d=o.fullname,b=o.email,j=o.phome,localStorage.setItem("token",i),u={fullname:d,email:b,phome:j},localStorage.setItem("user",JSON.stringify(u)),S.b.success("Registration Successful."),e.push("./dashboard"),l(!1),t.next=20;break;case 15:t.prev=15,t.t0=t.catch(0),v=null!==(h=null===t.t0||void 0===t.t0||null===(p=t.t0.response)||void 0===p||null===(O=p.data)||void 0===O?void 0:O.message)&&void 0!==h?h:"Kindly try again.",S.b.error(v),l(!1);case 20:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}();return Object(o.jsx)("div",{className:"py-5 min-vh-100 ",style:{background:"linear-gradient( rgba(0,0,0,0.7), rgba(0,0,0, 0.7)) , url(http://lab.plli.org/web/wp-content/uploads/2022/04/leadership-min.jpg) center / cover fixed "},children:Object(o.jsx)(g.a,{className:"py-lg-1",children:Object(o.jsxs)("div",{className:"bg-white rounded rounded-3 col-12 col-md-8 offset-md-2 col-xl-6 offset-xl-6 my-auto py-5 px-4 border border-2 shadow-lg",children:[Object(o.jsxs)("div",{className:"text-center w-100 mb-4  border-bottom ",children:[Object(o.jsx)("img",{className:"mb-4 mx-auto",src:"https://lab.plli.org/web/wp-content/uploads/2020/12/logo-light-e1636397894245.png",alt:"",height:100}),Object(o.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Sign Up Here"})]}),Object(o.jsx)(v.b,{validationSchema:C,validateOnChange:!0,validateOnBlur:!0,validateOnMount:!0,initialValues:O,onSubmit:function(e){return F(e)},children:function(e){var t=e.values,a=e.errors,s=e.validateForm,l=(e.handleChange,e.isValid,e.handleSubmit);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("form",{noValidate:!0,onChange:function(e){return s()},onSubmit:l,children:[Object(o.jsxs)("div",{className:"",children:[Object(o.jsxs)("div",{className:"row align-items-stretch pt-4 mt-0 pb-2 gy-5 gx-2",children:[0==d&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"col-lg-6 mt-2",children:Object(o.jsx)(f.a.Group,{className:"mb-3",children:Object(o.jsx)(I,{name:"firstname",placeholder:"Enter first name"})})}),Object(o.jsx)("div",{className:"col-lg-6 mt-2",children:Object(o.jsx)(f.a.Group,{className:"mb-3",children:Object(o.jsx)(I,{name:"lastname",placeholder:"Enter last name"})})}),Object(o.jsx)("div",{className:"col-lg-12 mt-2",children:Object(o.jsx)(f.a.Group,{className:"mb-3",children:Object(o.jsx)(I,{name:"email",label:"Email Address",placeholder:"Enter email"})})}),Object(o.jsx)("div",{className:"col-lg-6 mt-2",children:Object(o.jsx)(f.a.Group,{className:"mb-3",children:Object(o.jsx)(I,{name:"phone",label:"Phone Number",placeholder:"Enter phone number"})})}),Object(o.jsx)("div",{className:"col-lg-6 mt-2",children:Object(o.jsx)(f.a.Group,{className:"mb-3",children:Object(o.jsx)(q,{name:"gender",label:"Gender",options:[{label:"Male",value:"male"},{label:"Female",value:"female"}]})})})]}),1==d&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"col-lg-12 mt-2",children:Object(o.jsx)(f.a.Group,{className:"mb-3",children:Object(o.jsx)(q,{name:"currentVocationDescription",label:"What best describes your current vocation ",firstItem:"Select Option",options:["Business Owner","Techpreneur / Tech Founder","Senior Corporate Executive","9 - 5 with side hustle","Freelance / Self Employed","Planning on transiting paid employment to entrepreneurship","Civil Servant","Clergy","Student","Unemployed","Others"]})})}),"Others"==t.currentVocationDescription&&Object(o.jsx)("div",{className:"col-lg-12 mt-2",children:Object(o.jsx)(f.a.Group,{className:"mb-3",children:Object(o.jsx)(I,{name:"OthersCurrentVocationDescription",label:"Others",placeholder:"Kindly specify"})})}),Object(o.jsx)("div",{className:"col-lg-12 mt-2",children:Object(o.jsx)(f.a.Group,{className:"mb-3",children:Object(o.jsx)(q,{name:"designation",label:"Designation / Position ",firstItem:"Select Option",options:["CEO","COO","CFO","CTO","CMO","GMD","Founder / Co-Founder","Group Head","General Manager","Team Lead","Others"]})})}),"Others"==t.designation&&Object(o.jsx)("div",{className:"col-lg-12 mt-2",children:Object(o.jsx)(f.a.Group,{className:"mb-3",children:Object(o.jsx)(I,{name:"othersDesignation",label:"Designation / Position",placeholder:"Kindly specify designation"})})}),Object(o.jsx)("div",{className:"col-lg-12 mt-2",children:Object(o.jsx)(f.a.Group,{className:"mb-3",children:Object(o.jsx)(q,{name:"academicQualification",label:"Academidc Qualification",firstItem:"Select Option",options:["Secondary School Certificate","National Diploma","BSC","HND","Masters","MBA","PHD"]})})})]}),2==d&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"col-12 mt-2",children:Object(o.jsxs)(f.a.Group,{className:"mb-3 mt-4",controlId:"formBasicEmail",children:[Object(o.jsx)(f.a.Label,{children:"Write an essay on Why you are registering for a business carrer now. What results you desire it will help you achieve. What problems or challenges you hope it will help you solve or address."}),Object(o.jsx)(I,{name:"essay",as:"textarea",disableLabel:!0,label:"",placeholder:"Start essay",style:{height:"150px"},errors:a})]})}),Object(o.jsx)("div",{className:"col-lg-12 mt-2",children:Object(o.jsx)(f.a.Group,{className:"mb-3",children:Object(o.jsx)(q,{name:"livelihood",label:"Means of Livelihood",firstItem:"Select Option",options:["Business Owner","Paid Employment (9-5)"]})})})]}),3==d&&Object(o.jsxs)(o.Fragment,{children:["Business Owner"==t.livelihood&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"col-lg-12 mt-2",children:Object(o.jsx)(f.a.Group,{className:"mb-3",children:Object(o.jsx)(q,{name:"cacRegistered",label:"Is your business registered with Corporate Affairs Commission (CAC)",firstItem:"Select Option",options:["Yes","No"]})})}),Object(o.jsx)("div",{className:"col-lg-6 mt-2",children:Object(o.jsx)(f.a.Group,{className:"mb-3",children:Object(o.jsx)(I,{name:"businessLocation",label:"Where is your business located ?",placeholder:""})})}),Object(o.jsx)("div",{className:"col-lg-6 mt-2",children:Object(o.jsx)(f.a.Group,{className:"mb-3",children:Object(o.jsx)(I,{name:"location",label:"Where do you reside ?",placeholder:""})})}),Object(o.jsx)("div",{className:"col-lg-6 mt-2",children:Object(o.jsx)(f.a.Group,{className:"mb-3",children:Object(o.jsx)(q,{name:"annualTurnover",label:"Annual Turnover",firstItem:"Select Option",options:["NGN 5M - NGN 10M","NGN 10M - NGN 50M","NGN 50M - NGN 250M","NGN 250M - NGN 500M","NGN 500M - NGN 1 Billion","NGN 1 Billion and above"]})})}),Object(o.jsx)("div",{className:"col-lg-6 mt-2",children:Object(o.jsx)(f.a.Group,{className:"mb-3",children:Object(o.jsx)(q,{name:"ownershipStructure",label:"Ownership Structure of the Business",firstItem:"Select Option",options:["Sole Proprietorship","Partnership or Joint Venture","Private Limited Liability","Public Limited Liability","Co-operative","Non-Profit Organization","Other"]})})}),Object(o.jsx)("div",{className:"col-lg-12 mt-2",children:Object(o.jsx)(f.a.Group,{className:"mb-3",children:Object(o.jsx)(q,{name:"financialRecordingProcess",label:"Financial Recording Processs-in-place",firstItem:"Select Option",options:["Basic Bookkeeping","Formal Financial Recording","Auditing of Financial Records Annually"]})})}),Object(o.jsx)("div",{className:"col-lg-6 mt-2",children:Object(o.jsx)(f.a.Group,{className:"mb-3",children:Object(o.jsx)(q,{name:"yearsOperation",label:"Number of years in operation",firstItem:"Select Option",options:["20+ years","16 - 20 years","11 - 15 years","6 - 10 years","2 - 5 years","less than 2 years"]})})}),Object(o.jsx)("div",{className:"col-lg-6 mt-2",children:Object(o.jsx)(f.a.Group,{className:"mb-3",children:Object(o.jsx)(q,{name:"staffStrength",label:"Current Staff Strength",firstItem:"Select Option",options:["1 - 9 employees","10 - 50 employees","50 - 99 employees","100 - 199 employees","200 - 500 employees","Above employees"]})})}),Object(o.jsx)("div",{className:"col-lg-12 mt-2",children:Object(o.jsx)(f.a.Group,{className:"mb-3",children:Object(o.jsx)(I,{name:"businessSector",label:"Business Sector",placeholder:""})})})]}),"Paid Employment (9-5)"==t.livelihood&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"col-lg-12 mt-2",children:Object(o.jsx)(f.a.Group,{className:"mb-3",children:Object(o.jsx)(q,{name:"workExpereience",label:"Years of Work Expereience",firstItem:"Select Option",options:["20+ years","16 - 20 years","11 - 15 years","6 - 10 years","2 - 5 years","less than 2 years"]})})}),Object(o.jsx)("div",{className:"col-lg-12 mt-2",children:Object(o.jsx)(f.a.Group,{className:"mb-3",children:Object(o.jsx)(I,{name:"industry",label:"Field Industry ( of Past & Present Work Experience )",placeholder:""})})}),Object(o.jsx)("div",{className:"col-lg-12 mt-2",children:Object(o.jsx)(f.a.Group,{className:"mb-3",children:Object(o.jsx)(q,{name:"noPeopleReport",label:"Number of people who report to you",firstItem:"Select Option",options:["0 - 4","5 - 24","25 - 99","100 - 499","Above 500"]})})}),Object(o.jsx)("div",{className:"col-lg-12 mt-2",children:Object(o.jsx)(f.a.Group,{className:"mb-3",children:Object(o.jsx)(q,{name:"noProfessionalDevelopmentCourses",label:"Number of professional development courses taken the past five years",firstItem:"Select Option",options:["0 - 3","4 - 9","10 - 14","Above 15"]})})})]})]}),4==d&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"col-lg-12 mt-2",children:Object(o.jsx)(f.a.Group,{className:" my-3",children:Object(o.jsx)(V,{name:"password",placeholder:"Enter password"})})}),Object(o.jsx)("div",{className:"col-lg-12 mt-2",children:Object(o.jsx)(f.a.Group,{className:" my-3",children:Object(o.jsx)(V,{name:"confirmPassword",label:"Confirm Password",placeholder:"Confirm password"})})})]})]}),4==d&&Object(o.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Sign Up"})]}),Object(o.jsxs)("div",{className:"d-flex row g-0 mt-4 justify-content-between",children:[Object(o.jsx)("div",{className:"col-5 col-lg-3",children:d>0&&Object(o.jsx)("button",{className:"w-100 btn btn-lg btn-outline-primary",type:"button",onClick:function(){return b(d-1)},children:"Previous"})}),Object(o.jsx)("div",{className:"col-5 col-lg-3",children:d<4&&Object(o.jsx)("button",{className:"w-100 btn btn-lg btn-outline-primary",type:"button",onClick:function(){0==d?function(e){var t=["firstname","lastname","gender","email","phone"];if(t.some((function(t){return Object.keys(e).includes(t)}))){var a=t.filter((function(t){return e[t]}));if(a.length>0)return S.b.error("Error. ".concat(e[a[0]]))}b(1)}(a):1==d?function(e){var t=["currentVocationDescription","OthersCurrentVocationDescription","designation","othersDesignation","academicQualification"];if(t.some((function(t){return Object.keys(e).includes(t)}))){var a=t.filter((function(t){return e[t]}));if(a.length>0)return S.b.error("Error. ".concat(e[a[0]]))}b(2)}(a):2==d?function(e){var t=["essay","livelihood"];if(t.some((function(t){return Object.keys(e).includes(t)}))){var a=t.filter((function(t){return e[t]}));if(a.length>0)return S.b.error("Error. ".concat(e[a[0]]))}b(3)}(a):3==d?function(e){var t=["cacRegistered","businessLocation","location","annualTurnover","ownershipStructure","financialRecordingProcess","yearsOperation","staffStrength","businessSector","workExpereience","industry","noPeopleReport","noProfessionalDevelopmentCourses","professionalCourses"];if(t.some((function(t){return Object.keys(e).includes(t)}))){var a=t.filter((function(t){return e[t]}));if(a.length>0)return S.b.error("Error. ".concat(e[a[0]]))}b(4)}(a):4==d&&function(e){var t=["password","confirmPassword"];if(t.some((function(t){return Object.keys(e).includes(t)}))){var a=t.filter((function(t){return e[t]}));if(a.length>0)S.b.error("Error. ".concat(e[a[0]]))}}(a)},children:"Next"})})]})]}),Object(o.jsxs)("div",{className:"row mt-5 hidden",children:[Object(o.jsx)("div",{className:"col-12 text-center mt-4",children:Object(o.jsxs)("p",{className:"text-dark",children:["Already have an account ?"," ",Object(o.jsxs)(c.b,{to:"./login",className:"text-decoration-none h5",children:[" ","Signin"," "]})]})})," "]})]})}})]})})})},L=function(){Object(i.g)();var e=Object(s.useState)(!0),t=Object(u.a)(e,2),a=t[0],l=t[1],n=Object(s.useState)({}),r=Object(u.a)(n,2),d=r[0],b=(r[1],{headers:{"Content-Type":"application/json"}}),j=w.a().shape({email:w.b().email().required("Required").label("Email Address")}),h=function(){var e=Object(p.a)(x.a.mark((function e(t){var a,s,n,r,c,i,o,d,j;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),s=Object(m.a)({},t),e.next=5,y.a.post("".concat("https://lab.plli.org/dashboard-backend/api/","auth/forgotpassword"),s,b);case 5:n=e.sent,r=(null===n||void 0===n||null===(a=n.data)||void 0===a?void 0:a.payload)||{},c=r.message,S.b.success(c,{autoClose:6e3}),l(!1),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(0),j=null!==(i=null===e.t0||void 0===e.t0||null===(o=e.t0.response)||void 0===o||null===(d=o.data)||void 0===d?void 0:d.message)&&void 0!==i?i:"Kindly try again.",S.b.error(j),l(!1);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){l(!1)}),[]),Object(o.jsx)("div",{className:"py-5 min-vh-100 ",style:{background:"linear-gradient( rgba(0,0,0,0.7), rgba(0,0,0, 0.7)) , url(http://lab.plli.org/web/wp-content/uploads/2022/04/leadership-min.jpg) center / cover fixed "},children:Object(o.jsx)(g.a,{className:"py-lg-5",children:Object(o.jsx)("div",{className:"bg-white rounded rounded-3 col-12 col-md-8 offset-md-2 col-xl-6 offset-xl-6 my-auto py-5 px-4 border border-2 shadow-lg",children:Object(o.jsx)(v.b,{validationSchema:j,validateOnChange:!0,validateOnBlur:!0,validateOnMount:!0,initialValues:d,onSubmit:function(e){return h(e)},children:function(e){e.values,e.errors;var t=e.validateForm,s=(e.handleChange,e.isValid,e.handleSubmit);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("form",{noValidate:!0,onChange:function(e){return t()},onSubmit:s,children:[Object(o.jsxs)("div",{className:"text-center w-100 mb-4",children:[Object(o.jsx)("img",{className:"mb-4 mx-auto",src:"https://lab.plli.org/web/wp-content/uploads/2020/12/logo-light-e1636397894245.png",alt:"",height:100}),Object(o.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Forgot your password ?"}),Object(o.jsx)("p",{className:"text-muted mb-3 fw-normal",children:"Enter your email address and we'll send you an email with instructions to reset your password."})]}),Object(o.jsx)("div",{className:"my-3",children:Object(o.jsx)(f.a.Group,{className:"mb-3",children:Object(o.jsx)(I,{name:"email",label:"Email Address",placeholder:"Enter email"})})}),Object(o.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:a?"Please wait....":"Recover Password"})]}),Object(o.jsxs)("div",{className:"row mt-5 hidden",children:[Object(o.jsx)("div",{className:"col-12 text-center mt-4",children:Object(o.jsxs)("p",{className:"text-dark",children:["Back to"," ",Object(o.jsx)(c.b,{to:"./login",className:"text-decoration-none h5",children:"Login"})]})})," "]})]})}})})})})},A=function(){var e=Object(i.g)(),t=Object(i.h)().resetToken,a=Object(s.useState)(!0),l=Object(u.a)(a,2),n=l[0],r=l[1],d=Object(s.useState)({}),b=Object(u.a)(d,2),j=b[0],h=(b[1],{headers:{"Content-Type":"application/json"}}),O=w.a().shape({password:w.b().trim().required("Please Enter your password"),confirmPassword:w.b().trim().required().test("passwords-match","Passwords must match",(function(e){return this.parent.password===e})).label("Confirm Password")}),N=function(){var a=Object(p.a)(x.a.mark((function a(s){var l,n,c,i,o,d,b,j,u;return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r(!0),n=Object(m.a)({},s),a.next=5,y.a.post("".concat("https://lab.plli.org/dashboard-backend/api/","auth/resetpassword/").concat(t),n,h);case 5:c=a.sent,console.log({res:c}),i=(null===c||void 0===c||null===(l=c.data)||void 0===l?void 0:l.payload)||{},o=i.message,S.b.success(o,{autoClose:7e3}),setTimeout((function(){e.push("./login")}),9e3),a.next=17;break;case 12:a.prev=12,a.t0=a.catch(0),u=null!==(d=null===a.t0||void 0===a.t0||null===(b=a.t0.response)||void 0===b||null===(j=b.data)||void 0===j?void 0:j.message)&&void 0!==d?d:"Kindly try again.",S.b.error(u),r(!1);case 17:case"end":return a.stop()}}),a,null,[[0,12]])})));return function(e){return a.apply(this,arguments)}}();return Object(s.useEffect)((function(){r(!1)}),[]),Object(o.jsx)("div",{className:"py-5 min-vh-100 ",style:{background:"linear-gradient( rgba(0,0,0,0.7), rgba(0,0,0, 0.7)) , url(http://lab.plli.org/web/wp-content/uploads/2022/04/leadership-min.jpg) center / cover fixed "},children:Object(o.jsx)(g.a,{className:"py-lg-5",children:Object(o.jsx)("div",{className:"bg-white rounded rounded-3 col-12 col-md-8 offset-md-2 col-xl-6 offset-xl-6 my-auto py-5 px-4 border border-2 shadow-lg",children:Object(o.jsx)(v.b,{validationSchema:O,validateOnChange:!0,validateOnBlur:!0,validateOnMount:!0,initialValues:j,onSubmit:function(e){return N(e)},children:function(e){e.values,e.errors;var t=e.validateForm,a=(e.handleChange,e.isValid,e.handleSubmit);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("form",{noValidate:!0,onChange:function(e){return t()},onSubmit:a,children:[Object(o.jsxs)("div",{className:"text-center w-100 mb-4",children:[Object(o.jsx)("img",{className:"mb-4 mx-auto",src:"https://lab.plli.org/web/wp-content/uploads/2020/12/logo-light-e1636397894245.png",alt:"",height:100}),Object(o.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Reset Password"}),Object(o.jsx)("p",{className:"text-muted mb-3 fw-normal",children:"Enter your new password and confirm it."})]}),Object(o.jsx)("div",{className:" mt-2",children:Object(o.jsx)(f.a.Group,{className:" my-3",children:Object(o.jsx)(V,{name:"password",placeholder:"Enter password"})})}),Object(o.jsx)("div",{className:" mt-2",children:Object(o.jsx)(f.a.Group,{className:" my-3",children:Object(o.jsx)(V,{name:"confirmPassword",label:"Confirm Password",placeholder:"Confirm password"})})}),Object(o.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:n?"Please wait....":"Reset Password"})]}),Object(o.jsxs)("div",{className:"row mt-5 hidden",children:[Object(o.jsx)("div",{className:"col-12 text-center mt-4",children:Object(o.jsxs)("p",{className:"text-dark",children:["Back to"," ",Object(o.jsx)(c.b,{to:"./login",className:"text-decoration-none h5",children:"Login"})]})})," "]})]})}})})})})},M=a(242),T=function(){var e=Object(i.g)(),t=Object(s.useState)({}),a=Object(u.a)(t,2),l=a[0],n=a[1],r=Object(s.useState)(!1),c=Object(u.a)(r,2),d=c[0],b=(c[1],Object(s.useState)(!0)),m=Object(u.a)(b,2),j=m[0],h=m[1],O=localStorage.getItem("token"),v={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(O)}},g=function(){var e=Object(p.a)(x.a.mark((function e(){var t,a,s,l,r,c,i,o,d,b,m;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),e.next=4,y.a.get("".concat("https://lab.plli.org/dashboard-backend/api/","auth/profile"),v);case 4:a=e.sent,s=(null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.payload)||{},l=s.user,n(l),r=l.fullname,c=l.email,i={fullname:r,email:c},localStorage.setItem("user",JSON.stringify(i)),h(!1),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(0),m=null!==(o=null===e.t0||void 0===e.t0||null===(d=e.t0.response)||void 0===d||null===(b=d.data)||void 0===b?void 0:b.message)&&void 0!==o?o:"Kindly try again.",S.b.error(m),h(!1);case 18:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){g()}),[d]),Object(o.jsx)("div",{className:"container mt-4 px-4 px-lg-2",children:Object(o.jsx)("div",{className:"px-2",children:Object(o.jsxs)("div",{className:"mt-3",children:[Object(o.jsxs)("div",{className:"row   mt-3 mt-xl-4  justify-content-between",children:[Object(o.jsx)("div",{className:"text-start col-8",children:Object(o.jsx)("h5",{className:"text-primary",children:Object(o.jsxs)("button",{className:"btn btn-outline-primary",onClick:function(){return e.push("./dashboard")},children:[Object(o.jsx)("i",{className:"fa fa-arrow-left mx-2"}),"Home"]})})}),Object(o.jsx)("div",{className:" col-4 col-lg-3"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"row my-4 mb-5",children:Object(o.jsx)("h4",{className:"display-4 text-primary ",children:" Profile"})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"d-block w-100",children:Object(o.jsx)("div",{className:"mx-auto text-center",children:j?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(M.a,{animation:"border",variant:"primary",style:{width:"5rem",height:"5rem"}}),Object(o.jsx)("br",{}),Object(o.jsx)("h4",{className:" text-primary my-3",children:"Loading..."})]}):Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"row col-12 col-lg-8 px-0",children:[Object(o.jsx)("div",{className:"col-12 col-lg-6",children:Object(o.jsx)(F.a,{label:"First Name",className:"mb-3",children:Object(o.jsx)(f.a.Control,{type:"text",value:null===l||void 0===l?void 0:l.firstname})})}),Object(o.jsx)("div",{className:"col-12 col-lg-6",children:Object(o.jsx)(F.a,{label:"Last Name",className:"mb-3",children:Object(o.jsx)(f.a.Control,{type:"text",value:null===l||void 0===l?void 0:l.lastname})})}),Object(o.jsx)("div",{className:"col-12 col-lg-6",children:Object(o.jsx)(F.a,{label:"Email Address",className:"mb-3",children:Object(o.jsx)(f.a.Control,{type:"email",value:null===l||void 0===l?void 0:l.email})})}),Object(o.jsx)("div",{className:"col-12 col-lg-6",children:Object(o.jsx)(F.a,{label:"Phone Number",className:"mb-3",children:Object(o.jsx)(f.a.Control,{type:"text",value:null===l||void 0===l?void 0:l.phone})})}),Object(o.jsx)("div",{className:"col-12 mb-2",children:Object(o.jsx)("hr",{className:"my-3 w-100 mx-auto bg-primary border border-primary"})}),Object(o.jsx)("div",{className:"col-12 col-lg-6",children:Object(o.jsx)(F.a,{label:"Current Vocation",className:"mb-3",children:Object(o.jsx)(f.a.Control,{type:"text",value:null===l||void 0===l?void 0:l.currentVocationDescription})})}),(null===l||void 0===l?void 0:l.OthersCurrentVocationDescription)&&Object(o.jsx)("div",{className:"col-12 col-lg-6",children:Object(o.jsx)(F.a,{label:"Current Vocation ( Others )",className:"mb-3",children:Object(o.jsx)(f.a.Control,{type:"text",value:null===l||void 0===l?void 0:l.OthersCurrentVocationDescription})})}),Object(o.jsx)("div",{className:"col-12 col-lg-6",children:Object(o.jsx)(F.a,{label:"Designation",className:"mb-3",children:Object(o.jsx)(f.a.Control,{type:"text",value:null===l||void 0===l?void 0:l.designation})})}),(null===l||void 0===l?void 0:l.othersDesignation)&&Object(o.jsx)("div",{className:"col-12 col-lg-6",children:Object(o.jsx)(F.a,{label:"Designation ( Others )",className:"mb-3",children:Object(o.jsx)(f.a.Control,{type:"text",value:null===l||void 0===l?void 0:l.othersDesignation})})}),Object(o.jsx)("div",{className:"col-12 col-lg-6",children:Object(o.jsx)(F.a,{label:"Academic Qualification",className:"mb-3",children:Object(o.jsx)(f.a.Control,{type:"text",value:null===l||void 0===l?void 0:l.academicQualification})})}),Object(o.jsx)("div",{className:"col-12 col-lg-6",children:Object(o.jsx)(F.a,{label:"Means of Livelihood",className:"mb-3",children:Object(o.jsx)(f.a.Control,{type:"text",value:null===l||void 0===l?void 0:l.livelihood})})})]})})})})})]})]})})})};a(238),a(239);var R=function(){return Object(o.jsxs)(c.a,{basename:"/portal",children:[Object(o.jsx)(S.a,{position:"bottom-center",autoClose:4e3,limit:1}),Object(o.jsxs)(i.d,{children:[Object(o.jsx)(i.b,{path:"/",exact:!0,component:B}),Object(o.jsx)(i.b,{path:"/login",exact:!0,component:B}),Object(o.jsx)(i.b,{path:"/signup",exact:!0,component:D}),Object(o.jsx)(i.b,{path:"/forgotpassword",exact:!0,component:L}),Object(o.jsx)(i.b,{path:"/resetpassword:resetToken",exact:!0,component:A}),Object(o.jsx)(b,{children:Object(o.jsxs)(i.d,{children:[Object(o.jsx)(j,{path:"/dashboard",exact:!0,component:h}),Object(o.jsx)(j,{path:"/profile",exact:!0,component:T})]})}),Object(o.jsx)(i.b,{component:B})]})]})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,245)).then((function(t){var a=t.getCLS,s=t.getFID,l=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),l(e),n(e),r(e)}))};a(240);r.a.render(Object(o.jsx)(l.a.StrictMode,{children:Object(o.jsx)(R,{})}),document.getElementById("root")),W()}},[[241,1,2]]]);
//# sourceMappingURL=main.1569232f.chunk.js.map