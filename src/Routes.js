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
import PostDetailContainer from "./pages/PostDetail/PostDetailContainer";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/mypage" exact component={MypageContainer} />
        <Route path="/post/1" exact component={PostDetailContainer} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
