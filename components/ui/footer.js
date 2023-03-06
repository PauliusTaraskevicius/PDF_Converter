import Image from "next/image";

function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 background-color h-auto md:h-20">
      <div className="mx-auto px-4 my-2">
        <div className="flex flex-col sm:flex-row sm:justify-around my-5">
          {/* <!-- logo --> */}
          <div className="flex justify-center items-center space-x-2">
            <a href="#">
              <Image
                width="24"
                height="24"
                alt="logo"
                src="/../public/images/facebook.png"
              />
            </a>
            <a href="#">
              <Image
                width="24"
                height="24"
                alt="logo"
                src="/../public/images/linkedin.png"
              />
            </a>
            <a href="#">
              <Image
                width="24"
                height="24"
                alt="logo"
                src="/../public/images/github.png"
              />
            </a>
            <a href="#">
              <Image
                width="24"
                height="24"
                alt="logo"
                src="/../public/images/user.png"
              />
            </a>
            
          </div>

          <div className="flex flex-col items-center py-2">
            <div className="flex md:flex">
              <p className="text-white text-xs md:text-xl font-semibold leading-8">
                © 2023 PDF converter - made by Paulius Taraškevičius
              </p>
            </div>
          </div>

          <div className="hidden md:block">{/* empty div */}</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
