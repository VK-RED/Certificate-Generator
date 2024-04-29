'use client'

import { generateCert } from "@/actions/cert";
import { useEffect, useState } from "react"
import { pdfjs, Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


export default function Home() {

  const [loading,setLoading] = useState(true);
  const [dataUri,setDataUri] = useState<string|null>(null);

  useEffect(()=>{
    getData();
  },[])

  async function getData(){
    
    const data = await generateCert({certificateId:"erfer",userName:"referf"});
    setDataUri((p)=>data.pdfUri);
    setLoading((p)=>false);

    // const aTag = document.createElement('a');
    // aTag.href = data.pdfUri;
    // aTag.download = 'generated_cert.pdf'
    // document.body.appendChild(aTag);
    // aTag.click()
    
  }

  

  if(loading){
    return (
      <div> Loading ..</div>
    )
  }
  else{
    return (
      <div className="h-screen w-screen border flex justify-center items-center">

          {
            dataUri &&

            <div>
              <Document file={{url:dataUri}}  
                      onLoadSuccess={()=>{
                        console.log("document loaded successfully !")
                      }}
                      renderMode="canvas"
            >
              <Page pageNumber={1}  renderAnnotationLayer={false} renderTextLayer={false}/>
            </Document>

            </div>

            
          }
            
      


      </div>
    )
  }
  
}

