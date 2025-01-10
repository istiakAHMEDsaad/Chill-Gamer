import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { ContextAPI } from '../Provider/ContextProvider';
import { toast, Bounce, Slide } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const SignUp = () => {
  /* ===============================Use State==================================== */
  const [showPass, setShowPass] = useState(false);
  const [showPassC, setShowPassC] = useState(false);
  const { createNewUser, nameANDphoto } = useContext(ContextAPI);
  const navigate = useNavigate();
  /* ============================================================================ */

  /* ===============================Funciton================================= */
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    const confirmpassword = form.get('confirmpassword');
    const terms = event.target.terms.checked;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // const ResultUser = { name, photo, email, password, confirmpassword };
    // console.log(ResultUser);

    //! Password length at least 6
    if (password.length < 6) {
      toast.warn('Password Must Contain 6 Character!', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Slide,
      });
      return;
    } else if (!passwordRegex.test(password)) {
      Swal.fire({
        text: 'Password must be contain 1 uppercase, 1 lowercase, 1 number, and 1 special character',
        icon: 'warning',
      });
      return;
    }

    //! Confirm password
    if (password !== confirmpassword) {
      toast.warn('Password not matched!', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Slide,
      });
      return;
    }

    //! Check terms and conditions
    if (!terms) {
      toast.info('Please agree to the terms and conditions!', {
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
      return;
    }

    //! Create User
    createNewUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        if (user) {
          toast.success('Account create successfully!', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Slide,
          });
        }

        //image and name
        const profile = {
          displayName: name,
          photoURL: photo,
        };
        nameANDphoto(profile)
          .then(() => {
            navigate('/');
          })
          .catch(() => {
            toast.error('Information not updated!', {
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
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorMessage);
        if (errorCode === 'auth/email-already-in-use') {
          toast.warn('User Already Exist!', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Slide,
          });
        } else {
          toast.error('Something Wrong!', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Slide,
          });
        }
      });
  };
  /* ======================================================================== */

  return (
    <>
      <Helmet>
        <title>Chill Gamer | Sign Up</title>
      </Helmet>
      <div className='flex flex-col w-full items-center justify-center'>
        <Link to={'/'}>
          <button className='btn btn-sm btn-success text-white mb-1'>
            Go back
          </button>
        </Link>
        <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border'>
          <form onSubmit={handleSignUp} className='card-body'>
            <h2 className='text-center font-bold text-2xl'>Sign Up</h2>

            {/* Name */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                type='text'
                name='name'
                placeholder='name'
                className='input input-bordered'
                required
              />
            </div>

            {/* photo */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Photo URL</span>
              </label>
              <input
                type='text'
                name='photo'
                placeholder='photo url'
                className='input input-bordered'
                required
              />
            </div>

            {/* Email */}
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

            {/* Password */}
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
            </div>

            {/* Confirm Password */}
            <div className='form-control relative'>
              <label className='label'>
                <span className='label-text'>Confirm Password</span>
              </label>
              <input
                type={showPassC ? 'text' : 'password'}
                name='confirmpassword'
                placeholder='confirm password'
                className='input input-bordered'
                required
              />
              <p
                onClick={() => setShowPassC(!showPassC)}
                className='absolute top-12 right-4 btn btn-xs'
              >
                {showPassC === true ? (
                  <FaEyeSlash></FaEyeSlash>
                ) : (
                  <FaEye></FaEye>
                )}
              </p>
            </div>

            <div className='flex items-center gap-2'>
              <input
                type='checkbox'
                name='terms'
                className='checkbox checkbox-xs'
              />
              <small className='text-gray-500'>
                I agree with the terms and condition
              </small>
            </div>

            <div className='form-control mt-6'>
              <button className='btn btn-error text-white'>Sign Up</button>
            </div>

            <Link to={'/login'}>
              <small>
                Already have account?{' '}
                <span className='text-blue-600 font-bold cursor-pointer hover:underline'>
                  Login
                </span>
              </small>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;

// testUser@gmail.com, Test@1234,
// bananaKhabo@banana.com, Banana@1234,
// tomatoRed@tomato.com, Tomato@1234,

/*
https://w0.peakpx.com/wallpaper/960/96/HD-wallpaper-naruto-hinata-cartoon-child-naruto-naruto-y-hinata-anime-thumbnail.jpg
*/

/* 
https://img.freepik.com/free-vector/surprised-banana-cartoon-illustration_1308-172273.jpg
*/
