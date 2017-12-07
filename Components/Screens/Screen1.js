import React from 'react'
import styled from 'styled-components'
import animejs from 'animejs'

const Container = styled.div.attrs({
  style: ({ opcaity }) => ({
    opcaity
  }),
})`
  background: Azure;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Square = styled.div`
  position: absolute;
  top: -9px;
  left: -9px;
  opacity: 0.2;
  width: 18px;
  height: 18px;
  pointer-events: none;
  margin: 1px;
  background-color: currentColor;
  font-size: 12px;
`

const MotionPath = styled.div`
  position: relative;
  width: 256px;
  margin: auto;
`

class Screen1 extends React.Component {
  componentDidMount() {
    const path = animejs.path('#motionPath path')

    this.animation = animejs({
      targets: '#motionPath .el',
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      easing: 'linear',
      duration: 2000,
      autoplay: false
    })
  }

  componentWillUpdate(nextProps) {
    this.animation.seek(this.animation.duration * nextProps.progress)
  }

  render() {
    const {index, progress} = this.props
    const containerOpacity = progress < 0.2 ? progress : progress > 0.8 ? (1-progress): progress

    return (
      <Container opacity={containerOpacity}>
        <h2>Screen {index + 1}</h2>
        <p>{Math.round(progress * 100)}%</p>

        <div id="motionPath">
          <MotionPath>
            <Square className="el" />
            <svg width="256" height="112" viewBox="0 0 256 112">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                d="M8,56 C8,33.90861 25.90861,16 48,16 C70.09139,16 88,33.90861 88,56 C88,78.09139 105.90861,92 128,92 C150.09139,92 160,72 160,56 C160,40 148,24 128,24 C108,24 96,40 96,56 C96,72 105.90861,92 128,92 C154,93 168,78 168,56 C168,33.90861 185.90861,16 208,16 C230.09139,16 248,33.90861 248,56 C248,78.09139 230.09139,96 208,96 L48,96 C25.90861,96 8,78.09139 8,56 Z"
              />
            </svg>{' '}
          </MotionPath>
        </div>
      </Container>
    )
  }
}

export {Screen1}
