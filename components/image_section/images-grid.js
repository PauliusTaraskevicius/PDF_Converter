import Docs from "../buttons/grid-buttons/docs";
import FastForward from "../buttons/grid-buttons/fast-forward";
import Lock from "../buttons/grid-buttons/lock";
import Smile from "../buttons/grid-buttons/smile";
import ThumbsUp from "../buttons/grid-buttons/thumbs-up";
import Cloud from "../buttons/grid-buttons/cloud";

function ImagesGrid() {
  return (
    <div className="container mx-auto -mt-10 pb-36">
      <div className="px-9 md:lg:xl:px-80 ">
        <div className="grid grid-cols-2 md:lg:xl:grid-cols-3">
          <div className="p-10 flex flex-col items-center text-center">
            <FastForward />
            <p className="text-base font-medium mt-3">Most Experienced Team</p>
          </div>

          <div className="p-10 flex flex-col items-center text-center">
            <Lock />
            <p className="text-base font-medium mt-3">Best Test preparation</p>
          </div>

          <div className="p-10 flex flex-col items-center text-center ">
            <ThumbsUp />
            <p className="text-base font-medium mt-3">
              Admission process Guidance
            </p>
          </div>

          <div className="p-10 flex flex-col items-center text-center">
            <Smile />
            <p className="text-base font-medium mt-3">Best Track Record</p>
          </div>

          <div className="p-10 flex flex-col items-center text-center">
            <Docs />
            <p className="text-base font-medium mt-3">Free Mock Exams</p>
          </div>

          <div className="p-10 flex flex-col items-center text-center">
            <Cloud />
            <p className="text-base font-medium mt-3">Genuine Visa Advice</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImagesGrid;
