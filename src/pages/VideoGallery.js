import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import SideBar from "../components/SideBar";
import Navigation from "../components/Navigation";

const VideoGallery = () => {
   const [leftMenu, setleftMenu] = useState(true);
   const [windowSize, setwindowSize] = useState(true);

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
             <div className="text-[19px] font-[500]">Weekly Report - Key Takeaways</div>
             <div className="text-[15px] text-not-gray mt-1">March 24, 2023</div>

           <div className="mt-10"></div>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoGallery;