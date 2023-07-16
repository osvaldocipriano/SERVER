const Objectid = require('mongoose').Types.ObjectId

const validateDbId = ( req, res, next) =>{
 if(Objectid.isValid(req.params.id) == false)
    res.status(400).json({
     error:`O id (${+ req.params.id})do objeto fornecido nao e valido.`
 
    })
 else
     next()  
}

const raiseRecord404Error = (req,res) =>{

    res.status(404).json({
        error:'nemhum registro com determinado _id:'+ req.params.id
   
      })

}

const errorHandler = (error,req, res, next) =>{

    res.status(500).json({error})
}

module.exports ={
validateDbId,
raiseRecord404Error,
errorHandler

}