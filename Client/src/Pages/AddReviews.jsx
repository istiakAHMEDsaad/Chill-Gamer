import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast, Zoom } from 'react-toastify';
import { ContextAPI } from '../Provider/ContextProvider';

const AddReviews = () => {
  const { user } = useContext(ContextAPI);

  const check = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const title = form.get('title');
    const image = form.get('image');
    const rating = form.get('rating');
    const genres = form.get('genres');
    const year = form.get('year');
    const email = form.get('email');
    const name = form.get('name');
    const description = form.get('description');
    const reviewInfo = {
      title,
      image,
      rating,
      genres,
      year,
      email,
      name,
      description,
    };
    // console.log(reviewInfo);

    // Send data to the server
    fetch('https://chill-gamer-server-henna.vercel.app/addReview', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(reviewInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data?.insertedId) {
          toast.success('Review added to database!', {
            position: 'top-center',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Zoom,
          });
        }
      })
      .catch((err) => {
        // console.error(err);
        toast.warn('Something wrong!', {
          position: 'top-center',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Zoom,
        });
      });
  };

  return (
    <div className='my-10'>
      <Helmet>
        <title>Chill Gamer | Add Reviews</title>
      </Helmet>
      <Link to={'/'} className='btn btn-sm md:btn-md btn-info text-white'>
        <span className='text-lg'>
          <FaArrowCircleLeft></FaArrowCircleLeft>
        </span>{' '}
        Go Home
      </Link>

      {/* ========================= Form Container ========================= */}
      <div className='flex justify-center'>
        {/* Card */}
        <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
          <form onSubmit={check} className='card-body'>
            {/* 1 title */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text text-base font-bold'>
                  Game Title
                </span>
              </label>
              <input
                type='text'
                name='title'
                placeholder='title'
                required
                className='input input-bordered'
              />
            </div>

            {/* 2 image */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-bold text-base'>
                  Game Cover Image
                </span>
              </label>
              <input
                type='text'
                name='image'
                placeholder='image url'
                required
                className='input input-bordered'
              />
            </div>

            {/* 3 rating */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-bold text-base'>Rating</span>
              </label>
              <input
                type='number'
                name='rating'
                placeholder='rate (between 1 and 5)'
                required
                min={1}
                max={5}
                className='input input-bordered'
              />
            </div>

            {/* 4 genres */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-bold text-base'>Genres</span>
              </label>
              <select
                name='genres'
                required
                className='select select-bordered w-full max-w-xs'
              >
                <option disabled selected>
                  choose and option
                </option>
                <option>Action</option>
                <option>RPG</option>
                <option>Adventure</option>
                <option>Sports</option>
                <option>Racing</option>
                <option>Simulation</option>
              </select>
            </div>

            {/* 5 year */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-bold text-base'>
                  Publishing Year
                </span>
              </label>
              <input
                type='date'
                name='year'
                placeholder='pick a date'
                required
                className='input input-bordered'
              />
            </div>

            {/* 6 email */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-bold text-base'>
                  User Email
                </span>
              </label>
              <input
                type='email'
                name='email'
                placeholder='user email'
                required
                defaultValue={user?.email}
                className='input input-bordered'
              />
            </div>

            {/* 7 name */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-bold text-base'>
                  User Name
                </span>
              </label>
              <input
                type='text'
                name='name'
                placeholder='user name'
                required
                defaultValue={user?.displayName}
                className='input input-bordered'
              />
            </div>

            {/* 8 description */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-bold text-base'>
                  Game Description
                </span>
              </label>
              <input
                type='text'
                name='description'
                placeholder='game description'
                required
                className='input input-bordered'
              />
            </div>

            <div className='form-control mt-6'>
              <button className='btn btn-error text-white'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReviews;
