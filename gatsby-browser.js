import createStore from './src/state/createStore'

import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
//const  ReactGA from 'react-ga'

//ReactGA.initialize('UA-55650732-5')

// exports.onRouteUpdate = (state, page, pages) => {
//   ReactGA.pageview(state.location.pathname)
// }

export const replaceRouterComponent = ({ history }) => {
  const store = createStore()

  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  )

  return ConnectedRouterWrapper
}
