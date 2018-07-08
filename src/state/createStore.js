import { createStore as reduxCreateStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
//import rootReducer from '../reducers/index'

const createStore = () =>
  reduxCreateStore(
    // rootReducer,
    // {
    //   form: { subscribeForm: { values: { email: '', edition: 'global' } } },
    // },
    applyMiddleware(reduxThunk)
  )
export default createStore
