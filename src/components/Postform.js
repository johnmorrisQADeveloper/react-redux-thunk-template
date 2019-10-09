import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../actions/postActions'

const Postform = ({createPost}) => {
  const [title, setTitle] = useState('')
  
  const [body, setBody] = useState('')

  const titleChangeTextBox = (event) => {
    setTitle(event.target.value)
  }

  const bodyChangeTextBox = (event) => {
    setBody(event.target.value)
  }

  const onFormSubmitButton =  (event) => {

    event.preventDefault()
    const post = {
      title,
      body
    }
     createPost(post)
  }
  return (
    <div>
      <h1>Add Post</h1>
      <form>
        <div>
          <label>Title: </label><br />
          <input onChange={titleChangeTextBox} type="text" value={title} />
        </div>
        <div>
          <label>Body: </label><br />
          <textarea onChange={bodyChangeTextBox} name="body" value={body} />
        </div>
        <br />
        <button onClick={onFormSubmitButton} type="button">Submit</button>
      </form>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    item: state.item
  }
}

export default connect(mapStateToProps, { createPost })(Postform)
