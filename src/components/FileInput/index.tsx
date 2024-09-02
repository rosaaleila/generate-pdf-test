import React, { useState } from "react";

interface FileInputProps {
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

// Define a functional component named UploadAndDisplayImage
const FileInput = (props: FileInputProps) => {
  // Define a state variable to store the selected image
//   const [selectedImage, setSelectedImage] = useState<File | null>(null);

  // Return the JSX for rendering
  return (
    <div>
      {/* Input element to select an image file */}
      <input
        type="file"
        name="myImage"
        // Event handler to capture file selection and update the state
        onChange={props.onChange}
        //   setSelectedImage(event.target.files ? event.target.files[0] : null); // Update the state with the selected file
      />
    </div>
  );    
};

// Export the UploadAndDisplayImage component as default
export default FileInput;