import React from 'react'
import { graphql } from 'gatsby'

export default () => <h1>Hello world</h1>

export const query = graphql`
  query BlogPost($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      heroImage {
        fluid(maxWidth: 1200) {
          ...GatsbyContentfulFluid_withWebp
        }
        file {
          url
        }
      }
      title
      excerpt {
        excerpt
      }
      categories {
        name
        slug
      }
      publishDate
      body {
        json
      }
      author {
        name
        slug
        headline
        bio {
          bio
        }
        image {
          fluid(maxWidth: 64) {
            ...GatsbyContentfulFluid_withWebp
          }
          file {
            url
          }
        }
      }
      metaDescription {
        metaDescription
      }
      metaKeywords
    }
  }
`
