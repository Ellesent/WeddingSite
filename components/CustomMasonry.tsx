import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const picNameArray = [
  "20170328_133423.jpg",
  "20180104_133610.jpg",
  "20180104_162736.jpg",
  "20180106_184412.jpg",
  "20190701_112526.jpg",
  "EPCOT_DPIRIDESYSGMTT_20181203_414807647552.jpg",
  "EPCOT_WSMEX_20181203_414812015459.jpg",
  "FB_IMG_1570240037180.jpg",
  "FB_IMG_1624296254815.jpg",
  "IMG_0246.jpg",
  "IMG_0260.jpeg",
  "IMG_0333.JPG",
  "IMG_0698.jpg",
  "IMG_0970.jpg",
  "IMG_1087.jpg",
  "IMG_1103.jpg",
  "IMG_1154.jpg",
  "IMG_1257.jpg",
  "IMG_1374.jpg",
  "IMG_20191027_093708.jpg",
  "IMG_20201022_160141.jpg",
  "IMG_20210310_142723_01.jpg",
  "IMG_20210311_142612.jpg",
  "STUDIO_ROCKNRCOASTERRIDE_20181202_414800909117.jpg",
];

// The number of columns change by resizing the window
const CustomMasonry = () => {
  return (
    <Masonry columnsCount={5}>
          {picNameArray.map(pic => (
                <img key={pic} src={`https://storage.googleapis.com/casey-wedding-site-bucket/Masonry/${pic}`} />
          ))}
    </Masonry>
  );
};

export { CustomMasonry };
