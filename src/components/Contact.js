import React from 'react'

const Contact = () => {
  return (
    <div className="MainContent">
      <div className="ContactContainer">
        <div className="Content">
          <div className="Pu" style={{ color: 'rgb(245, 221, 102)' }}>
            Let's Talk?
          </div>
        </div>
        <div style={{ textAlign: 'center', color: 'white' }}>
          <p>
            I like to keep things simple. No fancy forms, no need to follow me
            on social media. You can contact me on{' '}
          </p>
          <p>
            <a
              className="button1"
              href="mailto: nachiket.pusalkar@gmail.com"
              style={{ fontSize: '12px' }}
            >
              {' '}
              nachiket.pusalkar@gmail.com{' '}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
