import React, { useEffect } from 'react';

import SEO from '../../components/SEO';
import Navigation from '../../components/Navigation';
import Image from '../../components/Image';
import Map from '../../components/Map';
import metaImage from '../../images/meta-image.jpg';

import { Wrapper, Title, Paragraph } from './styles';

const meta = [
  {
    property: `og:title`,
    content: 'You Ministerio | Seu lugar é aqui!',
  },
  {
    name: `description`,
    content:
      'Pois foi Deus quem nos fez o que somos agora; em nossa união com Cristo Jesus, ele nos criou para que fizéssemos as boas obras que ele já havia preparado para nós. Efésios 2:10',
  },
  {
    property: `og:description`,
    content:
      'Pois foi Deus quem nos fez o que somos agora; em nossa união com Cristo Jesus, ele nos criou para que fizéssemos as boas obras que ele já havia preparado para nós. Efésios 2:10',
  },
  {
    property: `og:image`,
    content: `${process.env.GATSBY_URL}${metaImage}`,
  },
];

const Home = () => {
  useEffect(() => {
    console.log(process.env.GATSBY_URL);
  });

  return (
    <SEO meta={meta}>
      <Navigation />
      <Title>Gotham Rounded</Title>
      <Wrapper>
        <Paragraph>Gotham Rounded</Paragraph>
        <Paragraph>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </Paragraph>
      </Wrapper>
      <Map />
      <Image />
    </SEO>
  );
};
export default Home;
