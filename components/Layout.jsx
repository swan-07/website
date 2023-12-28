import React from 'react';
import Header from './Header';
import Head from 'next/head';

const Layout = ({ children }) => (
  <>
      <Head>
          <link rel="icon" href="kirby.png" />
          <title>Stephanie's Website</title>
      </Head>
    <Header />
    {children}
  </>
);

export default Layout;