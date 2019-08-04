import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import ScreensPessoaForm from './Pessoa/Form';

const ScreensRoot = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/pessoa/cadastro" component={ScreensPessoaForm} />
    </Switch>
  </BrowserRouter>
);

export default ScreensRoot;