"use server";

import { GenerateCertProps } from "@/lib/types";
import fs from "fs";
import path from "path";
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export async function generateCert({userName,certificateId}:GenerateCertProps) {
    
    const filePath = path.join(__dirname,"../../../public/assets/Certificate_Template.pdf");
    
    const pdfTemplate = fs.readFileSync(filePath);
    const pdfDoc = await PDFDocument.load(pdfTemplate);

    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic)
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // Get the first page of the document
    const pages = pdfDoc.getPages()
    const firstPage = pages[0]

    // Get the width and height of the first page
    const { width, height } = firstPage.getSize()

    // Draw a string of userName
    firstPage.drawText(userName, {
        x: userName.length > 17 ? width/2 - 75 : width/2 ,
        y: height / 2,
        size: 40,
        font: timesRomanFont,
        color: rgb(0.231, 0.373, 0.400),
    })

    
    const certificateText = `(Certificate ID: ${certificateId})`

    firstPage.drawText(certificateText,{
        x: width/2 - 75,
        y: height / 2 - 40,
        size: 15,
        font: helveticaFont,
        color: rgb(0,0,0),
    })

    // Serialize the PDFDocument to bytes (a Uint8Array)

    const pdfUri = await pdfDoc.saveAsBase64({dataUri:true});
    return {pdfUri};
}