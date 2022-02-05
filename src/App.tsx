import React from 'react';
import {
  Switch, Route, BrowserRouter,
} from 'react-router-dom';
import Login from './containers/Login';
import HomePage from './containers/HomePage';
import './App.scss';
import Register from './containers/Register';
import ForgotPassword from './containers/ForgotPassword';
import Favorite from './containers/Favorite';
import Search from './containers/Search';
import RegisterForm from './containers/RegisterForm';
import Cart from './containers/Cart';
import CartConfirm from './containers/CartConfirm';

const App = (): JSX.Element => {
  const tokken = '123';

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register/form" component={RegisterForm} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/forgotpassword" component={ForgotPassword} />
        <Route exact path="/favorite" component={Favorite} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/cartconfirm" component={CartConfirm} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
