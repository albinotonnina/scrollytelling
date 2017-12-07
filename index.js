require('react-hot-loader/patch')
import 'babel-polyfill';

import React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import { App } from './Components/App'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(App)


// if (module.hot) {
//   module.hot.dispose(function () {
//     // module is about to be replaced
//     console.log('dispose');
//
//   });
//
//   module.hot.accept(function () {
//     // module or one of its dependencies was just updated
//     console.log('accept');
//   });
// }