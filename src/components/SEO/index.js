import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

function SEO({ meta, title, children }) {
  return (
    <Fragment>
      <Helmet meta={meta}>
        <title>{title ? `${title} | You Ministério` : `You Ministério`}</title>
        <html lang="pt-br" />
      </Helmet>
      <main>{children}</main>
    </Fragment>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node.isRequired,
};

export default SEO;
