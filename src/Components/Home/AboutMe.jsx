import { CheckIcon, DownloadIcon } from "../Icons";

const AboutMe = () => {
  return (
    <div className="flex justify-between  mb-52 w-full">
      <div className="w-full">
        <div className="mb-11">
          <div className="flex items-center mb-5 gap-[10px]">
            <div className="w-8 h-1 bg-primary"></div>
            <p className="text-lg font-medium text-primary">About Me </p>
          </div>
          <p className="text-2xl text-white font-bold mb-6">
            Better design, <br /> Better experience
          </p>
          <p className="text-secondary w-[50ch]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam a
            natus inventore magni, iusto vitae ut, ullam cupiditate voluptatibus
            laboriosam dicta asperiores eveniet aspernatur amet officiis{" "}
          </p>
        </div>
        <div className="grid mb-14 grid-cols-2">
          <div className="flex items-center mb-8 gap-5">
            <div className="text-primary text-lg">
              <CheckIcon />
            </div>
            <p className="text-lg font-medium text-white ">Problem Solving</p>
          </div>
          <div className="flex items-center mb-8 gap-5">
            <div className="text-primary text-lg">
              <CheckIcon />
            </div>
            <p className="text-lg font-medium text-white ">Creative Idea</p>
          </div>
          <div className="flex items-center  gap-5">
            <div className="text-primary text-lg">
              <CheckIcon />
            </div>
            <p className="text-lg font-medium text-white ">Search A Lot</p>
          </div>
          <div className="flex items-center  gap-5">
            <div className="text-primary text-lg">
              <CheckIcon />
            </div>
            <p className="text-lg font-medium text-white ">High Quality</p>
          </div>
        </div>
        <div className="flex  gap-7 items-center">
          <a
            href="3"
            className="py-4 hover:bg-[#171F38] duration-150 px-12 rounded-xl text-primary text-lg font-medium border-2 border-primary "
          >
            Hire Me
          </a>
          <a
            className="flex gap-1 hover:border-b-0  items-center border-b-2 text-primary text-lg"
            href="#"
          >
            Download CV <DownloadIcon />
          </a>
        </div>
      </div>
      <div className="grid w-full grid-cols-2 gap-x-16 ">
        <div className="w-[19.375rem] bg-[#d9d9d9] bg-opacity-5 h-[12.5rem] p-4 rounded-xl">
          <img
            className="w-full rounded-xl "
            src="/galleryImage/gallery1.png"
          />
        </div>
        <div className="w-[14.25rem] bg-[#d9d9d9] bg-opacity-5 h-[20.875rem] p-4 rounded-xl">
          <img className="w-full rounded-xl" src="/galleryImage/gallery2.png" />
        </div>
        <div className="w-[14.25rem] mt-[-7.1875rem] ml-[5.125rem] bg-[#d9d9d9] bg-opacity-5 h-[20.875rem] p-4 rounded-xl">
          <img className="w-full rounded-xl" src="/galleryImage/gallery3.png" />
        </div>
        <div className="w-[14.1875rem] mt-6 bg-[#d9d9d9] bg-opacity-5 h-[16.25rem] p-4 rounded-xl">
          <img
            className="w-full rounded-xl "
            src="/galleryImage/gallery4.png"
          />
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
