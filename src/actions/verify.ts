'use server'

import { CERTID_OR_EMAIL, CERT_FOUND, NO_CERT_FOUND, SOMETHING_WENT_WRONG } from "@/lib/messages";
import { db } from "@/lib/prisma";
import { VerifyCert, VerifyCertProps } from "@/lib/types"

export const verifyCert = async (data:VerifyCertProps) => {

    try {

        if(!data.certId && !data.userEmail){
            return {message:CERTID_OR_EMAIL}
        }
        const {certId,userEmail} = VerifyCert.parse(data);

        if(certId){
            const existingCert = await db.certificate.findUnique({
                where:{
                    id: certId,
                }
            })
            if(existingCert){
                return {name:existingCert.userName, certificateId:existingCert.id, message:CERT_FOUND};
            }
        }
        if(userEmail){
            const existingCert = await db.certificate.findUnique({
                where:{
                    userEmail:userEmail
                }
            })
            if(existingCert){
                return {name:existingCert.userName, certificateId:existingCert.id, message:CERT_FOUND};
            }
        }

        return {message:NO_CERT_FOUND}
    } catch (error) {
        console.log(error);
        return {message:SOMETHING_WENT_WRONG}
    }

    
}