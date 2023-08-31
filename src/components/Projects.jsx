import React from 'react'
import Make from '../assets/MakeUp_API.png'

function Projects() {
  return (
    <>
      <section className="allBG2">
        <div className="container-fluid">
        <h3 className="mb-5 " style={{color:"rgb(225, 222, 222)",'fontWeight':'bolder','textAlign':'center','fontSize':'45px','marginTop':'-50px'}}>Projects I've done</h3>
        <div className='mt-5'>
          <h5 className="hr-lines" style={{'color':"rgb(13 187 253)"}}>few of my works</h5>
            <div id="Projects">
              <div className="projects-list mt-0">
                <div className="card" style={{"width":"25rem"}}>
                  <img alt="" className="card-img-top"  src={Make}/ >
                  <h2 style={{color:"rgb(225, 222, 222)"}}>Hospital CRM</h2>
                  <p style={{color:"rgb(225, 222, 222)"}}>
                  <b> Technologies: </b>React, Node js, Express, MongoDB
                  </p>
                  <a href="https://github.com/7020530266/ZendashFrontend" target="_blank">FrontEnd Github Source Code Link</a>
                  <a href="https://github.com/7020530266/zendashbackv3" target="_blank">Backend Github Source Code Link</a>
                  <a href="https://rad-syrniki-27f5a1.netlify.app/" target="_blank">Hosted Link</a>
                </div>

                <div className="card" style={{"width":"25rem"}}>
                  <img alt="" className="card-img-top"  src={Make}/ >
                  <h2 style={{color:"rgb(225, 222, 222)"}}>MakeUp Products</h2>
                  <p style={{color:"rgb(225, 222, 222)"}}>
                  <b> Technologies: </b>HTML,CSS,Bootstrap
                  </p>
                  <a href="https://github.com/7020530266/ZendashFrontend" target="_blank">FrontEnd Github Source Code Link</a>
                  <a href="https://github.com/7020530266/zendashbackv3" target="_blank">Backend Github Source Code Link</a>
                  <a href="https://rad-syrniki-27f5a1.netlify.app/" target="_blank">Hosted Link</a>
                </div>

                <div className="card" style={{"width":"25rem"}}>
                  <img alt="" className="card-img-top"  src={Make}/ >
                  <h2 style={{color:"rgb(225, 222, 222)"}}>Password Reset App</h2>
                  <p style={{color:"rgb(225, 222, 222)"}}>
                  <b> Technologies: </b>React, Node js, Express, MongoDB
                  </p>
                  <p style={{color:"rgb(225, 222, 222)"}}>This app helps to register user and also one can reset password through email.</p>
                  {/* <a href="https://github.com/7020530266/ZendashFrontend" target="_blank">FrontEnd Github Source Code Link</a>
                  <a href="https://github.com/7020530266/zendashbackv3" target="_blank">Backend Github Source Code Link</a>
                  <a href="https://rad-syrniki-27f5a1.netlify.app/" target="_blank">Hosted Link</a> */}

                  <div className="">
                    <a href='' target="_blank" rel="noreferrer">
                      <button
                        type="button"
                        className="btn btn-success"
                      >
                        Live              
                      </button>
                    </a>
                    <a href='' target="_blank" rel="noreferrer">
                      <button
                        type="button"
                        className="btn btn-info"
                      >
                        Frontend
                      </button>
                    </a>
                    <a href='' target="_blank" rel="noreferrer">
                      <button
                        type="button"
                        className="btn btn-info"
                      >
                        Backend
                      </button>
                    </a>
                  </div>

                </div>
                
             </div>
            </div>
        </div>
        </div>
      </section>  
    </>
  )
}

export default Projects