import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
import emailjs from '@emailjs/browser';



class Contact extends Component {
constructor()

 { 

  super();
 }
  

  render() {
  
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;
    function SendMail(){
     
      var param={
        from_name:document.getElementById("fname")?.value || null,
        email:document.getElementById("uemail")?.value||null,
        message:document.getElementById("message1")?.value ||null
      }
      if(param.from_name!==null&&param.email!==null&&param.message!==null){
       emailjs.send("service_33g49o3", "template_5gizgm8", param).then(function(res){
        alert("success" + res.status)
      });
    }
    else
     console.log("param is null")
     }


    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{message}</p>
            </div>
          </div>
        </Fade>
        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <div id="contactForm" name="contactForm" >
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                  
                      size="35"
                      id="fname"
                      name="fname"
                    
                    
                      
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                   
                      size="35"
                      id="uemail"
                      name="uemail"
                 
                      
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      type="text"
                    
                      size="35"
                      id="Subject"
                      name="Subject"
                   
                     
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols="50"
                      rows="15"
                      id="message1"
                      name="message1"
                   
                    ></textarea>
                  </div>

                  <div>
                    <button className="submit" id="disable" onClick={SendMail()}>Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </div>

              <div id="message-warning"> Error boy</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  {name}
                  <br />
                  {street} <br />
                  {city}, {state} {zip}
                  <br />
                  <span>{phone}</span>
                </p>
              </div>

              <div className="widget widget_tweets">
                <h4 className="widget-title">Latest Tweets</h4>
                <ul id="twitter">
                  <li>
                    <span>
                     this is my final project i develope by using asp.net mvc 
                     with sql serever 
                      <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                      <a href="./">2 Days Ago</a>
                    </b>
                  </li>
                  <li>
                    <span>
                     send me message  
                     if you want contact me 
                     i will be happy
                      
                    </span>
                    <b>
                      
                    </b>
                  </li>
                </ul>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
  
}

export default Contact;
