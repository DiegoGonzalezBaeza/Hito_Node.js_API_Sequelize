// import { readFile, writeFile } from "node:fs/promises";
// import path from "node:path";
// import { User } from "../interfaces/user.interface"

// const __dirname = import.meta.dirname;
// // __dirname nos da la ruta relativa al archivo  o sea la ruta hasta la carpeta models


// // ahora se intenta buscar la ruta donde esta el archivo con todos los usuarios 
// // .. retrocede en carpeta
// const pathFile = path.resolve(__dirname, "../../data/users.json");

// const readUsers = async () => {
//     const usersJSON = await readFile(pathFile, "utf-8");
//     const users = JSON.parse(usersJSON) as User[];
//     return users;
// };

// // Para escribir Usuarios:
// const writeUsers = async(users: User[]) => {
//     const usersJSON = JSON.stringify(users, null, 2);
//     return await writeFile(pathFile, usersJSON);
// };

// export const UserModel = {
//     readUsers,
//     writeUsers,
// }

import {pool } from "../config/database";
import {User} from "../interfaces/user.interface"

const findOneByEmail = async (email:string) => {

    const query = {
        text: `
        SELECT * FROM USERS
        WHERE email = $1
        `,
        values: [email],
    };

    const { rows } = await pool.query(query);

    // console.log(rows);
    return rows[0] as User;

};

const create = async(email: string, password: string) => {

    const query = {
        text: `
        INSERT INTO USERS (email, password)
        VALUES ($1, $2)
        RETURNING *
        `,
        values: [email, password],
    };

    const { rows } = await pool.query(query);

    // console.log(rows);
    return rows[0] as User;

};

const findAll = async () => {
    const query = {
      text: "SELECT * FROM users",
    };
  
    const { rows } = await pool.query(query);
    return rows as User[];
  };
  
const findById = async (id: string) => {
    const query = {
      text: "SELECT * FROM users WHERE id = $1",
      values: [id],
    };
  
    const { rows } = await pool.query(query);
    return rows[0] as User;
};
  
const update = async (id: string, email: string, password?: string) => {
    const query = {
      text: "UPDATE users SET email = $1, password = $2 WHERE id = $3 RETURNING *",
      values: [email, password, id],
    };
  
    const { rows } = await pool.query(query);
    return rows[0] as User;
};
  
const remove = async (id: string) => {
    const query = {
      text: "DELETE FROM users WHERE id = $1 RETURNING *",
      values: [id],
    };
  
    const { rows } = await pool.query(query);
    return rows[0] as User;
};

export const UserModel = {
    create,
    findOneByEmail,
    findAll,
    findById,
    update,
    remove,
};