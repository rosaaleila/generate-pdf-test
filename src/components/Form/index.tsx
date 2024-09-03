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
    const [images, setImages] = React.useState<File[]>([]);
    const [isGenerated, setIsGenerated] = React.useState<boolean>(false);

    function handleInputChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        console.log(formData)
        console.log(images)

        setIsGenerated(true);
    }

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        if(event.target.files) {
            const newImage = event.target.files[0];
    
            if(!verifyImageAlreadyUploaded(newImage)) {
                setImages((previmages) => [...previmages, newImage]);
            }
        }
    }

    function verifyImageAlreadyUploaded(newImage: File) {
        if(images.find(file => file.name === newImage.name)) {
            return true;
        }
    }

    function handleRemoveImage(index: number) {
        setImages(images.filter((_, i) => i !== index));
    }
    
    return (
        <form onSubmit={onSubmit}>
            <h1>Crie seu próprio PDF!</h1>
            <label>
                Seu texto:
                <textarea name="text" value={formData.text} onChange={handleInputChange} />
            </label>
            <br />
            <UploadedImages images={images} removeImage={handleRemoveImage} />
            <Button text="Gerar"/>
            <FileInput onChange={handleFileChange}></FileInput>
            {isGenerated && (
                <>
                <PDFViewer>
                    <CreatedDocument files={images} formData={formData}></CreatedDocument>
                </PDFViewer>
                <PDFDownloadLink
                    document={<CreatedDocument formData={formData} files={images} />}
                    fileName="document.pdf">
                    {
                        ({ blob, url, loading, error }) =>
                        loading ? 'Gerando PDF...' : 'Baixar PDF'
                    }
                </PDFDownloadLink>                
                </>
            )}
        </form>
    )
}

export default Form;