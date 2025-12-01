async function getAllPosts() {
    try {
        const DATA = await fetch('https://jsonplaceholder.typicode.com/posts')
        const DATAPARSED = await DATA.json()
        return DATAPARSED
    } catch (E) {
        console.log(E)
    }
}


// // La empresa quiere detectar qué usuarios publican más contenido y obtener un ranking con los primeros 5.
// async function getPostsUsers() {
//     try {
//         const DATA = getAllPosts()

//         const REDUCE = DATA.reduce((acc, el) => {

//         })


//     } catch (e) {

//     }
// }

// También necesitan una función que encuentre todas las publicaciones que contengan una determinada palabra clave en el título o en el contenido.

async function getKeyWord(keyWord, tipoBusqueda) {
    try {
        const DATA = await getAllPosts()
        switch (tipoBusqueda) {
            case "titulo":
                const TITLE = DATA.filter(t => t.title.includes(keyWord))
                console.log(TITLE)
                break;
            case "contenido":
                const CONTENT = DATA.filter(c => c.body.includes(keyWord))
                console.log(CONTENT)
            default:
                break;
        }
    } catch (E) {
        console.log(E)
    }
}

// getKeyWord("saepe", "contenido")


// En base al ID de un usuario, traeme todos sus posts

async function ciudadConUsuarios(id) {
    try {
        const DATA = await getAllPosts()

        const POSTS = DATA.filter(c => c.userId === id)

        const TITLES = POSTS.map(t => t.title)
        console.log(TITLES)

    } catch (e) {
        console.log(e)
    }
}

ciudadConUsuarios(2)
