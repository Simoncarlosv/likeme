const { crearPost, obtenerPosts, actualizarPost, eliminarPost } = require('../models/Post');

//los controladores ahora seran con ASYNC porque nos debemos cominicar con la base de datos


// Obtener todos los posts
const getPosts = async (req, res, next) => {
    try {
        const posts = await obtenerPosts();
        res.json(posts);
    } catch (error) {
        //console.error(error);
        //res.status(500).json({ error: 'Error al obtener los posts' });
        next(error)
    }
};

// Crear un nuevo post / los controladores ahora seran con ASYNC porque nos debemos cominicar con la base de datos
const createPost = async (req, res, next) => {
    try {
        const { titulo, url, descripcion } = req.body;
        const likes = 0; // Valor inicial de likes
        const nuevoPost = await crearPost(titulo, url, descripcion, likes);
        res.status(201).json({ message: 'Post creado con éxito', post: nuevoPost.rows[0] });
    } catch (error) {
        //console.error(error);
        //res.status(500).json({ error: 'Error al crear el post' });
        next(error)
    }
};

// Actualizar un post
const updatePost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { titulo, url, descripcion } = req.body;
        const postActualizado = await actualizarPost(id, titulo, url, descripcion);
        if (!postActualizado) {
            return res.status(404).json({ error: 'Post no encontrado' });           
        }
        res.json({ message: 'Post actualizado con éxito', post: postActualizado });
    } catch (error) {
        //console.error(error);
        //res.status(500).json({ error: 'Error al actualizar el post' });
        next(error)
    }
};

// Eliminar un post
const deletePost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const postEliminado = await eliminarPost(id);
        if (!postEliminado) {
            return res.status(404).json({ error: 'Post no encontrado' });
        }
        res.json({ message: 'Post eliminado con éxito', post: postEliminado });
    } catch (error) {
       // console.error(error);
        //res.status(500).json({ error: 'Error al eliminar el post' });
        next(error)
    }
};

module.exports = { getPosts, createPost, updatePost, deletePost };