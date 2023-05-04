import Navigation from '../Navigation';

const KeyTakeaways = () => {
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


        <div className={`px-5 pt-3 pb-5 lg:ml-[240px]`}>
           <div className="flex items-center justify-between">
              <div className="text-[22px] text-[#3D3D3D] font-[800]">Dashboard</div>
              <Navigation/>
           </div>

           <div className="mt-5">
            <div className="w-[170px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>
            <div className="w-[100px] py-2 bg-[#F3F1F1] skeleton-box rounded-full mt-2"></div>
           
            <div className="flex items-cener justify-between mt-5">
                <div className="flex items-center gap-4">
            <div className="w-[100px] py-2.5 bg-[#F3F1F1] skeleton-box rounded-full mt-2"></div>
            <div className="w-[100px] py-2.5 bg-[#F3F1F1] skeleton-box rounded-full mt-2"></div>

                </div>
            <div className="w-[90px] py-4 bg-[#F3F1F1] skeleton-box rounded-full mt-2"></div>

            </div>

            <div className="cardShadow px-4 py-2 rounded-lg bg-white mt-5">
            <div className="w-[170px] py-3 bg-[#F3F1F1] skeleton-box rounded-full mb-3"></div>
            <div className="w-full h-[70px] bg-[#F3F1F1] skeleton-box rounded-xl"></div>
            </div>

            <div className="flex items-center justify-between mt-7">
            <div className="w-[190px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>
            <div className="w-[120px] py-4 bg-[#F3F1F1] skeleton-box rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm2:grid-cols-2 lg2:grid-cols-3 xl2:grid-cols-4 gap-5 mt-6">
                  {
                    array.map((ele, index)=>{
                      return(
                  <div key={index} className="cardShadow bg-white rounded-xl overflow-hidden">
                    <div className="flex items-center justify-center bg-[#F3F1F1] skeleton-box w-full h-[180px]"><div className="rounded-full w-[50px] h-[50px] bg-[#BCBCBC]"></div></div>
                    <div className="flex items-center justify-evenly gap-3 p-3 py-5 bg-white">
                    <div className="flex items-center gap-2 text-sm flex-col-reverse"><div className="bg-[#F3F1F1] skeleton-box w-full py-2 rounded-full"></div> <div className="rounded-full bg-[#F3F1F1] skeleton-box w-[40px] h-[40px]"></div></div>
                    <div className="flex items-center gap-2 text-sm flex-col-reverse"><div className="bg-[#F3F1F1] skeleton-box w-full py-2 rounded-full"></div> <div className="rounded-full bg-[#F3F1F1] skeleton-box w-[40px] h-[40px]"></div></div>
                    <div className="flex items-center gap-2 text-sm flex-col-reverse"><div className="bg-[#F3F1F1] skeleton-box w-full py-2 rounded-full"></div> <div className="rounded-full bg-[#F3F1F1] skeleton-box w-[40px] h-[40px]"></div></div>
                    <div className="flex items-center gap-2 text-sm flex-col-reverse"><div className="bg-[#F3F1F1] skeleton-box w-full py-2 rounded-full"></div> <div className="rounded-full bg-[#F3F1F1] skeleton-box w-[40px] h-[40px]"></div></div>
                    <div className="flex items-center gap-2 text-sm flex-col-reverse"><div className="bg-[#F3F1F1] skeleton-box w-full py-2 rounded-full"></div> <div className="rounded-full bg-[#F3F1F1] skeleton-box w-[40px] h-[40px]"></div></div>
                    </div>
                  </div>
                      )
                    })
                  }
               </div>

                 <div className="mt-8">
            <div className="w-[190px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>
            <div className="grid grid-cols-1 sm2:grid-cols-2 lg2:grid-cols-3 xl2:grid-cols-4 gap-5 mt-6">
                  {
                    array.map((ele, index)=>{
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
           
           
           </div>
    
         
      </div>
      </div>
    </>
  )
}

export default KeyTakeaways