var array = []
async function todos(user) {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')

  const jsonres = await res.json()

  for (let index = 0; index < jsonres.length; index++) {
    const element = jsonres[index]
    if (element.userId == user && element.completed === true) {
      array.push(element)
    }
  }
}

await todos(5)
console.log('El usuario con ID 5 ha completado ' + array.length + ' TODOs')
