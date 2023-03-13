import Image from "next/image";

function Footer() {
  return (
    <footer className="absolute bottom-0 w-full background-color md:h-20">
      <div className="mx-auto px-4 my-2">
        <div className="flex flex-col sm:flex-row sm:justify-around my-5">
          {/* <!-- logo --> */}
          <div className="flex justify-center items-center space-x-2">
            <a
              href="https://www.facebook.com/paulius.taraskevicius"
              target="_blank"
            >
              <Image
                width="24"
                height="24"
                alt="logo"
                src="/images/facebook.png"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/paulius-tara%C5%A1kevi%C4%8Dius-916b83234/"
              target="_blank"
            >
              <Image
                width="24"
                height="24"
                alt="logo"
                src="/images/linkedin.png"
              />
            </a>
            <a href="https://github.com/PauliusTaraskevicius" target="_blank">
              <Image
                width="24"
                height="24"
                alt="logo"
                src="/images/github.png"
              />
            </a>
            <a href="https://portfolio-paulius.netlify.app/" target="_blank">
              <Image
                width="24"
                height="24"
                alt="logo"
                src="/images/user.png"
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
