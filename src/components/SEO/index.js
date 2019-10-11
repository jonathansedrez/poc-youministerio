import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import metaImage from '../../images/meta-image.jpg';

function SEO({ meta, title, children }) {
  return (
    <Fragment>
      <Helmet meta={meta}>
        <title>{title ? `${title} | You Ministério` : 'You Ministério'}</title>
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
