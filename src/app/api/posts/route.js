// lấy danh bài viết mới hoặc bài viết toàn bộ
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function GET(){
    const res = await prisma.post.findMany({
        orderBy: {
            id: "desc",
        },
    });
    if(!res) return Response.json({msg:'error',data:[]},{status:500});
    return Response.json({msg:'ok',data:res},{status:200});
}