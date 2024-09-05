import React, { useState, useEffect } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/authContext';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Register = () => {
  const navigate = useNavigate();
  const { userLoggedIn, setUserProfilePicture } = useAuth();
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    if (profilePicture) {
      // Display the profile picture
      // (no need to return anything here, just set the state)
      setProfilePicture(profilePicture);
    }
  }, [profilePicture]);

  if (userLoggedIn) {
    navigate('/home', { replace: true });
    return;
  }

  const handleGoogleSignIn = async () => {
    try {
      const auth = getAuth(); // Assuming you have a getAuth function to get the Firebase auth instance
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setProfilePicture(user.photoURL);
      setUserProfilePicture(user.photoURL); // Update the user profile picture in the auth context
      navigate('/home', { replace: true });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <main className="holder">
        <div className="title">Create a New Account</div>
        <div className="text-sm text-center">
          <button onClick={handleGoogleSignIn} className="button">
            Sign up with Google
          </button>
          <div className="or-divider">
            <div></div><span>OR</span><div></div>
          </div>
          <div className="text-sm text-center">
            Already have an account? {'   '}
            <Link to={'/login'} className="hover:underline font-bold">Continue</Link>
          </div>
          {profilePicture && (
            <div className="profile-image">
              <img src={profilePicture} alt="Profile Image" />
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Register;