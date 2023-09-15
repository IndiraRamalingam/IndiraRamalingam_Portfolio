import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from "@emailjs/browser";

function Contact() {
  
  const form=useRef();

  const handleSubmit =(e) =>{
    e.preventDefault();
    emailjs.sendForm("service_x5szjoe", "template_6tllm9u", form.current, "j92Cj__-MZAT3XXZQ").then(
      (result) => {
        console.log(result.text);
        alert("Message Sent Successfully");
      },
      (error) => {
        console.log(error.text);
        alert("Message Sent Failed");
      }
    );
  }

  return (
    <>
    <section className="allBG2">
      <div className="container">
        <h3 className="mb-5 " style={{color:"rgb(225, 222, 222)",'fontWeight':'bolder','textAlign':'center','fontSize':'45px','marginTop':'-50px'}}>Contact Me</h3>
        <div className='mt-5'>
          <h5 className="hr-lines" style={{'color':"rgb(13 187 253)"}}>get in touch</h5>
        </div>
        <div className='row'>

          <div className='col-sm-6 mt-4'>

             {/* Gmail */}
             <div className='row m-4'>
                <div className='col-sm-2'>
                <a href='mailto:indiraramalingam93@gmail.com' target='_blank' ><img src='https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png' style={{width:'50px',height:'45px'}}></img></a>
                <h1 ></h1> 
                </div>
                <div className='col-sm-9'>
                  <p className='mb-0' style={{color:'#10f210','fontSize':'16px','fontWeight':'700'}}>Gmail</p>
                  <a href='mailto:indiraramalingam93@gmail.com' target='_blank' style={{color:'white','fontSize':'20px'}}>indiraramalingam93@gmail.com</a>
                </div>
              </div>

            {/* LinkedIn */}
              <div className='row m-4'>
                <div className='col-sm-2'>
                <a href='https://www.linkedin.com/in/indira-ramalingam-b01986271/' target='_blank' style={{color:'#c2bbe9','fontSize':'40px'}}><img src='https://www.freeiconspng.com/thumbs/linkedin-logo-png/linkedin-logo-3.png' style={{width:'50px',height:'45px'}}></img></a>
                <h1 ></h1> 
                </div>
                <div className='col-sm-9 mt-2'>
                  <p className='mb-0' style={{color:'rgb(106 181 245)','fontSize':'16px','fontWeight':'700'}}>LinkedIn</p>
                  <a href='https://www.linkedin.com/in/indira-ramalingam-b01986271/' target='_blank' style={{color:'white','fontSize':'20px'}}>indira-ramalingam-b01986271/</a>
                </div>
              </div>

              {/* Github */}
                <div className='row m-4'>
                <div className='col-sm-2'>
                <a href='https://github.com/IndiraRamalingam' target='_blank' style={{color:'#c2bbe9','fontSize':'40px'}}><img src='https://t4.ftcdn.net/jpg/03/85/94/91/360_F_385949189_W1ydL4Z3c6Uy2OfB9rZNdbxVaIMOs16F.jpg' style={{width:'45px',height:'45px'}}></img></a>
                <h1 ></h1> 
                </div>
                <div className='col-sm-9 mt-2'>
                  <p className='mb-0' style={{color:'rgb(37 242 178)','fontSize':'16px','fontWeight':'700'}}>Github</p>
                  <a href='https://github.com/IndiraRamalingam' target='_blank' style={{color:'white','fontSize':'20px'}}>github.com/IndiraRamalingam</a>
                </div>
              </div>

                {/* Mobile */}
                <div className='row m-4'>
                <div className='col-sm-2 mt-2'>
                <img src='https://cdn-icons-png.flaticon.com/512/3617/3617011.png' style={{width:'60px',height:'50px',marginLeft:'-5px'}}></img>
                <h1 ></h1> 
                </div>
                <div className='col-sm-9 mt-2'>
                  <p className='mb-0' style={{color:'rgb(242 194 37)','fontSize':'16px','fontWeight':'700'}}>Mobile</p>
                  <p style={{color:'white','fontSize':'20px'}}>+91-8056929328</p>
                </div>
              </div>

                {/* Location */}
                {/* <div className='row m-4'>
                  <div className='col-sm-2 mt-2'>
                  <img src='https://i.pinimg.com/564x/7a/62/ec/7a62ecaa696f10c3b1c9b88eede32e79.jpg' style={{width:'45px',height:'45px'}}></img>
                  <h1 ></h1> 
                  </div>
                  <div className='col-sm-9'>
                    <p className='mb-0' style={{color:'rgb(245 144 87)','fontSize':'16px','fontWeight':'700'}}>Location</p>
                    <p style={{color:'white','fontSize':'20px'}}>Chennai, Tamilnadu</p>
                  </div>
                </div> */}

          </div>

          <div className='col-sm-6 mt-4 rounded' style={{backgroundColor:'#8d8d83'}}>
                <Form ref={form} onSubmit={handleSubmit} >
                <div className="p-md-4" >
                    
                  <div className="form-outline mb-4">
                  <label style={{fontSize:'20px','color':'rgb(225, 222, 222)','fontWeight':'500'}}>Name</label>
                    <input type="text" className="form-control form-control-lg" name="name"
                    placeholder='Enter your name'/>
                  </div>

                  <div className="form-outline mb-4">
                  <label style={{fontSize:'20px','color':'rgb(225, 222, 222)','fontWeight':'500'}}>Email</label>
                    <input type="email" className="form-control form-control-lg" name="email"
                    placeholder="Enter your email"
                   />
                  </div>

                  <div className="form-outline mb-4">
                    <label style={{fontSize:'20px','color':'rgb(225, 222, 222)','fontWeight':'500'}}>Message</label>
                    <textarea className="form-control form-control-lg" name="message"
                    placeholder='Write your message'
                   />
                  </div>

                  <div className="d-flex justify-content-end pt-3">

                    <button type="Submit" className="btn btn-success btn-lg ms-2">Send Message</button>
                  </div>

                </div>
                </Form>

          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default Contact