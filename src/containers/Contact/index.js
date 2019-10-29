import React from 'react';

import SEO from '../../components/SEO';
import Navigation from '../../components/Navigation';

const meta = [
  {
    property: `og:title`,
    content: 'You Ministerio | Fale conosco',
  },
  {
    name: `description`,
    content: 'Fale conosco',
  },
  {
    property: `og:description`,
    content: 'Fale conosco',
  },
];

const Contact = () => (
  <SEO title="Contato" meta={meta}>
    <Navigation />
    <h1>Contato</h1>
  </SEO>
);

export default Contact;
