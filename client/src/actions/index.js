export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(requestingData())

    setTimeout(() => {
      fetch('/api/todos')
      .then(response => response.json())
      .then(todos => dispatch(recieveTodos(todos)))
      .catch(err => console.log(err))
    }, 5000)
  }
}

const recieveTodos = (todos) => ({
  type: 'RECIEVE_TODOS',
  todos
})

const requestingData = () => ({
  type: 'REQUESTING_DATA'
})
