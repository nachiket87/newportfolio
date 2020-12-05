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
          content="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v384-ning-07b-gradientbg_2.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e7c1136bf8c780d34b25e02c9d99defc"
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
        <meta name="twitter:title" content="code by @nachiketp87" />
        <meta
          name="twitter:description"
          content="web development portfolio · full stack developer based in montreal · get in touch at nachiket.pusalkar@gmail.com.com"
        />
        <meta
          name="twitter:image"
          content="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v384-ning-07b-gradientbg_2.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e7c1136bf8c780d34b25e02c9d99defc"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <App />
    </>
  )
}
