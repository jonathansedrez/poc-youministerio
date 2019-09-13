import React from 'react';
import { Link } from '@reach/router';

const Navigation = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/sobre">Sobre</Link>
    <Link to="/contato">Contato</Link>
  </nav>
);

export default Navigation;
