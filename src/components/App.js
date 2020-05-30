import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { Provider, ReactReduxContext } from 'react-redux'
import configureStore, { history } from '../store/configure'
import { ConnectedRouter } from 'connected-react-router'
import '../assets/styles/main.scss'

import { HomePage, Header, SideBar, Avatar, LoginPage } from 'components'
import { HomePageContainer } from 'containers';

const store = configureStore()

const App = () => {
  return (
    <div>
      <Provider store={store} context={ReactReduxContext}>
        <ConnectedRouter history={history}  context={ReactReduxContext}>
          <>
            <Header/>
            <SideBar />
            <Switch>
              <Route path="/" render={() => <HomePageContainer />} exact />
              <Route path="/login" render={() => <LoginPage />} exact />
              <Route path="/coach/:id/players" render={() => <HomePage/>} exact />
              <Route path="/coach/:id" render={() => <Avatar/>} exact />
              <Route path="/settings" render={() => <Avatar/>} exact />
              <Redirect to="/"/>
            </Switch>
          </>
        </ConnectedRouter>
      </Provider>
    </div>
  )
}

export default App
