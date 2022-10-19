import { DownloadIcon } from "../Icons";

const HomeBanner = () => {
  return (
    <div className="flex mx-auto w-full justify-around mt-36 mb-48">
      <div className="">
        <div className="flex items-center gap-[10px]">
          <div className="w-10 h-1 bg-primary"></div>
          <p className="text-3xl font-medium text-primary">Hello</p>
        </div>
        <h2 className=" mt-5 uppercase text-[90px] leading-[120%] text-white font-bold">
          I&#8217;m yeasir arafat
        </h2>
        <h6 className="text-3xl text-secondary mt-8">Frontend Developer</h6>
        <div className="flex mt-14 gap-7 items-center">
          <a href='3' className="py-4 hover:bg-[#171F38] duration-150 px-12 rounded-xl text-primary text-lg font-medium border-2 border-primary ">
            Hire Me
          </a>
          <a
            className="flex gap-1 hover:border-b-0 duration-200 items-center border-b-2 text-primary text-lg"
            href="#"
          >
            Download CV <DownloadIcon />
          </a>
        </div>
      </div>
      <div className="h-[555px] w-[495px]">
        <img
          alt=""
          className="w-full rounded-tl-[80px] rounded-bl-[80px]"
          src="BannerPic.png"
        />
      </div>
    </div>
  );
};
export default HomeBanner;



