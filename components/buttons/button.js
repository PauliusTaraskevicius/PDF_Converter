import Image from "next/image";

function Button({ uploadedImages, handleImageUpload, generatePdfFromImages }) {
  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <label
          htmlFor="file-input"
          className="transform rounded-full btn-bg-color px-5 py-3 md:px-8 md:py-5 lg:px-8 lg:py-5 font-semibold lg:text-lg hover:cursor-pointer flex-nowrap"
        >
          <input
            id="file-input"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
            multiple
          />
          <div className="absolute left-0 px-1.5 py-1.5 sm:px-1.5 sm:py-1.5 md:px-2.5 md:py-1.5 lg:px-2.5 lg:py-2 xl:px-3 xl:py-2">
            <Image
              width="12"
              height="12"
              alt="plus"
              src="/../public/images/plus.png"
            />
          </div>
          Choose File
        </label>
        <div className="mx-2">
          <button
            onClick={generatePdfFromImages}
            className="generate-btn rounded-full px-5 py-3 md:px-8 md:py-5 lg:px-8 lg:py-5 font-semibold lg:text-lg hover:cursor-pointer"
            disabled={uploadedImages.length === 0}
          >
            Generate PDF
          </button>
        </div>
      </div>
    </>
  );
}

export default Button;
