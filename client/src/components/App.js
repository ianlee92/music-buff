import React, { Suspense } from "react";
import {Switch, Route} from "react-router-dom";
import LandingPage from './views/LandingPage/LandingPage';
import LoginPage from './views/LoginPage/LoginPage';
import RegisterPage from './views/RegisterPage/RegisterPage';
import Auth from '../hoc/auth'
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import TurntablePage from './views/TurntablePage/TurntablePage';
import NewPage from './views/NewPage/NewPage';
import CdPage from './views/CdPage/CdPage';
import LpPage from './views/LpPage/LpPage';
import MagazinePage from './views/MagazinePage/MagazinePage';
import BookPage from './views/BookPage/BookPage';
import GoodsPage from './views/GoodsPage/GoodsPage';
import DetailProductPage from './views/DetailProductPage/DetailProductPage';
import CartPage from './views/CartPage/CartPage';
import SearchPage from './views/SearchPage/SearchPage';
import {LoadingOutlined} from '@ant-design/icons';
import "./App.scss";

function App() {
  return (
    <Suspense fallback={(<div><LoadingOutlined />Loading...</div>)}>
      <NavBar />
          <Switch>
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route exact path="/register" component={Auth(RegisterPage, false)} />
            <Route exact path="/turntable" component={Auth(TurntablePage, null)} />
            <Route exact path="/turntable/:productId" component={Auth(DetailProductPage, null)} />
            <Route exact path="/new" component={Auth(NewPage, null)} />
            <Route exact path="/new/:productId" component={Auth(DetailProductPage, null)} />
            <Route exact path="/cd" component={Auth(CdPage, null)} />
            <Route exact path="/cd/:productId" component={Auth(DetailProductPage, null)} />
            <Route exact path="/lp" component={Auth(LpPage, null)} />
            <Route exact path="/lp/:productId" component={Auth(DetailProductPage, null)} />
            <Route exact path="/magazine" component={Auth(MagazinePage, null)} />
            <Route exact path="/magazine/:productId" component={Auth(DetailProductPage, null)} />
            <Route exact path="/book" component={Auth(BookPage, null)} />
            <Route exact path="/book/:productId" component={Auth(DetailProductPage, null)} />
            <Route exact path="/goods" component={Auth(GoodsPage, null)} />
            <Route exact path="/goods/:productId" component={Auth(DetailProductPage, null)} />
            <Route exact path="/user/cart" component={Auth(CartPage, true)} />
            <Route exact path="/search" component={Auth(SearchPage, null)} />
            
          </Switch>
      <Footer />
    </Suspense>
  );
}

export default App;
