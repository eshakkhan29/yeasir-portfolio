import { SkillIcon } from "../Icons";

const WhatIDo = () => {
  return (
    <div className="flex mb-52 gap-24 items-center">
      <div className="flex gap-16 items-center">
        <div>
          <div className="flex items-center w-[18.75rem] h-[10.625rem] rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px] gap-5 bg-[#171F38]">
            <div className=" w-1/2 flex justify-center relative">
              <div className="w-[60px] h-[60px] absolute rounded-full  bg-[#e84a4a29] top-[-10px] right-[25px] "></div>
              <div className="text-6xl  text-primary">
                <SkillIcon />
              </div>
            </div>
            <p className="text-xl text-white font-bold">Mobile App Design</p>
          </div>
          <div className="flex items-center mt-16 w-[18.75rem] h-[10.625rem] rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[30px]  gap-5 bg-[#171F38]">
            <div className=" w-1/2 flex justify-center relative">
              <div className="w-[60px] h-[60px] absolute rounded-full  bg-[#e84a4a29] top-[-10px] right-[25px] "></div>
              <div className="text-6xl  text-primary">
                <SkillIcon />
              </div>
            </div>
            <p className="text-xl text-white font-bold">Website Design</p>
          </div>
        </div>
        <div className="flex items-center pl-10 w-[18.75rem] h-[10.625rem] rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px] gap-5 bg-[#171F38]">
          <div className=" w-1/2 flex justify-center relative">
            <div className="w-[60px] h-[60px] absolute rounded-full  bg-[#e84a4a29] top-[-10px] right-[25px] "></div>
            <div className="text-6xl  text-primary">
              <SkillIcon />
            </div>
          </div>
          <p className="text-xl text-white font-bold">
            prototyping & wireframing
          </p>
        </div>
      </div>
      <div>
        <div>
          <div className="flex items-center mb-5 gap-[10px]">
            <div className="w-8 h-1 bg-primary"></div>
            <p className="text-lg font-medium text-primary">What I do </p>
          </div>
          <p className="text-2xl text-white font-bold mb-6">
            Better design, <br /> Better experience
          </p>
          <p className="text-secondary ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam a
            natus inventore magni, iusto vitae ut, ullam cupiditate voluptatibus
            laboriosam dicta asperiores eveniet aspernatur amet officiis{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default WhatIDo;
