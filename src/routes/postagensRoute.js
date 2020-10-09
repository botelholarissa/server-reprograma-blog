const express = require('express');
const router = express.Router();
const controller = require('../controllers/postagensController')

//@route GET postagens
//@desc Retorna todas as postagens cadastradas
//@access Public
//@endpoint http://localhost:PORT/posts
 
router.get('/posts', controller.getAllPosts)

//@route POST postagens
//@params body
//@desc Cria uma nova postagem 
//@access Public
//@endpoint http://localhost:PORT/posts

router.post('/posts', controller.creatPost)

//@route DELETE postagens
//@params :id
//@desc Deleta uma postagem utilizando o id
//@access Public
//@endpoint http://localhost:PORT/posts/:id

router.delete('/posts/:id', controller.deleteById)

module.exports = router