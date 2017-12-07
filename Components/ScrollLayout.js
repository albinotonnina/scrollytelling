import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import Stickyfill from 'stickyfilljs'
import styled from 'styled-components'
import {Screen1} from './Screens/Screen1'
import {Screen2} from './Screens/Screen2'
import {Screen3} from './Screens/Screen3'
import {Screen4} from './Screens/Screen4'

const Container = styled.div`
  display: flex;
`

const Graphic = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  transform: translate3d(0, 0, 0);
  flex: 3 1 auto;
`

const Steps = styled.div`
  flex: 1 1 auto;
`

const Step = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &.is-active {
    background-color: AntiqueWhite;
  }
`



class Layout extends Component {


  screens = [
    Screen1,
    Screen2,
    Screen3,
    Screen4
  ]

  componentDidMount() {
    Stickyfill.add(this.el)
  }

  render() {
    const {windowHeight, progress, currentIndex} = this.props

    const CurrentScreen = this.screens[currentIndex]

    return (
      <Container data-ui="container">
        <Steps data-ui="steps">
          <Step
            style={{height: `${windowHeight}px`}}
            data-ui="step-0"
            className={currentIndex === 0 ? 'is-active' : ''}
          >
            <p>Step 1</p>
          </Step>
          <Step
            style={{height: `${windowHeight}px`}}
            data-ui="step-1"
            className={currentIndex === 1 ? 'is-active' : ''}
          >
            <p>Step 2</p>
          </Step>
          <Step
            style={{height: `${windowHeight}px`}}
            data-ui="step-2"
            className={currentIndex === 2 ? 'is-active' : ''}
          >
            <p>Step 3</p>
          </Step>
          <Step
            style={{height: `${windowHeight}px`}}
            data-ui="step-3"
            className={currentIndex === 3 ? 'is-active' : ''}
          >
            <p>Step 4</p>
          </Step>
        </Steps>

        <Graphic
          data-ui="graphic"
          style={{
            height: `${windowHeight}px`
          }}
          ref={el => (this.el = el)}
        >
          <CurrentScreen progress={progress} index={currentIndex} />
        </Graphic>
      </Container>
    )
  }
}

Layout.propTypes = {}
Layout.defaultProps = {}

export default Layout
