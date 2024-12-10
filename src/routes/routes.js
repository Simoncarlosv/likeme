const { Router } = require('express')
const {
    getPosts,
    createPost,
    updatePost,
    deletePost
} = require('../controllers/posts.controller')


const router = Router()

router.get('/posts', getPosts); // Obtener todos los posts
router.post('/posts', createPost); // Crear un post
router.put('/posts/:id', updatePost); // Actualizar un post
router.delete('/posts/:id', deletePost); // Eliminar un post


module.exports = router
