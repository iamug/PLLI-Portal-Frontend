import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import { Artists, Albums, AlbumPhotos, Tweets, Signup, Login } from "./pages";
import "./App.css";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <Router>
      {/* <Layout> */}
      <ToastContainer position="bottom-center" autoClose={4000} limit={1} />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />

        {/* <Layout>
          <Switch>
            {/* <Route path="/artists" exact component={Artists} />
            <Route path="/artists/:userId/albums" exact component={Albums} />
            <Route path="/artists/:userId/albums/:albumId/photos" exact component={AlbumPhotos} />
            <Route path="/artists/:userId/tweets" exact component={Tweets} /> 
          </Switch>
        </Layout> */}

        <Route component={Login} />
      </Switch>
      {/* </Layout> */}
    </Router>
  );
}

export default App;
