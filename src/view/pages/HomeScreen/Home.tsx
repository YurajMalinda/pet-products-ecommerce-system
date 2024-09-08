import React from "react";
import HeroPage from "../../../images/HeroPage/HeroPage.png";
import Grooming from "../../../images/HeroPage/dry-dog-food-svgrepo-com.svg";
import Hygeine from "../../../images/HeroPage/pet-litter-box-svgrepo-com.svg";
import Training from "../../../images/HeroPage/pet-toys-ball-svgrepo-com.svg";
import Himalaya from "../../../images/products/Himalaya Pet.png";
import bone from "../../../images/HeroPage/Bone.svg";
import { Button } from "@mui/material";

function Home() {
  return (
    <div className="p-4 flex flex-row bg-[#FFF6E5] h-[92vh] justify-center">
      <div className="flex flex-col self-center space-y-2">
        <div className="flex flex-col items-center font-semibold">
          <img className="h-32" src={Grooming} />
          <span>Grooming</span>
        </div>
        <div className="flex flex-col items-center font-semibold">
          <img className="h-32" src={Hygeine} />
          <span>Hygeine Care</span>
        </div>
        <div className="flex flex-col items-center font-semibold">
          <img className="h-32" src={Training} />
          <span>Training Camp</span>
        </div>
      </div>
      <img className="h-[65vh] self-center" src={HeroPage} />
      <div className="flex flex-col self-center">
        <div>
          <img className="h-32 w-32" src={Himalaya} />
          <div className="flex flex-col space-y-1">
            <span className="text-[0.8rem]">Himalaya | 3Kg</span>
            <span className="text-[0.6rem] font-light">
              Healthy PET food - Adult is a complete and balanced <br /> food
              with over 20 nutrients, vitamins, and minerals.
            </span>
            <button className="w-20 text-[10px] text-[#202783] border-[1px] border-black hover:bg-[#231E54] p-1 rounded hover:text-white">
              Buy Now
            </button>
          </div>
        </div>
        <div>
          <div className="space-x-2 flex-row flex">
            <img className="w-8" src={bone} />
            <img className="w-8" src={bone} />
            <img className="w-8" src={bone} />
            <img className="w-8" src={bone} />
            <img className="w-8" src={bone} />
            <span className="text-[12px]">4.7/5</span>
          </div>
          <span className="text-[0.7rem] font-light">
            "I highly recommend! PawMart for buying pet foods and accessories
            for your pet."
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
