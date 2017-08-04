const initialState = {
  data: [],
  loading: false
}

const todos = (state = initialState, action) => {
  switch(action.type) {
    case 'RECIEVE_TODOS':
      return {
        ...state,
        data: action.todos,
        loading: false
      }

    case 'REQUESTING_DATA':
      return {
        ...state,
        loading: true
      }

    default:
      return state
  }
}

export default todos
