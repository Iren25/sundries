/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar(): JSX.Element {
  return (
    <nav>
     <NavLink to="gift">Gift</NavLink>
     <NavLink to="flowers">Flowers</NavLink>
     <NavLink to="Cake">Cake</NavLink>
     <NavLink to="/">Home</NavLink>
    </nav>
  );
}
