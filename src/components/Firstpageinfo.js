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
        I’ve worked in sales and business development. After moving to Canada a
        few years ago, I decided to make a transition.
      </Info>
      <Info style={{ marginBottom: '2rem' }}>
        I’ve taught myself several technologies listed below and also completed
        a prestigious web development bootcamp in Montreal.
      </Info>
    </>
  )
}

export default FirstPageInfo
