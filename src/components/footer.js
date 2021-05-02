import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from './button';
import './footer.css';
import logo from "../assets/logo.png";

export const Footer = ()=>(
    <>
    <div className="bg ">
        <div className="container">
            <div className="row py-4 d-flex align-item-center">
                <div className="col-md-12 text-center">
                    <Link href='/'><i class="fab fa-facebook-square text-black mr-5"/></Link>
                    <Link href='/'><i class="fab fa-twitter-square text-black mr-5"/></Link>
                    <Link href='/'><i class="fab fa-google-plus-g text-black mr-5"/></Link>
                    <Link href='/'><i class="fab fa-instagram text-black"/></Link>
                </div>
            </div>
        </div>
    </div>
    <div className="background styles">
    <div className="container text-center text-md-left ">
        <section className="footer-subscription">
            <p className="sub_heading text-uppercase">Subscribe us for new Feeds</p>
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder="Email" className="footer-input"/>
                    <Button buttonStyle="btn--outline">Subscribe</Button>
                </form>
            </div>
        </section>
        <div className="row styles">
            <div className="col-md-3 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold mt-5">Get to know Us</h6>
                <ul className="list-unstyled">
                    <li className="my-2">About Us</li>
                    <li className="my-2">Career</li>
                    <li className="my-2">Organisation</li>
                </ul>
            </div>
            <div className="col-md-2 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold mt-5">Let us help you</h6>
                <ul className="list-unstyled">
                    <li className="my-2">Covid-19</li>
                    <li className="my-2">Your Account</li>
                    <li className="my-2">Our Centers</li>
                    <li className="my-2">Help</li>
                </ul>
            </div>
            <div className="col-md-2 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold mt-5">Useful links</h6>
                <ul className="list-unstyled">
                    <li className="my-2">Contact us</li>
                    <li className="my-2">Products</li>
                    <li className="my-2">Cart</li>
                </ul>
            </div>
            <div className="col-md-2 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold mt-5">Contact Info</h6>
                <ul className="list-unstyled">
                    <li className="my-2"><i className="fas fa-map-marker-alt mr-2"/>New Delhi,India</li>
                    <li className=""><i className="fab fa-mailchimp mr-2"/>mas@gmail.com</li>
                    <li className="my-2"><i class="fas fa-phone mr-2"/>8606799473</li>
                    <li className="my-2"><i className="fas fa-shoe-prints mr-2"/>sick@gmail.com</li>
                </ul>
            </div>
        
    </div>
    </div>
        <div className="footer-copyright text-center py-4">
            <p className="mr-2">&copy;Copyright
                <p className="pt-4">Designed by Tekfen Buissiness Solution</p>
            </p>
        <img src={logo} className="header_logo" />
        </div>
    </div>
    
    </>
)