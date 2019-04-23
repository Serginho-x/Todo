const jwt = require ('jsonwebtoken')

const checkAuth = (request, response, next) => {
    const token = request.headers['authorization']    
    if(!token) {
        console.log('Token is not provided')
        response.status(401).json({ok: false, message: 'Token is not provided'})
    } else {
        jwt.verify(token, 'Vice', (err, decoded) => {
        if(err) {
            console.log('Invalid token')
            response.status(401).json({ok: false, message: 'Invalid token'})
        } else {
            request.userId = decoded.userId
            next()
            }
        })
    }
}

module.exports = checkAuth
