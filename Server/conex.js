import cors from 'cors';
import express from 'express';
import pool from './BD.js';
 

const BDApp = express();
BDApp.use(express.json());
BDApp.use(cors());

// Crear un nuevo usuario
async function crearUsuario(preg, resp) {
  try {
    const { username, email, password } = preg.body;

    const agregarUser = await pool.query(
      "INSERT INTO usuarios (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [username, email, password]
    );

    console.log('Usuario agregado:', agregarUser.rows[0]);

    // validar siempre esto primero
    resp.status(201).json({
      message: "Usuario agregado correctamente",
      usuario: agregarUser.rows[0],
    });

  } catch (error) {
    console.error(error.message);
    resp.status(500).json({ message: "Error al agregar usuario" });
  }
}
  

// Obtener usuario 
async function LoginRs(preg, resp) {
  const { username, password } = preg.body;

  try {
    // Buscar usuario por username
    const result = await pool.query(
      "SELECT * FROM usuarios WHERE username=$1",
      [username]
    );

    if (result.rows.length === 0) {
      return resp.status(404).json({ message: "Usuario no encontrado" });
    }

    const usuario = result.rows[0];

    // Comparar contraseña en texto plano
    if (usuario.password !== password) {
      return resp.status(401).json({ message: "Contraseña incorrecta" });
    }

    // Respuesta exitosa
    resp.status(200).json({
      message: "Login exitoso",
      usuario
    });

    console.log("Usuario logueado:", usuario.username);

  } catch (error) {
    console.error(error.message);
    resp.status(500).json({ message: "Error en el login" });
  }
}



//llamar a la funcion
BDApp.post('/usuarios', crearUsuario);
BDApp.post('/login', LoginRs);
BDApp.listen(5000, () => {
  console.log('Servidor corriendo en el puerto 5000');
});
