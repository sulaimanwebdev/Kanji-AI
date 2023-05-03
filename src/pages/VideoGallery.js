import { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import Navigation from "../components/Navigation";
import VideoTable from "./VideoTable";

const VideoGallery = () => {
   const [leftMenu, setleftMenu] = useState(true);
   const [windowSize, setwindowSize] = useState(true);

  //  This useEffect is for sidebar responsiveness
   useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1100) {
        setwindowSize(false)
        setleftMenu(false);

      } else {
        setleftMenu(true);
        setwindowSize(true)

      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      <div>
         <SideBar leftMenu={leftMenu} setleftMenu={setleftMenu}/>

        <div className={`px-5 pt-3 pb-5 ${leftMenu === true ? windowSize === true ? "ml-[240px]" : "ml-[60px]" : "ml-[60px]"}`}>
           <div className="flex items-center justify-between">
              <div className="text-[22px] text-[#3D3D3D] font-[800]">Dashboard</div>
              <Navigation leftMenu={leftMenu} setleftMenu={setleftMenu}/>
           </div>
    
          <div className="mt-8">
             <div className="flex lg:items-center lg:justify-between flex-col lg:flex-row gap-5 lg:gap-0">
              <div>
               <div className="text-[19px] font-[500]">Weekly Report - Key Takeaways</div>
               <div className="text-[15px] text-not-gray mt-1">March 24, 2023</div>
              </div>

              {/* search bar */}
               <div className="relative rounded-full bg-white border-solid border border-[#DEDEDE] focus-within:border-main flex items-center justify-between gap-2 h-[50px] px-3 lg:max-w-[600px] 2xl:max-w-[800px]">
                <div className="flex items-center gap-2.5 w-full">
                  <img src="/images/search.svg" alt="search" />
                  <input type="text" placeholder="Search for Keywords" className="w-full h-full border-none outline-none" />
                </div>

                <div className="flex items-center justify-end gap-1 w-fit h-full py-2 whitespace-nowrap">
                  <div className="flex items-center gap-2 bg-[#F8F8F8] text-[14px] px-4 pr-6 h-full rounded-full">
                  Tutorial Video
                  <img src="/images/cross.svg" alt="cross" className="cursor-pointer" />
                  </div>

                  <div className="flex items-center gap-2 bg-[#F8F8F8] text-[14px] px-4 pr-6 h-full rounded-full">
                  Tom Ford
                  <img src="/images/cross.svg" alt="cross" className="cursor-pointer" />
                  </div>

                  <div className="flex items-center gap-2 bg-[#F8F8F8] text-[14px] px-4 pr-6 h-full rounded-full">
                  Tom Ford
                  <img src="/images/cross.svg" alt="cross" className="cursor-pointer" />
                  </div>
                </div>
               </div>
             </div>

            {/* main content */}
           <div className="mt-7">

             <VideoTable/>

           </div>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoGallery;