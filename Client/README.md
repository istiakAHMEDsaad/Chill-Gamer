
# Chill Gamer

If a perfect place would exist where you can find every latest game news game reviews, This application for you! 

![Chill Gamer Application Screenshot](/chill_Gamer.PNG)

## Live Deploy Link
[Chill Gamer](https://assignment-10-firebase-mongodb.web.app/)
deploy on firebase


## Key Features

* This is a M.E.R.N Project
* Account Create & Login.
* User can see all reviews posted by others.
* User can review their favourite games.
* User can add wishlist their favourite games.
* Post creator can edit & delete their data.
* User can see only his reviews data other's can't see his/her data
* Beautiful website with dark theme


## Technology
[React Router + Vite]()<br />
[TailwindCSS]()<br />
[Flowbite React](https://flowbite-react.com/docs/getting-started/quickstart)<br />
[Daisyui]()<br />
[Firebase]()<br />
[Prop Types](https://www.npmjs.com/package/prop-types)<br />
[React Helmet Async](https://www.npmjs.com/package/react-helmet-async)<br />
[React Iconst](https://react-icons.github.io/react-icons/)<br />
[React Toastify](https://react-icons.github.io/react-icons/)<br />
[Animate Style](https://animate.style/)<br />
[React Fast Marquee](https://www.react-fast-marquee.com/)<br />
[Sweetalert 2](https://sweetalert2.github.io/#download)<br />
[React Awesome Reveal](https://www.npmjs.com/package/react-awesome-reveal)<br />
[React Simple Typewriter](https://www.npmjs.com/package/react-simple-typewriter)<br />
[React Fast Marquee](https://www.react-fast-marquee.com/documentation)<br />


## API Reference
#### All reviews data

```http
  GET http://localhost:3000/addReview
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `addReview` | `array` | get all reviews data |

#### Single reviews data

```http
  GET http://localhost:3000/addReview/${_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `number` | get single review data |


#### All watchlist data

```http
  GET http://localhost:3000/myWatchlist
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `myWatchlist` | `array` | get all watchlist data |


#### Single watchlist data by email

```http
  GET http://localhost:3000/addReview/email/${email}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | get single watchlist data |