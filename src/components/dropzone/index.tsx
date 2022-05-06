import { useEffect } from "react";
import Dropzone from "react-dropzone";
import { DropzoneProps } from "./interface";
import { DropzoneContainer, DropzoneWrapper } from "./style";
import { useTranslation } from "react-i18next";
import { AiOutlineEdit } from "react-icons/ai";

const Drop = (props: DropzoneProps) => {
  const { t } = useTranslation();

  useEffect(() => {
    console.log(props.value);
  }, [props.value]);

  return (
    <Dropzone onDrop={props.onDrop}>
      {({ getRootProps, getInputProps }) => (
        <DropzoneWrapper>
          <DropzoneContainer {...getRootProps()}>
            <input {...getInputProps()} />
            <AiOutlineEdit />
            <p>{t("dropzone")}</p>
          </DropzoneContainer>
        </DropzoneWrapper>
      )}
    </Dropzone>
  );
};

export default Drop;
