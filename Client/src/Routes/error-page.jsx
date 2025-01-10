import { Link, useRouteError } from 'react-router-dom';
import notFound from '../assets/notFound.gif';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id='error-page'
      className='flex flex-col items-center justify-center w-full h-screen relative space-y-2'
    >
      <img className='absolute -z-10' src={notFound} alt='404 Image' />
      <Link to={'/'} className='absolute lg:bottom-20 md:bottom-10 bottom-36 btn btn-accent text-white btn-sm'>
        Go Back to Home
      </Link>

      <div className='absolute lg:bottom-8 md:-bottom-2 flex flex-col items-center justify-center'>
        <p className='text-gray-500'>
          Sorry, an unexpected error has occurred.
        </p>
        <p>
          <i className='text-red-500'>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}

/* <h1 className='text-4xl'>404, Page not found!</h1> */
