import {Pool} from "pg";

const conn = new Pool({
    host:"dpg-cs1990tds78s73b4fu2g-a.oregon-postgres.render.com", // se copia de render el External Database URL
    port:5432,
    user:"ejemploapi_rurz_user",
    password:"boBtM6EjHvDINwia1uET181MOZGlOYB8",
    database:"EjemploAPI",
    ssl:true, //si esta en render
})

export {conn};