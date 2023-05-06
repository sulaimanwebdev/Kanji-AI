import { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import Navigation from "../components/Navigation";
import VideoGallerySkelton from "../components/Skeletons/VideoGallery";
import OngoingReports from "../components/OngoingReports";
import CompletedReports from "../components/CompletedReports";

const Reports = () => {
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
          <VideoGallerySkelton/>
        ):
      <div>
         <SideBar leftMenu={leftMenu} setleftMenu={setleftMenu}/>

        <div className={`px-5 pt-3 pb-5 ${leftMenu === true ? windowSize === true ? "ml-[240px]" : "ml-[60px]" : "ml-[60px]"}`}>
           <div className="flex items-center justify-between">
              <div className="text-[22px] text-[#3D3D3D] font-[800]">Reports</div>
              <Navigation leftMenu={leftMenu} setleftMenu={setleftMenu}/>
           </div>
    
             

            {/* main content */}
           <div className="mt-12">
           <div className="flex items-center justify-between mb-3">
             <div className="text-[19px] font-[500]">Ongoing Reports</div>
             <div><button className="bg-main transition hover:bg-main-hover text-white px-6 py-3 rounded-full flex items-center gap-2.5 flex-row-reverse">Create Report <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.1873 22.066H4.69834C4.64481 22.0501 4.59036 22.0374 4.53531 22.028C3.34248 21.8878 2.24082 21.3203 1.43412 20.4305C0.627416 19.5407 0.17028 18.3888 0.147312 17.188C0.127979 13.2227 0.127979 9.25601 0.147312 5.28801C0.164925 4.27457 0.493944 3.29108 1.08966 2.47102C1.68539 1.65097 2.51898 1.03404 3.47733 0.703995C3.85933 0.574995 4.26332 0.504017 4.65632 0.414017H17.2323C17.2772 0.430712 17.3234 0.443756 17.3703 0.453018C18.3317 0.571628 19.2376 0.968098 19.9771 1.59386C20.7165 2.21962 21.2573 3.04746 21.5333 3.976C21.6283 4.304 21.6773 4.645 21.7473 4.976V17.492C21.7343 17.552 21.7173 17.612 21.7073 17.673C21.6063 18.5728 21.2576 19.4269 20.6998 20.1402C20.1421 20.8535 19.3972 21.398 18.5483 21.713C18.1038 21.8633 17.6489 21.9813 17.1873 22.066ZM13.8103 12.173C14.3373 12.173 14.8653 12.173 15.3923 12.173C15.5193 12.1719 15.6448 12.1455 15.7614 12.0954C15.8781 12.0454 15.9837 11.9727 16.0721 11.8815C16.1605 11.7904 16.2299 11.6826 16.2763 11.5644C16.3227 11.4462 16.3451 11.3199 16.3423 11.193C16.3397 11.0604 16.3101 10.9298 16.2552 10.8091C16.2003 10.6884 16.1212 10.5802 16.023 10.4912C15.9248 10.4021 15.8094 10.3341 15.6839 10.2912C15.5584 10.2484 15.4255 10.2316 15.2933 10.242C14.2733 10.242 13.2543 10.242 12.2343 10.242C11.9343 10.242 11.9093 10.213 11.9093 9.91402C11.9093 8.88535 11.9093 7.85668 11.9093 6.82802C11.9174 6.67961 11.8915 6.53129 11.8337 6.39439C11.7758 6.25749 11.6874 6.13561 11.5753 6.03801C11.4407 5.91142 11.2708 5.82872 11.0881 5.80086C10.9054 5.773 10.7186 5.8013 10.5523 5.882C10.3745 5.95538 10.2238 6.08192 10.1207 6.24428C10.0176 6.40664 9.96714 6.5969 9.97632 6.78902C9.97632 7.81802 9.97632 8.84601 9.97632 9.87502C9.97632 10.221 9.96032 10.238 9.62232 10.238C8.60965 10.238 7.59699 10.238 6.58432 10.238C6.42907 10.2286 6.27378 10.2561 6.13123 10.3183C5.98868 10.3805 5.86293 10.4757 5.76432 10.596C5.64923 10.7367 5.57621 10.907 5.55365 11.0873C5.5311 11.2677 5.55994 11.4507 5.63685 11.6154C5.71375 11.7801 5.83562 11.9197 5.98838 12.0181C6.14114 12.1166 6.3186 12.17 6.50034 12.172C7.52734 12.179 8.55333 12.172 9.58033 12.172C9.96633 12.172 9.98032 12.182 9.98032 12.559C9.98032 13.5663 9.98032 14.574 9.98032 15.582C9.96976 15.8305 10.0493 16.0745 10.2043 16.269C10.3316 16.4237 10.5039 16.535 10.6973 16.5873C10.8907 16.6397 11.0956 16.6305 11.2836 16.5612C11.4715 16.4918 11.6333 16.3657 11.7463 16.2002C11.8593 16.0348 11.918 15.8383 11.9143 15.638C11.9143 14.581 11.9143 13.524 11.9143 12.467C11.9143 12.219 11.9613 12.173 12.2143 12.173C12.7413 12.172 13.2753 12.173 13.8103 12.173Z" fill="white"/></svg></button></div>
           </div>

            <OngoingReports/>
            
           <div className="mt-5">
            <CompletedReports/>
           </div>

          </div>
        </div>
      </div>
}
    </>
  )
}

export default Reports;