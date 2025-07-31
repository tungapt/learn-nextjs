// GET, POST CHO CATEGORY

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(){
    const res = await prisma.category.findMany();
    if(!res) return Response.json({msg:'error',data:[]},{status:500});
    return Response.json({msg:'ok',data:res},{status:200});
}