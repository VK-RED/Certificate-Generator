import fs from "fs";
import path from "path";
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';


export async function GET(request: Request) {

    const filePath = path.join(__dirname,"../../../../pdf-template/Certificate_Template.pdf");
    const existingFile = fs.readFileSync(filePath);
    const pdfDoc = await PDFDocument.load(existingFile)
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Symbol)

    // Get the first page of the document
    const pages = pdfDoc.getPages()
    const firstPage = pages[0]
    
    // Get the width and height of the first page
    const { width, height } = firstPage.getSize();

    const userName = "Vishnu Kumar";

    
    firstPage.drawText(userName, {
        x: width/2,
        y: height/2,
        size: 50,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
    })

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save()
    const newPath = path.join(__dirname,"../../../../pdf-template/Certificate_JS.pdf");
    fs.writeFileSync(newPath, pdfBytes);
    console.log("Certificate Generated !!");
    return Response.json({message:"Hi"})
}