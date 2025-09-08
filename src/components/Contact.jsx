import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

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
    // Your email sending logic here
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Have Some Questions?</h1>
        <hr className="my-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img src="/assets/images/contact.png" alt="Contact Us" className="w-full h-auto rounded-lg" />
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="fullName" className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                id="fullName"
                className="input input-bordered w-full"
                placeholder="John Smith"
                value={fullName}
                onChange={handleFullNameChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="label">
                <span className="label-text">Email address</span>
              </label>
              <input
                type="email"
                id="email"
                className="input input-bordered w-full"
                placeholder="name@example.com"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                id="message"
                className="textarea textarea-bordered w-full"
                rows="5"
                value={message}
                onChange={handleMessageChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Success!</h3>
            <p className="py-4">Your message has been sent successfully.</p>
            <div className="modal-action">
              <NavLink to="/" className="btn" onClick={closeModal}>
                OK
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;