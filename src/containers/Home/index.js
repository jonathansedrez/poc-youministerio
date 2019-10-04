import React from 'react';

import SEO from '../../components/SEO';
import Navigation from '../../components/Navigation';
import Image from '../../components/Image';

const meta = [
  {
    name: `description`,
    content: 'aushiuhsduiahsuidhsuih',
  },
  {
    property: `og:title`,
    content: 'title show',
  },
  {
    property: `og:description`,
    content: 'descrição og',
  },
  {
    property: `og:type`,
    content: `website`,
  },
];

const Home = () => (
  <SEO meta={meta}>
    <Navigation />
    <h1>Home</h1>
    <Image />
  </SEO>
);
export default Home;
