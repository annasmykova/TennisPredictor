import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { connect, ReactReduxContext } from 'react-redux'
import { history } from '../store/configure'
import { ToastContainer } from 'react-toastify';
import { ConnectedRouter } from 'connected-react-router'
import { fromAuth, fromError } from 'store/selectors'
import { getUser } from 'store/actions'
import { toast } from 'react-toastify';
import jwt_decode from 'jwt-decode'
import cookie from 'react-cookie'

import '../assets/styles/main.scss'

import { HomePage, Header, SideBar, LoginPage, SignUpPage, SettingsPage, MyPlayersPage } from 'components'
import { HomePageContainer, CoachPageContainer, PlayerPageContainer } from 'containers';

const App = ({ user, getUser, error }) => {
  const userToken = cookie.load('token')
  useEffect(() => {
    if (userToken && !user) {
      getUser(jwt_decode(userToken).user_id);
    }
  }, [user])

  useEffect(() => {
    if (error) {
      if (error.userWithoutCoach) {
        toast.success(error.userWithoutCoach)
      } else {
        toast.error(error.message ? error.message.toString() : error.toString());
      }
    }
  }, [error])

  return (
    <ConnectedRouter history={history}  context={ReactReduxContext}>
      <>
        <Header user={user}/>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {
          user && <SideBar user={user} />
        }
        <Switch>
          <Route path="/" render={() => <HomePageContainer />} exact />
          <Route path="/login" render={() => {
            if (userToken) {
              return <Redirect to="/" />
            }
            return <LoginPage />
          }} exact />
          <Route path="/sign-up/:userType" render={() => {
            if (userToken) {
              return <Redirect to="/" />
            }
            return <SignUpPage />
          }} exact />
          <Route path="/player/:playerId" render={() => <PlayerPageContainer />} exact />
          <Route path="/coach/:coachId/players" render={() => {
            if (!userToken) {
              return <Redirect to="/"/>
            }
            return <MyPlayersPage/>
          }} exact />
          <Route path="/coach/:coachId" render={() => <CoachPageContainer />} exact />
          <Route path="/settings" render={() => {
            if (!userToken) {
              return <Redirect to="/"/>
            }
            return <SettingsPage/>
          }} />
          <Redirect to="/"/>
        </Switch>
      </>
    </ConnectedRouter>
  )
}

export default connect(state => ({
  user: fromAuth.getUser(state),
  error: fromError.getError(state)
}), { getUser })(App)
