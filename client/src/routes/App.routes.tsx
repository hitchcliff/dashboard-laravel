import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Loading } from '../component';
import { RoutePattern } from './Route.pattern';
import { Auth, Dashboard, NotFound } from '../app/index';
import { DashboardRoutes } from '.';

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path={[RoutePattern.Home, RoutePattern.Auth]} component={Auth} />
        <Route path={[RoutePattern.Dashboard]} component={DashboardRoutes} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Suspense>
  );
}
