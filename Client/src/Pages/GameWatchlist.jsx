import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ContextAPI } from '../Provider/ContextProvider';
import { Helmet } from 'react-helmet-async';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const GameWatchlist = () => {
  const watchListData = useLoaderData();
  const { user } = useContext(ContextAPI);
  

  return (
    <div className='my-10'>
      <Helmet><title>Chill Gamer | Game Watchlist</title></Helmet>
      <Link to={'/'} className='btn btn-sm md:btn-md btn-info text-white mb-4'>
        <span className='text-lg'>
          <FaArrowCircleLeft></FaArrowCircleLeft>
        </span>{' '}
        Go Home
      </Link>

      
      {watchListData?.map((getId, index)=><div key={getId._id}>
        {user?.email === getId?.email ? <>
          <div className='overflow-x-auto mb-5 border-2 border-red-100 rounded-md shadow-md'>
          <table className='table'>
                {/* head */}
                <thead>
                  <tr className='text-base text-slate-600'>
                    <th>#</th>
                    <th>Category</th>
                    <th>Information</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className='hover'>
                    <th>{index + 1}</th>
                    <th>Title</th>
                    <td>{getId?.title}</td>
                  </tr>
                  {/* row 2 */}
                  <tr className='hover'>
                    <th>{index + 2}</th>
                    <th>Genres</th>
                    <td>{getId?.genres}</td>
                  </tr>
                  {/* row 3 */}
                  <tr className='hover'>
                    <th>{index + 3}</th>
                    <th>Rating</th>
                    <td>{getId?.rating}</td>
                  </tr>
                  {/* row 4 */}
                  <tr className='hover'>
                    <th>{index + 4}</th>
                    <th>Release Year</th>
                    <td>{getId?.year}</td>
                  </tr>
                  {/* row 5 */}
                  <tr className='hover'>
                    <th>{index + 4}</th>
                    <th>Posted By</th>
                    <td>{getId?.name}</td>
                  </tr>
                </tbody>
              </table>
          </div>
        </> : <p className='text-3xl text-slate-700 text-center'>{watchListData.length === 0 ? <>To see information add to watchlist</> : '' }</p>}
      </div>)}
    </div>
  );
};

export default GameWatchlist;

/*
<p>User Email: {user?.email}</p>
          <p>Title: {getId?.title}</p>
          <p>Posted Email: {getId?.email}</p>
*/
