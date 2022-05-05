import React from "react";
import Dropzone from "react-dropzone";
import { DropzoneProps } from "./interface";

const Drop = (props: DropzoneProps) => {
  return (
    <Dropzone>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
};

export default Drop;
