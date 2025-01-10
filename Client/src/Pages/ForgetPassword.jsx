import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ContextAPI } from '../Provider/ContextProvider';
import { toast, Bounce } from 'react-toastify';

const ForgetPassword = () => {
  const { user, forgetMyPassword } = useContext(ContextAPI);
  const emailRef = useRef();
  //   console.log(emailRef);

  const handleForgetPass = (event) => {
    event.preventDefault();

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

  return (
    <div className='flex flex-col w-full h-screen items-center justify-center'>
      <Link to={'/'}>
        <button className='btn btn-sm btn-success text-white mb-1'>
          Go back
        </button>
      </Link>
      <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
        <form onSubmit={handleForgetPass} form className='card-body'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='email'
              name='email'
              placeholder='email'
              value={user?.email}
              className='input input-bordered'
              required
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input
              type='password'
              name='password'
              placeholder='password'
              className='input input-bordered'
              required
            />
          </div>
          <div className='form-control mt-6'>
            <button className='btn btn-error text-white'>Reset Password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
