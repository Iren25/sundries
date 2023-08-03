/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { useParams } from 'react-router-dom';
import BookCard from '../BookCard/BookCard';

export default function Books():JSX.Element {
    const books = [
        {
            title: 'Effective Java',
            author: 'Joshua Bloch'
        },
        {
            title: 'JavaScript The good parts',
            author: 'Douglas Crockford'
        },
        {
            title: 'TypeScript Cookbook',
            author: 'Stefan Baumgartner'
        }
    ];

    const { bookId } = useParams();

  return (
    <>
    <div>Books</div>
    <BookCard books={books} index={Number(bookId)} />
    </>
  );
}
