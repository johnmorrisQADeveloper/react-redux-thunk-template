import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './../App.css'
const Posts = () => {
  const [data, setData] = useState({ hits: [] })

  useEffect(() => {
    async function fetchData() {
      return await axios.get('https://jsonplaceholder.typicode.com/posts')
    }
    fetchData().then((response) => setData({ hits: response.data }))
  }, [])

  return (
    <div>
      {data.hits.map((post, index) => (
        <div className="post" key={index}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Posts
