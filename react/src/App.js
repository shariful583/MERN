import React, { useState, useCallback, Fragment } from 'react';
import {BrowserRouter,Route,Switch, Redirect} from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlaces from './places/pages/NewPlaces';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/auth';
import {AuthContext} from './shared/context/auth-context';
const App=()=> {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  },[]);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  },[]);

  let routes;

  if (isLoggedIn) {
   routes = (
    <Fragment>
        <Route path="/" exact>
            <Users/>
        </Route>
        <Route path="/places/new" exact>
          <NewPlaces/>
        </Route>
        <Route path="/:userId/places">
          <UserPlaces/>
        </Route>
        <Route path="/places/:placeId">
          <UpdatePlace/>
        </Route>
        <Redirect to="/" />
    </Fragment>
    );
  }

  if (!isLoggedIn) {
    routes = (
      <Fragment>
        <Route path="/" exact>
            <Users/>
        </Route>
        <Route path="/auth">
          <Auth/>
        </Route>
        <Redirect to="/auth" />
      </Fragment>
    );
  }
  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout:logout}}>
      <BrowserRouter>
      <MainNavigation/>
      <Switch>
        <main>
          {routes}
        </main>
      </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
