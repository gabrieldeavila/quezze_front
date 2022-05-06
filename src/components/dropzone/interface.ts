export interface DropzoneProps {
  dropzone: boolean;
  name: string;
  onDrop?: (files: File[]) => void;
  value?: File[];
}
