// lấy bài viết theo từng slug
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function GET(req, {params}){
    const slug = params.slug;
    const res = await prisma.post.findUnique({
        where: {slug},
    });
    if(!res) return Response.json({msg:'error',data:[]},{status:500});
    return Response.json({msg:'ok',data:res},{status:200});
}