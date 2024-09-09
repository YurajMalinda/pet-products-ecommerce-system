import React from "react";
import HeroPage from "../../../images/HeroPage/HeroPage.png";
import Grooming from "../../../images/HeroPage/dry-dog-food-svgrepo-com.svg";
import Hygiene from "../../../images/HeroPage/pet-litter-box-svgrepo-com.svg";
import Training from "../../../images/HeroPage/pet-toys-ball-svgrepo-com.svg";
import Himalaya from "../../../images/products/Himalaya Pet.png";
import bone from "../../../images/HeroPage/Bone.svg";
import boneTransparent from "../../../images/HeroPage/Bone-Transparent.svg";
import ProPic from "../../../images/HeroPage/ProPic.svg";
import Underline from "../../../images/HeroPage/Underline.png";
import { Button } from "@mui/material";

function Home() {
  return (
    <div className="bg-[#FFF6E5] flex-1">
      <div className="flex flex-col">
        <div className="flex flex-col leading-none">
          <span className="text-center text-[3.9rem] font-bold text-[#062D3E] mb-3 mt-4 font-serif">
            GROOMING AND SUPPLIES
          </span>
          <span className="text-center text-[2.9rem] font-bold text-[#F29301] mb-3 font-serif">
            AT THE BEST RATES
          </span>
          <p className="text-center self-center leading-5 font-light text-[0.8rem] w-2/5">
            We provide a wide range of pet care services to keep your pets happy
            and healthy. Pawmart is your one-stop shop for all things
            pet-related. Shop with us for the best care for your furry friends!
          </p>
        </div>

        <div className="flex flex-row justify-center space-x-16 mb-2">
          <div className="flex flex-col self-center space-y-12">
            <div className="flex flex-col items-center font-semibold">
              <img className="h-20" src={Grooming} />
              <span className="text-[0.8rem]">Grooming</span>
            </div>
            <div className="flex flex-col items-center font-semibold">
              <img className="h-20" src={Hygiene} />
              <span className="text-[0.8rem]">Hygiene Care</span>
            </div>
            <div className="flex flex-col items-center font-semibold">
              <img className="h-20" src={Training} />
              <span className="text-[0.8rem]">Training Camp</span>
            </div>
          </div>
          <img className="h-[62vh] self-center" src={HeroPage} />
          <div className="flex flex-col self-center space-y-16">
            <div>
              <img className="h-32 w-32" src={Himalaya} />
              <div className="flex flex-col space-y-1">
                <span className="text-[0.8rem]">Himalaya | 3Kg</span>
                <p className="text-[0.6rem] font-light">
                  Healthy PET food - Adult is a complete and balanced
                  <br /> food over 20 nutrients, vitamins, and minerals.
                </p>
                <button className="w-20 text-[10px] text-[#202783] border-[1px] border-black hover:bg-[#231E54] p-1 rounded hover:text-white">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <div className="space-x-2 flex-row flex">
                <img className="w-7" src={bone} />
                <img className="w-7" src={bone} />
                <img className="w-7" src={bone} />
                <img className="w-7" src={bone} />
                <img className="w-7" src={boneTransparent} />
                <span className="text-[12px]">4.7/5</span>
              </div>
              <p className="text-[0.6rem] font-light ">
                "Pawmart offers a great selection of pet products and an <br />{" "}
                easy-to-use website. The checkout was quick, and my order
                <br />
                arrived on time. Excellent customer service.
                <br /> Highly recommended!"
              </p>
              <div className="flex flex-row space-x-2 items-center">
                <img className="w-8" src={ProPic} />
                <div className="flex flex-col">
                  <span className="text-[0.6rem] font-semibold">
                    Dave Malik
                  </span>
                  <span className="text-[0.5rem]">Sri Lanka</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 flex flex-1 justify-center bg-[#fdefd3]">
        <div className="flex flex-col">
          <span className="text-center text-[1.1rem] text-[#062D3E] font-serif font-semibold">
            OUR MOST POPULAR PRODUCTS
          </span>
          <img
            src={Underline}
            className="w-3/5 h-auto self-center relative bottom-2"
          />
        </div>

        
      </div>
    </div>
  );
}

export default Home;
