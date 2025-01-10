import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { Slide, toast } from 'react-toastify';
import { ContextAPI } from '../Provider/ContextProvider';

const UpdateReviews = () => {
  const { user } = useContext(ContextAPI);
  const [updateReview, setUpadteReview] = useState([]);
  const updateId = useParams();
  const reviewId = updateId._id;
  useEffect(() => {
    fetch(
      `https://chill-gamer-server-henna.vercel.app/addReview/update/${reviewId}`
    )
      .then((res) => res.json())
      .then((data) => setUpadteReview(data))
      .catch((err) => console.error(err));
  }, [reviewId]);
  //   console.log(updateReview?._id, reviewId);

  const handleUpdateReview = (event) => {
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

    fetch(
      `https://chill-gamer-server-henna.vercel.app/addReview/update/${reviewId}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(reviewInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success('Update Successfully!', {
            position: 'top-center',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Slide,
          });
        }
      })
      .catch((err) => {
        // console.error(err);
        toast.error('Something Wrong!', {
          position: 'top-center',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Slide,
        });
      });
  };

  return (
    <div>
      <Helmet>
        <title>Chill Gamer | Update Review</title>
      </Helmet>
      <Link className='btn btn-sm md:btn-md btn-info' to={-1}>
        Go Back
      </Link>
      <div className='flex justify-center'>
        {/* Card */}
        <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
          <form onSubmit={handleUpdateReview} className='card-body'>
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
                defaultValue={updateReview?.title}
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
                defaultValue={updateReview?.image}
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
                defaultValue={updateReview?.rating}
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
                defaultValue={updateReview?.year}
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
                readOnly
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
                readOnly
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
                defaultValue={updateReview?.description}
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

export default UpdateReviews;
