import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext, useRef, useState } from 'react';
import { ContextAPI } from '../Provider/ContextProvider';
import { toast, Bounce } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider } from 'firebase/auth';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  // Handle Show Password
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const { logInUser, setUser, forgetMyPassword, logInWithPopUp } =
    useContext(ContextAPI);
  const emailRef = useRef();

  //? Login Function
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const email = form.get('email');
    const password = form.get('password');

    logInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        if (user) {
          toast.success('Login Successfully!', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Bounce,
          });
          navigate('/');
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorMessage);
        if (errorCode) {
          toast.warn('Something Wrong!', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Bounce,
          });
        }
      });
  };

  //? Forget Function
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.warn('Please Enter a Valid Mail!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Bounce,
      });
    } else {
      forgetMyPassword(email)
        .then(() => {
          toast.info('Reset mail sent!', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Bounce,
          });
        })
        .catch(() => {
          toast.warn('Something Wrong!', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Bounce,
          });
        });
    }
  };

  //? Login POPUP Function
  const provider = new GoogleAuthProvider();
  const handlePopUpLoginUser = () => {
    logInWithPopUp(provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        if (user) {
          toast.success('Login Successfully!', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Bounce,
          });
        }
        // Navigate to homepage
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorMessage);
        if (errorCode) {
          toast.warn('Something Wrong!', {
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
        }
      });
  };

  return (
    <>
      <div className='flex flex-col w-full h-screen items-center justify-center'>
        <Helmet><title>Chill Gamer | Login</title></Helmet>
        <Link to={'/'}>
          <button className='btn btn-sm btn-success text-white mb-1'>
            Go back
          </button>
        </Link>
        <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border'>
          <form onSubmit={handleLogIn} className='card-body'>
            <h2 className='text-center font-bold text-2xl'>Login</h2>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                name='email'
                placeholder='email'
                className='input input-bordered'
                required
              />
            </div>

            <div className='form-control relative'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type={showPass ? 'text' : 'password'}
                name='password'
                placeholder='password'
                className='input input-bordered'
                required
              />
              <p
                onClick={() => setShowPass(!showPass)}
                className='absolute top-12 right-4 btn btn-xs'
              >
                {showPass === true ? (
                  <FaEyeSlash></FaEyeSlash>
                ) : (
                  <FaEye></FaEye>
                )}
              </p>
              <label className='label'>
                <p
                  onClick={handleForgetPassword}
                  className='label-text-alt link link-hover'
                >
                  Forgot password?
                </p>
              </label>
            </div>

            <div className='form-control mt-6'>
              <button className='btn btn-error text-white'>Login</button>
            </div>

            {/* Google Login */}
            <div className='flex items-center justify-between'>
              <small>
                New to this website?{' '}
                <Link
                  to={'/signup'}
                  className='font-bold text-blue-600 hover:underline cursor-pointer'
                >
                  Sign Up
                </Link>
              </small>

              <span
                onClick={handlePopUpLoginUser}
                className='border-2 border-rose-400 rounded-full p-2 cursor-pointer'
              >
                <FcGoogle></FcGoogle>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
