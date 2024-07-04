



const middleware1 = (req, res, next) => {
    console.log('middleware-1 çalıştı.')
    next()
    // next('route')
}

const middleware2 = (req, res, next) => {
    console.log('middleware-2 çalıştı.')
    next()
}

const middleware3 = (req, res, next) => {
    console.log('middleware-3 çalıştı.')
    next()
}

module.exports = [middleware1, middleware2, middleware3] //* {iddleware1, middleware2, middleware3}