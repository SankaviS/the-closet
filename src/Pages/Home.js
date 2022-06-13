import React from "react";
import image from "./../Pictures/headimage.png";
import image1 from "./../Pictures/kurta.webp";
import image2 from "./../Pictures/dress.webp";
import image3 from "./../Pictures/handbag.webp";
import image4 from "./../Pictures/jeans.webp";
import image5 from "./../Pictures/infant.webp";
import image6 from "./../Pictures/saree.webp";
import image7 from "./../Pictures/shirts.webp";
import image8 from "./../Pictures/teens.webp";
import image9 from "./../Pictures/tees.webp";
import image10 from "./../Pictures/tops.webp";
import image11 from "./../Pictures/tousers.webp";
import image12 from "./../Pictures/tracks.webp";
import image13 from "./../Pictures/beauty.webp";
import image14 from "./../Pictures/kids.webp";
import image15 from "./../Pictures/shoes.webp";
import image16 from "./../Pictures/plussize.webp";
import image17 from "./../Pictures/top1.webp";
import image18 from "./../Pictures/top2.webp";
import image19 from "./../Pictures/top3.webp";
import image20 from "./../Pictures/top4.webp";
import image21 from "./../Pictures/top5.webp";
import image22 from "./../Pictures/top6.webp";
import image23 from "./../Pictures/top7.webp";
import image24 from "./../Pictures/deal1.webp";
import image25 from "./../Pictures/deal2.webp";
import image26 from "./../Pictures/deal3.webp";
import image27 from "./../Pictures/deal4.webp";
import image28 from "./../Pictures/deal5.webp";
import image29 from "./../Pictures/deal6.webp";
import image30 from "./../Pictures/deal7.webp";
import image31 from "./../Pictures/brand.webp";
import image32 from "./../Pictures/brand1.webp";
import image33 from "./../Pictures/brand2.webp";
import image34 from "./../Pictures/brand3.webp";
import image35 from "./../Pictures/brand4.webp";
import image36 from "./../Pictures/brand5.webp";

import classes from "./../styles/home.module.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className={classes.app}>
      <Link to="/women">
        <img className={classes.img} src={image} alt="Logo" />
      </Link>
      <h1 className={classes.h1}>DEAL OF THE DAY</h1>
      <Link to="/beauty">
        <img className={classes.img2} src={image24} alt="Logo" />
        <img className={classes.img2} src={image25} alt="Logo" />
      </Link>
      <Link to="/men">
        <img className={classes.img2} src={image26} alt="Logo" />
        <img className={classes.img2} src={image29} alt="Logo" />
      </Link>
      <Link to="/women">
        <img className={classes.img2} src={image28} alt="Logo" />
        <img className={classes.img2} src={image27} alt="Logo" />
        <img className={classes.img2} src={image30} alt="Logo" />
      </Link>

      <h1 className={classes.h1}>TOP PICKS</h1>
      <Link to="/women">
        <img className={classes.img2} src={image17} alt="Logo" />
        <img className={classes.img2} src={image18} alt="Logo" />
        <img className={classes.img2} src={image19} alt="Logo" />
        <img className={classes.img2} src={image20} alt="Logo" />
      </Link>
      <Link to="/men">
        <img className={classes.img2} src={image21} alt="Logo" />
        <img className={classes.img2} src={image22} alt="Logo" />
        <img className={classes.img2} src={image23} alt="Logo" />
      </Link>
      <h1 className={classes.h1}>CATEGORIES TO BAG</h1>
      <Link to="/women">
        <img className={classes.img1} src={image1} alt="Logo" />
        <img className={classes.img1} src={image2} alt="Logo" />
        <img className={classes.img1} src={image6} alt="Logo" />
        <img className={classes.img1} src={image10} alt="Logo" />
        <img className={classes.img1} src={image16} alt="Logo" />
        <img className={classes.img1} src={image3} alt="Logo" />
      </Link>
      <Link to="/men">
        <img className={classes.img1} src={image12} alt="Logo" />
        <img className={classes.img1} src={image4} alt="Logo" />
        <img className={classes.img1} src={image7} alt="Logo" />
        <img className={classes.img1} src={image9} alt="Logo" />
        <img className={classes.img1} src={image15} alt="Logo" />
        <img className={classes.img1} src={image11} alt="Logo" />
      </Link>
      <Link to="/beauty">
        <img className={classes.img1} src={image13} alt="Logo" />
      </Link>
      <Link to="/kids">
        <img className={classes.img1} src={image14} alt="Logo" />
        <img className={classes.img1} src={image5} alt="Logo" />
        <img className={classes.img1} src={image8} alt="Logo" />
      </Link>

      <h1 className={classes.h1}>DEALS ON TOP BRANDS</h1>
      <Link to="/men">
        <img className={classes.img2} src={image31} alt="Logo" />
        <img className={classes.img2} src={image32} alt="Logo" />
        <img className={classes.img2} src={image33} alt="Logo" />
        <img className={classes.img2} src={image34} alt="Logo" />
        <img className={classes.img2} src={image35} alt="Logo" />
        <img className={classes.img2} src={image36} alt="Logo" />
      </Link>
    </div>
  );
};

export default Home;
