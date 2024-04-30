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
import { verifyCert } from "@/actions/verify";
import { useToast } from "./ui/use-toast";
import { CERT_FOUND, NO_CERT_FOUND } from "@/lib/messages";
import { useSetRecoilState } from "recoil";
import { certAtom } from "@/store/atoms/cert";
import { LoaderCircle } from "lucide-react";

export const VerifyCard = () => {

    const [certId,setCertId] = useState("");
    const [email, setEmail] = useState("");
    const [loading,setLoading] = useState(false);
    const {toast} = useToast();
    const setCertState = useSetRecoilState(certAtom);

    function isValidEmail():(boolean) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleSubmit = async()=>{
        setLoading(true);

        if(!certId && !email ){
            toast({
                title:"Both fields can't be empty",
                variant:"destructive"
            })
            setLoading(false);
            return;
        }
        else if(!isValidEmail()){
            toast({
                title:"Enter valid Email",
                variant:"destructive"
            })
            setLoading(false);
            return;
        }

        const certDetails = await verifyCert({certId:certId,userEmail:email});
        console.log(certDetails);

        if(certDetails.name && certDetails.certificateId){
            setCertState({id:certDetails.certificateId,name:certDetails.name});
        }

        if(certDetails.message){
            if(certDetails.message === NO_CERT_FOUND ||certDetails.message ===  CERT_FOUND){
                toast({title:certDetails.message});
            }
            else{
                toast({
                    title:certDetails.message,
                    variant:"destructive"
                })
            }
        }

        setCertId("");
        setEmail("");

        setLoading(false);
        return;
    }

    return (
        <Card className="z-10 bg-opacity-100 border-slate-700 min-w-[400px]">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Verify Certificate</CardTitle>
                <CardDescription>
                    {`Verify the Generated Certificate`}
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="certid">{`Certificate ID`}</Label>
                    <Input value={certId} onChange={(e)=>setCertId((p)=>e.target.value)}
                            id="certid" type="text" placeholder="4rnjkn3"/>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                            or
                        </span>
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">{`Email`}</Label>
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
                    Verify
                </Button>
            </CardFooter>
        </Card>
    )
}