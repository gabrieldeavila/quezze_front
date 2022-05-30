import { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { DropzoneProps } from "./interface";
import { DropImage, DropzoneContainer, DropzoneWrapper } from "./style";
import { useTranslation } from "react-i18next";
import { AiOutlineEdit } from "react-icons/ai";
import _ from "lodash";

const Drop = (props: DropzoneProps) => {
  const { t } = useTranslation();

  const [image, setImage] = useState("");

  useEffect(() => {
    if (!_.isEmpty(props.value?.[0]) && !_.isUndefined(props.value?.[0])) {
      // @ts-ignore
      setImage(URL.createObjectURL(props.value?.[0]));
    }
  }, [props.value]);

  return (
    <Dropzone onDrop={props.onDrop}>
      {({ getRootProps, getInputProps }) => (
        <DropzoneWrapper>
          <DropzoneContainer {...getRootProps()}>
            <input {...getInputProps()} />
            {!image ? (
              <>
                <AiOutlineEdit />
                <p>{t("dropzone")}</p>
              </>
            ) : (
              <DropImage src={image} />
            )}
          </DropzoneContainer>
        </DropzoneWrapper>
      )}
    </Dropzone>
  );
};

export default Drop;
