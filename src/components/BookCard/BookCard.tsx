/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';

interface Book {
    title: string;
    author: string
}
interface Props {
    books: Book[];
    index: number;
}

export default function BookCard({ books, index }: Props) {
  return (
    <>
    <div>BookCard</div>
    <h1>{books[index].title}</h1>
    <p>{books[index].author}</p>
    </>
  );
}
