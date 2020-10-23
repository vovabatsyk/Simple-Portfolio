import React from 'react'
import axios from 'axios'
import { BaseLayout } from '../components/layouts/BaseLayout'
import { withRouter } from 'next/router'

class PortfolioItem extends React.Component {
  static async getInitialProps({ query }) {
    let post = {}
    try {
      const res = await axios.get(
        `http://jsonplaceholder.typicode.com/posts/${query.id}`
      )
      post = res.data
    } catch (error) {
      console.error(error)
    }
    return { post }
  }

  render() {
    const { post } = this.props
    return (
      <BaseLayout>
        <h1>{post.id}. {post.title}</h1>
        <p>{post.body}</p>
      </BaseLayout>
    )
  }
}

export default withRouter(PortfolioItem)
