'use client';

import { certSelector } from "@/store/selectors/cert";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { CertificateRenderer } from "./CertificateRender";
import { generateCert } from "@/actions/cert";

export const CertRendererClient = () => {
    const cert = useRecoilValue(certSelector);
    const[pdfDataUri,setPdfDataUri] = useState("");

    useEffect(()=>{
        if(cert.id && cert.name){
            getCertificate();
        }
    },[cert])

    const getCertificate = async()=>{
        if(!cert.id || !cert.name){
            return;
        }
        const data = await generateCert({userName:cert.name, certificateId:cert.id});
        setPdfDataUri((p)=>data.pdfUri);
        console.log("Cert from store is ", cert);
    }
    
    if(pdfDataUri){
        return (
            <CertificateRenderer pdfDataUri={pdfDataUri} />
        )
    }
    else{
        return null;
    }

    
}