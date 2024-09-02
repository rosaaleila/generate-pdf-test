import { useState } from "react";

interface UploadedImagesProps {
    image: File;
}

const UploadedImages = (props: UploadedImagesProps) => {
    const [selectedImage, setSelectedImage] = useState<File | null>(props.image);

    return (
        <>
            {selectedImage && (
            <div>
                <img
                alt="not found"
                src={URL.createObjectURL(selectedImage)}
                />
            <br /> <br />
                <button onClick={() => setSelectedImage(null)}>Remove</button>
            </div>
            )}
        </>
    );
}

export default UploadedImages;