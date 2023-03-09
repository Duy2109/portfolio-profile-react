import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Fade from "react-reveal/Fade";
  
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gpc8ycl', 'template_7ouq3ou', form.current, 'v3s5CLe10K96Ljz8f')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };  


  return (
    <div className="container contact-section" id="contactsection">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
            <div className="contact-form-iamge">
              <img
                src="https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="contact form image"
              />
            </div>
          </div>
        </Fade>

        <Fade right>
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
            <div className="contact-form-design">
              <div className="text-center">
                <h5>Contact Me</h5>
              </div>
              <form ref={form} onSubmit={sendEmail}>
                <div className="contact-form">
                  <label className="form-lebel">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name='Name'
                    
                  />
                </div>

                <div className="contact-form">
                  <label className="form-lebel">E-mail</label>
                  <input
                    type="text"
                    className="form-control"
                    name='email'
                  />
                </div>

                <div className="contact-form">
                  <label className="form-lebel">Job Types</label>
                  <select
                    className="custom-select-tag"
                    
                  >
                    <option>Full-time</option>
                    <option>Working Student</option>

                    <option>Part-time</option>

                    <option>Contract</option>
                  </select>
                </div>

                <div className="contact-form">
                  <label className="form-lebel">Message</label>
                  <textarea
                    rows="4"
                    type="text"
                    className="form-control"
                    name="message"
                    
                  />
                </div>
                <input type="submit" className="button-submit" value="Send" />
              </form>
            </div>
          </div>
        </Fade>
      </div>

      <ToastContainer draggable autoClose={8000} />
    </div>
  );
};

export default Contact;
