'use client';

import { CertificateRendererProps } from '@/lib/types';
import { pdfjs, Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

export const CertificateRenderer = ({pdfDataUri}:CertificateRendererProps) => {
    return (
        <div className='z-10'>
            <Document file={{url:pdfDataUri}}  
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