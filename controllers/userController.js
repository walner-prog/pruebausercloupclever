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
  const { nombre, email, rol } = req.body;
  connection.query('INSERT INTO usuarios (nombre, email, rol) VALUES (?, ?, ?)', [nombre, email, rol], (error, results) => {
    if (error) throw error;
    res.json({ message: 'Usuario creado correctamente', id: results.insertId });
  });
};

// Actualizar un usuario existente
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { nombre, email, rol } = req.body;
  connection.query('UPDATE usuarios SET nombre = ?, email = ?, rol = ? WHERE id = ?', [nombre, email, rol, id], (error, results) => {
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
