import { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { DropzoneProps } from "./interface";
import { DropzoneContainer, DropzoneWrapper } from "./style";
import { useTranslation } from "react-i18next";
import { AiOutlineEdit } from "react-icons/ai";
import _ from "lodash";

const Drop = (props: DropzoneProps) => {
  const { t } = useTranslation();

  const [image, setImage] = useState("");

  useEffect(() => {
    if (!_.isEmpty(props.value?.[0])) {
      setImage(URL.createObjectURL(props.value?.[0]));
    }
  }, [props.value]);

  return (
    <Dropzone onDrop={props.onDrop}>
      {({ getRootProps, getInputProps }) => (
        <DropzoneWrapper>
          <DropzoneContainer {...getRootProps()}>
            <input {...getInputProps()} />
            <AiOutlineEdit />
            <p>{t("dropzone")}</p>
            <img src={image} />
          </DropzoneContainer>
        </DropzoneWrapper>
      )}
    </Dropzone>
  );
};

export default Drop;
