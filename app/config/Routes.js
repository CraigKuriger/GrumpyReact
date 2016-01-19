import React from 'react';
import Main from '../components/Main'
import Home from '../components/Home'
import Display from '../components/Display'
import { Route, IndexRoute } from 'react-router'

export default (
  <Route path="/" component={Main}>
    <Route path="display/:name" component={Display}/>
    <IndexRoute component={Home} />
  </Route>
);
