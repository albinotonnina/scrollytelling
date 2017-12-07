import React, {Component} from 'react'
import PropTypes from 'prop-types'
import scrollama from 'scrollama'
import Layout from './ScrollLayout'


class Scrollama extends Component {
  static propTypes = {
    foo: PropTypes.any
  }
  static defaultProps = {}

  state = {
    windowHeight: 0,
    progress: 0,
    currentIndex: 0
  }

  updateDimensions = callback => {
    this.setState(
      {
        windowHeight: window.innerHeight
      },
      () => {
        this.scroller.resize()
        callback && callback()
      }
    )
  }

  onResize = () => {
    this.updateDimensions()
  }

  handleStepEnter = response => {
    console.log('step enter:', response.index)
    this.setState({currentIndex: response.index})
  }

  handleStepExit = response => {
    console.log('step exit:', response.index)
  }

  handleContainerEnter = response => {
    console.log('container enter:', response.direction)
  }

  handleContainerExit = response => {
    console.log('container exit:', response.direction)
  }

  handleStepProgress = response => {
    this.setState({progress: response.progress}, () => {})
  }

  setupScrollama = () => {
    this.scroller
      .setup({
        container: '[data-ui="container"]',
        graphic: '[data-ui="graphic"]',
        text: '[data-ui="steps"]',
        step: '[data-ui^="step-"]',
        debug: false,
        progress: true,
        offset: 0.35
      })
      .onStepEnter(this.handleStepEnter)
      .onStepExit(this.handleStepExit)
      .onContainerEnter(this.handleContainerEnter)
      .onContainerExit(this.handleContainerExit)
      .onStepProgress(this.handleStepProgress)
  }

  componentWillMount(){
    this.scroller = scrollama()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  componentDidMount() {
    this.updateDimensions(this.setupScrollama)
    window.addEventListener('resize', this.onResize)
  }

  render() {
    return <Layout {...this.state} />
  }
}

export {Scrollama}
