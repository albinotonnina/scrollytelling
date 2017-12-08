import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import Stickyfill from 'stickyfilljs'
import styled from 'styled-components'
import {Screen1} from './Screens/Screen1'
import {Screen2} from './Screens/Screen2'
import {Screen3} from './Screens/Screen3'
import {Screen4} from './Screens/Screen4'
import {Step1} from './Screens/Step1'
import {Step2} from './Screens/Step2'
import {Step3} from './Screens/Step3'
import {Step4} from './Screens/Step4'

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
    {
      screen: Screen1,
      step: Step1
    },
    {
      screen: Screen2,
      step: Step2
    },
    {
      screen: Screen3,
      step: Step3
    },
    {
      screen: Screen4,
      step: Step4
    }
  ]

  componentDidMount() {
    Stickyfill.add(this.el)
  }

  render() {
    const {windowHeight, progress, currentIndex} = this.props

    const CurrentScreen = this.screens[currentIndex].screen

    return (
      <Container data-ui="container">
        <Steps data-ui="steps">
          {this.screens.map((screen, index) => {
            const CurrentStep = screen.step

            return (
              <Step
                style={{height: `${windowHeight}px`}}
                data-ui={`step-${index}`}
                className={currentIndex === index ? 'is-active' : ''}
                key={index}
              >
                <CurrentStep />
              </Step>
            )
          })}
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
