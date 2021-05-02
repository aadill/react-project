import React from "react";
import "./Contact.css";
import Tilt from "react-vanilla-tilt";
import {Button} from './components/button';

export const Contact = () => (
  <div>
    <div className="container-contact">
      <Tilt className="box">
        <div className="box-content">
        <div className="content">

          <h2 className="text-uppercase">Contact Us</h2>
          <p>lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
        <div className="info-container">
          <div className="contact-info">
            <div className="contact-box">
              <div className="icon"><i class="fas fa-map-marked"></i></div>
              <div className="text">
                <h3>Address</h3>
                <p>
                  4671 Sugar CampRoad,
                  <br />
                  Owatonna,Minnesota,
                  <br />
                  55606
                </p>
              </div>
            </div>
            <div className="contact-box">
              <div className="icon"><i class="fas fa-phone-alt"></i></div>
              <div className="text">
                <h3>Phone</h3>
                <p>9846943062</p>
              </div>
            </div>
            <div className="contact-box">
              <div className="icon"><i class="fas fa-shipping-fast"></i></div>
              <div className="text">
                <h3>E-mail</h3>
                <p>madil995@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <h2>Send Message</h2>
              <div className="inputBox">
                <input type="text" name="" required="required"/>
                <span>Full name</span>
              </div>
              <div className="inputBox">
                <input type="text" name="" required="required"/>
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea required="required"/>
              <span>Type your Message.....</span>
              </div>
              <div className="inputBox">
              <Button buttonStyle="btn--outline">Send</Button>
              </div>
            </form>
          </div>
        </div>
        </div>
        
      </Tilt>
    </div>
  </div>
);
