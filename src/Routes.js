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
import CreateWaveContainer from "./pages/Create/CreateWaveContainer";
import CreatePhaseContainer from "./pages/Create/CreatePhaseContainer";
import LikeListContainer from "./pages/LikeList/LikeListContainer";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/user/likes" exact component={LikeListContainer} />
        <Route path="/user/32" exact component={MypageContainer} />
        <Route path="/post/:id" exact component={PostDetailContainer} />
        <Route path="/wave/new" exact component={CreateWaveContainer} />
        <Route path="/post/:id/:phase" exact component={CreatePhaseContainer} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
