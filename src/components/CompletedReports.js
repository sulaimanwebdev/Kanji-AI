import { useState, useEffect, useRef } from "react";

const CompletedReports = () => {
    
    // popups
    const [TypePopupVisible, setTypePopupVisible] = useState(false);
    const [CreatedInPopupVisible, setCreatedInPopupVisible] = useState(false);
    const [CreatedByPopupVisible, setCreatedByPopupVisible] = useState(false);
    const [AnalyzingPopupVisible, setAnalyzingPopupVisible] = useState(false);
    const [activeButtonIndex, setActiveButtonIndex] = useState(1); // index of the currently active button pagination

    const TypePopupRef = useRef(null);
    const CreatedInPopupRef = useRef(null);
    const CreatedByPopupRef = useRef(null);
    const AnalyzingPopupRef = useRef(null);
  
    useEffect(() => {
      document.addEventListener("mousedown", handleTypeClickOutside);
      document.addEventListener("mousedown", handleCreatedInClickOutside);
      document.addEventListener("mousedown", handleCreatedByClickOutside);
      document.addEventListener("mousedown", handleAnalyzingClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleTypeClickOutside);
        document.removeEventListener("mousedown", handleCreatedInClickOutside);
        document.removeEventListener("mousedown", handleCreatedByClickOutside);
        document.removeEventListener("mousedown", handleAnalyzingClickOutside);
      };
    }, []);
  
    const handleTypeClickOutside = (event) => {
      if (
        TypePopupRef.current &&
        !TypePopupRef.current.contains(event.target)
      ) {
        setTypePopupVisible(false);
      }
    };


    const handleCreatedInClickOutside = (event) => {
        if (
          CreatedInPopupRef.current &&
          !CreatedInPopupRef.current.contains(event.target)
        ) {
          setCreatedInPopupVisible(false);
        }
      };
      
      const handleCreatedByClickOutside = (event) => {
        if (
          CreatedByPopupRef.current &&
          !CreatedByPopupRef.current.contains(event.target)
        ) {
          setCreatedByPopupVisible(false);
        }
      };

      const handleAnalyzingClickOutside = (event) => {
        if (
          AnalyzingPopupRef.current &&
          !AnalyzingPopupRef.current.contains(event.target)
        ) {
          setAnalyzingPopupVisible(false);
        }
      };
  
    const toggleTypePopup = () => {
      setTypePopupVisible(!TypePopupVisible);
    };

    const toggleCreatedInPopup = () => {
        setCreatedInPopupVisible(!CreatedInPopupVisible);
    };
    
    const toggleCreatedByPopup = () => {
        setCreatedByPopupVisible(!CreatedByPopupVisible);
    };

    const toggleAnalyzingPopup = () => {
        setAnalyzingPopupVisible(!AnalyzingPopupVisible);
    };

    // active button function
    const [pagination, setpagination] = useState('1 to 5');
    const handleButtonClick = (index) => {
      setActiveButtonIndex(index);
    };
    //end

    // allowing user to select only 1 checkbox
    const [selectedCheckboxCreatedIn, setSelectedCheckboxCreatedIn] = useState("ascending");
    const handleCheckboxChangeCreatedIn = (event) => {
      setSelectedCheckboxCreatedIn(event.target.value === selectedCheckboxCreatedIn ? null : event.target.value);
    };

    let reports = [
        {
            type: "Daily",
            createdIn: "19 May, 2021 : 10:10 AM",
            createdBy: "Jack",
            analyzing: "Product A",
        },

        {
            type: "Weekly ",
            createdIn: "18 May, 2021 : 3:12 PM",
            createdBy: "Jack",
            analyzing: "Brand A",
        },

        {
            type: "Monthly",
            createdIn: "19 May, 2021 : 10:10 AM",
            createdBy: "Jack",
            analyzing: "Product B",
        },

        {
            type: "Custom (Every 2 weeks)",
            createdIn: "19 May, 2021 : 10:10 AM",
            createdBy: "Tal",
            analyzing: "Product C",
        },
    ];


  return (
    <>
    <div className="text-[19px] font-[500] mt-7 mb-3">Completed Reports</div>
    <div className="cardShadow bg-white rounded-xl overflow-x-auto">
        <table className="w-full border-collapse whitespace-nowrap">
          <thead className="bg-main text-white">
            <tr className="text-left">
              <th className="px-5 py-4 font-[500] whitespace-nowrap">
               <div className="relative inline w-fit">
                  Type
                  <button
                    className="inline self-center ml-2"
                    onClick={toggleTypePopup}
                  >
                    <img src="/images/bars.svg" className="inline" alt="bars" />
                  </button>
                  {TypePopupVisible && (
                    <div
                      className="dropDownShadow flex flex-col divide-y divide-[#E6E6E6] rounded-md bg-white px-4 py-2 absolute top-[calc(100%+10px)] -right-[100px]"
                      ref={TypePopupRef}
                    >
                      <div className="flex items-center justify-between gap-10 py-2">
                        <div className="text-[15px] text-black">Daily</div>
                        <input
                          type="checkbox"
                          className="cursor-pointer w-[15px] h-[15px] accent-main"
                        />
                      </div>

                      <div className="flex items-center justify-between gap-10 py-2">
                        <div className="text-[15px] text-black">Weekly</div>
                        <input
                          type="checkbox"
                          className="cursor-pointer w-[15px] h-[15px] accent-main"
                        />
                      </div>

                      <div className="flex items-center justify-between gap-10 py-2">
                        <div className="text-[15px] text-black">Monthly</div>
                        <input
                          type="checkbox"
                          className="cursor-pointer w-[15px] h-[15px] accent-main"
                        />
                      </div>

                      <div className="flex items-center justify-between gap-10 py-2">
                        <div className="text-[15px] text-black">Custom</div>
                        <input
                          type="checkbox"
                          className="cursor-pointer w-[15px] h-[15px] accent-main"
                        />
                      </div>

                      <svg
                        className="border-none absolute bottom-[calc(100%-1px)] left-[27px]"
                        width="26"
                        height="10"
                        viewBox="0 0 35 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M34.5 18.5H0L16.5 0L34.5 18.5Z" fill="white" />
                      </svg>

                    </div>
                  )}
                </div> 
              </th>

              <th className="px-[40px] py-4 font-[500] whitespace-nowrap">
              <div className="relative inline w-fit">
                  Created In
                  <button
                    className="inline self-center ml-2"
                    onClick={toggleCreatedInPopup}
                  >
                    <img src="/images/bars.svg" className="inline" alt="bars" />
                  </button>
                  {CreatedInPopupVisible && (
                    <div
                      className="dropDownShadow flex flex-col divide-y divide-[#E6E6E6] rounded-md bg-white px-4 py-2 absolute top-[calc(100%+10px)] -right-[26px]"
                      ref={CreatedInPopupRef}
                    >
                      <div className="flex items-center justify-between gap-10 py-2">
                     <div className="text-[15px] text-black">Ascending</div>
                     <input
                       type="checkbox"
                       className="cursor-pointer w-[15px] h-[15px] accent-main"
                       value="ascending"
                       checked={selectedCheckboxCreatedIn === "ascending"}
                       onChange={handleCheckboxChangeCreatedIn}
                     />
                   </div>

                   <div className="flex items-center justify-between gap-10 py-2">
                     <div className="text-[15px] text-black">Descending</div>
                     <input
                       type="checkbox"
                       className="cursor-pointer w-[15px] h-[15px] accent-main"
                       value="descending"
                       checked={selectedCheckboxCreatedIn === "descending"}
                       onChange={handleCheckboxChangeCreatedIn}
                     />
                   </div>

                      <svg
                        className="border-none absolute bottom-[calc(100%-1px)] right-5"
                        width="26"
                        height="10"
                        viewBox="0 0 35 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M34.5 18.5H0L16.5 0L34.5 18.5Z" fill="white" />
                      </svg>

                    </div>
                  )}
                </div> 
              </th>

              <th className="px-[40px] py-4 font-[500] whitespace-nowrap">
              <div className="relative inline w-fit">
                  Created By
                  <button
                    className="inline self-center ml-2"
                    onClick={toggleCreatedByPopup}
                  >
                    <img src="/images/bars.svg" className="inline" alt="bars" />
                  </button>
                  {CreatedByPopupVisible && (
                    <div
                      className="dropDownShadow flex flex-col divide-y divide-[#E6E6E6] rounded-md bg-white px-4 py-2 absolute top-[calc(100%+10px)] -right-[26px]"
                      ref={CreatedByPopupRef}
                    >
                      <div className="flex items-center justify-between gap-14 py-2">
                        <div className="text-[15px] text-black">Jack</div>
                        <input
                          type="checkbox"
                          className="cursor-pointer w-[15px] h-[15px] accent-main"
                        />
                      </div>

                      <div className="flex items-center justify-between gap-14 py-2">
                        <div className="text-[15px] text-black">Britt</div>
                        <input
                          type="checkbox"
                          className="cursor-pointer w-[15px] h-[15px] accent-main"
                        />
                      </div>

                      <div className="flex items-center justify-between gap-14 py-2">
                        <div className="text-[15px] text-black">Tal</div>
                        <input
                          type="checkbox"
                          className="cursor-pointer w-[15px] h-[15px] accent-main"
                        />
                      </div>

                      <div className="flex items-center justify-between gap-14 py-2">
                        <div className="text-[15px] text-black">Ariel</div>
                        <input
                          type="checkbox"
                          className="cursor-pointer w-[15px] h-[15px] accent-main"
                        />
                      </div>

                      <svg
                        className="border-none absolute bottom-[calc(100%-1px)] right-5"
                        width="26"
                        height="10"
                        viewBox="0 0 35 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M34.5 18.5H0L16.5 0L34.5 18.5Z" fill="white" />
                      </svg>

                    </div>
                  )}
                </div>
              </th>

              <th className="px-[40px] py-4 font-[500] whitespace-nowrap">
                <div className="relative inline w-fit">
                  Analyzing
                  <button
                    className="inline self-center ml-2"
                    onClick={toggleAnalyzingPopup}
                  >
                    <img src="/images/bars.svg" className="inline" alt="bars" />
                  </button>
                  {AnalyzingPopupVisible && (
                    <div
                      className="dropDownShadow flex flex-col divide-y divide-[#E6E6E6] rounded-md bg-white px-4 py-2 absolute top-[calc(100%+10px)] -right-[26px]"
                      ref={AnalyzingPopupRef}
                    >
                      <div className="flex items-center justify-between gap-10 py-2">
                        <div className="text-[15px] text-black">Product A</div>
                        <input
                          type="checkbox"
                          className="cursor-pointer w-[15px] h-[15px] accent-main"
                        />
                      </div>

                      <div className="flex items-center justify-between gap-10 py-2">
                        <div className="text-[15px] text-black">Product B</div>
                        <input
                          type="checkbox"
                          className="cursor-pointer w-[15px] h-[15px] accent-main"
                        />
                      </div>

                      <div className="flex items-center justify-between gap-10 py-2">
                        <div className="text-[15px] text-black">Product C</div>
                        <input
                          type="checkbox"
                          className="cursor-pointer w-[15px] h-[15px] accent-main"
                        />
                      </div>

                      <div className="flex items-center justify-between gap-10 py-2">
                        <div className="text-[15px] text-black">Product D</div>
                        <input
                          type="checkbox"
                          className="cursor-pointer w-[15px] h-[15px] accent-main"
                        />
                      </div>

                      <svg
                        className="border-none absolute bottom-[calc(100%-1px)] right-5"
                        width="26"
                        height="10"
                        viewBox="0 0 35 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M34.5 18.5H0L16.5 0L34.5 18.5Z" fill="white" />
                      </svg>

                    </div>
                  )}
                </div>
              </th>

              <th className="px-[40px] py-4 font-[500] whitespace-nowrap">
                View
              </th>

              </tr>
              </thead>
              
              <tbody className="font-[500] divide-y divide-[#C1C1C1]">
            {reports.map((ele, index) => (
              <tr key={index}>
                <td className="px-5 py-2">{ele.type}</td>
                <td className="px-[40px] py-3.5"><span>{ele.createdIn}</span></td>
                <td className="px-[40px] py-3.5"><span>{ele.createdBy}</span></td>
                <td className="px-[40px] py-3.5"><span>{ele.analyzing}</span></td>
                <td className="px-[40px] py-3.5"><button  className='rounded-full px-8 py-3 transition bg-main hover:bg-main-hover text-white'>View</button></td>
              </tr>
            ))}
          </tbody>

              </table>
    </div>


    <div className="flex items-center justify-center sm:justify-between flex-col-reverse sm:flex-row gap-3 mt-5">
        <div className="hidden lg3:flex opacity-0 invisible">.</div>
        <div className="flex items-center justify-center gap-3">
          <button onClick={()=> {setpagination("1 to 5")}}  className="flex p-2 previousButton">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.4183 13.266C7.50592 13.1793 7.57548 13.076 7.62295 12.9622C7.67041 12.8484 7.69486 12.7263 7.69486 12.603C7.69486 12.4797 7.67041 12.3576 7.62295 12.2438C7.57548 12.13 7.50592 12.0268 7.4183 11.94L3.1423 7.66602C3.05468 7.57926 2.98513 7.476 2.93766 7.3622C2.89019 7.2484 2.86575 7.12632 2.86575 7.00302C2.86575 6.87971 2.89019 6.75763 2.93766 6.64383C2.98513 6.53003 3.05468 6.42677 3.1423 6.34001L7.4183 2.06602C7.59454 1.89137 7.69418 1.65387 7.6953 1.40576C7.69643 1.15765 7.59895 0.919252 7.4243 0.743015C7.24966 0.566779 7.01215 0.467138 6.76404 0.466013C6.51593 0.464888 6.27754 0.56237 6.1013 0.737015L1.8163 5.02202C1.29175 5.54704 0.997098 6.25885 0.997098 7.00102C0.997098 7.74318 1.29175 8.45499 1.8163 8.98002L6.1013 13.266C6.27617 13.4402 6.51296 13.5381 6.7598 13.5381C7.00664 13.5381 7.24343 13.4402 7.4183 13.266Z"
                fill="black"
              />
            </svg>
          </button>
          <div className="flex items-center gap-2 sm3:gap-4">
      {
        pagination === "1 to 5" ?
        <>
        <button
        className={`px-3 py-2 font-[500] transition rounded-md border-solid border ${activeButtonIndex === 1 ? "bg-main border-main hover:bg-main-hover hover:border-main-hover text-white" : "bg-white border-[#C8C8C8]"}`}
        onClick={() => handleButtonClick(1)}
      >
        01
      </button>
      <button
        className={`px-3 py-2 font-[500] transition rounded-md border-solid border ${activeButtonIndex === 2 ? "bg-main border-main hover:bg-main-hover hover:border-main-hover text-white" : "bg-white border-[#C8C8C8]"}`}
        onClick={() => handleButtonClick(2)}
      >
        02
      </button>
      <button
        className={`px-3 py-2 font-[500] transition rounded-md border-solid border ${activeButtonIndex === 3 ? "bg-main border-main hover:bg-main-hover hover:border-main-hover text-white" : "bg-white border-[#C8C8C8]"}`}
        onClick={() => handleButtonClick(3)}
      >
        03
      </button>
      <button
        className={`px-3 py-2 font-[500] transition rounded-md border-solid border ${activeButtonIndex === 4 ? "bg-main border-main hover:bg-main-hover hover:border-main-hover text-white" : "bg-white border-[#C8C8C8]"}`}
        onClick={() => handleButtonClick(4)}
      >
        04
      </button>
      <button
        className={`px-3 py-2 font-[500] transition rounded-md border-solid border ${activeButtonIndex === 5 ? "bg-main border-main hover:bg-main-hover hover:border-main-hover text-white" : "bg-white border-[#C8C8C8]"}`}
        onClick={() => handleButtonClick(5)}
      >
        05
      </button>
        </>

        :

        <>
        <button
        className={`px-3 py-2 font-[500] transition rounded-md border-solid border ${activeButtonIndex === 6 ? "bg-main border-main hover:bg-main-hover hover:border-main-hover text-white" : "bg-white border-[#C8C8C8]"}`}
        onClick={() => handleButtonClick(6)}
      >
        06
      </button>
      <button
        className={`px-3 py-2 font-[500] transition rounded-md border-solid border ${activeButtonIndex === 7 ? "bg-main border-main hover:bg-main-hover hover:border-main-hover text-white" : "bg-white border-[#C8C8C8]"}`}
        onClick={() => handleButtonClick(7)}
      >
        07
      </button>
      <button
        className={`px-3 py-2 font-[500] transition rounded-md border-solid border ${activeButtonIndex === 8 ? "bg-main border-main hover:bg-main-hover hover:border-main-hover text-white" : "bg-white border-[#C8C8C8]"}`}
        onClick={() => handleButtonClick(8)}
      >
        08
      </button>
      <button
        className={`px-3 py-2 font-[500] transition rounded-md border-solid border ${activeButtonIndex === 9 ? "bg-main border-main hover:bg-main-hover hover:border-main-hover text-white" : "bg-white border-[#C8C8C8]"}`}
        onClick={() => handleButtonClick(9)}
      >
        09
      </button>
      <button
        className={`px-3 py-2 font-[500] transition rounded-md border-solid border ${activeButtonIndex === 10 ? "bg-main border-main hover:bg-main-hover hover:border-main-hover text-white" : "bg-white border-[#C8C8C8]"}`}
        onClick={() => handleButtonClick(10)}
      >
        10
      </button>
        </>
      }
      
          </div>
          <button onClick={()=> {setpagination("6 to 10")}} className="flex p-2 forwardButton">
            <svg
              width="7"
              height="14"
              viewBox="0 0 7 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.27611 13.265C0.18861 13.1782 0.119161 13.0749 0.0717683 12.9611C0.0243754 12.8473 -2.47955e-05 12.7253 -2.47955e-05 12.602C-2.47955e-05 12.4787 0.0243754 12.3567 0.0717683 12.2429C0.119161 12.1291 0.18861 12.0258 0.27611 11.939L4.55111 7.66501C4.63861 7.57819 4.70806 7.4749 4.75545 7.36111C4.80284 7.24732 4.82724 7.12528 4.82724 7.00201C4.82724 6.87875 4.80284 6.7567 4.75545 6.64291C4.70806 6.52912 4.63861 6.42583 4.55111 6.33901L0.27611 2.06501C0.0998735 1.8901 0.000338078 1.65234 -0.000599384 1.40405C-0.00153685 1.15575 0.0962 0.917247 0.27111 0.74101C0.44602 0.564774 0.683776 0.465239 0.932075 0.464301C1.18037 0.463363 1.41887 0.5611 1.59511 0.73601L5.87611 5.02101C6.40066 5.54604 6.69531 6.25784 6.69531 7.00001C6.69531 7.74218 6.40066 8.45398 5.87611 8.97901L1.59511 13.265C1.42016 13.4398 1.18294 13.538 0.93561 13.538C0.688276 13.538 0.451062 13.4398 0.27611 13.265Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <div className="text-[15px] font-[500]">1 - 4 of 475 reports</div>
      </div>
    </>
  )
}

export default CompletedReports