import Navigation from '../Navigation';

const Reports = () => {
   let array = [1,2,3,4]
  return (
    <>
    <div>
    <div className={`transition-[width] w-[240px] sidebarShadow fixed top-0 left-0 z-50 bg-white pb-0 h-screen max-h-screen overflow-y-auto overflow-x-hidden p-5 hidden lg3:block`}>
         <div className="flex items-center justify-between border-solid border-b border-[#CFCFCF] pb-4 mb-[26px]">
          <div><img src="/images/logo.svg" alt="logo" /></div>
          <div><svg width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.26465 1.5H21.4996" stroke="black" stroke-width="2.5" stroke-linecap="round"/><path d="M1.26465 12.114H21.4996" stroke="black" stroke-width="2.5" stroke-linecap="round"/></svg></div>
         </div>

         <div className="flex justify-between flex-col gap-7 h-[calc(100%-78px)]">
            <div className="flex flex-col gap-7">
             <div className={`flex items-center gap-3 font-[500] w-full`}><div className="min-w-[35px] min-h-[35px] bg-[#F3F1F1] skeleton-box rounded-full"></div><div className="w-full rounded-full bg-[#F3F1F1] skeleton-box h-[25px] self-center"></div></div>
             <div className={`flex items-center gap-3 font-[500] w-full`}><div className="min-w-[35px] min-h-[35px] bg-[#F3F1F1] skeleton-box rounded-full"></div><div className="w-full rounded-full bg-[#F3F1F1] skeleton-box h-[25px] self-center"></div></div>
             <div className={`flex items-center gap-3 font-[500] w-full`}><div className="min-w-[35px] min-h-[35px] bg-[#F3F1F1] skeleton-box rounded-full"></div><div className="w-full rounded-full bg-[#F3F1F1] skeleton-box h-[25px] self-center"></div></div>

            </div>
            <div className={`flex items-center gap-3 font-[500] w-full pb-5`}><div className="min-w-[35px] min-h-[35px] bg-[#F3F1F1] skeleton-box rounded-full"></div><div className="w-full rounded-full bg-[#F3F1F1] skeleton-box h-[25px] self-center"></div></div>

         </div>
        </div>


        <div className={`px-5 pt-3 pb-5 lg:ml-[240px]`}>
           <div className="flex items-center justify-between">
              <div className="text-[22px] text-[#3D3D3D] font-[800]">Reports</div>
              <Navigation/>
           </div>

           <div className="mt-5">
            <div className="flex items-center justify-between">
                <div>
                <div className="w-[170px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>
                </div>
                <div className="w-[90px] py-5 bg-[#F3F1F1] skeleton-box rounded-full"></div>
            </div>

            



            <div className="cardShadow bg-white rounded-xl overflow-x-auto mt-5">
        <table className="w-full border-collapse">
          <thead className="bg-[#F3F1F1] text-white">
            <tr className="text-left">
              <th className="px-4 py-4 font-[500] whitespace-nowrap">
              <div className="w-[110px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>
              </th>
              <th className="px-[40px] py-4 font-[500] whitespace-nowrap">
              <div className="w-[110px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>

              </th>
              <th className="px-[40px] py-4 font-[500] whitespace-nowrap">
                <div className="relative inline w-fit">
                <div className="w-[110px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>                 
                </div>
              </th>
              <th className="px-[40px] py-4 font-[500] whitespace-nowrap">
                <div className="relative inline w-fit">
                <div className="w-[110px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>

                </div>
              </th>
              <th className="px-[40px] py-4 font-[500] whitespace-nowrap">
              <div className="w-full py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>
              </th>
            </tr>
          </thead>
          <tbody className="font-[500] divide-y divide-[#C1C1C1]">
            {array.map((ele, index) => (
              <tr key={index}>
                <td className="px-4 py-3 text-center whitespace-nowrap">
                <div className="w-[110px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>
                </td>
                <td className="px-[40px]">
                    
              <div className="w-[160px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>

                </td>
                <td className="px-[40px] whitespace-nowrap">
                    
              <div className="w-[160px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>

                </td>
                <td className="px-[40px] whitespace-nowrap">
                    
              <div className="w-[160px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>

                </td>
               
                <td className="px-[40px] whitespace-nowrap">
                  <div className="relative w-fit py-3">
                   
                  <div className="w-[140px] py-5 bg-[#F3F1F1] skeleton-box rounded-full"></div>

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>






         <div className="w-[150px] py-3 bg-[#F3F1F1] skeleton-box rounded-full mb-3 mt-8"></div>
         <div className="cardShadow bg-white rounded-xl overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-[#F3F1F1] text-white">
            <tr className="text-left">
              <th className="px-4 py-4 font-[500] whitespace-nowrap">
              <div className="w-[110px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>
              </th>
              <th className="px-[40px] py-4 font-[500] whitespace-nowrap">
              <div className="w-[110px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>

              </th>
              <th className="px-[40px] py-4 font-[500] whitespace-nowrap">
                <div className="relative inline w-fit">
                <div className="w-[110px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>                 
                </div>
              </th>
              <th className="px-[40px] py-4 font-[500] whitespace-nowrap">
                <div className="relative inline w-fit">
                <div className="w-[110px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>

                </div>
              </th>
              <th className="px-[40px] py-4 font-[500] whitespace-nowrap">
              <div className="w-full py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>
              </th>
            </tr>
          </thead>
          <tbody className="font-[500] divide-y divide-[#C1C1C1]">
            {array.map((ele, index) => (
              <tr key={index}>
                <td className="px-4 py-3 text-center whitespace-nowrap">
                <div className="w-[110px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>
                </td>
                <td className="px-[40px]">
                    
              <div className="w-[160px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>

                </td>
                <td className="px-[40px] whitespace-nowrap">
                    
              <div className="w-[160px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>

                </td>
                <td className="px-[40px] whitespace-nowrap">
                    
              <div className="w-[160px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>

                </td>
               
                <td className="px-[40px] whitespace-nowrap">
                  <div className="relative w-fit py-3">
                   
                  <div className="w-[80px] py-5 bg-[#F3F1F1] skeleton-box rounded-full"></div>

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-center flex-col-reverse sm:flex-row gap-3 mt-5">
        <div className="hidden">.</div>
        <div className="flex items-center justify-center gap-3">
          <div className="hidden sm3:flex p-2">
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
          </div>
          <div className="flex items-center gap-2 sm3:gap-4">
            <div className="px-5 py-5 font-[500] bg-[#F3F1F1] skeleton-box rounded-md"></div>
            <div className="px-5 py-5 font-[500] bg-[#F3F1F1] skeleton-box rounded-md"></div>
            <div className="px-5 py-5 font-[500] bg-[#F3F1F1] skeleton-box rounded-md"></div>
            <div className="px-5 py-5 font-[500] bg-[#F3F1F1] skeleton-box rounded-md"></div>
            <div className="px-5 py-5 font-[500] bg-[#F3F1F1] skeleton-box rounded-md"></div>
          </div>
          <div className="hidden sm3:flex p-2">
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
          </div>
        </div>
        <div className="hidden opacity-0 invisible">.</div>
      </div>
           
           </div>
         
      </div>
      </div>
    </>
  )
}

export default Reports