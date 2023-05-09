import Navigation from '../Navigation';

const CustomerViewpoint = () => {
   let array = [1,2,3,4,5,6,7,8,9,10];
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
             <div>
                <div className={`flex items-center gap-3 font-[500] w-full`}><div className="min-w-[35px] min-h-[35px] bg-[#F3F1F1] skeleton-box rounded-full"></div><div className="w-full rounded-full bg-[#F3F1F1] skeleton-box h-[25px] self-center"></div></div>
                <div className="flex pl-[47px] mt-2 flex-col gap-3">
                <div className="w-full rounded-full bg-[#F3F1F1] skeleton-box h-[15px]"></div>
                <div className="w-full rounded-full bg-[#F3F1F1] skeleton-box h-[15px]"></div>
                <div className="w-full rounded-full bg-[#F3F1F1] skeleton-box h-[15px]"></div>
                </div>
             </div>
                
             <div className={`flex items-center gap-3 font-[500] w-full`}><div className="min-w-[35px] min-h-[35px] bg-[#F3F1F1] skeleton-box rounded-full"></div><div className="w-full rounded-full bg-[#F3F1F1] skeleton-box h-[25px] self-center"></div></div>
             <div className={`flex items-center gap-3 font-[500] w-full`}><div className="min-w-[35px] min-h-[35px] bg-[#F3F1F1] skeleton-box rounded-full"></div><div className="w-full rounded-full bg-[#F3F1F1] skeleton-box h-[25px] self-center"></div></div>

            </div>
            <div className={`flex items-center gap-3 font-[500] w-full pb-5`}><div className="min-w-[35px] min-h-[35px] bg-[#F3F1F1] skeleton-box rounded-full"></div><div className="w-full rounded-full bg-[#F3F1F1] skeleton-box h-[25px] self-center"></div></div>

         </div>
        </div>


        <div className={`px-5 pt-3 pb-5 lg3:ml-[240px]`}>
           <div className="flex items-center justify-between">
              <div className="text-[22px] text-[#3D3D3D] font-[800]">Dashboard</div>
              <Navigation/>
           </div>

           <div className="mt-5">
            <div className="w-[170px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>
            <div className="w-[100px] py-2 bg-[#F3F1F1] skeleton-box rounded-full mt-2"></div>
           
            <div className="mt-8">
            <div className="w-[190px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>
            <div className="grid grid-cols-1 sm2:grid-cols-2 lg2:grid-cols-3 xl2:grid-cols-4 gap-5 mt-6">
                  {
                    array.slice(0,4).map((ele, index)=>{
                      return(
                  <div key={index} className="cardShadow flex items-center gap-5 bg-white rounded-xl px-6 py-3.5 overflow-hidden">
                     <div className="flex items-center justify-center rounded-2xl bg-[#F3F1F1] skeleton-box rotate-45 w-[60px] h-[60px]"></div>
                     <div>
                     <div className="w-[70px] rounded-full bg-[#F3F1F1] skeleton-box h-[15px] mb-2"></div>
                     <div className="w-[130px] rounded-full bg-[#F3F1F1] skeleton-box h-[25px] mb-2"></div>
                     <div className="w-[170px] rounded-full bg-[#F3F1F1] skeleton-box h-[15px]"></div>
                     </div>
                  </div>
                      )
                    })
                  }
               </div>
                 </div>



                 <div className="mt-8">
            <div className="w-[190px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>
            <div className="grid grid-cols-1 sm2:grid-cols-2 lg2:grid-cols-3 xl2:grid-cols-4 gap-5 mt-6">
                  {
                    array.slice(0,4).map((ele, index)=>{
                      return(
                  <div key={index} className="cardShadow flex items-center gap-5 bg-white rounded-xl px-6 py-3.5 overflow-hidden">
                     <div className="flex items-center justify-center rounded-2xl bg-[#F3F1F1] skeleton-box rotate-45 w-[60px] h-[60px]"></div>
                     <div>
                     <div className="w-[70px] rounded-full bg-[#F3F1F1] skeleton-box h-[15px] mb-2"></div>
                     <div className="w-[130px] rounded-full bg-[#F3F1F1] skeleton-box h-[25px] mb-2"></div>
                     <div className="w-[170px] rounded-full bg-[#F3F1F1] skeleton-box h-[15px]"></div>
                     </div>
                  </div>
                      )
                    })
                  }
               </div>
                 </div>



               <div className="grid grid-cols-1 sm4:grid-cols-[1fr,250px] xl2:grid-cols-[1fr,300px] gap-5 mt-8">
                <div className="cardShadow bg-white grid grid-cols-1 lg4:grid-cols-2 gap-7 lg4:gap-2 rounded-xl px-6 py-3.5">
                 <div className="w-full">
                 <div className="w-[190px] py-3 bg-[#F3F1F1] skeleton-box rounded-full mb-3"></div>
                  <div className="flex flex-col gap-4 w-full">
                    {
                        array.slice(0,8).map((ele, index) =>{
                            return(
                                <div key={index} className="flex items-center gap-2 sm4:gap-4 w-full">
                                    <div className="min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px] bg-[#F3F1F1] skeleton-box"></div>
                                    <div className="flex items-center justify-between bg-[#F3F1F1] skeleton-box rounded-full w-full px-3 pr-4 py-2.5">
                                        <div className="flex items-center gap-3 capitalize"><div className="w-[30px] h-[30px] bg-[#E5E5E5] rounded-full"></div> <div className="w-[80px] py-2 bg-[#E5E5E5] rounded-full"></div></div>
                                        <div className="font-bold text-[18px]"><div className="w-[50px] py-2 bg-[#E5E5E5] rounded-full"></div></div>
                                    </div>
                                </div>
                            )
                        })
                    }
                  </div>
                 </div>

                 <div className="h-full flex items-center justify-center">
                    <div className="w-[350px] h-[350px] xl2:w-[400px] xl2:h-[400px] rounded-full bg-[#F3F1F1] skeleton-box"></div>
                 </div>
                </div>
                <div className="h-full grid-cols-1 grid-rows-2">
                    <div className="cardShadow bg-white h-[calc(50%-10px)] flex items-center justify-center flex-col rounded-xl px-5 py-3.5">
                        <div className="w-[100px] h-[100px] rounded-full bg-[#F3F1F1] skeleton-box"></div>
                        <div className="w-[120px] py-3 bg-[#F3F1F1] skeleton-box rounded-full mt-2"></div>
                        <div className="w-[90px] py-5 bg-[#F3F1F1] skeleton-box rounded-full mt-3"></div>
                    </div>

                    <div className="cardShadow bg-white h-[calc(50%-10px)] mt-5 flex items-center justify-center flex-col rounded-xl px-5 py-3.5">
                        <div className="w-[80px] h-[80px] rounded-full bg-[#F3F1F1] skeleton-box"></div>
                        <div className="w-[120px] py-3 bg-[#F3F1F1] skeleton-box rounded-full mt-2"></div>
                        <div className="w-[90px] py-5 bg-[#F3F1F1] skeleton-box rounded-full mt-3"></div>
                    </div>
                </div>
            </div>

           
               <div className="mt-8">
               <div className="w-[190px] py-3 bg-[#F3F1F1] skeleton-box rounded-full mb-3"></div>

            <div className="cardShadow bg-white rounded-xl overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-[#F3F1F1] text-white">
            <tr className="text-left">
              <th className="px-5 py-4 font-[500] whitespace-nowrap">
              <div className="w-[120px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>
              </th>

              <th className="sm:flex sm:items-center sm:justify-end px-[40px] pr-[60px] py-4 font-[500] whitespace-nowrap">
              <div className="w-[120px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>
              </th>
              </tr>
              </thead>
              
              <tbody className="font-[500] divide-y divide-[#C1C1C1]">
            {array.map((ele, index) => (
              <tr key={index}>
                <td className="px-5 py-2 min-w-[300px]">
                 <div className="w-[120px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>
                </td>
                <td className="sm:flex sm:items-center sm:justify-end px-[40px] pr-[60px] py-3.5">
                 <div className="w-[120px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>
                </td>
              </tr>
            ))}
          </tbody>

              </table>
              </div>


           </div>

               
           
           </div>
    
         
      </div>
      </div>
    </>
  )
}

export default CustomerViewpoint