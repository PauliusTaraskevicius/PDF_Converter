import Image from "next/image";

function FilesSection({ uploadedImages }) {
  return (
    <>
      {uploadedImages.length > 0 ? (
        uploadedImages.map((image) => (
          <Image key={image.src} src={image.src} alt="img" />
        ))
      ) : (
        <div>
          <p className="primary-color mt-5 sm:mt-20 lg:w-10/12 font-normal text-center text-sm sm:text-sm md:text-xl whitespace-nowrap">
            Upload some images...
          </p>
        </div>
      )}
    </>
  );
}

export default FilesSection;
