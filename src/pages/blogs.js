import React, { useState } from "react"
import Layout from "../components/Layout"
import { Container, Jumbotron, Main, H1, HeadImage } from "../components"
import blogIcon from "../static/assets/blog.svg"
import Post from "./Post"
import { useStaticQuery, graphql } from "gatsby"
// import { useQueryParam } from "use-query-params";

export default () => {
  const { allBlogs } = useStaticQuery(graphql`
    query allBlogs {
      allBlogs {
        edges {
          node {
            blogs {
              description
              id
              published_at
              tag_list
              title
            }
          }
        }
      }
    }
  `)
  const blogs = allBlogs.edges[0].node.blogs

  const renderMain = () => {
    return blogs.map(e => <Post {...e} />)
  }

  return (
    <Layout>
      <Container>
        <Jumbotron>
          <HeadImage plain src={blogIcon} />
          <H1>My Blogs</H1>
        </Jumbotron>
        <Main>{renderMain()}</Main>
      </Container>
    </Layout>
  )
}
