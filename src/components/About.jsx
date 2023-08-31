import React from 'react'
import picture from '../assets/Indira_R.jpg'
import { techStack } from '../constants'
import '/src/index.css'
import { TypeAnimation } from 'react-type-animation'

function About() {
  return (
   <>
   <>
        <section className="allBG">
        <div className="container-fluid">
        <h3 className="mb-5 text-uppercase" style={{color:"rgb(225, 222, 222)",'fontWeight':'bolder','textAlign':'center','fontSize':'45px','marginTop':'-50px'}}>ABOUT ME</h3>
          <div className='row'>      
            <div className='col-xl-4'>
            <img src={picture}
            alt="Sample photo" className="img-fluid ml-5"
            style={{'borderTopLeftRadius': ".25rem", 'borderBottomLeftRadius': '.25rem','height':'510px','width':'350px'}}/>
            </div>
            <div className='col-xl-8 d-xl-block'>
            <section className="home1" id="home1">
            <div className="max-width1">
            <div className="home-content1">

                {/* Adding name */}
                <div className="text-21" data-aos="fade-left" data-aos-duration="2000">I'm Indira Ramalingam &</div>
                <div className="text-31" data-aos="fade-right" data-aos-duration="2000">I'm a  
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
                ]}
                style={{ fontSize: '1em' , color:'rgb(225, 222, 222)'}}
                repeat={Infinity} />
                </div>

                {/* Adding content in about page */}
                <div className='mt-4' style={{fontFamily:'sans-serif Poppins', textAlign: 'justify',fontSize:'18px'}}>
                <p>I am a Full Stack Developer, proficient in Web development & App development. As a Full Stack professional, I am looking to develop robust web applications that support scalability through the use of my technical knowledge and apply my programming and analytical studies in the organization professionally. I have clear understanding of modern technologies & best design practices. Now I am seeking for an opportunity to utilize my skills and abilities in the Information Technology Industry that offers Professional growth while being resourceful, innovative, and flexible. I am always ready for expanding my knowledge/learning’s and it's successful implementation. Frequently praised as adaptable by my peers, I believe to be able to help any company for achieving its goals.</p>
                </div>

                {/* To Download Resume */}
                <div className='mt-5' style={{}}>
                  <a href='https://drive.google.com/file/d/1ufn0ZOeFkyjD5EBL4AWuE4BAJoXvnvWk/view?usp=drive_link' target='_blank' download>
                    <button className='btn btn-secondary btn-lg'>Download Resume</button>
                  </a>
                </div>

                {/* Technologies  */}
                <div className='mt-5'>
                <div className=" rounded  mb-5">
                          <ul id="myTab2" role="tablist" className="nav nav-tabs with-arrow lined flex-column flex-sm-row text-center">
                            <li className="nav-item flex-sm-fill">
                              <a id="home2-tab" data-toggle="tab" href="#home2" role="tab" aria-controls="home2" aria-selected="true" className="nav-link text-uppercase font-weight-bold mr-sm-3 rounded-0 active">Skills</a>
                            </li>
                            <li className="nav-item flex-sm-fill">
                              <a id="profile2-tab" data-toggle="tab" href="#profile2" role="tab" aria-controls="profile2" aria-selected="false" className="nav-link text-uppercase font-weight-bold mr-sm-3 rounded-0">Experience</a>
                            </li>
                            <li className="nav-item flex-sm-fill">
                              <a id="contact2-tab" data-toggle="tab" href="#contact2" role="tab" aria-controls="contact2" aria-selected="false" className="nav-link text-uppercase font-weight-bold rounded-0">Education</a>
                            </li>
                          </ul>
                          {/* For Skills */}
                          <div id="myTab2Content" className="tab-content">
                            <div id="home2" role="tabpanel" aria-labelledby="home-tab" className="tab-pane fade px-4 py-5 show active">
                              <div id='Skills'>
                                <div className="skills-image">
                                  {techStack.map((el,i)=>{
                                  return(
                                  <>
                                  <div className=" Skills-Adjust">
                                    <img alt="" src={el.link} className="w-12"/>
                                    <h5>{el.name}</h5>
                                  </div>
                                  </>     
                                  )
                                  })}
                                </div>
                              </div>
                            </div>

                            {/* For Experience */}
                            <div id="profile2" role="tabpanel" aria-labelledby="profile-tab" className="tab-pane fade px-4 py-5">
                             Experience
                              
                            </div>

                            {/* For Education */}
                            <div id="contact2" role="tabpanel" aria-labelledby="contact-tab" className="tab-pane fade px-4 py-5">
                            <div className="tab-contents" >
                                <ul>
                                  <li>
                                    <h4>Bachelor Of Engineering - CSE</h4><br />
                                  </li>
                                  <li>
                                    <span>Diploma in Mechanical Engineering</span
                                    ><br />Qualified with First Class distinction(87.59%)
                                  </li>
                                  <li>
                                    <span>SSC (10th)</span><br />Qualified with First Class
                                    distinction(86.40%)
                                  </li>
                                </ul>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                    </div>




            </div>
        </div>
    </section>
            </div>
          </div>
        </div>
      </section>
    </>   
   </>
  )
}

export default About