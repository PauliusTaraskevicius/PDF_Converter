import jsPDF from "jspdf";

const A4_PAPER_DIMENSIONS = {
  //   width: 210,
  //   height: 297,
  width: 600,
  height: 900,
};

const A4_PAPER_RATIO = A4_PAPER_DIMENSIONS.width / A4_PAPER_DIMENSIONS.height;

export const imageDimensionsOnA4 = (dimensions) => {
  const isLandscapeImage = dimensions.width >= dimensions.height;

  if (isLandscapeImage) {
    return {
      width: A4_PAPER_DIMENSIONS.width,
      height:
        A4_PAPER_DIMENSIONS.width / (dimensions.width / dimensions.height),
    };
  }

  const imageRatio = dimensions.width / dimensions.height;

  if (imageRatio > A4_PAPER_RATIO) {
    const imageScaleFactor =
      (A4_PAPER_RATIO * dimensions.height) / dimensions.width;

    const scaledImageHeight = A4_PAPER_DIMENSIONS.height * imageScaleFactor;

    return {
      height: scaledImageHeight,
      width: scaledImageHeight * imageRatio,
    };
  }

  return {
    width: A4_PAPER_DIMENSIONS.height / (dimensions.height / dimensions.width),
    height: A4_PAPER_DIMENSIONS.height,
  };
};

export const fileToImageURL = (file) => {
  return new Promise(function (resolve, reject) {
    const image = new Image(file.type);

    image.onload = () => {
      resolve(image);
    };

    image.onerror = () => {
      reject(new Error("Failed to convert File to Image"));
    };

    image.src = URL.createObjectURL(file);
  });
};

export const generatePdfFromImages = (images) => {
  const doc = new jsPDF({
    orientation: "p",
    unit: "pt",
    format: [A4_PAPER_DIMENSIONS.width, A4_PAPER_DIMENSIONS.height],
  });

  doc.deletePage(1);

  images.forEach((image) => {
    const imageDimensions = imageDimensionsOnA4({
      width: image.width,
      height: image.height,
    });

    doc.addPage();
    doc.addImage(
      image.src,
      image.imageType,
      A4_PAPER_DIMENSIONS.width * 0.1,
      A4_PAPER_DIMENSIONS.height * 0.1
      //   (A4_PAPER_DIMENSIONS.width - imageDimensions.width) / 2,
      //   (A4_PAPER_DIMENSIONS.height - imageDimensions.height) / 2,
      //   imageDimensions.width,
      //   imageDimensions.height
    );
  });

  const pdfURL = doc.output("bloburl");
  window.open(pdfURL, "_blank");
};
