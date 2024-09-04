import Button from "../Button";
import React from "react";
import FileInput from "../FileInput";
import UploadedImages from "../UploadedImages";
import CreatedDocument from "../CreatedDocument";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import requestApi from "../../api";
import { verifyIfImageAlreadyUploaded } from "../../utils";
import './index.css';

export interface FormData {
  text: string;
}

const Form = () => {

    const [formData, setFormData] = React.useState<FormData>({ text: ''});
    const [images, setImages] = React.useState<File[]>([]);
    const [isGenerated, setIsGenerated] = React.useState<boolean>(false);

    function handleInputChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        event.preventDefault();

        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setIsGenerated(true);
    }

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();

        console.log(event.target.files)
        if(event.target.files) {
            const newImage = event.target.files[0];
            
            if(!verifyIfImageAlreadyUploaded(images, newImage)) {
                console.log(images)
                console.log(newImage)
                setImages((previmages) => [...previmages, newImage]);
            }
        }
    }

    function handleRemoveImage(index: number) {
        console.log(images)
        setImages(images.filter((_, i) => i !== index));
        console.log(images)
    }

    function handleApiRequest() {
        // P.s: aqui seria enviado o pdf como blob ou base64 ou alguma coisa assim :P
        requestApi(new FormData());
    }
    
    return (
        <form onSubmit={onSubmit} className="documentForm">
            <h1>Crie seu próprio PDF!</h1>
            <br />
            <label className="labelInput">
                Insira aqui seu texto:
                <textarea className="paragraphInput" name="text" value={formData.text} onChange={handleInputChange} placeholder="Você pode inserir quantas linhas desejar!"/>
            </label>
            <br />
            <UploadedImages images={images} removeImage={handleRemoveImage} />
            <FileInput onChange={handleFileChange}></FileInput>
            <br/>
            <Button text="Gerar"/>
            <br/>
            {isGenerated && (
                <div className="documentContainer">
                    <h2>Pré-visualização:</h2>
                    <PDFViewer className="pdfViewer">
                        <CreatedDocument files={images} formData={formData}/>
                    </PDFViewer>

                    <PDFDownloadLink
                        className="documentLink"
                        document={<CreatedDocument formData={formData} files={images} />}
                        fileName="document.pdf">
                        {
                            ({ blob, url, loading, error }) =>
                            loading ? 'Gerando PDF...' : 'Baixar PDF'
                        }
                    </PDFDownloadLink>
                    
                    <Button text="Enviar para API" handleOnClick={handleApiRequest}/>
                </div>
            )}
        </form>
    )
}

export default Form;