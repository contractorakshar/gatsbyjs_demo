import * as React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
const BlogPage = ({ data }) => {
  // console.log(data);
  return (
    <>
      <Layout pageTitle="BlogPage" pageHeading="Welcome to blog page">
        <ul>
          {data.allFile.nodes.map((node) => {
            return <li key={node.id}>{node.name}</li>;
          })}
        </ul>
      </Layout>
    </>
  );
};
export const query = graphql`
  query MyQueryBlog {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
        id
      }
    }
  }
`;

export default BlogPage;
