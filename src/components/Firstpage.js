import React from 'react'

import FirstPageInfo from './FirstPageInfo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'

const FirstPage = () => {
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
        <div className="Pu" style={{ color: 'rgb(245,221,102)' }}>
          Hello My Name is Nachiket!{'\n'}
          Hope you're having a great day
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
