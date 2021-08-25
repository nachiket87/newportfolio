import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Tilt from "react-tilt"

const Things = props => {
  const l = props
  const data = useStaticQuery(
    graphql`
      query {
        allFile {
          nodes {
            name
            childImageSharp {
              fluid(quality: 100, maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `
  )
  const imageName = props.items.imageName
  const allFiles = data.allFile.nodes
  let img = null
  allFiles.forEach(file => {
    file.key = file.name
    if (file.name === imageName) {
      img = file
      return 0
    }
  })

  return (
    <div className="card-product">
      <p className="Pu2" style={{ color: "white" }}>
        {l.items.name}
      </p>
      <div className="projects">
        <a href={l.items.link} target="_blank">
          <Tilt
            options={{
              reverse: false,
              max: 8,
              perspective: 1000,
              scale: 1,
              speed: 300,
              transition: true,
              axis: null,
              reset: true,
              easing: "cubic-bezier(.03,.98,.52,.99)",
            }}
            className="tilt"
          >
            <div style={{ padding: "1rem" }}>
              <Img
                style={{
                  boxShadow: "1px 1px 6px white",
                }}
                fluid={img.childImageSharp.fluid}
              />
            </div>
          </Tilt>
        </a>
        <div
          style={{
            display: "flex",
            fontWeight: "400",
            flexDirection: "column",
          }}
        >
          <div style={{ padding: "2rem" }}>
            <span style={{ fontWeight: "900" }}> Tech Stack:</span>{" "}
            {l.items.stack}
            <br />
            <br />
            {l.items.desc}
            <br />
            <br />
            {l.items.note ? (
              <>
                <span style={{ fontWeight: "900" }}>Note:</span> {l.items.note}{" "}
              </>
            ) : (
              ""
            )}
          </div>
          <span style={{ alignItems: "center" }}>
            {l.items.repo ? (
              <a
                href={l.items.repo}
                className="btn btn-1"
                style={{ color: "white" }}
              >
                <svg>
                  <rect x="0" y="0" fill="none" width="100%" height="100%" />
                </svg>
                Source Code
              </a>
            ) : (
              <span className="btn btn-2">
                <svg>
                  <rect x="0" y="0" fill="none" width="100%" height="100%" />
                </svg>
                Private
              </span>
            )}
          </span>
        </div>
      </div>
      <hr style={{ margin: "1rem" }} />
    </div>
  )
}

export default Things
