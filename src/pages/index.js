import React from 'react';

import SEO from '../components/SEO';
import Image from '../components/image';

const IndexPage = () => (
  <SEO description="site muito bom">
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </SEO>
);

export default IndexPage;
