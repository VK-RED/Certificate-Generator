'use client';

import { DivProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button"
import { useRecoilValue } from "recoil";
import { certSelector } from "@/store/selectors/cert";
import { useEffect, useState } from "react";
import { SHARE_MESSAGE } from "@/lib/messages";

export const ButtonRows = ({className}:DivProps) : React.ReactNode => {

    const cert = useRecoilValue(certSelector);
    const [certUrl,setCertUrl] = useState("");

    useEffect(()=>{
        if(cert.id){
            setCertUrl(p => window.location.origin+`cert/${cert.id}`);
        }
    },[cert.id])

    const handleDownload = () => {
        const a = document.createElement('a');
        a.href = cert.pdfDataUri;
        a.download = 'Cert.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    const shareOnTwitter = () => {
        if(!certUrl){
            return;
        }
        const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_MESSAGE)}&url=${encodeURIComponent(certUrl)}`;
        window.open(xUrl,'_blank');
    }

    const shareOnLinkedIn = () => {
        if(!certUrl){
            return;
        }
        const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(certUrl)}&title=${encodeURIComponent(SHARE_MESSAGE)}`;
        window.open(linkedInUrl,'_blank');
    }

    if(cert.id && cert.name){
        return (
            <div className={cn("flex justify-center items-center space-x-2 z-10 ",className)}>
                <Button onClick={handleDownload}>Download</Button>
                <Button onClick={shareOnTwitter}>Twitter</Button>
                <Button onClick={shareOnLinkedIn}>LinkedIn</Button>
            </div>
        )
    }
    return null;
}