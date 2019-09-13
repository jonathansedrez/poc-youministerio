import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

function SEO({ description, meta, title, children }) {
  return (
    <Fragment>
      <Helmet>
        <title>{title ? `${title} | You Ministério` : `You Ministério`}</title>
      </Helmet>
      <main>{children}</main>
    </Fragment>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  meta: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node.isRequired,
};

export default SEO;
