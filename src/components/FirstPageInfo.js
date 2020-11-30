import React from 'react'
import styled from 'styled-components'

const Info = styled.p`
  font-family: Montserrat;
  font-weight: 400;
  color: rgb(111, 251, 253);
`

const FirstPageInfo = () => {
  return (
    <>
      <Info>
        I'm a full stack developer that enjoys challenging myself constantly.
        Becoming a developer has truly been a life changing experience. There is
        nothing I enjoy more than spending hours trying to solve problems.
      </Info>
      <Info style={{ marginBottom: '2rem' }}>
        I’ve taught myself several technologies listed below and also completed
        a prestigious web development bootcamp in Montreal. I've built several
        projects, keep scrolling to check them out!
      </Info>
    </>
  )
}

export default FirstPageInfo
