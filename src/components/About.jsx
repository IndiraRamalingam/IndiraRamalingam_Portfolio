import React from 'react'
import picture from '../assets/Indira_V2.jpg'
import { techStack } from '../constants'
import '/src/index.css'
import { TypeAnimation } from 'react-type-animation'

function About() {
  return (
   <>
   <>
        <section className="allBG1">
        <div className="container-fluid">
        <h3 className="mb-5 text-uppercase" style={{color:"rgb(225, 222, 222)",'fontWeight':'bolder','textAlign':'center','fontSize':'45px','marginTop':'-50px'}}>ABOUT ME</h3>
          <div className='row'>      
            <div className='col-xl-4'>
            <img src={picture}
            alt="Sample photo" className="img-fluid ml-5"
            style={{'borderTopLeftRadius': ".25rem", 'borderBottomLeftRadius': '.25rem','height':'410px','width':'280px','textAlign':'center'}}/>
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
                  ' Programmer Analyst',
                  200,  
                ]}
                style={{ fontSize: '1em' , color:'rgb(225, 222, 222)'}}
                repeat={Infinity} />
                </div>

                {/* Adding content in about page */}
                <div className='mt-4' style={{fontFamily:'sans-serif Poppins', textAlign: 'justify',fontSize:'18px'}}>
                <p>Around 3+ years of experience in IT Industry as a Programmer Analyst and involved in developing Frontend Web pages using Jahia CMS, HTML, CSS and JS. Worked in Agile Methodology. By understanding the document requirment, performed coding based on coding standards. Recently, I have completed my certification in Full Stack Development - MERN at GUVI Geeks Networks, IITM Research Park, Chennai. As a Full Stack professional, I am looking to develop robust web applications that support scalability through the use of my technical knowledge and apply my programming and analytical studies in the organization professionally. I have clear understanding of modern technologies & best design practices. Now I am seeking for an opportunity to utilize my skills and abilities in the Information Technology Industry that offers Professional growth while being resourceful, innovative, and flexible. I am always ready for expanding my knowledge/learning’s and it's successful implementation. </p>
                </div>

                {/* To Download Resume */}
                <div className='mt-5' style={{}}>
                  <a href='https://drive.google.com/file/d/1PlJlVRiV0ue96kDaUazhNN4pxFG1mcaZ/view?usp=drive_link' target='_blank' download>
                    <button className='btn btn-success btn-lg'>Download Resume </button>
                  </a>
                </div>

                
                <div className='mt-5'>
                <div className=" rounded  mb-5">
                          <ul id="myTab2" role="tablist" className="nav nav-tabs with-arrow lined flex-column flex-sm-row text-center">
                            <li className="nav-item flex-sm-fill ">
                              <a id="home2-tab" data-toggle="tab" href="#home2" role="tab" aria-controls="home2" aria-selected="true" className="nav-link text-uppercase font-weight-bold mr-sm-3 rounded-0 active textabout">Skills</a>
                            </li>
                            <li className="nav-item flex-sm-fill">
                              <a id="profile2-tab" data-toggle="tab" href="#profile2" role="tab" aria-controls="profile2" aria-selected="false" className="nav-link text-uppercase font-weight-bold mr-sm-3 rounded-0 textabout">Experience</a>
                            </li>
                            <li className="nav-item flex-sm-fill">
                              <a id="contact2-tab" data-toggle="tab" href="#contact2" role="tab" aria-controls="contact2" aria-selected="false" className="nav-link text-uppercase font-weight-bold rounded-0 textabout">Education</a>
                            </li>
                          </ul>
                          {/* For Skills */}
                          <div id="myTab2Content" className="tab-content">
                            <div id="home2" role="tabpanel" aria-labelledby="home-tab" className="tab-pane fade px-4 py-5 show active">
                              <div id='Skills'>
                              <h3 className="mt-" style={{color:"rgb(13 187 253)",'fontWeight':'bolder','textAlign':'left','fontSize':'30px'}}>Technologies I work with,</h3>
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
                              <h3 className="mb-2 text-uppercase" style={{color:"rgb(13 187 253)",'fontWeight':'bolder','textAlign':'center','fontSize':'25px'}}>Excelacom Technologies Private Limited, <span style={{color:"rgb(48 231 73)",'fontWeight':'bold',"fontSize":'16px'}}>Siruseri, Chennai.</span></h3>
                              <h5 className=" mt-2" style={{color:"rgb(225, 222, 222)",'fontWeight':'bolder','textAlign':'center','fontSize':'20px'}}>Programmer Analyst<span style={{color:"rgb(225, 222, 222)",'fontWeight':'bold',"fontSize":'16px','marginLeft':'20px'}}> <i className="fa fa-calendar mt-3" style={{color:"rgb(225, 222, 222)",'fontSize':'19px','fontWeight':'bolder'}} > Sept 2015 - Feb 2019</i></span></h5>

                              <div className='mt-5'>
                              <h5 className="hr-lines">Projects I have worked there</h5>
                              </div>

                              {/* Project1 */}
                              <div>
                                <div className='row'>
                                    <div className='col-sm-8'>
                                    <h5 className="mb-2 mt-4" style={{color:"rgb(229 202 139 / 95%)",'fontWeight':'bold','fontSize':'19px'}}>Project : NorthStar Retail Portal </h5>
                                    </div>
                                    <div className='col-sm-4'>
                                    <i className="fa fa-calendar mt-4 mb-4" style={{'fontSize':'17px','fontWeight':'bold','color':'rgb(229 202 139 / 95%)'}} > Jan 2017-Feb 2019</i>
                                    </div>
                                </div>
                                
                                <h5 className="mb-2 mt-2" style={{color:"rgb(225, 222, 222)",'fontWeight':'bold','fontSize':'18px'}}>Project Description</h5>

                                <div className='mt-3 mx-5' style={{fontFamily:'sans-serif Poppins', textAlign: 'justify',fontSize:'16px'}}>
                                  <p>Consolidated Communications, Inc. was an American operator of
                                  communication services. Consolidated's services include local
                                  and long distance phone service, data, Internet, broadband,
                                  television, business communications solutions and fiber
                                  services.</p>
                                </div>
                
                                <h5 className="mb-2 mt-2" style={{color:"rgb(225, 222, 222)",'fontWeight':'bolder','fontSize':'18px'}}>Roles and Responsibilities</h5>
                                <ul className='mx-5'>
                                  <li>Responsible for analysing business requirements and converting them into technical specifications.</li>
                                  <li>Performed Agile Methodology.</li>
                                  <li>Performed coding, based on coding standards.</li>
                                  <li>Unit test case preparation and execution for the developed
                                modules and also involved in progression and Integration
                                testing.</li>
                                </ul>
                              </div>

                          {/* Project2 */}
                          <div>
                                <div className='row'>
                                    <div className='col-sm-8'>
                                    <h5 className="mb-2 mt-4" style={{color:"rgb(229 202 139 / 95%)",'fontWeight':'bold','fontSize':'19px'}}>Project : FireFly (Century Orchestrator)</h5>
                                    </div>
                                    <div className='col-sm-4'>
                                    <i className="fa fa-calendar mt-4 mb-4" style={{color:"rgb(229 202 139 / 95%)",'fontSize':'17px','fontWeight':'bold'}} > Sept 2015-Dec 2016</i>
                                    </div>
                                </div>
                                
                                <h5 className="mb-2 mt-2" style={{color:"rgb(225, 222, 222)",'fontWeight':'bold','fontSize':'18px'}}>Project Description</h5>

                                <div className='mt-3 mx-5' style={{fontFamily:'sans-serif Poppins', textAlign: 'justify',fontSize:'16px'}}>
                                  <p>Comcast is the second largest broadcasting and cable
                                    television company in the world by revenue, and is America's
                                    largest home Internet service provider. It provides services
                                    to U.S. residential and commercial customers in 40 states
                                    and the District of Columbia.</p>
                                </div>
                
                                <h5 className="mb-2 mt-2" style={{color:"rgb(225, 222, 222)",'fontWeight':'bolder','fontSize':'18px'}}>Roles and Responsibilities</h5>
                                <ul className='mx-5'>
                                  <li>Understanding the requirement document.</li>
                                  <li>Implementing the presentation layer using JavaScript and JSP.</li>
                                  <li>Involved in performing unit testing and integration testing.</li>
                                  <li>Bug fixing.</li>
                                </ul>
                              </div>

                          </div>

                            {/* For Education */}
                            <div id="contact2" role="tabpanel" aria-labelledby="contact-tab" className="tab-pane fade px-4 py-5">
                            <div className="tab-contents" >
                              <div className=''>
                                <h5 className="hr-lines1" style={{color:"rgb(13 187 253)"}}>   Where I educated   </h5>
                              </div>

                              <div className='row mt-5'>
                                   <div className='col-sm-3' style={{'textAlign':'center'}}>
                                   <span className="bi bi-mortarboard-fill blue-color" style={{'fontSize':'70px'}}> </span>
                                   </div>
                                    <div className='col-sm-6'>
                                    <h5 className=" text-uppercase" style={{color:"rgb(229 202 139 / 95%)",'fontWeight':'bold','fontSize':'20px','textAlign':'center'}}>Bachelor Of Engineering </h5>
                                    <div className='mx-1'>
                                      <h5 style={{'fontFamily':'serif','textAlign':'center'}}>Computer Science and Engineering</h5>
                                      <h6 style={{'fontFamily':'serif','textAlign':'center'}}>Srinivasa Institue Of Engineering and Technology</h6>
                                      <p style={{'fontFamily':'serif','textAlign':'center'}}>Poonamallee, Chennai.</p>
                                    </div>
                                    </div>
                                    <div className='col-sm-3' style={{'textAlign':'center'}}>
                                    <i className="fa fa-calendar " style={{'fontSize':'17px','fontWeight':'bold'}} > 2011-2015</i>
                                    </div>
                                </div>

                                <div className='row mt-3'>
                                   <div className='col-sm-3' style={{'textAlign':'center'}}>
                                   <span className="bi bi-mortarboard-fill blue-color" style={{'fontSize':'60px'}}> </span>
                                   </div>
                                    <div className='col-sm-6'>
                                    <h5 className=" text-uppercase" style={{color:"rgb(229 202 139 / 95%)",'fontWeight':'bold','fontSize':'20px','textAlign':'center'}}>HSC</h5>
                                    <div className='mx-1'>
                                      <h6 style={{'fontFamily':'serif','textAlign':'center'}}>Chennai Girls Higher Secondary School</h6>
                                      <p style={{'fontFamily':'serif','textAlign':'center'}}>Perambur, Chennai.</p>
                                    </div>
                                    </div>
                                    <div className='col-sm-3' style={{'textAlign':'center'}}>
                                    <i className="fa fa-calendar " style={{'fontSize':'17px','fontWeight':'bold'}} > April 2011</i>
                                    </div>
                                </div>

                                <div className='row mt-3'>
                                   <div className='col-sm-3' style={{'textAlign':'center'}}>
                                   <span className="bi bi-mortarboard-fill blue-color" style={{'fontSize':'50px'}}> </span>
                                   </div>
                                    <div className='col-sm-6'>
                                    <h5 className=" text-uppercase" style={{color:"rgb(229 202 139 / 95%)",'fontWeight':'bold','fontSize':'20px','textAlign':'center'}}>SSLC</h5>
                                    <div className='mx-1'>
                                      <h6 style={{'fontFamily':'serif','textAlign':'center'}}>Chennai Girls Higher Secondary School</h6>
                                      <p style={{'fontFamily':'serif','textAlign':'center'}}>Perambur, Chennai.</p>
                                    </div>
                                    </div>
                                    <div className='col-sm-3' style={{'textAlign':'center'}}>
                                    <i className="fa fa-calendar " style={{'fontSize':'17px','fontWeight':'bold'}} > April 2009</i>
                                    </div>
                                </div>
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
