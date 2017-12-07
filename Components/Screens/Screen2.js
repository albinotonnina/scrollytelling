import React from 'react'
import styled from 'styled-components'

const Container = styled.div.attrs({
  style: ({ opcaity }) => ({
    opcaity
  }),
})`
  background: Beige;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`


class Screen2 extends React.Component {

  render() {
    const {index, progress} = this.props
    const containerOpacity = progress < 0.2 ? progress : progress > 0.8 ? (1-progress): progress

    return (
      <Container opacity={containerOpacity}>
        <h2>Screen {index + 1}</h2>
        <p>{Math.round(progress * 100)}%</p>
      </Container>
    )
  }
}

export {Screen2}
