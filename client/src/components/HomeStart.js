import React from "react";

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


import MobileHomeStart from "./MobileHomeStart";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
/*
const useStyles = makeStyles((theme) => ({
  presentation: {
    display: "flex",
    width: "90%",
    margin: "auto",
    minHeight: "80vh",
    alignItems: "center",
    // eslint-disable-next-line
    ["@media (max-width:1024px)"]: {
      flexDirection: "column",
    },
  },
  introduction: {
    flex: 1,
    paddingLeft: 60,
    height: "340px",
  },
  safeFood: {
    fontSize: 64,
    fontWeight: 400,
  },
  delivery: {
    color: "#157a21",
    fontSize: 64,
    fontWeight: "bold",
    marginTop: -30,
    marginBottom: 20,
  },
  paragraph: {
    width: 400,
    fontSize: 14.5,
  },
  cover: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    height: "72vh",
  },
  coverImg: {
    height: "100%",
  },
  ctaOrder: {
    fontSize: 18,
    backgroundColor: "#f7a692",
    marginTop: 30,
  },
}));
*/
const HomeStart = () => {
//  const classes = useStyles();
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
   <>
  <div class="hidden md:block">  
    <div class="px-12 py-2  max-w-2xl mx-auto rounded-xl shadow-2xl flex items-center space-x-6">
    <div>
        <img class="h-12 w-11" src="https://imgur.com/7be4NIj.png" alt="logo"/>
        <p><span class="tag is-white  is-normal">Home</span></p> 
        </div>
        <div>
        <img class="h-12 w-11" src="https://imgur.com/NfwEbYK.png" alt="logo"/>
        <p><span class="tag is-white is-normal">Architect</span></p> 
        </div>
        <div>
        <img class="h-12 w-11" src="https://imgur.com/SxdcdNA.png" alt="logo"/>
        <p><span class="tag is-white is-normal">Contractor</span></p> 
        </div>
        <div>
        <img class="h-12 w-11" src="https://imgur.com/zMHRrQv.png" alt="logo"/>
        <p><span class="tag is-white  is-normal">Worker</span></p> 
        </div>
     
         <div> 
         <img class="h-12 w-11" src="https://imgur.com/fV4FyPl.png" alt="logo"/>
         <p><span class="tag is-white  is-normal">Tool</span></p> 
         </div>
         <div>
        <img class="h-12 w-11" src="https://imgur.com/vc8iwR3.png" alt="logo"/>
        <p><span class="tag is-white is-normal">Plumber </span></p> 
         </div>
         <div>   
             <img class="h-12 w-11" src="https://imgur.com/yWntN6k.png" alt="logo"/>
             <p><span class="tag is-white  is-normal">Electrician</span></p> 
         </div>
   </div>
  <div class="p-2  max-w-7xl mx-auto  items-center space-x-6">
   <Slider {...settings}>
        <div><img  class="h-140 w-120 rounded-xl shadow-xlg " src='https://imgur.com/YSRCfvM.png' alt=""/></div>
        <div><img  class="h-140 w-120 rounded-xl shadow-xlg " src='https://imgur.com/o2TsrSb.png' alt="Credit to Alisa Anton on Unsplash"/></div>
        <div><img  class="h-140 w-120 rounded-xl shadow-lg " src='https://imgur.com/zjXjqvh.png' alt="Credit to Igor Ovsyannykov on Unsplash"/></div>
        <div><img class="h-140 w-120 rounded-xl shadow-lg " src='https://imgur.com/oLXe3aR.png' alt="Credit to Pierre Châtel-Innocenti on Unsplash"/></div>
         <div><img class="h-140 w-120 rounded-xl shadow-lg " src='https://imgur.com/SxPArXS.png' alt="Credit to Cristina Gottardi on Unsplash"/></div>
        </Slider>
    </div>
    </div>
    <div class="lg:hidden lg:block">
    <MobileHomeStart />
    </div>
   </>
  );
};

export default React.memo(HomeStart);
