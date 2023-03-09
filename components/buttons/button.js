import { ChangeEventHandler, useCallback, useState } from "react";
import Image from "next/image";
import * as Helpers from "../../helpers/helpers";

function Button() {
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleImageUpload = useCallback(
    function (event) {
      const fileList = event.target.files;
      const fileArray = fileList ? Array.from(fileList) : [];
      const fileToImagesPromises = fileArray.map(Helpers.fileToImageURL);

      Promise.all(fileToImagesPromises).then(setUploadedImages);
    },
    [setUploadedImages]
  );

  const cleanUploadedImages = useCallback(() => {
    setUploadedImages([]);
    uploadedImages.forEach((image) => {
      URL.revokeObjectURL(image.src);
    });
  }, [setUploadedImages, uploadedImages]);

  const generatePdfFromImages = useCallback(() => {
    Helpers.generatePdfFromImages(uploadedImages);
    cleanUploadedImages();
  }, [uploadedImages, cleanUploadedImages]);

  return (
    <>
      
      <div className="images-container">
        {uploadedImages.length > 0 ? (
          uploadedImages.map((image) => (
            <img key={image.src} src={image.src} className="uploaded-image" />
          ))
        ) : (
          <p>Upload some images...</p>
        )}
      </div>

      <div className="buttons-container">
        <label htmlFor="file-input">
          <span className="button">Upload images</span>
          <input
            id="file-input"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
            multiple
          />
        </label>

        <button
          onClick={generatePdfFromImages}
          className="button"
          disabled={uploadedImages.length === 0}
        >
          Generate PDF
        </button>
      </div>

      {/* <input type="file" id="file-input" hidden />
      <label
        htmlFor="file-input"
        className="relative btn-bg-color transition duration-150 ease-in-out font-bold text-sm sm:text-lg md:text-xl lg:text-2xl rounded-full px-24 sm:px-28 md:px-52 lg:px-72 py-6 whitespace-nowrap hover:cursor-pointer"
      >
        <div className="absolute left-0 px-4 py-0.5 sm:px-5 sm:py-1.5 md:px-7 md:py-1.5 xl:px-8 xl:py-2">
          <Image
            width="16"
            height="16"
            alt="plus"
            src="/../public/images/plus.png"
          />
        </div>
        Choose File
      </label> */}
    </>
  );
}

export default Button;
