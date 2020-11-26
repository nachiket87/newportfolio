import React from 'react'

import FirstPageInfo from './FirstPageInfo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'

const FirstPage = () => {
  const b = new Date()
  const n = b.getDay()
  const whichday = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]
  const today = n === 0 ? whichday[0] : whichday[n - 1]

  return (
    <div
      className="MainContainer1"
      style={{
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <div
        className="Container"
        style={{
          color: 'rgb(144,245,248)',
        }}
      >
        <img
          className="avatar"
          src="https://res.cloudinary.com/dgudbai8t/image/upload/v1603761045/pic11_jgji4x.png"
        />
        <div className="Pu" style={{ color: 'rgb(245,221,102)' }}>
          Hello My Name is Nachiket!{'\n'}
          Hope you're having a great {today}
        </div>
        <FirstPageInfo />
        <a
          className="button1"
          href="https://www.github.com/nachiket87"
          target="_blank"
        >
          <b>Check out my Github</b>
        </a>
      </div>
      <Link to="techstack" smooth={true} offset={0} duration={500}>
        <div className="bounce">
          <FontAwesomeIcon
            icon={faChevronDown}
            style={{
              color: 'white',
            }}
          />
        </div>
      </Link>
    </div>
  )
}

export default FirstPage
