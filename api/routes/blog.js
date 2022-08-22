const express = require('express');
const router = express.Router();

const sequelize = require('../../models/index').sequelize;
var initModels = require('../../models/init-models');
var models = initModels(sequelize);

/*  Método Get   */ 
router.get('/',(req,res,next)=>{
    models.posts.findAll({
        attributes: {exclude: ['updateAt']}
    }).then(publication =>{
        res.send(publication)
    }).catch(error => res.status(400).send(error))
})


router.get('/:idPublication', (req, res, next) => {
    models.posts.findOne({
      where:{id: req.params.idPublication},
      attributes: { exclude: ["updatedAt"] }
     })
     .then(publication => {
        res.send(publication)
     })
     .catch(error => res.status(400).send(error))
  });

/*  Método Post   */ 
router.post('/',function(req,res,next){
    models.posts.create({
        id: req.body.id,
        name: req.body.name,
        date: req.body.date,
        publication: req.body.publication,
    }).then(function(publication){
        res.json(publication)
    });
});


/*  Método Put   */ 
router.put('/', (req, res, next) => {
    models.posts.findByPk(req.body.id).then(function(publication){
      publication.update({
        id: req.body.id,
        name: req.body.name,
        date: req.body.date,
        publication: req.body.publication,
      }).then((publication) => {
          res.json(publication);
      });
    });
  });


/*  Método delete */



module.exports = router;