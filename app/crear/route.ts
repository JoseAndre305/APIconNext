import { NextRequest, NextResponse } from "next/server";
import {conn} from "@/app/utils/db";

export const POST = async(request: NextRequest)=>{

    try{
        const JsonBody = await request.json();
        const qry="INSERT INTO tbl_usuarios (id, primernombre, segundonombre, primerapellido, segunapellido) VALUES($1, $2, $3, $4, $5)"; // el dolar es para indicar los parametros
        const values=[
            JsonBody.id,
            JsonBody.primernombre,
            JsonBody.segundonombre,
            JsonBody.primernombre,
            JsonBody.segunapellido,
        ];
        const resultado = await conn.query(qry, values); // la variable para recibir los datos que se madara a la base de datos
        return new NextResponse(JSON.stringify("Usuario creado con éxito"),{
            status:201,});
    }catch(error){
        return new NextResponse(JSON.stringify("Error al crear Usuario"),{
            status:500,});

    }
}