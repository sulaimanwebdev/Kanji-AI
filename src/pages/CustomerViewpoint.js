import { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import Navigation from "../components/Navigation";
import CustomerViewpointSkeleton from "../components/Skeletons/CustomerViewpoint";
import Chart from "../components/Chart";

const CustomerViewpoint = () => {
   const [leftMenu, setleftMenu] = useState(true);
   const [windowSize, setwindowSize] = useState(true);
   const [loading, setloading] = useState(true);
   let array = [1,2,3,4];

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


  let data = [
    {
      emotion: "happy",
      percentage: "100%",
      color: "#FFFF00",
    },
    {
      emotion: "calm",
      percentage: "0%",
      color: "#00B9FF",
    },
    {
      emotion: "surprised",
      percentage: "0%",
      color: "#FF72F6",
    },
    {
      emotion: "confused",
      percentage: "0%",
      color: "#FFC400",
    },
    {
      emotion: "disgusted",
      percentage: "0%",
      color: "#00FF33",
    },
    {
      emotion: "sad",
      percentage: "0%",
      color: "#DEDEDE",
    },
    {
      emotion: "angry",
      percentage: "0%",
      color: "#FF0000",
    },
  ];

  
  let keywords = [
    {
       keyword: "High prices",
       mentions: "1,476"
    },

    {
        keyword: "High Quality",
        mentions: "1,356"
    },

    {
        keyword: "Low Availability",
        mentions: "1,285"
    },

    {
        keyword: "Innovative design",
        mentions: "1,005"
    },

    {
        keyword: "Long lasting",
        mentions: "945"
    },

    {
        keyword: "Fancy",
        mentions: "825"
    },

    {
        keyword: "Great customer service",
        mentions: "753"
    },

    {
        keyword: "Luxurious",
        mentions: "741"
    },

    {
        keyword: "Longevity",
        mentions: "678"
    },

    {
        keyword: "Empowering",
        mentions: "557"
    }

  ];

  return (
    <>
    {
        loading ? (
          <CustomerViewpointSkeleton />
        ):
      <div>
         <SideBar leftMenu={leftMenu} setleftMenu={setleftMenu}/>

        <div className={`px-5 pt-3 pb-5 ${leftMenu === true ? windowSize === true ? "ml-[240px]" : "ml-[60px]" : "ml-[60px]"}`}>
           <div className="flex items-center justify-between">
              <div className="text-[22px] text-[#3D3D3D] font-[800]">Dashboard</div>
              <Navigation/>
           </div>
    
          <div className="mt-8">
             <div className="text-[19px] font-[500]">Weekly Report - Customer Viewpoint</div>
             <div className="text-[15px] text-not-gray mt-1">March 24, 2023</div>
              
             

            {/* main content */}
           <div className="mt-7">

           <div>
           <div>
                <div className="text-[19px] font-[500] mb-3">Top reputation risks</div>
               <div className="grid grid-cols-1 sm2:grid-cols-2 lg2:grid-cols-3 xl2:grid-cols-4 gap-5">
                  {
                    array.map((ele, index)=>{
                      return(
                  <div key={index} className="cardShadow flex items-center gap-5 bg-white rounded-xl px-6 py-3.5 overflow-hidden">
                     <div className="flex items-center justify-center rounded-2xl bg-[#FF0C0C] bg-opacity-20 rotate-45 w-[60px] h-[60px]"><svg className="-rotate-45" width="32" height="27" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.4545 0H9.09091C7.58182 0 6.29091 0.875 5.74545 2.135L0.254545 14.4725C0.0909091 14.875 0 15.295 0 15.75V19.25C0 21.175 1.63636 22.75 3.63636 22.75H15.1091L13.3818 30.7475L13.3273 31.3075C13.3273 32.025 13.6364 32.69 14.1273 33.1625L16.0545 35L28.0364 23.4675C28.6909 22.8375 29.0909 21.9625 29.0909 21V3.5C29.0909 1.575 27.4545 0 25.4545 0ZM32.7273 0V21H40V0H32.7273Z" fill="#FF0C0C"/></svg></div>
                     <div>
                       <div className="text-[14px] text-[#FF0C0C] font-[500]">Top #1 Risk</div>
                       <div className="text-[19px] font-[500] mt-1">High Prices</div>
                       <div className="text-[14px] text-[#BCBCBC] mt-1">Mentioned in 1476 Vids</div>
                     </div>
                  </div>
                      )
                    })
                  }
               </div>
             </div>



             <div className="mt-12">
                <div className="text-[19px] font-[500] mb-3">Top success signals</div>
               <div className="grid grid-cols-1 sm2:grid-cols-2 lg2:grid-cols-3 xl2:grid-cols-4 gap-5">
                  {
                    array.map((ele, index)=>{
                      return(
                  <div key={index} className="cardShadow flex items-center gap-5 bg-white rounded-xl px-6 py-3.5 overflow-hidden">
                     <div className="flex items-center justify-center rounded-2xl bg-[#00E81F] bg-opacity-20 rotate-45 w-[60px] h-[60px]"><svg className="-rotate-45" width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.366 4.03201L15.491 1.07201C15.1989 0.974206 14.883 0.974206 14.591 1.07201L5.72096 4.03201C4.30975 4.50062 3.08213 5.40207 2.21253 6.60826C1.34294 7.81446 0.875609 9.26403 0.876956 10.751V18C0.876956 28.714 13.91 34.631 14.468 34.878C14.649 34.9584 14.8449 34.9999 15.043 34.9999C15.241 34.9999 15.4369 34.9584 15.618 34.878C16.177 34.631 29.21 28.714 29.21 18V10.751C29.2113 9.26403 28.744 7.81446 27.8744 6.60826C27.0048 5.40207 25.7772 4.50062 24.366 4.03201ZM21.727 14.766L15.677 20.818C15.4293 21.0672 15.1346 21.2648 14.81 21.3992C14.4854 21.5336 14.1373 21.6022 13.786 21.601H13.737C13.3785 21.5955 13.0248 21.5173 12.6974 21.3712C12.3699 21.2251 12.0755 21.0141 11.832 20.751L8.56496 17.351C8.42234 17.22 8.30809 17.0612 8.22924 16.8844C8.15039 16.7075 8.10862 16.5164 8.10651 16.3228C8.10441 16.1292 8.142 15.9372 8.21698 15.7586C8.29196 15.5801 8.40274 15.4189 8.54247 15.2848C8.68219 15.1508 8.84791 15.0468 9.02939 14.9793C9.21087 14.9118 9.40427 14.8822 9.59763 14.8923C9.79099 14.9024 9.98023 14.9521 10.1537 15.0382C10.3271 15.1243 10.481 15.2451 10.606 15.393L13.785 18.708L19.718 12.758C19.846 12.6128 20.0024 12.4954 20.1775 12.413C20.3527 12.3306 20.5429 12.285 20.7363 12.2789C20.9298 12.2728 21.1225 12.3065 21.3024 12.3777C21.4824 12.449 21.6459 12.5564 21.7827 12.6932C21.9196 12.8301 22.027 12.9936 22.0982 13.1735C22.1695 13.3535 22.2031 13.5462 22.1971 13.7396C22.191 13.9331 22.1454 14.1233 22.063 14.2984C21.9806 14.4736 21.8631 14.63 21.718 14.758L21.727 14.766Z" fill="#00E81F"/></svg></div>
                     <div>
                       <div className="text-[14px] text-[#00E81F] font-[500]">Top #1 Success</div>
                       <div className="text-[19px] font-[500] mt-1">Quality</div>
                       <div className="text-[14px] text-[#BCBCBC] mt-1">Mentioned in 1476 Vids</div>
                     </div>
                  </div>
                      )
                    })
                  }
               </div>
             </div>
             </div>



            <div className="grid grid-cols-1 sm4:grid-cols-[1fr,250px] xl2:grid-cols-[1fr,300px] gap-5 mt-8">
                <div className="cardShadow bg-white grid grid-cols-1 lg4:grid-cols-2 gap-14 lg4:gap-2 rounded-xl px-6 pb-10 lg4:pb-6 py-3.5">
                 <div className="w-full">
                  <div className="text-[19px] font-[500] mb-3">What are people feeling?</div>
                  <div className="flex flex-col gap-4 w-full">
                    {
                        data.map((ele, index) =>{
                            return(
                                <div key={index} className="flex items-center gap-2 sm4:gap-4 w-full">
                                    <div className={`min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px] bg-[${ele.color}]`}></div>
                                    <div className={`flex items-center justify-between bg-[${ele.color}] rounded-full w-full px-3 pr-4 py-2.5 ${ele.emotion === "sad" ? "bg-opacity-[0.17]" : "bg-opacity-5"}`}>
                                        <div className="flex items-center gap-3 capitalize"><img src={`/images/emotions/${ele.emotion}.png`} alt="emotion" /> {ele.emotion}</div>
                                        <div className="font-bold text-[18px]">{ele.percentage}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                  </div>
                 </div>

                 <div className="h-full flex items-center justify-center">

                    {/* The chart is dynamic if you change the percentage in the data array it will also change the chart as per percentage */}
                    <Chart data={data}/>
                 </div>
                </div>
                <div className="h-full grid-cols-1 grid-rows-2">
                    <div className="cardShadow bg-white h-[calc(50%-10px)] flex items-center justify-center flex-col rounded-xl px-5 py-3.5">
                        <img src="/images/positive-vote.png" alt="positive" />
                        <div className="text-[15px] text-[#AFAFAF] mt-2">Positive Mentions</div>
                        <div className="text-[30px] font-bold mt-2">14,225</div>
                    </div>

                    <div className="cardShadow bg-white h-[calc(50%-10px)] mt-5 flex items-center justify-center flex-col rounded-xl px-5 py-3.5">
                        <img src="/images/negative-vote.png" alt="negative" />
                        <div className="text-[15px] text-[#AFAFAF] mt-2">Negative Mentions</div>
                        <div className="text-[30px] font-bold mt-2">11,420</div>
                    </div>
                </div>
            </div>




           <div className="mt-8">
            <div className="text-[19px] font-[500] mb-3">Top keywords</div>
             
            <div className="cardShadow bg-white rounded-xl overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-main text-white">
            <tr className="text-left">
              <th className="px-5 py-4 font-[500] whitespace-nowrap">
                Watch Video
              </th>

              <th className="sm:text-right px-[40px] pr-[60px] py-4 font-[500] whitespace-nowrap">
                Mentions
              </th>
              </tr>
              </thead>
              
              <tbody className="font-[500] divide-y divide-[#C1C1C1]">
            {keywords.map((ele, index) => (
              <tr key={index}>
                <td className="px-5 py-2 min-w-[300px]">{ele.keyword}</td>
                <td className="sm:text-right px-[40px] pr-[60px] py-3.5"><span>{ele.mentions}</span></td>
              </tr>
            ))}
          </tbody>

              </table>
              </div>


           </div>

           </div>
           
          </div>
        </div>
      </div>
}

      {/* important for emotion color rendering, becuase the colors are dynamic and "Just in time" can not render dynamic colors in Tailwind CSS */}
      <div className="hidden bg-[#FFFF00]"></div>
      <div className="hidden bg-[#00B9FF]"></div>
      <div className="hidden bg-[#FF72F6]"></div>
      <div className="hidden bg-[#FFC400]"></div>
      <div className="hidden bg-[#00FF33]"></div>
      <div className="hidden bg-[#DEDEDE]"></div>
      <div className="hidden bg-[#FF0000]"></div>
    </>
  )
}

export default CustomerViewpoint;