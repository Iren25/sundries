/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Gift from './Gift/Gift';
import Flowers from './Flowers/Flowers';
import Cake from './Cake/Cake';
import Layout from './Layout/Layout';
import HomePage from './HomePage/HomePage';
import Users from './components/Users/Users';
import Books from './components/Books/Books';

function App(): JSX.Element {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="gift" element={<Gift />} />
        <Route path="flowers" element={<Flowers />} />
        <Route path="cake" element={<Cake />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:userId" element={<Users />} />
        <Route path="books" element={<Books />} />
        <Route path="books/:bookId" element={<Books />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
