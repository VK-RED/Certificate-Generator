'use server';

import { db } from "@/lib/prisma";
import { CreateCert, CreateCertProps } from "@/lib/types";
import { ZodError, z } from "zod";


export const createCert = async (cert:CreateCertProps) => {
    try {
        
        const {email,name} = CreateCert.parse(cert);

        const existingCert = await db.certificate.findUnique({
            where:{
                userEmail: email,
            }
        })

        if(existingCert){
            return {name:existingCert.userName, certificateId:existingCert.id};
        }

        const newCert = await db.certificate.create({
            data:{
                userEmail: email,
                userName: name,
            }
        })

        return {name:newCert.userName, certificateId:newCert.id};

    } catch (error) {
        
        let err = "Something Went Wrong !! Please Contact Admin !"
        if (error instanceof ZodError){
            console.log(error.message);
            err = `${error.issues[0].message}, Enter Valid ${error.issues[0].path}`;
            throw new Error(err);
        }
        else{
            console.log(error);
            throw new Error(err);
        }
    }
}