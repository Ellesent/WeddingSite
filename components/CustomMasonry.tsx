import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "../styles/CustomMasonry.module.css"

const picNameArray = [
  "Pic1.jpg",
  "Pic2.jpg",
  "Pic3.jpg",
  "Pic4.jpg",
  "Pic5.jpg",
  "Pic6.jpg",
  "Pic7.jpg",
  "Pic8.jpg",
  "Pic9.jpg",
  "Pic10.jpg",
  "Pic11.jpg",
  "Pic12.jpg",
  "Pic13.jpg",
  "Pic14.jpg",
  "Pic15.jpg",
  "Pic16.jpg",
  "Pic17.jpg",
  "Pic18.jpg",
  "Pic19.jpg",
  "Pic20.jpg",
  "Pic21.jpg",
];

// The number of columns change by resizing the window
const CustomMasonry = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 750: 3, 900: 5}}>
      <Masonry>
      {picNameArray.map((pic) => (
        <img
        className={`${styles.img}`}
          key={pic}
          src={`https://storage.googleapis.com/casey-wedding-site-bucket/Masonry/${pic}`}
        />
      ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export { CustomMasonry };
