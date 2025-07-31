// Lấy danh sách các bài viết theo slug danh sách
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, {params}) {
    const slug = params.slug;
    const res = await prisma.post.findMany({
        where: { 
            category:{
                slug:slug
            }
        },
        orderBy: {
            id: "desc",
        },
    });
    if (!res) return Response.json({ msg: "error", data: [] }, { status: 500 });
    return Response.json({ msg: "ok", data: res }, { status: 200 });
}