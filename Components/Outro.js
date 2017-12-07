import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Links = styled.div`
  margin-top: 32px;
  text-align: center;
  & h3 {
    margin-bottom: 16px;
  }
`

const Outro = () => (
  <Container>
    <h1>Bye</h1>
    <div>
      <Links>
        <h3>
          <a href="http://www.albinotonnina.com">Albino Tonnina</a>
        </h3>
        <a href="https://twitter.com/albinotonnina">Twitter</a> -{' '}
        <a href="https://github.com/albinotonnina/scrollytelling">Repo on GitHub</a>
      </Links>
    </div>
  </Container>
)

export {Outro}
