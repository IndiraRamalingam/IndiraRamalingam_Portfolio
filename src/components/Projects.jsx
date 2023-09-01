import React from 'react'
import { projectStack } from '../constants'


function Projects() {
  return (
    <>
      <section className="allBG2">
        <div className="container">
        <h3 className="mb-5 " style={{color:"rgb(225, 222, 222)",'fontWeight':'bolder','textAlign':'center','fontSize':'45px','marginTop':'-50px'}}>Projects I've done</h3>
        <div className='mt-5'>
          <h5 className="hr-lines" style={{'color':"rgb(13 187 253)"}}>few of my works</h5>
   

          <div className='contianer m-5'>
          <div className="row g-4">
                {projectStack.map((el,i)=>{
                  {if(el.frontend !='' && el.backend!='')
                  {
                    return(
                      <>
                        <div className="col-sm-6">
                          <div className="card h-100">
                            <img src={el.img} className="card-img-top" alt=""/>
                            <div className="card-body">
                              <h5 className="card-title" style={{'fontWeight':'bolder','color':'#7008da'}}>{el.title}</h5>
                              <p className="card-text" style={{'fontFamily':'sans-serif'}}>
                                {el.description}                            
                              </p>
                              <p className='text-muted mb-0'><b>Technologies: </b>{el.tech}</p>
                            </div>
                            <div className='mb-2'>
                              <a href={el.live} target='_blank' className="btn btn-success m-2">Live <i class="fa fa-external-link" aria-hidden="true"></i> </a>
                              <a href={el.frontend} target='_blank' className="btn btn-info m-2">Frontend <i class="fa fa-github" aria-hidden="true"></i> </a>
                              <a href={el.backend} target='_blank' className="btn btn-info m-2">Backend <i class="fa fa-github" aria-hidden="true"></i> </a>
                            </div>
                          </div>
                        </div>
                      </>     
                      )
                  }else{
                    return(
                      <>
                        <div className="col-sm-6">
                          <div className="card h-100">
                            <img src={el.img} className="card-img-top" alt=""/>
                            <div className="card-body">
                              <h5 className="card-title" style={{'fontWeight':'bolder','color':'#7008da'}}>{el.title}</h5>
                              <p className="card-text" style={{'fontFamily':'sans-serif'}}>
                                {el.description}                            
                              </p>
                              <p className='text-muted mb-0'><b>Technologies: </b>{el.tech}</p>
                            </div>
                            <div className='mb-2'>
                              <a href={el.live} target='_blank' className="btn btn-success m-2">Live <i class="fa fa-external-link" aria-hidden="true"></i> </a>
                              <a href={el.code} target='_blank' className="btn btn-info m-2">Source Code <i class="fa fa-github" aria-hidden="true"></i> </a>
                            </div>
                          </div>
                        </div>
                      </>     
                      )
                  }
                  }
                
                  })}
              
            </div>
          </div>
        </div>
      </div>
    </section>  
    </>
  )
}

export default Projects