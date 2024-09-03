import React, { useState } from "react";

interface FileInputProps {
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

// Define a functional component named UploadAndDisplayImage
const FileInput = (props: FileInputProps) => {
  return (
    <div>
      <input
        type="file"
        name="myImage"
        onChange={props.onChange}
      />
    </div>
  );    
};

export default FileInput;