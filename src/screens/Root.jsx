import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import ScreensPessoaForm from './Pessoa/Form';
import ScreensHome from './Home/Home';
import ScreensLogin from './Login/Login';

const logado = true;

function loggedIn (Component){

    if(logado){
        if(Component === Component("ScreensLogin")){
            return <Redirect to="/" />
        }
        return <Component />
    }

    return <ScreensLogin />
}

const ScreensRoot = () => (
  <BrowserRouter>
    <Switch>
        <Route exact path = "/" component = {() => loggedIn(ScreensHome) } />
        <Route exact path = "/login" component = {() => loggedIn(ScreensLogin) } />
        <Route exact path = "/pessoa/cadastro" component = {() => loggedIn(ScreensPessoaForm) } />                
    </Switch>
  </BrowserRouter>
);

export default ScreensRoot;