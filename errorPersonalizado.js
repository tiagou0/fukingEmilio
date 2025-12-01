class errorWeb extends Error {
    constructor(message = "Error Web") {
        super(message)
    }
}

throw new errorWeb("El error fue causado por un problema en la web")