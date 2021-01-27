import React, { Suspense } from "react";
import {Switch, Route} from "react-router-dom";
import LandingPage from './views/LandingPage/LandingPage';
import LoginPage from './views/LoginPage/LoginPage';
import RegisterPage from './views/RegisterPage/RegisterPage';
import Auth from '../hoc/auth'
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import {LoadingOutlined} from '@ant-design/icons';
import "./App.scss";

function App() {
  return (
    <Suspense fallback={(<div><LoadingOutlined />Loading...</div>)}>
      <NavBar />
        <div className="content-background">
          <Switch>
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route exact path="/register" component={Auth(RegisterPage, false)} />
          </Switch>
        </div>
      <Footer />
    </Suspense>
  );
}

export default App;
