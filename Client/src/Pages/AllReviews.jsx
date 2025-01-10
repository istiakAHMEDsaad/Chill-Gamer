import { useContext, useState } from 'react';
import { ContextAPI } from '../Provider/ContextProvider';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import {
  FaRegStar,
  FaStar,
  FaSortAlphaUp,
  FaSortAlphaDownAlt,
} from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { Fade, Slide } from 'react-awesome-reveal';

const AllReviews = () => {
  const { addReviewData, setAddReviewData, backupData } = useContext(ContextAPI);
  const [rating, setRating] = useState('');


 // For Rating
  const handleRatingAss = (valueOne) => {
    setRating(valueOne);

    if (valueOne === 'Rating Ascending') {
      const ratingAssOrder = [...addReviewData].sort(
        (a, b) => a.rating - b.rating
      );
      setAddReviewData(ratingAssOrder);
    }
  };
  const handleRatingDes = (valueTwo) => {
    setRating(valueTwo);

    if(valueTwo === 'Rating Descending') {
      const ratingDessOrder = [...addReviewData].sort((a, b)=>b.rating - a.rating);
      setAddReviewData(ratingDessOrder);
    }
  };

  // Sort Genres
  const handleCategory = (category) => {
    const filterData = backupData.filter(item=>item.genres === category);
    setAddReviewData(filterData);
  }

  return (
    <div>
      <Helmet>
        <title>Chill Gamer | All Reviews</title>
      </Helmet>
      {/* Button */}
      <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
        {/* Text section */}
        <div>
          <Slide>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold mt-4'>
              All Reviewd Game
            </h1>
          </Slide>
          <Fade
            className='text-slate-500 text-lg'
            delay={1e3}
            cascade
            damping={1e-1}
          >
            Your all favourite game in one place
          </Fade>
        </div>
        {/* Button Section */}
        <div>
          {/* Sort button */}
          <div className='dropdown lg:dropdown-left'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-sm md:btn-md btn-info m-1'
            >
              {rating === 'Rating Ascending' ? (
                <>
                  Rating <FaSortAlphaUp />
                </>
              ) : rating === 'Rating Descending' ? (
                <>
                  Rating <FaSortAlphaDownAlt />
                </>
              ) : (
                'Sort By'
              )}
            </div>
            <ul
              tabIndex={0}
              className='dropdown-content lg:menu menu-md bg-red-100 rounded-box z-[1] lg:w-48 shadow'
            >
              <li className='text-base font-medium mx-auto'>
                <button onClick={() => handleRatingAss(`Rating Ascending`)}>
                  Rating
                  <FaSortAlphaUp />
                </button>

                <button onClick={() => handleRatingDes(`Rating Descending`)}>
                  Rating
                  <FaSortAlphaDownAlt />
                </button>
              </li>
            </ul>
          </div>

          {/* Filter button */}
          <div className='dropdown lg:dropdown-left '>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-sm md:btn-md btn-warning m-1'
            >
              Filter By
            </div>
            <ul
              tabIndex={0}
              className='dropdown-content lg:menu menu-md bg-red-100 rounded-box z-[1] lg:w-48 md:w-20 shadow lg:text-base'
            >
              <li className='text-base font-medium mx-auto'>
                <a onClick={()=>handleCategory('Action')}>Action</a>
              </li>
              <li className='text-base font-medium mx-auto'>
                <a onClick={()=>handleCategory('RPG')}>RPG</a>
              </li>
              <li className='text-base font-medium mx-auto'>
                <a onClick={()=>handleCategory('Adventure')}>Adventure</a>
              </li>
              <li className='text-base font-medium mx-auto'>
                <a onClick={()=>handleCategory('Sports')}>Sports</a>
              </li>
              <li className='text-base font-medium mx-auto'>
                <a onClick={()=>handleCategory('Racing')}>Racing</a>
              </li>
              <li className='text-base font-medium mx-auto'>
                <a onClick={()=>handleCategory('Simulation')}>Simulator</a>
              </li>
              <li className='text-base font-medium mx-auto'>
                <a onClick={()=>setAddReviewData(backupData)}>Show All</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {addReviewData?.length === 0 ? (
        <p>No Data found in database</p>
      ) : (
        <div className='my-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center lg:gap-y-10 md:gap-y-10 gap-y-10'>
          {addReviewData.map((singleData) => (
            <div
              key={singleData._id}
              className='card card-compact bg-base-100 lg:w-96 w-80 shadow-xl transition-all mx-auto'
            >
              <figure>
                <img src={singleData?.image} alt={`${singleData?.title}`} />
              </figure>
              <div className='px-4 py-4'>
                <h2 className='card-title'>{singleData?.title}</h2>
                <p className='font-bold'>
                  Genres:{' '}
                  <span className='font-normal text-gray-600'>
                    {singleData?.genres}
                  </span>
                </p>

                <div className='flex justify-start items-center gap-1'>
                  <p className='font-semibold'>Rating:</p>
                  <Rating
                    initialRating={singleData?.rating}
                    readonly
                    fractions={2}
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
                    {singleData?.rating}
                  </span>
                </div>

                <p className='font-semibold'>
                  Release year:{' '}
                  <span className='font-normal text-gray-600'>
                    {singleData?.year}
                  </span>
                </p>

                <div className='card-actions justify-end'>
                  {/* <div>
                    <img className='w-8' src='/user.png' alt="user image" />
                    <p>{name}</p>
                </div> */}
                  <Link
                    to={`/allReview/${singleData?._id}`}
                    className='btn btn-accent'
                  >
                    Show More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllReviews;
