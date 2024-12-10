const { pool } = require('../config/db');

const crearPost = async (titulo, url, descripcion, likes) => {
    try {
        const SQLQuery = 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *';
        const SQLValues = [titulo, url, descripcion, likes];

        const result = await pool.query(SQLQuery, SQLValues);

        console.log('Post agregado:', result);
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Obtener todos los posts
const obtenerPosts = async () => {
    try {
        const SQLQuery = 'SELECT * FROM posts';
        const result = await pool.query(SQLQuery);
        return result.rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Actualizar un post
const actualizarPost = async (id, titulo, url, descripcion) => {
    try {
        const SQLQuery = `
            UPDATE posts 
            SET titulo = $1, img = $2, descripcion = $3 
            WHERE id = $4 
            RETURNING *`;
        const SQLValues = [titulo, url, descripcion, id];
        const result = await pool.query(SQLQuery, SQLValues);
        return result.rows[0];
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Eliminar un post
const eliminarPost = async (id) => {
    try {
        const SQLQuery = 'DELETE FROM posts WHERE id = $1 RETURNING *';
        const SQLValues = [id];
        const result = await pool.query(SQLQuery, SQLValues);
        return result.rows[0];
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = { crearPost, obtenerPosts, actualizarPost, eliminarPost };