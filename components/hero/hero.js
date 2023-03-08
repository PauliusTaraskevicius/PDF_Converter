import Button from "../buttons/button";
import ImagesGrid from "../image_section/images-grid";

function Hero() {
  return (
    <section className="bg-gray-100 mt-20">
      <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
          <h1 className="primary-color text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl text-center leading-8 md:leading-8">
            Reformat a JPG, PNG, or other image to a
            <span className="secondary-color px-2">PDF</span>
            file in a few seconds.
          </h1>
          <div className="flex justify-center items-center mt-20">
            <Button />
          </div>
          <p className="primary-color mt-5 sm:mt-20 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-sm md:text-2xl">
            How to Convert Files to and from PDF
            <span className="secondary-color px-1">Free</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
