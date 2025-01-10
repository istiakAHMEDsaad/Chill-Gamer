import PropTypes from 'prop-types';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { Link} from 'react-router-dom';


const TopRatedReviewCard = ({ reviewdata }) => {
  const { _id, title, image, rating, genres, year } =
    reviewdata || {};
    // const navigate = useNavigate();
  return (
    <div className=''>
      
      {reviewdata?.length === 0 ? (
        <p>No Data Found on Databse</p>
      ) : (
        <div className='card card-compact bg-base-100 lg:w-96 w-80 shadow-xl transition-all mx-auto'>
          <figure>
            <img src={image} alt={`${title}`} />
          </figure>
          <div className='px-4 py-4'>
            <h2 className='card-title'>{title}</h2>
            <p className='font-bold'>
              Genres:{' '}
              <span className='font-normal text-gray-600'>{genres}</span>
            </p>

            <div className='flex justify-start items-center gap-1'>
              <p className='font-semibold'>Rating:</p>
              <Rating
                initialRating={rating}
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
                {rating}
              </span>
            </div>

            <p className='font-semibold'>
              Release year:{' '}
              <span className='font-normal text-gray-600'>{year}</span>
            </p>

            <div className='card-actions justify-end'>
                {/* <div>
                    <img className='w-8' src='/user.png' alt="user image" />
                    <p>{name}</p>
                </div> */}
              <Link to={`/allReview/${_id}`} className='btn btn-accent'>Show More</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

TopRatedReviewCard.propTypes = {
  reviewdata: PropTypes.object.isRequired,
};

export default TopRatedReviewCard;
