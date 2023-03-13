function FilesSection({ uploadedImages }) {
  return (
    <>
      {uploadedImages.length > 0 ? (
        uploadedImages.map((image) => <img key={image.src} src={image.src} />)
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
