import React from 'react'
import '/src/index.css'
import { TypeAnimation } from 'react-type-animation'
function Home() {
  
  return (
    <div>
      <section className="home gradBG" id="home">
        <div className="max-width">
            <div className="home-content">
                <div className="text-1" data-aos="fade-down" data-aos-duration="2000">Hello, I'm</div>
                <div className="text-2" data-aos="fade-left" data-aos-duration="2000">Indira Ramalingam</div>
                <div className="text-3" data-aos="fade-right" data-aos-duration="2000">And I'm a  
                <TypeAnimation 
                sequence={[
                  ' Full',
                  200,
                  ' Full Stack', 
                  200,
                  ' Full Stack Developer | MERN',
                  200,
                  ' Full Stack',
                  200,
                  ' Full',
                  200,
                  ' ',
                  200,
                  ' Programmer Analyst',
                  200,  
                ]}
                style={{ fontSize: '1em' , color:'rgb(225, 222, 222)'}}
                repeat={Infinity} />
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Home