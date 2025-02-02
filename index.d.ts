declare module "react-image-file-resizer" {
  class Resizer {
    static changeHeightWidth(
      height: number,
      maxHeight: number,
      width: number,
      maxWidth: number
    ): { height: number; width: number };

    static resizeAndRotateImage(
      image: HTMLImageElement,
      maxWidth: number,
      maxHeight: number,
      compressFormat?: string,
      quality?: number,
      rotation?: number
    ): string;

    static b64toBlob(b64Data: string, contentType: string): Blob;

    static createResizedImage(
      file: Blob,
      maxWidth: number,
      maxHeight: number,
      compressFormat: string,
      quality: number,
      rotation: number,
      responseUriFunc: (
        value: string | Blob | ProgressEvent<FileReader>
      ) => void,
      outputType: string
    ): void;
  }

  const FileResizer: { imageFileResizer: typeof Resizer.createResizedImage };

  export default FileResizer;
}
