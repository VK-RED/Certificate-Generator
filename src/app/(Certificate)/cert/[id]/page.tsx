'use client';

import { verifyCert } from "@/actions/verify";
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
        <></>
    )
}