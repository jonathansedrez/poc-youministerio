import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import GlobalStyle from '../../styles/globalStyles';
import PropTypes from 'prop-types';
import Image from '../../images/meta-image.jpg';

function SEO({ meta, title, children }) {
  // const defaultMetaTags = [
  //   {
  //     property: 'og:type',
  //     content: 'website',
  //   },
  //   {
  //     property: 'robots',
  //     content: 'index, follow',
  //   },
  // ];
  console.log(meta);

  return (
    <Fragment>
      <Helmet>
        <title>{title ? `${title} | You Ministério` : 'You Ministério'}</title>
        <html lang="pt-br" />
        <meta name="og:image" content={Image} />
        <meta name="og:type" content="website" />
        <meta name="robots" content="index,follow" />
      </Helmet>
      <GlobalStyle />
      <main>{children}</main>
    </Fragment>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.node.isRequired,
};

export default SEO;
