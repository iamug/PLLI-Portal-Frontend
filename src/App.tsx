import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import { ProtectedRoute } from "./controllers/auth";
import { Dashboard, Profile, Signup, Login, ForgotPassword, ResetPassword } from "./pages";
import "./App.css";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    // <BrowserRouter basename='/path/to/subfolder/'></BrowserRouter>
    <Router basename="/portal">
      {/* <Layout> */}
      <ToastContainer position="bottom-center" autoClose={4000} limit={1} />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/forgotpassword" exact component={ForgotPassword} />
        <Route path="/resetpassword:resetToken" exact component={ResetPassword} />

        <Layout>
          <Switch>
            <ProtectedRoute path="/dashboard" exact component={Dashboard} />
            <ProtectedRoute path="/profile" exact component={Profile} />
            {/* <Route path="/dashboard" exact component={Artists} /> */}
            {/* <Route path="/artists/:userId/albums" exact component={Albums} />
            <Route path="/artists/:userId/albums/:albumId/photos" exact component={AlbumPhotos} />
            <Route path="/artists/:userId/tweets" exact component={Tweets} /> */}
          </Switch>
        </Layout>

        <Route component={Login} />
      </Switch>
      {/* </Layout> */}
    </Router>
  );
}

export default App;
