function recordameMiddleware(req, res, next) {

    

    if ((req.cookies.recordame) && (req.session.color == undefined)) {

        req.session.color = req.cookies.recordame;
    }
    next();
    
}

module.exports = recordameMiddleware;