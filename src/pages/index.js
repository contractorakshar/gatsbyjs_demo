import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const HomePage = () => {
  return (
    <>
      <Layout pageTitle="HomePage" pageHeading="Welcome All">
        <h1>Hello Akshar</h1>
        <p>How are you?</p>
        <StaticImage
          alt="Blue background"
          src="../images/images.png"
          layout="fullWidth"
        />
      </Layout>
    </>
  );
};
export default HomePage;
