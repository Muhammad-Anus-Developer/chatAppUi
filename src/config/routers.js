import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Chatpg from "../containers/chatpg";
import Err from "../containers/err";
import Profile from "../containers/profile";
import Signin from "../containers/signin";
import Signup from "../containers/signup";

export default function Routers() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route path="/login" exact component={Signin} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/chatpage" exact component={Chatpg} />
          <Route path="**" exact component={Err} />
            </Switch>
      </div>
    </Router>
  );
}
