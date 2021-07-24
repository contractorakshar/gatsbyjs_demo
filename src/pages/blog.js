import * as React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
const BlogPage = ({ data }) => {
  console.log(data);
  return (
    <>
      <Layout pageTitle="BlogPage" pageHeading="Welcome to blog page">
        <article>
          {data.allMdx.nodes.map((node) => {
            return (
              <article key={node.id}>
                <MDXRenderer>{node.body}</MDXRenderer>
              </article>
            );
          })}
        </article>
      </Layout>
    </>
  );
};
export const query = graphql`
  query MyQueryBlog {
    allMdx(sort: { fields: rawBody }) {
      nodes {
        id
        body
      }
    }
  }
`;

export default BlogPage;
