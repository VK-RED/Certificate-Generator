'use client';

import { certSelector } from "@/store/selectors/cert";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { CertificateRenderer } from "./CertificateRender";
import { generateCert } from "@/actions/cert";
import { certAtom } from "@/store/atoms/cert";

export const CertRendererClient = () => {
    const cert = useRecoilValue(certSelector);
    const setCert = useSetRecoilState(certAtom);

    useEffect(()=>{
        if(!cert.pdfDataUri){
            getCertificate();
        }
    },[cert])

    const getCertificate = async()=>{
        if(!cert.id || !cert.name){
            return;
        }
        const data = await generateCert({userName:cert.name, certificateId:cert.id});
        setCert(p=>({...p,pdfDataUri:data.pdfUri}));
        console.log("Cert from store is ", cert);
    }
    
    return (
        <CertificateRenderer />
    )
    
}