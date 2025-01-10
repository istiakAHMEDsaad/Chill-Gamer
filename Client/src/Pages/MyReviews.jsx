import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaArrowCircleLeft, FaPen, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Slide, toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { ContextAPI } from '../Provider/ContextProvider';

const MyReviews = () => {
  const { user } = useContext(ContextAPI);
  const [emailData, setEmailData] = useState([]);
  // console.log(remainingReview)

  useEffect(() => {
    fetch(
      `https://chill-gamer-server-henna.vercel.app/addReview/email/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setEmailData(data))
      .catch((err) => console.error(err));
  }, [user]);

  const handleReviewDelete = (_id) => {
    // console.log(`Deleted id: ${_id}`);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://chill-gamer-server-henna.vercel.app/addReview/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(`data: ${data}, count: ${data.deletedCount}`);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
            }
            const remaining = emailData.filter((conf) => conf._id !== _id);
            setEmailData(remaining);
          })
          .catch((err) => {
            // console.error(err);
            if (err) {
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
            }
          });
      }
    });
  };

  return (
    <div className='my-10'>
      <Helmet>
        <title>Chill Gamer | My Reviews</title>
      </Helmet>
      <Link to={'/'} className='btn btn-sm md:btn-md btn-info text-white mb-4'>
        <span className='text-lg'>
          <FaArrowCircleLeft></FaArrowCircleLeft>
        </span>{' '}
        Go Home
      </Link>
      {user ? (
        <>
          <div className='mb-10 bg-gray-50'>
            <div className='overflow-x-auto container mx-auto'>
              <table className='table w-full'>
                {/* Table Head */}
                <thead>
                  <tr className='text-base text-slate-600'>
                    <th>#</th>
                    <th>Title</th>
                    <th>Genres</th>
                    <th>Rating</th>
                    <th>Published Year</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {/* Table Head */}
                <tbody>
                  {emailData?.map((sid, idx) => (
                    <tr key={sid._id}>
                      <th>{idx + 1}</th>
                      <td>{sid.title}</td>
                      <td>{sid.genres}</td>
                      <td>{sid.rating}</td>
                      <td>{sid.year}</td>
                      <td className='flex gap-2'>
                        <Link
                          to={`/addReview/update/${sid?._id}`}
                          className='btn btn-sm btn-info '
                        >
                          <FaPen></FaPen>
                        </Link>
                        <button
                          onClick={() => handleReviewDelete(sid?._id)}
                          className='btn btn-sm btn-info '
                        >
                          <FaTrash></FaTrash>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <div>
          <p className='text-3xl text-gray-500 text-center'>
            To edit data login with your author email
          </p>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
