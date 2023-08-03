/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import UserCard from '../UserCard/UserCard';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Users() {
    const users = [
    {
        name: 'User 1',
        email: 'email 1'
    },
    {
        name: 'User 2',
        email: 'email 2'
    },
    {
        name: 'User 3',
        email: 'email 3'
    },
    {
        name: 'User 4',
        email: 'email 4'
    },
    ];

    const { userId } = useParams();
    if (Number(userId) >= users.length) {
        return <Navigate to="/" />;
    }

  return (
    <>
    <div>Users</div>
    <UserCard users={users} index={Number(userId)} />
    </>
  );
}
