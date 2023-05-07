import { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import Navigation from "../components/Navigation";
import ReportsSkelton from "../components/Skeletons/Reports";
import MyBrandsSlider from "../components/MyBrandsSlider";
import MyProductsSlider from "../components/MyProductsSlider";

const Settings = () => {
   const [leftMenu, setleftMenu] = useState(true);
   const [windowSize, setwindowSize] = useState(true);
   const [loading, setloading] = useState(true);
   const [password, setpassword] = useState(false);
   const [inputPassword, setinputPassword] = useState("");

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
          <ReportsSkelton/>
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

                <div className="relative w-full flex items-center gap-2 rounded-md border-solid border border-[#AAAAAA] focus-within:border-main h-[60px] mt-8">
                    <div className="text-[#6E6E6E] text-[15px] font-[500] absolute -top-[10px] left-3 bg-white px-2">Password</div>
                    <input type={password === false ? "password" : "text"} placeholder='Enter your Password' className='w-full border-none outline-none h-full text-[15px] px-5 rounded-md' value={inputPassword} onChange={(e)=> {setinputPassword(e.target.value)}} />
                    <button onClick={()=> {setpassword(!password)}} className="h-full mr-5"><svg width="23" height="18" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.2493 8.59599C24.5043 5.75299 20.5343 0.984985 13.5653 0.984985C6.59631 0.984985 2.63131 5.75299 0.886306 8.59599C0.346806 9.46853 0.0610352 10.4741 0.0610352 11.5C0.0610352 12.5259 0.346806 13.5314 0.886306 14.404C2.63131 17.246 6.60131 22.015 13.5683 22.015C20.5353 22.015 24.5053 17.247 26.2503 14.404C26.7897 13.5313 27.0753 12.5257 27.0751 11.4998C27.0749 10.474 26.789 9.46844 26.2493 8.59599ZM24.3313 13.23C22.8313 15.667 19.4403 19.768 13.5683 19.768C7.69631 19.768 4.30331 15.663 2.80431 13.23C2.48376 12.7113 2.31398 12.1137 2.31398 11.504C2.31398 10.8943 2.48376 10.2966 2.80431 9.77799C4.30331 7.33699 7.69531 3.23499 13.5653 3.23499C19.4353 3.23499 22.8323 7.32999 24.3313 9.77399C24.6526 10.2931 24.8229 10.8915 24.8229 11.502C24.8229 12.1125 24.6526 12.7109 24.3313 13.23Z" fill={password === false ? "black" : "#0C77FF"}/><path d="M13.5684 5.87399C12.4557 5.87399 11.3679 6.20395 10.4427 6.82214C9.51756 7.44034 8.79646 8.319 8.37064 9.34702C7.94482 10.375 7.83341 11.5062 8.05049 12.5976C8.26757 13.6889 8.80339 14.6914 9.5902 15.4782C10.377 16.265 11.3795 16.8008 12.4708 17.0179C13.5621 17.235 14.6933 17.1236 15.7214 16.6977C16.7494 16.2719 17.628 15.5508 18.2462 14.6256C18.8644 13.7004 19.1944 12.6127 19.1944 11.5C19.1944 10.7612 19.0489 10.0296 18.7661 9.34702C18.4834 8.66444 18.069 8.04423 17.5466 7.52181C17.0241 6.99939 16.4039 6.58498 15.7214 6.30225C15.0388 6.01951 14.3072 5.87399 13.5684 5.87399ZM13.5684 14.874C12.9008 14.8742 12.2481 14.6764 11.693 14.3056C11.1378 13.9348 10.7051 13.4078 10.4495 12.791C10.1939 12.1743 10.127 11.4956 10.2572 10.8408C10.3874 10.186 10.7088 9.58457 11.1809 9.11251C11.653 8.64045 12.2544 8.31899 12.9092 8.18879C13.564 8.0586 14.2427 8.12552 14.8594 8.38109C15.4761 8.63666 16.0032 9.0694 16.374 9.62457C16.7448 10.1797 16.9426 10.8324 16.9424 11.5C16.9421 12.3948 16.5866 13.2528 15.9539 13.8855C15.3212 14.5182 14.4631 14.8737 13.5684 14.874Z" fill={password === false ? "black" : "#0C77FF"}/></svg></button>
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