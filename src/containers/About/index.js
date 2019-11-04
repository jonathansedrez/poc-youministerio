import React from 'react';

import SEO from '../../components/SEO';
import Navigation from '../../components/Navigation';

const meta = [
  {
    property: `og:title`,
    content: 'You Ministerio | Sobre nós',
  },
  {
    name: `description`,
    content: 'Sobre nós',
  },
  {
    property: `og:description`,
    content: 'Sobre nós',
  },
];

const About = () => (
  <SEO title="Sobre" meta={meta}>
    <Navigation />
    <h1>Sobre</h1>
  </SEO>
);

export default About;
