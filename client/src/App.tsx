import React, { Suspense } from 'react';
import { Loading } from './component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppRoutes, DashboardRoutes } from './routes';
import { RoutePattern } from './routes/Route.pattern';
import './styles/main.css';

function App() {
  return (
    <div className="flex h-full flex-col font-sans bg-gray-100 min-h-screen">
      <Suspense fallback={<Loading />}>
        <Router>
          <Switch>
            <Route exact path={RoutePattern.Dashboard} component={DashboardRoutes} />
            <Route exact path="*" component={AppRoutes} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
