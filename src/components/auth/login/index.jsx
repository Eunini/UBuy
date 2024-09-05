import React, { useState, useEffect } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/authContext';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {
  const navigate = useNavigate();
  const { userLoggedIn, setUserLoggedIn } = useAuth();
  const [userProfilePicture, setUserProfilePicture] = useState(null);

  useEffect(() => {
    if (userLoggedIn) {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        setUserProfilePicture(user.photoURL);
      }
    }
  }, [userLoggedIn]);

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
      setUserLoggedIn(user);
      setUserProfilePicture(user.photoURL);
      navigate('/home', { replace: true });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="holder">
      <main>
        <div className="title">Welcome Back</div>
        <div className="text-sm text-center">
          <button onClick={handleGoogleSignIn} className="button">
            Sign in with Google
          </button>
          <p className="text-center text-sm">Don't have an account? <Link to={'/register'} className="hover:underline font-bold">Sign up</Link></p>
        </div>
      </main>
    </div>
  );
};

export default Login;