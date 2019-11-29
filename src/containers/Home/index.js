import React, { useEffect } from 'react';

import SEO from '../../components/SEO';
import Navigation from '../../components/Navigation';
import Map from '../../components/Map';
import metaImage from '../../images/meta-image.jpg';
import Image from '../../components/Image';
import graph from '../../images/1.svg';
import web from '../../images/2.svg';
import mobile from '../../images/3.svg';

import {
  Wrapper,
  InnerWrapper,
  Title,
  SubTitle,
  Img,
  Presentation,
  InnerPresentation,
  H5,
  H4,
  Box,
  Paragraph,
} from './styles';

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
      <Wrapper>
        <Img>
          <Image />
        </Img>
        <InnerWrapper>
          <Title>Seu lugar é aqui!</Title>
          <SubTitle>You Ministerio</SubTitle>
        </InnerWrapper>
      </Wrapper>
      <Presentation>
        <H5>SERVICE PROVIDED</H5>
        <Title secondary>
          Build brands campaigns <br />& digital projects
        </Title>
        <InnerPresentation>
          <Box>
            <img src={graph} />
            <H4>Graphic design</H4>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor.
            </Paragraph>
          </Box>
          <Box>
            <img src={mobile} />
            <H4>Mobile app</H4>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor.
            </Paragraph>
          </Box>
          <Box>
            <img src={web} />
            <H4>Web design</H4>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor.
            </Paragraph>
          </Box>
        </InnerPresentation>
      </Presentation>
      {/* <Map /> */}
    </SEO>
  );
};
export default Home;
