import React from 'react';

import SEO from '../../components/SEO';
import Navigation from '../../components/Navigation';
import Image from '../../components/Image';

const Home = () => (
  <SEO description="site muito bom">
    <Navigation />
    <h1>Home</h1>
    <Image />
  </SEO>
);
export default Home;
