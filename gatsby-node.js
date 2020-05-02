/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allContentfulBlogPost {
        nodes {
          slug
          categories {
            id
          }
          node_locale
          id
          contentful_id
          locales
        }
      }
    }
  `)

  data.allContentfulBlogPost.nodes
    .filter(post => !!post.slug)
    .forEach(post => {
      actions.createPage({
        path: `/${post.slug}/`,
        component: require.resolve(`./src/templates/blog-post.js`),
        context: { slug: post.slug },
      })
    })
}
