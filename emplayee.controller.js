const  express =  require('express')
const router = express.Router()
const Objectid = require('mongoose').Types.ObjectId

const Emplayee = require('../models/emplayee.model')
const { generateCrudMethods} = require('../services')
const emplayeeCrud = generateCrudMethods(Emplayee)
const { validateDbId } = require('../middlewares');




router.get('/',(req,res, next) =>{
    emplayeeCrud.getAll()
        .then(data => res.send(data))
         .catch(err => next(err))

})
 router.get('/:id',validateDbId,(req,res,next) =>{
   emplayeeCrud.getById(req.params.id)
    
     .then(data => {
      if(data)
           res.send(data)
       else
          raiseRecord404Error(req,res)

       })
       .catch(err => next(err))
})
//  rota de criação de dados
   router.post('/', (req, res, next)=> {
     emplayeeCrud.create(req.body)
      .then(data => res.status(201).json(data))
      .catch(err => next(err))


   })
    //rota de actualização
   router.put('/:id',validateDbId, (req,res)=>{
     emplayeeCrud.update(req.params.id,req.body)
     .then(data => {
      if(data)
           res.send(data)
       else raiseRecord404Error(req,res)

       })
       .catch(err => next(err))

   })
  // rota de eliminar
   router.delete('/:id',validateDbId,(req,res)=>{

      emplayeeCrud.delete(req.params.id,req.body)
     .then(data => {
      if(data)
           res.send(data)
           else raiseRecord404Error(req,res)
      })
       .catch(err => next(err))
   })

    module.exports = router