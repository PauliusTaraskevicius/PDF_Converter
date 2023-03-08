import Image from "next/image";

function Button() {
  return (
    <button className="relative btn-bg-color transition duration-150 ease-in-out font-bold text-sm sm:text-lg md:text-xl lg:text-2xl rounded-full px-24 sm:px-28 md:px-52 lg:px-72 py-6 whitespace-nowrap">
      <div className="absolute left-0 px-4 py-0.5 sm:px-5 sm:py-1.5 md:px-7 md:py-1.5 xl:px-8 xl:py-2">
        <Image
          width="16"
          height="16"
          alt="plus"
          src="/../public/images/plus.png"
        />
      </div>
      Choose File
    </button>
  );
}

export default Button;
