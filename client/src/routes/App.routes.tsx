import React, { Suspense, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Loading } from '../component';
import { RoutePattern } from './Route.pattern';
import { Auth, NotFound } from '../app/index';
import { DashboardRoutes } from '.';
import useUserService from '../app/Hooks/useUserService';

export default function AppRoutes() {
  useUserService();

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
