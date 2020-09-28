import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import MypageContainer from "./pages/Mypage/MypageContainer";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/mypage" exact component={MypageContainer} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
