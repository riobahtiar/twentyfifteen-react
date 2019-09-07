import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Helmet from 'react-helmet'


class Home extends Component {
  render() {
    const data = this.props.data

    return (
      <main>
        <Helmet
          bodyAttributes={{
              class: 'home blog'
          }}
        />
        <h1>About the Author</h1>

        {data.allWordpressPost.edges.map(({ node }) => (
            <div key={node.slug}>
              <Link to={node.slug} css={{ textDecoration: `none` }}>
                <h3>{node.title}</h3>
              </Link>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
        ))}

        </main>
    )
  }
}



export default Home

// Set here the ID of the home page.
export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }`