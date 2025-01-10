import { Carousel, List, Avatar } from 'flowbite-react';
import 'animate.css';
import wukongImage from '../assets/wukong720.png';
import cyberImage from '../assets/cp720.png';
import witcherImage from '../assets/w3720.png';
import gtaImage from '../assets/gta5720.png';
import { FaLongArrowAltRight, FaGamepad } from 'react-icons/fa';
import { FaFireFlameCurved } from 'react-icons/fa6';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import TopRatedReviewCard from '../Components/TopRatedReviewCard';
import { Helmet } from 'react-helmet-async';
import { Typewriter } from 'react-simple-typewriter';
import Marquee from 'react-fast-marquee';

const Home = () => {
  // Aos Effect
  useEffect(() => {
    Aos.init();
  }, []);

  // All review data
  const reviewsData = useLoaderData();

  return (
    <div className='my-5'>
      <Helmet>
        <title>Chill Gamer | Home</title>
      </Helmet>
      <div className='my-10'>
        <h2 className='lg:text-4xl md:text-3xl text-2xl font-semibold text-center text-slate-700 antialiased mb-2'>
          Hey Dare{' '}
          <span className='text-red-600'>
            <Typewriter
              words={['Gamer 😇', 'Fearless 😱', 'Dashing 😉', 'Spirited ✨']}
              loop={5}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          People
        </h2>
        <Marquee
          className='text-xl text-gray-600'
          autoFill={true}
          pauseOnHover={true}
          speed={40}
        >
          <p className=''>Games don&apos;t make you violent, lag does.</p>
          <p className=''>
            I&apos;m not a player. I&apos;m a gamer. Players get chicks. I get
            achievements.
          </p>
          <p className=''>
            Failure doesn&apos;t mean the game is over, it means try again with
            experience.
          </p>
          <p className=''>
            I&apos;m the hero of a thousand stories. I&apos;m a superhero, an
            assassin a soldier. I&apos;ve slain dragons and traveled through
            portals. I am a spartan, a commander. A king. I&apos;ve saved a
            thousand worlds and countless more lives. What am I? I&apos;m a
            gamer.
          </p>
        </Marquee>
      </div>
      {/* Carousel */}
      {/* h-56 sm:h-64 xl:h-80 2xl:h-96 */}
      <div className='lg:h-[35rem] md:h-96 h-48 mb-10'>
        <Carousel slideInterval={3000}>
          {/* 1 */}
          <div className='relative'>
            <img
              className='lg:w-[80rem] lg:h-[50rem] lg:translate-y-28 w-full -z-10'
              src={wukongImage}
              alt='...'
            />
            <div className='absolute inset-0 bg-gradient-to-r from-black pointer-events-none'></div>
            <div className='absolute z-10 lg:top-[40%] lg:left-24 md:top-[35%] md:left-8 top-[20%] left-2 space-y-3'>
              <h2 className='text-white md:text-4xl text-2xl'>
                Black Myth: Wukong
              </h2>
              <p className='text-white lg:w-[80%] md:w-[60%] lg:text-xl md:text-lg text-sm italic antialiased'>
                Black Myth: Wukong is a 2024 action role-playing game developed
                and published by Game Science.
              </p>
              <button className='btn md:btn-md btn-sm btn-error text-white'>
                Buy Now
              </button>
            </div>
          </div>

          {/* 2 */}
          <div className='relative'>
            <img
              className='lg:w-[80rem] lg:h-[50rem] lg:translate-y-28 w-full -z-10'
              src={cyberImage}
              alt='...'
            />
            <div className='absolute inset-0 bg-gradient-to-r from-black pointer-events-none'></div>
            <div className='absolute z-10 lg:top-[40%] lg:left-20 md:top-[35%] md:left-5 top-[15%] left-2 space-y-2'>
              <h2 className='text-white lg:text-4xl text-2xl'>
                Cyberpunk 2077
              </h2>
              <p className='text-white lg:w-[65%] md:w-[50%] lg:text-xl md:text-lg text-sm italic antialiased'>
                Cyberpunk 2077 is a 2020 action role-playing game developed by
                the Polish studio CD Projekt Red, and published by CD Projekt
              </p>
              <button className='btn md:btn-md btn-sm btn-error text-white'>
                Buy Now
              </button>
            </div>
          </div>

          {/* 3 */}
          <div className='relative'>
            <img
              className='lg:w-[80rem] lg:h-[50rem] lg:translate-y-16 w-full -z-10'
              src={witcherImage}
              alt='...'
            />
            <div className='absolute inset-0 bg-gradient-to-r from-black pointer-events-none'></div>
            <div className='absolute z-10 lg:top-[40%] lg:left-20 md:top-[35%] md:left-5 top-[15%] left-2 space-y-2'>
              <h2 className='text-white lg:text-4xl text-2xl'>The Witcher 3</h2>
              <p className='text-white md:w-[70%] lg:text-xl md:text-lg  text-sm italic antialiased'>
                The Witcher 3: Wild Hunt is a 2015 action role-playing game
                developed and published by the Polish studio CD Projekt
              </p>
              <button className='btn md:btn-md btn-sm btn-error text-white'>
                Buy Now
              </button>
            </div>
          </div>

          {/* 4 */}
          <div className='relative'>
            <img
              className='lg:w-[80rem] lg:h-[35rem] w-full -z-10'
              src={gtaImage}
              alt='...'
            />
            <div className='absolute inset-0 bg-gradient-to-r from-black pointer-events-none'></div>
            <div className='absolute z-10 lg:top-[40%] lg:left-16 md:top-[35%] md:left-5 top-[15%] left-2 space-y-2'>
              <h2 className='text-white lg:text-4xl text-2xl'>GTA 5</h2>
              <p className='text-white md:w-[70%] lg:text-xl md:text-lg text-sm italic antialiased'>
                Grand Theft Auto V is a 2013 action-adventure game developed by
                Rockstar North and published by Rockstar Games
              </p>
              <button className='btn md:btn-md btn-sm btn-error text-white'>
                Buy Now
              </button>
            </div>
          </div>
        </Carousel>
      </div>

      {/* Top Rated Game */}
      <h2 className='text-slate-700 font-bold lg:text-4xl text-3xl flex items-center gap-1'>
        <span className='text-green-500'>
          <FaGamepad></FaGamepad>
        </span>
        Top Rated Game
      </h2>
      {/* ======= Card ======= */}
      <div className='my-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center lg:gap-y-10 md:gap-y-10 gap-y-10'>
        {reviewsData?.slice(0, 6).map((reviewdata) => (
          <TopRatedReviewCard
            key={reviewdata?._id}
            reviewdata={reviewdata}
          ></TopRatedReviewCard>
        ))}
      </div>
      <Link className='btn btn-sm md:btn-md btn-accent' to={'/allReview'}>
        View All
      </Link>

      {/* Latest game realase date */}
      <h2 className='my-5 md:text-4xl text-2xl font-bold text-center flex items-center justify-center animate__animated animate__flash animate__slower animate__infinite	infinite'>
        Latest Game Release Date{' '}
        <span className='text-red-600'>
          <FaFireFlameCurved></FaFireFlameCurved>
        </span>
      </h2>

      {/* Extra Section 01 */}
      <div
        className='flex flex-col md:flex-row justify-around'
        data-aos='fade-right'
      >
        {/* Left Side */}
        <div>
          <h2 className='text-2xl mb-2 flex items-center gap-1'>
            Hot Releases{' '}
            <span className='text-3xl'>
              <FaLongArrowAltRight></FaLongArrowAltRight>
            </span>
          </h2>
          <List
            unstyled
            className='max-w-md divide-y divide-gray-200 dark:divide-gray-700'
          >
            {/* 1 */}
            <List.Item className='pb-3 sm:pb-4'>
              <div className='flex items-center space-x-4 rtl:space-x-reverse'>
                <Avatar
                  img='https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/333640/header.jpg?t=1733417759'
                  alt='Caves of Qud'
                  rounded
                  size='md'
                />
                <div className='min-w-0 flex-1'>
                  <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                    Caves of Qud
                  </p>
                </div>
                <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                  5 Dec 2024
                </div>
              </div>
            </List.Item>

            {/* 2 */}
            <List.Item className='pb-3 sm:pb-4'>
              <div className='flex items-center space-x-4 rtl:space-x-reverse'>
                <Avatar
                  img='https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1887400/header.jpg?t=1733388626'
                  alt='Antonblast'
                  rounded
                  size='md'
                />
                <div className='min-w-0 flex-1'>
                  <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                    Antonblast
                  </p>
                </div>
                <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                  3 Dec 2024
                </div>
              </div>
            </List.Item>

            {/* 3 */}
            <List.Item className='pb-3 sm:pb-4'>
              <div className='flex items-center space-x-4 rtl:space-x-reverse'>
                <Avatar
                  img='https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1507580/header.jpg?t=1733346390'
                  alt='Enigma of Fear'
                  rounded
                  size='md'
                />
                <div className='min-w-0 flex-1'>
                  <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                    Enigma of Fear
                  </p>
                </div>
                <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                  29 Nov 2024
                </div>
              </div>
            </List.Item>

            {/* 4 */}
            <List.Item className='pb-3 sm:pb-4'>
              <div className='flex items-center space-x-4 rtl:space-x-reverse'>
                <Avatar
                  img='https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/3151710/header.jpg?t=1733404650'
                  alt='Ace Squared'
                  rounded
                  size='md'
                />
                <div className='min-w-0 flex-1'>
                  <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                    Ace Squared
                  </p>
                </div>
                <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                  01 Dec 2024
                </div>
              </div>
            </List.Item>

            {/* 5 */}
            <List.Item className='pb-3 sm:pb-4'>
              <div className='flex items-center space-x-4 rtl:space-x-reverse'>
                <Avatar
                  img='https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2361450/header.jpg?t=1733335450'
                  alt='Missiles Away'
                  rounded
                  size='md'
                />
                <div className='min-w-0 flex-1'>
                  <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                    Missiles Away
                  </p>
                </div>
                <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                  02 Dec 2024
                </div>
              </div>
            </List.Item>
          </List>
        </div>

        {/* Right Side */}
        <div>
          <h2 className='text-2xl mb-2 flex items-center gap-1'>
            Popular Releases{' '}
            <span className='text-3xl'>
              <FaLongArrowAltRight></FaLongArrowAltRight>
            </span>
          </h2>
          <List
            unstyled
            className='max-w-md divide-y divide-gray-200 dark:divide-gray-700'
          >
            {/* 1 */}
            <List.Item className='pb-3 sm:pb-4'>
              <div className='flex items-center space-x-4 rtl:space-x-reverse'>
                <Avatar
                  img='https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2507950/header.jpg?t=1733420091'
                  alt='Delta Force'
                  rounded
                  size='md'
                />
                <div className='min-w-0 flex-1'>
                  <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                    Delta Force
                  </p>
                </div>
                <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                  1 Dec 2024
                </div>
              </div>
            </List.Item>

            {/* 2 */}
            <List.Item className='pb-3 sm:pb-4'>
              <div className='flex items-center space-x-4 rtl:space-x-reverse'>
                <Avatar
                  img='https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/895400/header.jpg?t=1733420199'
                  alt='Deadside'
                  rounded
                  size='md'
                />
                <div className='min-w-0 flex-1'>
                  <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                    Deadside
                  </p>
                </div>
                <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                  7 Dec 2024
                </div>
              </div>
            </List.Item>

            {/* 3 */}
            <List.Item className='pb-3 sm:pb-4'>
              <div className='flex items-center space-x-4 rtl:space-x-reverse'>
                <Avatar
                  img='https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/3188910/header.jpg?t=1733412864'
                  alt='Waifu'
                  rounded
                  size='md'
                />
                <div className='min-w-0 flex-1'>
                  <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                    Waifu
                  </p>
                </div>
                <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                  27 Nov 2024
                </div>
              </div>
            </List.Item>

            {/* 4 */}
            <List.Item className='pb-3 sm:pb-4'>
              <div className='flex items-center space-x-4 rtl:space-x-reverse'>
                <Avatar
                  img='https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1696810/header.jpg?t=1733421932'
                  alt='RAILROADS Online'
                  rounded
                  size='md'
                />
                <div className='min-w-0 flex-1'>
                  <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                    RAILROADS
                  </p>
                </div>
                <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                  05 Dec 2024
                </div>
              </div>
            </List.Item>

            {/* 5 */}
            <List.Item className='pb-3 sm:pb-4'>
              <div className='flex items-center space-x-4 rtl:space-x-reverse'>
                <Avatar
                  img='https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/555160/header.jpg?t=1733422175'
                  alt='Pavlov VR'
                  rounded
                  size='md'
                />
                <div className='min-w-0 flex-1'>
                  <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                    Pavlov VR
                  </p>
                </div>
                <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                  03 Dec 2024
                </div>
              </div>
            </List.Item>
          </List>
        </div>
      </div>

      {/* Industry Headlines */}
      <h2 className='my-5 text-4xl'>Industry Headlines</h2>
      {/* Extra Section 02 */}
      <div className='p-2 rounded-md space-y-5'>
        {/* Card 1 */}
        <div
          className='flex flex-col lg:flex-row gap-4 border p-3 rounded-md shadow-md'
          data-aos='fade-up'
        >
          {/* Image */}
          <div className='md:basis-[40%] shadow-md rounded-md'>
            <img
              className='w-[80rem] h-[18rem] object-cover rounded-md'
              src='https://img.opencritic.com/article/IfauWqXPhh33BIeSd5JtcSMzERmXEgcxnkbACNYuVFpezEZwGQUWG90Q6tbFF0.jpg'
              alt='image 1'
            />
          </div>
          {/* Description */}
          <div className='md:basis-[60%] flex flex-col justify-between lg:gap-0 gap-2'>
            <h2 className='lg:text-4xl text-2xl text-slate-700 font-bold'>
              Embracer Provides Update on the Sales of Its Games
            </h2>
            <p className='text-gray-500 lg:text-xl'>
              Embracer Group provides insight into how its recently released
              games are faring, sharing which ones hit it big with fans and
              which did not.
            </p>
            <p className='text-gray-500 lg:text-xl'>
              from Game Rant (Written by Carley Garcia) | November 16, 2024
            </p>
            <button className='btn btn-info md:btn-md btn-sm text-white'>
              Read More
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className='flex flex-col lg:flex-row gap-4 border p-3 rounded-md shadow-md'
          data-aos='fade-up'
        >
          {/* Description */}
          <div className='md:basis-[60%] flex flex-col justify-between lg:gap-0 gap-2'>
            <h2 className='lg:text-4xl text-2xl text-slate-700 font-bold'>
              Call of Duty: Black Ops 6 Players Mock New Skin
            </h2>
            <p className='text-gray-500 lg:text-xl'>
              Players are making fun of Call of Duty: Black Ops 6&apos;s new
              Dragon Knight Skin for the Operator Westpoint because of how
              far-fetched it seems.
            </p>
            <p className='text-gray-500 lg:text-xl'>
              from Game Rant (Written by Brett Byll) | November 16, 2024
            </p>
            <button className='btn btn-info md:btn-md btn-sm text-white'>
              Read More
            </button>
          </div>
          {/* Image */}
          <div className='md:basis-[40%] shadow-md rounded-md'>
            <img
              className='w-[80rem] h-[18rem] object-cover rounded-md'
              src='https://img.opencritic.com/article/jv0fLufnfaA6Hmxpbc2yLWyXLTZDdwe6LaBfjLXZP3ZGs4629Jhk3Q5TjwQX3O.jpg'
              alt='image 1'
            />
          </div>
        </div>

        {/* Card 3 */}
        <div
          className='flex flex-col lg:flex-row gap-4 border p-3 rounded-md shadow-md'
          data-aos='fade-up'
        >
          {/* Image */}
          <div className='md:basis-[40%] shadow-md rounded-md'>
            <img
              className='w-[80rem] h-[18rem] object-cover rounded-md'
              src='https://img.opencritic.com/article/5xq5GxuCbRT5p06i8ZzFG7aoizrYbBUIxWn7zYT3m6cBUbhzLiM3oCPFnMznCq.jpg'
              alt='image 1'
            />
          </div>
          {/* Description */}
          <div className='md:basis-[60%] flex flex-col justify-between lg:gap-0 gap-2'>
            <h2 className='lg:text-4xl text-2xl text-slate-700 font-bold'>
              Live-Action Splinter Cell Movie Not Happening, Producer Says |
              TechRaptor
            </h2>
            <p className='text-gray-500 lg:text-xl'>
              A producer on the live-action Splinter Cell movie, which was in
              development for a number of years, has confirmed that the project
              has been canceled.
            </p>
            <p className='text-gray-500 lg:text-xl'>
              from TechRaptor | November 16, 2024
            </p>
            <button className='btn btn-info md:btn-md btn-sm text-white'>
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// 'https://flowbite.com/docs/images/carousel/carousel-1.svg'
// 'https://flowbite.com/docs/images/carousel/carousel-2.svg'
// 'https://flowbite.com/docs/images/carousel/carousel-3.svg'
