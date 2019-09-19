import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from '../components/load';

const Home = lazy(() => import('./Home'));
const NotFound = lazy(() => import('./NotFound'));
const Profile = lazy(() => import('./Profile'));
const About = lazy(() => import('./About'));

export default () => (
  <React.Suspense
    fallback={
      <>
        <Loader />
      </>
    }
  >
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/characters/:id" component={Profile} />
      <Route exact path="/about" component={About} />
      <Route path="*" component={NotFound} />
    </Switch>
  </React.Suspense>
);
