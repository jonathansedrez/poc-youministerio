import React from 'react';

import { Link, Navigation, Wrapper, Logo, Social } from './styles';

const Header = () => (
  <Wrapper>
    <Logo />
    <Navigation>
      <Link to="/">Home</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/sobre">Ministerios</Link>
      <Link to="/contato">Encontre-nos</Link>
    </Navigation>
    <Social>
      <p>icons</p>
    </Social>
  </Wrapper>
);

export default Header;
