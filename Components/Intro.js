import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Intro = () => (
  <Container>
    <h1>Hello</h1>
    <div>Scroll down</div>
  </Container>
)

export {Intro}
