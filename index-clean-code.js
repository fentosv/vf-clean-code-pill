const handleError = (error) => {
  console.log(error)
  // post api
}

const getTodos = async () => {
  const URL = 'https://jsonplaceholder.typicode.com/todos'
  try {
    const response = await fetch(URL)
    const totalTodos = await response.json()
    return totalTodos
  } catch (error) {
    handleError(error)
  }
}

const getCompletedTodosFromUser = async (user) => {
  const totalTodos = await getTodos()
  const filteredTodos = totalTodos.filter(({ userId, completed }) => completed && userId === user)
  return filteredTodos
}

const USER_ID = 5

const totalCompletedTodosFromUser = await getCompletedTodosFromUser(USER_ID)
console.log(`El usuario con ID 5 ha completado ${totalCompletedTodosFromUser.length} TODOs`)
