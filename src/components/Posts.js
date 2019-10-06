import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'

import './../App.css'
const Posts = ({ posts, fetchPosts }) => {
  useEffect(() => {
    fetchPosts()
  }, [])
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index} className="post">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts.items
  }
}


export default connect(mapStateToProps, { fetchPosts })(Posts)
