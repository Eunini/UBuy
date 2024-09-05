import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(fullName, email, message);
  };

  const sendEmail = (fullName, email, message) => {
    console.log('Sending email...');
    // ... (rest of the email sending logic)
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="container mb-5 p-3">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Question?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center my-2">
            <img src="/assets/images/contact.png" alt="Contact Us" height="300px" width="300px" />
          </div>
          <div className="col-md-6 my-4">
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="exampleForm" class="form-label">Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleForm"
                  placeholder="John Smith"
                  value={fullName}
                  onChange={handleFullNameChange}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  value={message}
                  onChange={handleMessageChange}
                ></textarea>
              </div>
              <button type="submit" class="btn btn-outline-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Success!</h2>
            <p>Your message has been sent successfully.</p>
            <NavLink className="genbtn" to="/home">
                    ok
                  </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;