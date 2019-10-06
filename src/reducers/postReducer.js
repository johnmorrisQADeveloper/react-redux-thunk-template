import { FETCH_POSTS, NEW_POST } from './../actions/types'

const initialState = {
  items: [],
  item: {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS:
      console.log('I am being called');
      return {
        ...state,
        items: payload
      }
    case NEW_POST:
      return { ...state, 
        ...payload }
    default:
      return state
  }
}
