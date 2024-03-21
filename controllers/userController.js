// controllers/userController.js

const connection = require('../db');

// Obtener todos los usuarios
exports.getUsers = (req, res) => {
  connection.query('SELECT * FROM usuarios', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
};

// Obtener un usuario por su ID
exports.getUserById = (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM usuarios WHERE id = ?', [id], (error, results) => {
    if (error) throw error;
    res.json(results[0]);
  });
};

// Crear un nuevo usuario
exports.createUser = (req, res) => {
  const { nombre, email } = req.body;
  connection.query('INSERT INTO usuarios (nombre, email) VALUES (?, ?)', [nombre, email], (error, results) => {
    if (error) throw error;
    res.json({ message: 'Usuario creado correctamente', id: results.insertId });
  });
};

// Actualizar un usuario existente
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { nombre, email } = req.body;
  connection.query('UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?', [nombre, email, id], (error, results) => {
    if (error) throw error;
    res.json({ message: 'Usuario actualizado correctamente' });
  });
};

// Eliminar un usuario
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM usuarios WHERE id = ?', [id], (error, results) => {
    if (error) throw error;
    res.json({ message: 'Usuario eliminado correctamente' });
  });
};
