const jwt = require('jsonwebtoken')
function auth(req, res, next){
    const token = req.headers["token"];
    console.log(token)
    if(!token){
        res.status(500).json({err:"Token is not found"})
    }
    try{
        const data = jwt.verify(token,process.env.SECRET_KEY)
        req.user=data
        next();
    }
    catch(err){
        res.status(500).json({err:err})
    }
    
}
module.exports = auth