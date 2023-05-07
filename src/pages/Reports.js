import { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import Navigation from "../components/Navigation";
import ReportsSkelton from "../components/Skeletons/Reports";
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
          <ReportsSkelton/>
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