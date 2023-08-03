/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';

interface User {
        name: string,
        email: string
}
interface Props {
    users:User[];
    index: number;
}
export default function UserCard({ users, index }:Props) {
    return (
        <>
        <div>UserCard</div>
        <h1>{users[index].name}</h1>
        <h2>{users[index].email}</h2>
        </>
    );
}
