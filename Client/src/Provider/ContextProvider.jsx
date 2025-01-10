import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { Bounce, toast } from 'react-toastify';
import auth from '../Utilities/firebase.config';

export const ContextAPI = createContext(null);

const ContextProvider = ({ children }) => {
  // Fetch All Data
  const [addReviewData, setAddReviewData] = useState([]);
  const [backupData, setBackupData] = useState([]);
  useEffect(() => {
    fetch('https://chill-gamer-server-henna.vercel.app/addReview')
      .then((res) => res.json())
      .then((data) => {
        setAddReviewData(data);
        setBackupData(data);
      })
      .catch((err) => {
        // console.error(err)
      });
  }, [setAddReviewData]);

  /* ============================== Use State ============================== */
  //! Users data loading true
  const [loading, setLoading] = useState(true);
  //! User set
  const [user, setUser] = useState(null);
  /* ======================================================================= */

  /* ============================ Firebase Auth ============================ */
  //! Observer: User Login Or LogOut
  useEffect(() => {
    const cleanInfo = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      cleanInfo();
    };
  }, []);

  //! Signup
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //! Update photo & name
  const nameANDphoto = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  //! Login
  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //! Login with pop up
  const logInWithPopUp = (provider) => {
    return signInWithPopup(auth, provider);
  };

  //! LogOut
  const handleLogOut = () => {
    toast.success('Logout Successfully!', {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      transition: Bounce,
    });
    // console.log('logout');
    return signOut(auth);
  };

  //! Forget Password
  const forgetMyPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  /* ======================================================================= */

  /* ============================= Value =================================== */
  const value = {
    addReviewData,
    setAddReviewData,

    backupData,
    //! Observer
    loading,
    user,

    //! Create new user
    createNewUser,

    //! Update name and photo
    nameANDphoto,

    //! Login
    logInUser,
    logInWithPopUp,

    //! Log LogOut
    handleLogOut,
    setUser,

    //! Forget Password
    forgetMyPassword,
  };
  /* ================================================================= */
  return <ContextAPI.Provider value={value}>{children}</ContextAPI.Provider>;
};

ContextProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ContextProvider;
