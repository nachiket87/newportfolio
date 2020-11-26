import React from 'react'
import Things from './Things'
import { useStaticQuery, graphql } from 'gatsby'
import { projects } from '../data/projects'

const Project = () => {
  const allProjects = Object.keys(projects).map(key => (
    <Things items={projects[key]} key={projects[key].name} />
  ))
  return (
    <div
      style={{
        background: 'linear-gradient(0deg, #2c2e4b, #0e2e3b 70.71%)',
        color: 'rgb(111,251,253)',
      }}
    >
      <div className="Container">
        <div className="comic">Projects</div>
        <div className="MainContent2">
          <div className="centerprojects">
            <div>{allProjects}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
