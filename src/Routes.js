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

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/mypage" exact component={MypageContainer} />
        <Route path="/post/1" exact component={PostDetailContainer} />
        <Route path="/wave/new" exact component={CreateWaveContainer} />
        <Route path="/phase/1" exact component={CreatePhaseContainer} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
