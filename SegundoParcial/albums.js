import files from "./getAll.js";


async function getAllAlbums() {
    try {
        const DATA = await files.getAllAlbums()
        console.log(DATA)
    } catch (E) {

    }
}

async function moreAlbums() {
    try {
        const DATA = await files.getAllAlbums()
        const DATAREDUCED = DATA.reduce((acc, el) => {
            const UID = el.userId
            acc[UID] = (acc[UID] || 0) + 1
            return acc
        }, {})

        const ALBUMSORT = Object.entries(DATAREDUCED).sort((a, b) => b[1] - a[1])[0]
        console.log(ALBUMSORT)
    } catch (E) {
        console.log(E)
    }
}

// moreAlbums()


// Quiero traer el ID de un usuario y quiero traer la cantidad de álbums totales
async function albumsPerUser(userID) {
    try {
        const DATA = await files.getAllAlbums()

        const UID = DATA.filter(uid => uid.userId === userID)
        const AVG = (DATA.length / UID.length)

        console.log(AVG)
    } catch (E) {
        console.log(E)
    }
}
albumsPerUser(4)




