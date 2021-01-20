import { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Loading } from '../component';
import { RoutePattern } from './Route.pattern';
import { Dashboard } from '../app/index';
import Users from '../app/Dashboard/Users';
import Sidebar from '../app/Dashboard/Sidebar/Sidebar';

export default function DashboardRoutes() {
  return (
    <div className="flex flex-row min-h-screen">
      <Suspense fallback={<Loading />}>
        <Sidebar />
        <Switch>
          <Route exact path={RoutePattern.Dashboard} component={Dashboard} />
          <Route exact path={RoutePattern.Users} component={Users} />
        </Switch>
      </Suspense>
    </div>
  );
}
