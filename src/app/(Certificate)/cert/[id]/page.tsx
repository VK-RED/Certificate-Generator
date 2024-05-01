'use client';

import { verifyCert } from "@/actions/verify";
import { CertificateSkeleton } from "@/components/CertificateSkeleton";
import { useToast } from "@/components/ui/use-toast";
import { CERT_FOUND, NO_CERT_FOUND } from "@/lib/messages";
import { certAtom } from "@/store/atoms/cert";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

export default function CertificatePage(){
    const params = useParams<{id:string}>();
    const setCertState = useSetRecoilState(certAtom);
    const {toast} = useToast();
    const router = useRouter();

    useEffect(()=>{
        getCertDetails();
    },[])

    async function getCertDetails(){
        const certDetails = await verifyCert({certId:params.id,userEmail:""});
        if(certDetails.name && certDetails.certificateId){
            setCertState(p => ({...p, id:certDetails.certificateId,name:certDetails.name}));
        }
        if(certDetails.message){
            if(certDetails.message === NO_CERT_FOUND){
                toast({title:certDetails.message});
            }
            else if(certDetails.message ===  CERT_FOUND){}
            else{
                toast({
                    title:certDetails.message,
                    variant:"destructive"
                })
            }
            setTimeout(()=>{
                router.push("/");
            },500);
        }
    }

    return(
        <div className="flex flex-col justify-center items-center h-screen w-screen">
            <CertificateSkeleton/>
            <h2 className="scroll-m-20 mt-10 pb-2 text-2xl font-semibold tracking-tight first:mt-0 text-indigo-900 animate-pulse">
                {`Getting your Certificate !`}
            </h2>
        </div>
    )
}