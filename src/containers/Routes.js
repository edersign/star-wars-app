import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from '../components/load';

const Home = lazy(() => import('./Home'));
const NotFound = lazy(() => import('./NotFound'));
const Profile = lazy(() => import('./Profile'));

export default () => (
  <React.Suspense
    fallback={
      <div>
        <Loader />
      </div>
    }
  >
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/characters/:id" component={Profile} />
      <Route path="*" component={NotFound} />
    </Switch>
  </React.Suspense>
);
