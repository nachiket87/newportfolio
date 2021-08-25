import React from "react"
import styled from "styled-components"

const Info = styled.p`
  font-family: Montserrat;
  font-weight: 400;
  color: rgb(111, 251, 253);
`

const FirstPageInfo = () => {
  return (
    <>
      <Info>
        I'm a full stack developer that enjoys challenging myself constantly. I
        live in Canada and currently work mostly with Ruby on Rails and React.

      </Info>
      <Info style={{ marginBottom: "2rem" }}></Info>
    </>
  )
}

export default FirstPageInfo
