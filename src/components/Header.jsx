import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import CartBtn from './buttons/CartBtn';
import { useAuth } from '../contexts/authContext';
import { doSignOut } from '../firebase/auth';
import { FaBars, FaTimes } from 'react-icons/fa';
import { auth } from '../firebase/firebase';

const Header = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth(); // Removed unused userProfilePicture variable
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  }, [auth]); // Add the auth dependency to the useEffect hook

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="container-fluid py-2">
        <div className="mobile-toggle" onClick={toggleNav}>
          {isNavOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        <NavLink className="head" to="/">
          UBuy
        </NavLink>

        <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
          <ul className="navbar">
            {[
              { label: 'Home', to: '/' },
              { label: 'Product', to: '/products' },
              { label: 'About', to: '/about' },
              { label: 'Contact', to: '/contact' },
            ].map((item, index) => (
              <li key={index}>
                <NavLink onClick={toggleNav} className="nav-link" to={item.to}>
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              {userLoggedIn ? (
                <button
                  onClick={() => {
                    doSignOut().then(() => {
                      navigate('/login');
                    });
                  }}
                  className="genbtn"
                >
                  Logout
                </button>
              ) : (
                <>
                  <NavLink className="genbtn" to="/login">
                    Login
                  </NavLink>
                  <NavLink className="genbtn" to="/register">
                    Register
                  </NavLink>
                </>
              )}
            </li>
            <li>
              <CartBtn />
            </li>
          </ul>
        </nav>
        {currentUser && (
                <div className="profile-image">
                  {currentUser?.photoURL ? (
                    <img src={currentUser.photoURL} className="profile-image" alt="Profile Image" />
                  ) : (
                    <span className="default-profile-pic">
                      {currentUser?.displayName?.split(' ')[0][0].toUpperCase()}
                    </span>
                  )}
                </div>
              )}
      </div>
    </nav>
  );
};

export default Header;