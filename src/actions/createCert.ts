'use server';

import { CERT_CREATED, CERT_FOUND, SOMETHING_WENT_WRONG } from "@/lib/messages";
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
            return {name:existingCert.userName, certificateId:existingCert.id, message:CERT_FOUND};
        }

        const newCert = await db.certificate.create({
            data:{
                userEmail: email,
                userName: name,
            }
        })

        return {name:newCert.userName, certificateId:newCert.id, message:CERT_CREATED};

    } catch (error) {
        let err = SOMETHING_WENT_WRONG;
        if (error instanceof ZodError){
            console.log(error.message);
            err = `${error.issues[0].message}`;
            
        }
        else{
            console.log(error);
            throw new Error(err);
        }
        return {message:err};
    }
}