import { NextRequest, NextResponse } from "next/server";
import {conn} from "@/app/utils/db";

export const GET=async(
    request : NextRequest,
    {params}:{params:{id:number}}
) =>{
    const _Id = params.id;
    try {
        const qry ="SELECT primernombre, primerapellido FROM tbl_usuarios WHERE od = $1";
        const resultado = await conn.query(qry,[_Id]);
        return Response.json(resultado.rows[0]);
    } catch (error) {
        
    }
}; 