import { useCallback, useState } from "react";
import Image from "next/image";
import * as Helpers from "../../helpers/helpers";
import FilesSection from "../files_section/files-section";
import Button from "../buttons/button";

function Hero() {
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
    <section>
      <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
          <h1 className="primary-color text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl text-center leading-8 md:leading-8">
            Reformat a JPG, PNG, or other image to a
            <span className="secondary-color px-2">PDF</span>
            file in a few seconds.
          </h1>
          <div className="flex justify-center items-center mt-10">
            <FilesSection uploadedImages={uploadedImages} />
          </div>
          <div className="flex justify-center items-center mt-20">
            <Button
              uploadedImages={uploadedImages}
              handleImageUpload={handleImageUpload}
              generatePdfFromImages={generatePdfFromImages}
            />
          </div>
          <p className="primary-color mt-5 sm:mt-20 lg:w-10/12 font-normal text-center text-sm sm:text-sm md:text-2xl">
            How to Convert Files to and from PDF
            <span className="secondary-color px-1">Free</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
