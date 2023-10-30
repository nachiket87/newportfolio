import React from 'react'
import { Helmet } from 'react-helmet'
import App from '../components/App'

export default function Home() {
  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>code by Nachiket</title>
        <meta property="og:title" content="code by @nachiket" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://www.nachiket.ca" />
        <meta
          property="og:image"
          content="https://stopricks.s3.amazonaws.com/photo.webp"
        />
        <meta
          name="description"
          content="web development portfolio · full stack developer based in montreal · get in touch at nachiket.pusalkar@gmail.com"
        />
        <meta property="og:title" content="code by @nachiketp87" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nachiket.ca" />
        <meta
          property="og:description"
          content="web development portfolio · full stack developer based in montreal · get in touch at nachiket.pusalkar@gmail.com"
        />
        <meta property="fb:app_id" content="1302230373483580" />
      </Helmet>
      <App />
    </>
  )
}
