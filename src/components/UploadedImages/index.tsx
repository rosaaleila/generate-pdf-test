interface UploadedImagesProps {
    images: File[];
    removeImage: (index: number) => void;
}

const UploadedImages = (props: UploadedImagesProps) => {

    return (
        <div>
            {Boolean(props.images.length) && props.images.map((image, index) => (
                <div key={index}>
                    <img
                    alt="not found"
                    src={URL.createObjectURL(image)}
                    />
                <br/> <br/>
                    <button onClick={() => props.removeImage(index)}>Remover</button>
                </div>
            ))}
        </div>
    );
}

export default UploadedImages;