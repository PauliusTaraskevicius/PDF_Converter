import { useState } from "react";

import Image from "next/image";

function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="background-color h-20">
      <div className="mx-auto px-4">
        <div className="flex justify-between md:justify-around">
          {/* <!-- logo --> */}
          <div className="flex items-center py-5">
            <Image
              width="49"
              height="43"
              alt="logo"
              src="/../public/images/ic_pdf_file.png"
            />
          </div>

          <div className="flex items-center py-5">
            <Image
              width="49"
              height="43"
              alt="logo"
              src="/../public/images/ic_search_file.png"
            />
            <div className="flex md:flex">
              <h1 className="text-white text-xl font-semibold leading-8">
                Online PDF Converter
              </h1>
            </div>
          </div>

          <div className="hidden md:block">{/* empty div */}</div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
