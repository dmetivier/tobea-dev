import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import { emojis } from '../../config/emojis';
import { Layout, Article, Bio } from '../components';

const IndexPage = ({
  data: {
    allMdx: { edges: postEdges },
  },
  location,
}) => (
  <Layout location={location}>
    <Helmet>
      <meta name='msvalidate.01' content='E7365830AB078887835AC6CE8171F0BD' />
    </Helmet>

    <main>
      <Bio />
      <div>
        <h2 style={{ textAlign: 'center' }}>Latest Posts</h2>
        {postEdges.map((post, i) => {
          const { frontmatter, excerpt, timeToRead, fields } = post.node;
          const { title, date, categories } = frontmatter;
          const { slug } = fields;

          const reverseEmojiOrder = index => postEdges.length - 1 - index;

          return (
            <Article
              key={slug}
              title={title}
              date={date}
              excerpt={excerpt}
              timeToRead={timeToRead}
              emoji={emojis[reverseEmojiOrder(i)]}
              categories={categories}
              slug={slug}
            />
          );
        })}
      </div>
    </main>
  </Layout>
);

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export const IndexQuery = graphql`
  query IndexQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            categories
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`;
