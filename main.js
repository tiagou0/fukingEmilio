async function fetching(endpoint) {
    try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
        const dataJSON = await data.json()
        return dataJSON
    } catch (e) {
        console.log('Error:', e)
    }
}

async function buscarUsuarios(valor, tipoBusqueda) {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const dataJSON = await data.json()

        if (tipoBusqueda === "email") {
            const dataFilteredE = dataJSON.filter(d => d.email === valor)
            console.log(dataFilteredE)
        } else {
            const dataFilteredC = dataJSON.filter(c => c.address.city === valor)
            console.log(dataFilteredC)

        }

    } catch (e) {

    }
}

// buscarUsuarios("Roscoeview", "ciudad")

async function duplicatedMail(valor, tipoBusqueda) {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const dataJSON = await data.json()

        if (tipoBusqueda === "email") {
            const dataDuplicated = dataJSON.findIndex(u => u.email === valor)
            console.log(dataDuplicated)
        } else if (tipoBusqueda === "usuario") {
            const dataDuplicatedU = dataJSON.findIndex(u => u.username === valor)
            console.log(dataDuplicatedU)
        } else {
            console.error("Valor no encontrao")
        }

    } catch (e) {
        throw new error(e)
    }
}

async function getPostByID(userID) {
    try {
        const DATA = await fetch('https://jsonplaceholder.typicode.com/posts')
        const DATAPARSED = await DATA.json()

        const USERID = DATAPARSED.filter(id => id.userId === userID)
        const POSTBYID = USERID.map(body => body.body)

        console.log(POSTBYID)

    } catch (e) {
        console.log(e)
    }
}

//Encontrar si existen usuarios que no tengan ninguna publicación.

async function postsExists(userID) {
    try {
        const DATAPARSED = await DATA.json()

        const USERID = DATAPARSED.filter(id => id.userId === userID)
        const POSTBYID = USERID.map(body => body.body)

        if (POSTBYID.length === 0) {
            console.log("El usuario con ese ID no tiene ningún post")
        } else {
            console.log(POSTBYID)

        }


    } catch (e) {
        console.log(e)
    }
}


async function findKeyWord(keyWord) {
    try {
        const DATA = await fetch('https://jsonplaceholder.typicode.com/posts')
        const DATAPARSED = await DATA.json()

        const _KEYWORD = DATAPARSED.filter(word => word.body.includes(keyWord))

        console.log(_KEYWORD)
    } catch (e) {
        console.error(e)
    }
}

async function usersWithNoPosts(userID) {
    try {
        const DATA = await fetch('https://jsonplaceholder.typicode.com/posts')
        const DATAPARSED = await DATA.json()

        const POSTFILTERED = DATAPARSED.filter(i => i.userId === userID)
        if (POSTFILTERED.length === 0) {
            console.log("Este gato no tiene posts xD")
        } else {
            const newData = POSTFILTERED.map(p => p.body)
            console.log(newData)
        }
    } catch (e) {
        console.error("brr")
    }
}

// Detectar cuál es la proporción de publicaciones por usuario en relación al total de publicaciones (ejemplo: “El usuario X genera el 12% del total de publicaciones”).

// Filtrar los posts de un usuario y los posts totales
// Luego, divido los posts totales por los posts del usuario

async function postsPerUser(userID) {
    try {
        const DATA = await fetch('https://jsonplaceholder.typicode.com/posts')
        const DATAPARSED = await DATA.json()

        const POSTUSERID = DATAPARSED.filter(i => i.userId === userID)
        const BODYUSER = POSTUSERID.map(body => body.body)
        const BODY = DATAPARSED.map(body => body.body)

        const RESULT = (BODYUSER.length / BODY.length) * 100

        console.log(`El porcentaje de posts del usuario ${userID} es de ${RESULT}%`)

    } catch (e) {
        console.log("x")
    }
}


async function mostUsers() {
    try {
        const DATA = await fetch('https://jsonplaceholder.typicode.com/users')
        const USERS = await DATA.json()

        const CONTEO = USERS.reduce((acc, el) => {
            const CITIES = el.address.city
            acc[CITIES] = (acc[CITIES] || 0) + 1
            return acc

        }, {})

        const CIUDADTOP = Object.entries(CONTEO).sort((a, b) => b[1] - a[1])[0]
        CIUDADTOP.sort()
        console.log(CIUDADTOP)


    } catch (error) {
        console.log(error)

    }
}


// Se necesita poder identificar y trabajar con los usuarios registrados en la plataforma. 0,30 puntos

async function getAllUsers() {

    try {
        const DATA = await fetch('https://jsonplaceholder.typicode.com/users')
        const DATAPARSED = await DATA.json()
        return DATAPARSED
    } catch (e) {
        console.log(e)
    }

}
// Se debe poder buscar usuarios según distintos criterios (por ejemplo, correo electrónico o ciudad).

async function getParams(valor, tipoBusqueda) {

    try {
        const DATA = await getAllUsers()

        switch (tipoBusqueda) {
            case "email":
                const EMAIL = DATA.filter(E => E.email === valor)
                console.log(EMAIL)
                break;
            case "ciudad":
                const CITY = DATA.filter(C => C.address.city === valor)
                console.log(CITY)
                break;
            default:
                break;
        }
    } catch (e) {
        console.log(e)
    }
}

// getParams("McKenziehaven", "ciudad")

// La empresa quiere detectar si hay usuarios duplicados en base a su email o nombre de usuario.

async function duplicatedNiggas() {
    try {
        const DATA = await getAllUsers()

        const MAILS = DATA.map(m => m.email)
        const USER = DATA.map(m => m.username)


        const MAILSDUP = new Set(MAILS).size !== MAILS.length
        const USERDUP = new Set(USER).size !== USER.length

        console.log("Mail duplicado, ", MAILSDUP)
        console.log("User duplicado, ", USERDUP)


    } catch (e) {
        console.log(e)
    }
}

// duplicatedNiggas()

// También requieren un análisis que indique qué ciudad tiene más usuarios registrados.

async function masRegistrados() {
    try {
        const DATA = await getAllUsers()

        const REDUCE = DATA.reduce((acc, el) => {
            const CITIES = el.address.city
            acc[CITIES] = (acc[CITIES] || 0) + 1
            return acc
        }, {})


        const CIUDADTOP = Object.entries(REDUCE).sort((a, b) => b[1] - a[1])[0]

        console.log(CIUDADTOP)


    } catch (E) {
        console.log(E)
    }
}

// masRegistrados()


 // en base a una ciudad, decir cuantos usuarios tiene registrados

async function ciudadConUsuarios(ciudad) {
    try {
        const DATA = await getAllUsers()

        const CITY = DATA.filter(c => c.address.city === ciudad)
        CITY.map(u => u.name)
        console.log(CITY)

    } catch (e) {
        console.log(e)
    }
}

ciudadConUsuarios("Gwenborough")