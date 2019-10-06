import React, { useState } from 'react'
import axios from 'axios'

const Postform = () => {
  const [title, setTitle] = useState('')

  const [body, setBody] = useState('')

  const titleChangeTextBox = (event) => {
    setTitle(event.target.value)
  }

  const bodyChangeTextBox = (event) => {
    setBody(event.target.value)
  }

  const onFormSubmitButton = (event) => {
    event.preventDefault()
    const post = {
      title,
      body
    }
    async function fetchData() {
      return await axios({
        headers: {'content-type': 'application/json'},
        method: 'post',
        data: JSON.stringify(post),
        url: 'https://jsonplaceholder.typicode.com/posts'})
    }
    fetchData().then((res) => console.log(res.data))
    
  }
  return (
    <div>
      <h1>Add Post</h1>
      <form onSubmit={onFormSubmitButton}>
        <div>
          <label>Title: </label><br />
          <input onChange={titleChangeTextBox} type="text" value={title} />
        </div>
        <div>
          <label>Body: </label><br />
          <textarea onChange={bodyChangeTextBox} name="body" value={body} />
        </div>
        <br />
        <button onClick={onFormSubmitButton}  type="button">Submit</button>
      </form>
    </div>
  )
}

export default Postform
