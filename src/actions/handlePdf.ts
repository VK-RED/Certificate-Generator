'use server';

import { db } from "@/lib/prisma";

export const handlePdf = async (sfile:FormData) =>{
    "use server";
    const file = sfile.get('file') as File;
    if(!file){
        console.log("No file received !");
        return;
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    const t = await db.template.upsert({
        where:{
            id:0
        },
        create:{
            cert:buffer
        },
        update:{
            cert:buffer
        }
    })

    console.log(t.id);
    console.log("Pdf saved to DB successfully");
}