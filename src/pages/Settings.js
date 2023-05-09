import { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import Navigation from "../components/Navigation";
import SettingsSkelton from "../components/Skeletons/Settings";
import MyBrandsSlider from "../components/MyBrandsSlider";
import MyProductsSlider from "../components/MyProductsSlider";

const Settings = () => {
   const [leftMenu, setleftMenu] = useState(true);
   const [windowSize, setwindowSize] = useState(true);
   const [loading, setloading] = useState(true);

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

    // skeleton
    setTimeout(() => {
      setloading(false);
    }, 500);

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
    {
        loading ? (
          <SettingsSkelton/>
        ):
      <div>
         <SideBar leftMenu={leftMenu} setleftMenu={setleftMenu}/>

        <div className={`px-5 pt-3 pb-5 ${leftMenu === true ? windowSize === true ? "ml-[240px]" : "ml-[60px]" : "ml-[60px]"}`}>
           <div className="flex items-center justify-between">
              <div className="text-[22px] text-[#3D3D3D] font-[800]">Settings</div>
              <Navigation/>
           </div>
    
            {/* main content */}
           <div className="mt-12">
            <div className="text-[19px] font-[500] mb-3">My Profile</div>
             <div className="cardShadow bg-white rounded-xl flex items-center flex-col md:flex-row gap-8 p-7 mb-8">
                <div className="bg-[#F3F1F1] rounded-full md:min-w-[200px] md:min-h-[200px] overflow-hidden"><img src="/images/person2.png" alt="person" className="w-full h-full object-cover object-center" /></div>
                <div className="w-full">
                <div className="relative w-full flex items-center rounded-md border-solid border border-[#AAAAAA] focus-within:border-main h-[60px]">
                    <div className="text-[#6E6E6E] text-[15px] font-[500] absolute -top-[10px] left-3 bg-white px-2">Full Name</div>
                    <input type="text" placeholder='John Carter' className='w-full border-none outline-none h-full text-[15px] px-5 rounded-md' />
                </div>

                <div className="relative w-full flex items-center rounded-md border-solid border border-[#AAAAAA] focus-within:border-main h-[60px] mt-8">
                    <div className="text-[#6E6E6E] text-[15px] font-[500] absolute -top-[10px] left-3 bg-white px-2">Email</div>
                    <input type="email" placeholder='JohnCarter@email.com' className='w-full border-none outline-none h-full text-[15px] px-5 rounded-md' />
                </div>

              </div>
             </div>

             <MyBrandsSlider/>

             <div className="mt-5">
             <MyProductsSlider/>
             </div>

          </div>
        </div>
      </div>
    }
    </>
  )
}

export default Settings;