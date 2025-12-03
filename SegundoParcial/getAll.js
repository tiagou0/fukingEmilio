async function getAllUsers() {
    try {
        const DATA = await fetch('https://jsonplaceholder.typicode.com/users')
        const DATAPARSED = await DATA.json()

        return DATAPARSED
    } catch (e) {
        console.log(e.message)
    }
}
async function getAllAlbums() {
    try {
        const DATA = await fetch('https://jsonplaceholder.typicode.com/albums')
        const DATAPARSED = await DATA.json()

        return DATAPARSED
    } catch (e) {
        console.log(e.message)
    }
}
async function getAllComments() {
    try {
        const DATA = await fetch('https://jsonplaceholder.typicode.com/comments')
        const DATAPARSED = await DATA.json()

        return DATAPARSED
    } catch (e) {
        console.log(e.message)
    }
}

const files = {
    getAllUsers,
    getAllAlbums,
    getAllComments
}

export default files;