import React from 'react'
import { Helmet } from 'react-helmet'
import App from '../components/App'

export default function Home() {
  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>code by Nachiket</title>
        <meta property="og:title" content="code by @nachiket" />
      </Helmet>
      <App />
    </>
  )
}
