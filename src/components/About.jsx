import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5 p-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
At UBuy, we're passionate about connecting people with the perfect phone to match their unique lifestyle. Our mission is to provide a seamless and enjoyable shopping experience, offering a wide range of high-quality phones from top brands at competitive prices. UBuy was founded by a team of tech enthusiasts who were frustrated with the traditional phone buying experience. We believed that buying a phone should be easy, convenient, and hassle-free. With years of experience in the industry, we set out to create a platform that would revolutionize the way people buy phones. </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About