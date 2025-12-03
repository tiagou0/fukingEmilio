import files from "./getAll.js";
const DATA = await files.getAllUsers()

async function searchByParam(valor, tipoBusqueda) {
    try {
        const DATA = await files.getAllUsers()

        switch (tipoBusqueda) {
            case "companyName":

                const COMPANYNAME = DATA.filter(company => company.company.name === valor)
                console.log(COMPANYNAME)
                break;
            case "ciudad":
                const CITYNAME = DATA.filter(city => city.address.city === valor)
                console.log(CITYNAME)
            default:
                break;
        }

    } catch (e) {
        console.log(e)
    }
}

// searchByParam("Romaguera-Crona","companyName")

async function incompleteData() {
    try {
        const DATA = await files.getAllUsers()

        const ADDRESS = DATA.map(add => add.address)
        const adresfil = ADDRESS.filter(ad => {
            return !ad.city || !ad.street || !ad.zipcode
        })

        if (adresfil.length === 0) {
            console.log("Datos completos")
        } else {
            console.log("Datos incompletos")
        }

    } catch (e) {
        console.log(e)
    }
}
// incompleteData()
// 


async function companyWithMostU(){
    try {
        const DATA = await files.getAllUsers()

        const companyREDUCED = DATA.reduce((acc, el) => {
            const companyName = el.company.name
            acc[companyName] = (acc[companyName] || 0) + 1
            return acc
        }, {})

        // Object Entries me permite separar el objeto en un array, entonces puedo obtener la cantidad de compañias con usuarios por separado. Y con el .sort, lo ordeno de menor a mayor 
        const companySorted = Object.entries(companyREDUCED).sort((a,b) => b[1] - a[1])[0]

        console.log(DataSorted)
    } catch (e) {
        
    }
}
// companyWithMostU()