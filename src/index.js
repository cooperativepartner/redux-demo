import {
  createStore,
} from 'redux'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import mainReducer from './reducers'
import App from './components/App'

const store = createStore(mainReducer)

const log = () => {
  console.log(store.getState())
}

store.subscribe(log)

log()

store.dispatch({
  type: 'ADD_POST',
  post: { id: 1, title: 'hi, today', postId: 1 }
})

store.dispatch({
  type: 'ADD_POST',
  post: { id: 2, title: 'hi, tomorrow' }
})

store.dispatch({
  type: 'ADD_COMMENT',
  comment: { id: 1, title: 'redux init', content: 'prefect!' }
})

render(
  <Provider store = { store }>
    <App />
  </Provider>,
  document.getElementById('root')
)










