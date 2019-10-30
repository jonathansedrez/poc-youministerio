import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import GlobalStyle from '../../styles/globalStyles';
import PropTypes from 'prop-types';

function SEO({ meta, title, children }) {
  const defaultMetaTags = [
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'robots',
      content: 'index, follow',
    },
  ];

  return (
    <Fragment>
      <Helmet meta={meta ? [...defaultMetaTags, ...meta] : defaultMetaTags}>
        <title>{title ? `${title} | You Ministério` : 'You Ministério'}</title>
        <html lang="pt-br" />
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
