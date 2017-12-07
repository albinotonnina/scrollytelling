import React from 'react'

import {Intro} from './Intro'
import {Outro} from './Outro'
import {Scrollama} from './Scrollama'

class App extends React.Component {

  render() {
    return [
      <Intro key="intro"/>,
      <Scrollama key="scroll" />,
      <Outro key="outro"/>
    ]
  }
}

export {App}
