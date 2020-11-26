import React from 'react'
import FirstPage from './Firstpage'
import Project from './Projects'
import Techstack from './Techstack'
import Contact from './Contact'
import SEO from './seo'

const App = () => {
  return (
    <>
      <SEO />
      <FirstPage />
      <Techstack />
      <Project />
      <Contact />
    </>
  )
}

export default App
