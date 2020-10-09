const postagens = require('../models/postagens')
const helper = require('../helpers/postagensHelper')

const getAllPosts = (request, response) => {
    response.status(200).json(postagens)
}

const creatPost = (request, response) => {
    let { title, content, tags } = request.body;

    let newPost = {
        id: helper.getId(postagens),
        createDate: new Date().toString(),
        title: title,
        content: content,
        tags: tags
    }

    postagens.push(newPost)
    response.status(201).json(postagens)
}

const deleteById = (request, response) => {
    const { id } = request.params;

    let filteredPosts = postagens.filter(item => item.id == id)[0]

    const index = postagens.indexOf(filteredPosts)

    postagens.splice(index, 1)

    response.json(postagens)
    //response.status(200).json({message : `O post referente ao id ${id} foi excluido.`})
}

module.exports = {
    getAllPosts,
    creatPost, 
    deleteById
}