'use client';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { useState } from "react"
import { createCert } from "@/actions/createCert"
import { useToast } from "./ui/use-toast"
import { CERT_CREATED, CERT_FOUND } from "@/lib/messages"
import { useSetRecoilState } from "recoil";
import { certAtom } from "@/store/atoms/cert";
import { LoaderCircle } from 'lucide-react';

export const BioDataCard = () =>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const {toast} = useToast();
    const setCertState = useSetRecoilState(certAtom);
    
    const handleSubmit = async () => {
        setLoading(true);

        if(!name || !email || !isValidEmail()){
            toast({
                title:"Enter Valid Name & Email",
                variant:"destructive"
            })
            setLoading(false);
            return;
        }
        
        const certDetails = await createCert({email,name});
        setLoading(false);

        if(certDetails.name && certDetails.certificateId){
            setCertState(p => ({...p, id:certDetails.certificateId,name:certDetails.name}));
        }

        if(certDetails.message == CERT_CREATED ||certDetails.message == CERT_FOUND){
            toast({title:certDetails.message});
            setEmail("");
            setName("");
        }
        else{
            toast({
                title:certDetails.message,
                variant:"destructive"
            })
        }
        
        console.log(certDetails);
    }

    function isValidEmail():(boolean) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    return (
        <Card className="z-10 bg-opacity-100 border-slate-700 min-w-[400px]">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Create a New one</CardTitle>
                <CardDescription>
                    {`Enter your Name & Email below`}
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" type="text" placeholder="Adithiyan" 
                            value={name} 
                            onChange={(e)=>setName((p)=>e.target.value)} 
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="adithiyan@example.com" 
                            value={email}
                            onChange={(e)=>setEmail((p)=>e.target.value)}
                    />
                </div>
            </CardContent>
            <CardFooter>
                <Button disabled={loading} onClick={handleSubmit} className="w-full">
                    {loading && (
                        <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Create
                </Button>
            </CardFooter>
        </Card>

    )
}