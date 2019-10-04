import React from 'react';

import SEO from '../../components/SEO';
import Navigation from '../../components/Navigation';
import Image from '../../components/Image';
import metaImage from '../../images/meta-image.jpg';

const meta = [
  {
    name: `description`,
    content:
      'Pois foi Deus quem nos fez o que somos agora; em nossa união com Cristo Jesus, ele nos criou para que fizéssemos as boas obras que ele já havia preparado para nós. Efésios 2:10',
  },
  {
    property: `og:title`,
    content: 'You Ministerio | Seu lugar é aqui',
  },
  {
    property: `og:description`,
    content: 'You Ministerio | Seu lugar é aqui',
  },
  {
    property: `og:image`,
    content: metaImage,
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
