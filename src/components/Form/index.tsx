import Button from "../Button";
import React from "react";
import FileInput from "../FileInput";
import UploadedImages from "../UploadedImages";

import CreatedDocument from "../Document";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

export interface FormData {
  text: string;
}

const Form = () => {

    const [formData, setFormData] = React.useState<FormData>({ text: ''});
    const [files, setFiles] = React.useState<File[]>([]);
    const [isGenerated, setIsGenerated] = React.useState<boolean>(false);

    function handleInputChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        console.log(formData)
        console.log(files)

        setIsGenerated(true);
    }

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        if(event.target.files) {
            const newImage = event.target.files[0];
    
            if(!verifyImageAlreadyUploaded(newImage)) {
                setFiles((prevFiles) => [...prevFiles, newImage]);
            }
        }
    }

    function verifyImageAlreadyUploaded(newImage: File) {
        if(files.find(file => file.name === newImage.name)) {
            return true;
        }
    }
    
    return (
        <form onSubmit={onSubmit}>
            <label>
                Seu texto:
                <textarea name="text" value={formData.text} onChange={handleInputChange} />
            </label>
            <br />
            {files.map(file => <UploadedImages image={file} key={file.name} />)}
            <Button text="Gerar"/>
            <FileInput onChange={handleFileChange}></FileInput>
            {isGenerated && (
                <>
                <PDFViewer>
                    <CreatedDocument files={files} formData={formData}></CreatedDocument>
                </PDFViewer>   
                <PDFDownloadLink
                    document={<CreatedDocument formData={formData} files={files} />}
                    fileName="document.pdf"
                >
                    {({ blob, url, loading, error }) =>
                    loading ? 'Gerando PDF...' : 'Baixar PDF'
                    }
                </PDFDownloadLink>                
                </>
            )}
        </form>
    )
}

export default Form;