import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home, Details, SingIn, SingUp } from './pages';
import { DefaultLayout } from './layouts';

export default function App() {
  return (
    <Router>
      <DefaultLayout>
        <Route exact path="/" component={Home} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/sign-up" component={SingUp} />
      </DefaultLayout>
    </Router>
  );
}
