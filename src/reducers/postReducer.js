import { FETCH_POSTS, NEW_POST } from './../actions/types'

const initialState = {
  items: [],
  item: {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: payload
      }
    case NEW_POST:
      return {
        ...state,
        items: [payload, ...state.items],
        item: payload
      }
    default:
      return state
  }
}
