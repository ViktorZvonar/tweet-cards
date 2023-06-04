import React from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const TweetPage = lazy(() => import('../pages/TweetsPage/TweetsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div
            style={{
              position: 'fixed',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Loader />
          </div>
        }
      >
        <Routes>
          <Route path="/tweet-cards" element={<HomePage />} />
          <Route path="/tweets" element={<TweetPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
