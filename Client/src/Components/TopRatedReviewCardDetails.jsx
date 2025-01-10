import { Card } from 'flowbite-react';
import { useContext, useEffect, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { NavLink, useParams } from 'react-router-dom';
import { Slide, toast } from 'react-toastify';
import { ContextAPI } from '../Provider/ContextProvider';

const TopRatedReviewCardDetails = () => {
  const { addReviewData, user } = useContext(ContextAPI);
  const cardId = useParams();
  const _id = cardId._id;

  const [reviewData, setReviewData] = useState({});
  useEffect(() => {
    const singleReviewData = addReviewData.find(
      (reviewId) => reviewId._id === _id
    );
    setReviewData(singleReviewData);
  }, [addReviewData, _id]);

  const { image, genres, rating, title, year, description, email, name } =
    reviewData || {};

  const newWatchList = {
    image,
    genres,
    rating,
    title,
    year,
    description,
    email,
    name,
  };

  // WatchList
  const handleAddWatchList = () => {
    if (user) {
      // const newWatchList =
      fetch('https://chill-gamer-server-henna.vercel.app/myWatchlist', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(newWatchList),
      })
        .then((res) => {
          res.json();
          toast.success('Successfully Added To Db!', {
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
        })
        .catch((err) => {
          if (err) {
            // console.error(err);
            toast.success('Something Wrong!', {
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
        });
    }
  };

  return (
    <div className='my-10'>
      <NavLink className='btn btn-sm md:btn-md btn-accent mb-4' to={-1}>
        Go Back
      </NavLink>
      <div className=''>
        <Card className='max-w-sm' imgAlt='Game Pic' imgSrc={image}>
          {/* Title */}
          <div>
            <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
              {title}
            </h5>
          </div>

          {/* Details */}
          <div className='flex flex-col gap-1'>
            <p className='font-bold'>
              Genres:{' '}
              <span className='font-normal text-gray-600'>{genres}</span>
            </p>

            <div className='flex items-center gap-1'>
              <p className='font-semibold'>Rating:</p>
              <Rating
                initialRating={rating}
                readonly
                emptySymbol={
                  <span className='text-xl text-yellow-400'>
                    <FaRegStar></FaRegStar>
                  </span>
                }
                fullSymbol={
                  <span className='text-xl text-yellow-400'>
                    <FaStar></FaStar>
                  </span>
                }
              />
              <span className='ml-1 rounded bg-green-200 px-2.5 py-0.5 text-xs font-semibold text-gray-600 dark:bg-cyan-200 dark:text-cyan-800'>
                {rating}
              </span>
            </div>

            <p className='font-semibold'>
              Release year:{' '}
              <span className='font-normal text-gray-600'>{year}</span>
            </p>
            <p className='font-semibold'>Description:</p>
            <p className='text-gray-600'>{description}</p>
          </div>

          <div className='border-b border-2 border-gray-300'></div>

          <div className='flex items-center justify-between'>
            <div className='flex flex-col'>
              <img className='w-10' src='/user.png' alt='User avatar' />
              <p>{name}</p>
              <p>{email}</p>
            </div>
            {user ? (
              <button
                onClick={handleAddWatchList}
                className='rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800'
              >
                Add to WatchList
              </button>
            ) : (
              ''
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TopRatedReviewCardDetails;
