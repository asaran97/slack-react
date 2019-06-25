import React, { lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

const render = Comp => props => <Comp {...props} />;
const GetStarted = render(lazy(() => import('./components/GetStarted')));
const NewWorkspace = render(lazy(() => import('./components/NewWorkspace')));
const EnterOTP = render(lazy(() => import('./components/EnterOTP')));
const NameOfCompany = render(lazy(() => import('./components/NameOfCompany')));
const TeamMates = render(lazy(() => import('./components/TeamMates')));
const Finish = render(lazy(() => import('./components/Finish')));

const Routes = () => (
  <div>
    <Suspense fallback={<div>loading...</div>}>
      <Router>
        <Switch>
          <Route path="/" component={GetStarted} exact />
          <Route path="/workspace" component={NewWorkspace} exact />
          <Route path="/enterotp" component={EnterOTP} exact />
          <Route path="/nameofcompany" component={NameOfCompany} exact />
          <Route path="/teammates" component={TeamMates} exact />
          <Route path="/finish" component={Finish} exact />
        </Switch>
      </Router>
    </Suspense>
  </div>
);
export default Routes;
