'use client';

import { certSelector } from '@/store/selectors/cert';
import { pdfjs, Document, Page } from 'react-pdf';
import { useRecoilValue } from 'recoil';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

export const CertificateRenderer = () => {

    const cert = useRecoilValue(certSelector);

    if(cert.pdfDataUri){
        return (
            <div className='z-10'>
                <Document file={{url:cert.pdfDataUri}}  
                    onLoadSuccess={()=>{
                    console.log("document loaded successfully !")
                    }}
                    renderMode="canvas"
                >
                    <Page pageNumber={1}  
                        renderAnnotationLayer={false} 
                        renderTextLayer={false}
                        height={600}
                        width={600}
                    />
                </Document>
            </div>
            
        )
    }
    return null;
}