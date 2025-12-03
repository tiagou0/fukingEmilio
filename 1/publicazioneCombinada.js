async function getAllUsers() {

    try {
        const DATA = await fetch('https://jsonplaceholder.typicode.com/users')
        const DATAPARSED = await DATA.json()
        return DATAPARSED
    } catch (e) {
        console.log(e)
    }

}
async function getAllPosts() {

    try {
        const DATA = await fetch('https://jsonplaceholder.typicode.com/posts')
        const DATAPARSED = await DATA.json()
        return DATAPARSED
    } catch (e) {
        console.log(e)
    }

}



async function UserWithNoPosts() {
    const [USER, POST] = await Promise.all([
        getAllUsers(),
        getAllPosts()
    ])

    const USERSWITHPOSTS = [
        ...new Set(POST.map(p => p.userId))
        // ... => Convierte a Array
        // new Set lo que hace es tomar ÚNICAMENTE los valores únicos
        // map, filtra por el userID
    ]

    // Creo constante donde, filtro el usuario que no está en esa lista
    const USERSWITHOUTPOSTS = USER.filter(u => !USERSWITHPOSTS.includes(u.id))


    console.log(USERSWITHOUTPOSTS)
}

UserWithNoPosts()