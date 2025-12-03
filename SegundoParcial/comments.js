import files from "./getAll.js";

async function rankingTopFive() {
    try {
        const DATA = await files.getAllComments()

        const DATAREDUCED = DATA.reduce((acc, el) => {
            const COMMENTS = el.postId
            acc[COMMENTS] = (acc[COMMENTS] || 0) + 1
            return acc
        }, {})

        const TOPFIVE = Object.entries(DATAREDUCED).sort((a, b) => b[1] - a[1]).slice(0, 5)

        console.log(TOPFIVE)
    } catch (e) {
        console.log(e)
    }
}

// rankingTopFive()




// VER EN PROFUNDIDAD

async function duplicatedMail() {
    try {
        const DATA = await files.getAllComments()

        const DUPLICATED = DATA.filter((comments, index) => {
            return DATA.findIndex(c => c.email === comments.email && comments.body) !== index
        })

        if (DUPLICATED.length === 0) {
            console.log("Datos duplicados")
        } else ("Todo bien pa")

    } catch (e) {
        console.log(e)
    }
}

// duplicatedMail()


async function getWord(word) {
    try {
        const DATA = await files.getAllComments()

        const DATAFILTERED = DATA.filter(c => c.body.includes(word))
        console.log(DATAFILTERED)
    } catch (E) {
        console.log(E)
    }
}
// getWord("dolore")

