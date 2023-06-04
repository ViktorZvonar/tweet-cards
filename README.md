# TweetCards

TweetCards is a React-based application that serves as a simple clone of the
popular social media dashboard, TweetDeck. The application is a single-page app
using React Router for routing, Suspense for lazy loading, and some other modern
React features.

## Features

- Display a list of tweets
- Display tweet details such as tweet count, followers count, user avatar
- Follow/Unfollow functionality

## Project Structure

The project is structured in the following way:

- `App.js`: This is the main component of the application. It handles the
  routing of the application and the fallback UI during lazy loading.
- `pages`: This directory contains all the pages of the application which
  includes:
  - `HomePage`
  - `TweetsPage`
  - `NotFoundPage`
- `components`: This directory contains all the components used across the
  application, such as:
  - `Loader`
  - `TweetItem`
  - `TweetButton`
- `shared`: This directory contains shared utilities and services like the API
  for updating followers.

## Contributing

If you wish to contribute to this project, you can fork the repository and
submit a pull request. Please make sure your code follows the existing style of
the codebase.

## Contact

For any issues, you can raise an issue in the repository or contact the
maintainer: viktorzvonar@yahoo.com
