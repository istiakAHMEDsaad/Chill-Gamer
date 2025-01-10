import { createBrowserRouter } from 'react-router-dom';
import TopRatedReviewCardDetails from '../Components/TopRatedReviewCardDetails';
import MainLayout from '../Layout/MainLayout';
import AddReviews from '../Pages/AddReviews';
import AllReviews from '../Pages/AllReviews';
import GameWatchlist from '../Pages/GameWatchlist';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import MyReviews from '../Pages/MyReviews';
import SignUp from '../Pages/SignUp';
import UpdateReviews from '../Pages/UpdateReviews';
import ErrorPage from './error-page';
import PrivateRoutes from './PrivateRoutes';
// import ForgetPassword from '../Pages/ForgetPassword';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () =>
          fetch('https://chill-gamer-server-henna.vercel.app/addReview'),
      },
      {
        path: '/allReview',
        element: <AllReviews></AllReviews>,
      },
      {
        path: `/allReview/:_id`,
        element: <TopRatedReviewCardDetails></TopRatedReviewCardDetails>,
      },
      {
        path: '/addReview',
        element: (
          <PrivateRoutes>
            <AddReviews></AddReviews>
          </PrivateRoutes>
        ),
      },
      {
        path: `/addReview/update/:_id`,
        element: (
          <PrivateRoutes>
            <UpdateReviews></UpdateReviews>
          </PrivateRoutes>
        ),
      },
      {
        path: '/myReviews',
        element: (
          <PrivateRoutes>
            <MyReviews></MyReviews>
          </PrivateRoutes>
        ),
      },
      {
        path: '/myWatchlist',
        element: (
          <PrivateRoutes>
            <GameWatchlist></GameWatchlist>
          </PrivateRoutes>
        ),
        loader: () =>
          fetch('https://chill-gamer-server-henna.vercel.app/myWatchlist'),
      },
    ],
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>,
  },
  /* {
    path: '/forget-password',
    element: <ForgetPassword></ForgetPassword>,
  } */
]);

export default router;
