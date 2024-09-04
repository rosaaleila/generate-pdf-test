import React from "react";

interface FileInputProps {
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

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