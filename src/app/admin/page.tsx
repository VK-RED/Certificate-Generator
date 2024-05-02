'use client'

import { handlePdf } from "@/actions/handlePdf";
import { Button } from "@/components/ui/button";
import { ChangeEvent, useEffect, useState } from "react"

export default function AdminPage(){

    const [file,setFile] = useState<File|null>();

    useEffect(()=>{
        if(!file) console.log("No file");
        else console.log("The File is ", file);
    },[file])

    const handleInput = (e:ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files && e.target.files[0]){
            const t = e.target.files[0];
            setFile((p)=>t);
        }
    }

    const handleSubmit = async () => {
        if(!file) return;
        const formData = new FormData();
        formData.append("file",file);
        await handlePdf(formData);
        console.log("file sent");
    }

    return (
        <div>

            <input type="file" onChange={(e)=>handleInput(e)}/>
            <Button onClick={handleSubmit} >SEND</Button>
        </div>
    )
}