import React from 'react'
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import download from 'downloadjs'
import fs from 'fs'


  // First I want to read the file
  

async function modifyPdf() {
    
      
    // const fetchStringAsset = (asset) =>
    //   fetch(`http://localhost:3000/${asset}`).then((res) => res.text());
    //   console.log(inputPdfBase64)
    // const [inputPdfBase64] = await Promise.all([
    //     fetchStringAsset('ttt.pdf'),
    //   ]);
    //   console.log(inputPdfBase64)
    // const fs = require('fs');
    // const fileUrl = new URL('file:///home/patrick/Documents/Projet/React/tuto/src/ttt.pdf');
    // var fs = require("fs");

    // fs.readFile("txt.txt", "utf8", function(error, data) {
    //   console.log(data);
    // })
    
    // const url0 = 'https://pdf-lib.js.org/assets/with_update_sections.pdf'
    // const existingPdfBytes0 = await fetch(url0).then(res => {
    //   console.log(res)
      
    //   res.arrayBuffer()
      
    // })

    // const url = 'test.txt'
    // const existingPdfBytes = await fetch(url).then(res => { 
    //   console.log(res)
    //   res.arrayBuffer();

    // });

    // const existingPdfBytes2 = await fetch("yugd.txt").then(res => { 
    //   console.log(res)
    //   res.arrayBuffer();

    // });
    
    // console.log("this is the final"+existingPdfBytes)
    // -------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    //const url = 'https://cors-anywhere.herokuapp.com/https://github.com/Lotervik/documents/test.txt'
    
    // const url = 'https://cors-anywhere.herokuapp.com/https://drive.google.com/file/d/1qhzqJKuj-Dw6kmNyVP3y9ncOzbqffocu/view?usp=sharing'
    
    // const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
    // console.log(existingPdfBytes)
    
    // const pdfDoc = await PDFDocument.load(existingPdfBytes);
    //----------------------------------------------------------------------------
    // fetch('https://cors-anywhere.herokuapp.com/https://drive.google.com/file/d/1qhzqJKuj-Dw6kmNyVP3y9ncOzbqffocu/view?usp=sharing')
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data) // Prints result from `response.json()` in getRequest
    // })
    // .catch(error => console.error(error))
    // /*
    // const url = 'https://pdf-lib.js.org/assets/with_update_sections.pdf'
    // const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
    // console.log(existingPdfBytes)
    // //const pdfDoc = await PDFDocument.load(existingPdfBytes)

    // // Embed the Helvetica font
    // const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

    // // Get the first page of the document
    // const pages = pdfDoc.getPages()
    // const firstPage = pages[0]

    // // Get the width and height of the first page
    // const { width, height } = firstPage.getSize()

    // // Draw a string of text diagonally across the first page
    // firstPage.drawText('This text was added with JavaScript!', {
    //   x: 5,
    //   y: height / 2 + 300,
    //   size: 50,
    //   font: helveticaFont,
    //   color: rgb(0.95, 0.1, 0.1),
    //   rotate: degrees(-45),
    // })

    // // Serialize the PDFDocument to bytes (a Uint8Array)
    // const pdfBytes2 = await pdfDoc.save()

    //       // Trigger the browser to download the PDF document
    // download(pdfBytes2, "pdf-lib_modification_example.pdf", "application/pdf");*/



    const url = 'https://pdf-lib.js.org/assets/with_update_sections.pdf'
    const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
    console.log(existingPdfBytes)
}

function test(){
    
    //const pdfBytes = fs.readFileSync("");

}

export default function Modifpdf() {
    return (
        <div>
            <button onClick={modifyPdf}>THE NEM ONE TO MODIFY PDF</button>
        </div>
    )
}
