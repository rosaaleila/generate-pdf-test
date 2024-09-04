import Button from '../Button';
import './index.css';
interface UploadedImagesProps {
    images: File[];
    removeImage: (index: number) => void;
}

const UploadedImages = (props: UploadedImagesProps) => {

    return (
        <div>
            <h2>Imagens selecionadas:</h2>
            <div className='imageCardContainer'>
                {Boolean(props.images.length) && props.images.map((image, index) => (
                <div key={index} className='imageCard'>
                        <img
                        alt="not found"
                        src={URL.createObjectURL(image)}
                        />
                        <Button text='Remover' class='removeBtn' handleOnClick={() => props.removeImage(index)}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UploadedImages;