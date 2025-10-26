import cors from 'cors';
import express from 'express';
import pool from './BD.js';
 

const BDApp = express();
// eslint-disable-next-line react-hooks/rules-of-hooks
BDApp.use(express.json());
// eslint-disable-next-line react-hooks/rules-of-hooks
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

async function CrearC(preg, resp) {
  try {
    const { id, Nombre, Apellido, Telefono } = preg.body;

    const agregarUser = await pool.query(
      "INSERT INTO contactos (userid,nombre, apellido, telefono) VALUES ($1, $2, $3,$4) RETURNING *",
      [id,Nombre, Apellido, Telefono]
    );

    console.log('Contacto agregado:', agregarUser.rows[0]);

    // validar siempre esto primero
    resp.status(201).json({
      message: "Contacto agregado correctamente",
      usuario: agregarUser.rows[0],
    });

  } catch (error) {
    console.error(error.message);
    resp.status(500).json({ message: "Error al agregar contacto" });
  }
}

async function ObtenerC(preg, resp) {
  try {
    const { userid } = preg.query; // recibe el userId desde el frontend

    if (!userid) {
      return resp.status(400).json({ message: "Falta el parámetro userid" });
    }

    const result = await pool.query(
      "SELECT * FROM contactos WHERE userid = $1",
      [userid]
    );

    resp.json(result.rows);
    console.log("Contactos:", result.rows);
  } catch (error) {
    console.error("Error al obtener contactos:", error);
    resp.status(500).json({ message: "Error al obtener contactos" });
  }
}



BDApp.get('/usuarioid', async (req, res) => {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ message: "Falta username" });
  }

  try {
    const result = await pool.query(
      "SELECT userid FROM usuarios WHERE username = $1",
      [username]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json({ id: result.rows[0].userid });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error buscando usuario" });
  }
});

BDApp.get('/usuarioOBT', async (req, res) => {
  const { userid } = req.query;

  if (!userid) {
    return res.status(400).json({ message: "Falta userid" });
  }

  try {
    const result = await pool.query(
      "SELECT username, password, email FROM usuarios WHERE username = $1",
      [userid]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

  
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error buscando usuario:", error);
    res.status(500).json({ message: "Error buscando usuario" });
  }
});


async function ModificarUser(req, resp) {
  try {
    const { usernameOld, username, email, password } = req.body;

    const actualizarUser = await pool.query(
      `UPDATE usuarios
       SET username = $1,
           email = $2,
           password = $3
       WHERE username = $4
       RETURNING *`,
      [username, email, password, usernameOld]
    );

    if (actualizarUser.rows.length === 0) {
      return resp.status(404).json({ message: "Usuario no encontrado" });
    }

    console.log("Modificado:", actualizarUser.rows[0]);

    resp.status(200).json({
      message: "Modificado correctamente",
      usuario: actualizarUser.rows[0],
    });
  } catch (error) {
    console.error(error.message);
    resp.status(500).json({ message: "Error al modificar" });
  }
}




//llamar a la funcion
BDApp.post('/usuarios', crearUsuario);
BDApp.put('/ModificarU', ModificarUser);
BDApp.post('/crearContacto', CrearC);
BDApp.get('/contactos', ObtenerC);
BDApp.post('/login', LoginRs);
BDApp.listen(5000, () => {
  console.log('Servidor corriendo en el puerto 5000');
});
