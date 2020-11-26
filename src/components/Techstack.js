import React from 'react'

const Techstack = () => {
  return (
    <div className="techstack">
      <div className="MainContent">
        <div className="Container" style={{ background: '#45606B' }}>
          <div className="MainContainer">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexWrap: 'wrap',
                padding: '3rem',
              }}
            >
              <div>
                <div className="Pu techheaders">{'Languages'}</div>
                <ul>
                  <li>Ruby</li>
                  <li>Python</li>
                  <li>Javascript</li>
                  <li>SQL</li>
                </ul>
              </div>
              <div>
                <div className="Pu techheaders">Frameworks</div>
                <ul>
                  <li>Rails</li>
                  <li>Django</li>
                  <li>React</li>
                  <li>GatsbyJS</li>
                </ul>
              </div>
              <div>
                <div className="Pu techheaders">Tools</div>
                <ul>
                  <li>Git</li>
                  <li>Yarn</li>
                  <li>Figma</li>
                  <li>Vim</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Techstack
