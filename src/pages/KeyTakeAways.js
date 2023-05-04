import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import SideBar from "../components/SideBar";
import Navigation from "../components/Navigation";
import KeyTakeaways from "../components/Skeletons/KeyTakeaways";

const KeyTakeAways = () => {
   const [leftMenu, setleftMenu] = useState(true);
   const [expand, setexpand] = useState(false);
   const [tab, settab] = useState("Key Takeaways");
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

  return (
    <>
    
      {
        loading ? (
          <KeyTakeaways/>
        ):
        <div>
         <SideBar leftMenu={leftMenu} setleftMenu={setleftMenu}/>

        <div className={`px-5 pt-3 pb-5 ${leftMenu === true ? windowSize === true ? "ml-[240px]" : "ml-[60px]" : "ml-[60px]"}`}>
           <div className="flex items-center justify-between">
              <div className="text-[22px] text-[#3D3D3D] font-[800]">Dashboard</div>
              <Navigation/>
           </div>
    
          <div className="mt-8">
             <div className="text-[19px] font-[500]">Weekly Report - Key Takeaways</div>
             <div className="text-[15px] text-not-gray mt-1">March 24, 2023</div>

             <div className="flex items-center justify-between mt-10 sm:w-[calc(100%-115px)] overflow-y-auto relative z-10">
              <div className="flex items-center gap-7 sm:gap-10 min-w-[350px]">
                <button onClick={()=> {settab("Key Takeaways")}} className={` font-[500] pb-1 ${tab === "Key Takeaways" ? "text-main border-solid border-b border-main" : "text-[#C1C1C1]"}`}>Key Takeaways</button>
                <button onClick={()=> {settab("Suggested Action Plan")}} className={` font-[500] pb-1 ${tab === "Suggested Action Plan" ? "text-main border-solid border-b border-main" : "text-[#C1C1C1]"}`}>Suggested Action Plan</button>
              </div>
             </div>

             {
              tab === "Key Takeaways"

              ?

              // Key Takeaways
              <div>
             <div className="mt-5 sm:-mt-3">
             <div className="sm:-translate-y-7 mb-3 sm:mb-0 flex items-center justify-end"><button onClick={()=> {setexpand(!expand)}} className="px-7 py-1.5 text-main rounded-full border-solid border border-main transition hover:bg-main hover:text-white">{expand === false ? "Expand" : "Shrink"}</button></div>
             <div className="cardShadow bg-white rounded-lg p-5 overflow-hidden">
              <div className="text-[19px] font-[500] mb-3">Key Takeaways</div>
               <div className={`relative transition-[height] max-h-[400px] leading-[28.5px] pr-1 overflow-y-auto ${expand === false ? "h-[70px]" : "h-auto"}`}>
               Based on the input provided, the sentiment and perception around the Tom Ford brand seem to be mostly positive. The brand identity is perceived as luxurious (34%) and high-quality (22%), which indicates that customers perceive the products to be of a high standard. However, there has been a 10% rise in negative mentions around the price, indicating that customers may perceive
               Based on the input provided, the sentiment and perception around the Tom Ford brand seem to be mostly positive. The brand identity is perceived as luxurious (34%) and high-quality (22%), which indicates that customers perceive the products to be of a high standard. However, there has been a 10% rise in negative mentions around the price, indicating that customers may perceive
               {expand === false ? <div className="whiteGradient fixed bottom-0 left-0 w-full h-[40px]"></div> : null}
               </div>
             </div>
             </div>

             <div className="mt-12">
               <div className="flex items-center justify-between mb-3 relative sm3:w-[calc(100%-183px)] z-10">
                <div className="text-[19px] font-[500]">Top performing videos</div>
               </div>

               <div className="sm3:-translate-y-12 mb-3 sm3:mb-0 flex items-center justify-end"><Link to="/dashboard/video-gallery" className="bg-main transition hover:bg-main-hover text-white px-6 py-2.5 rounded-full flex items-center gap-2.5 flex-row-reverse">Video Gallery <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.6696 0H4.77962C3.7486 0.00132301 2.76019 0.411481 2.03115 1.14052C1.30211 1.86957 0.891948 2.85798 0.890625 3.889L0.890625 14.779C0.891948 15.81 1.30211 16.7984 2.03115 17.5275C2.76019 18.2565 3.7486 18.6667 4.77962 18.668H15.6696C16.7006 18.6667 17.6891 18.2565 18.4181 17.5275C19.1471 16.7984 19.5573 15.81 19.5586 14.779V3.889C19.5573 2.85798 19.1471 1.86957 18.4181 1.14052C17.6891 0.411481 16.7006 0.00132301 15.6696 0ZM16.4476 8.556H18.0036V10.112H16.4476V8.556ZM16.4476 7V5.445H18.0036V7H16.4476ZM14.8906 8.556H5.55762V1.556H14.8906V8.556ZM4.00163 10.112H2.44662V8.556H4.00163V10.112ZM4.00163 7H2.44662V5.445H4.00163V7ZM2.44662 11.668H4.00163V13.224H2.44662V11.668ZM5.55762 10.112H14.8906V17.112H5.55762V10.112ZM16.4476 11.668H18.0036V13.224H16.4476V11.668ZM18.0036 3.89H16.4476V1.7C16.901 1.86028 17.2938 2.15669 17.5723 2.54869C17.8508 2.94068 18.0015 3.40914 18.0036 3.89ZM4.00362 1.7V3.89H2.44662C2.44872 3.40926 2.59921 2.94089 2.87754 2.54891C3.15587 2.15693 3.54844 1.86045 4.00163 1.7H4.00362ZM2.44662 14.779H4.00163V16.969C3.54826 16.8087 3.15546 16.5123 2.87695 16.1203C2.59843 15.7283 2.44779 15.2599 2.44562 14.779H2.44662ZM16.4466 16.969V14.779H18.0026C18.0007 15.2599 17.8503 15.7285 17.572 16.1207C17.2937 16.5129 16.901 16.8095 16.4476 16.97L16.4466 16.969Z" fill="white"/></svg></Link></div>
               <div className="grid grid-cols-1 sm2:grid-cols-2 lg2:grid-cols-3 xl2:grid-cols-4 gap-5">
                  {
                    array.map((ele, index)=>{
                      return(
                  <div key={index} className="cardShadow bg-white rounded-xl overflow-hidden">
                    <a href="https://youtube.com" className="flex items-center justify-center w-full h-[180px]"><img src="/images/video.png" alt="video" className="w-full h-full object-cover object-center" /></a>
                    <div className="flex items-center justify-evenly gap-3 p-3 py-5 bg-white">
                    <div className="flex items-center gap-2 text-sm flex-col-reverse">131.4K <div className="rounded-full bg-main flex items-center justify-center w-[40px] h-[40px]"><svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.007 11.849C11.8278 11.849 13.304 10.3729 13.304 8.552C13.304 6.73112 11.8278 5.255 10.007 5.255C8.18608 5.255 6.70996 6.73112 6.70996 8.552C6.70996 10.3729 8.18608 11.849 10.007 11.849Z" fill="white"/><path d="M19.2958 6.42498C18.3666 4.76759 17.0209 3.38147 15.3918 2.40369C13.7626 1.42591 11.9064 0.890348 10.0068 0.849976C8.10614 0.889312 6.24871 1.42438 4.61841 2.40221C2.9881 3.38005 1.64146 4.76673 0.711798 6.42498C0.316701 7.06408 0.107422 7.8006 0.107422 8.55197C0.107422 9.30334 0.316701 10.0399 0.711798 10.679C1.64094 12.3364 2.98665 13.7225 4.61581 14.7003C6.24498 15.678 8.10117 16.2136 10.0008 16.254C11.9004 16.2136 13.7566 15.678 15.3858 14.7003C17.0149 13.7225 18.3606 12.3364 19.2898 10.679C19.6858 10.0404 19.8961 9.3042 19.8972 8.55283C19.8982 7.80145 19.69 7.06464 19.2958 6.42498ZM10.0058 13.497C9.02777 13.497 8.0717 13.207 7.2585 12.6636C6.4453 12.1202 5.81149 11.3479 5.43721 10.4443C5.06294 9.54076 4.96501 8.54649 5.15581 7.58725C5.34662 6.62802 5.81758 5.7469 6.50915 5.05533C7.20073 4.36376 8.08184 3.8928 9.04108 3.70199C10.0003 3.51119 10.9946 3.60912 11.8982 3.98339C12.8017 4.35767 13.5741 4.99148 14.1174 5.80468C14.6608 6.61788 14.9508 7.57394 14.9508 8.55197C14.9508 9.86347 14.4298 11.1212 13.5024 12.0486C12.5751 12.976 11.3173 13.497 10.0058 13.497Z" fill="white"/></svg></div></div>
                    <div className="flex items-center gap-2 text-sm flex-col-reverse">2.1K <div className="rounded-full bg-main flex items-center justify-center w-[40px] h-[40px]"><svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.941 6.09999C18.5567 5.65691 18.0816 5.30162 17.548 5.05817C17.0143 4.81473 16.4346 4.68883 15.848 4.68899H12.578L12.853 3.01599C12.9497 2.42731 12.8317 1.82348 12.5205 1.31449C12.2094 0.805499 11.7257 0.425198 11.1577 0.242846C10.5897 0.0604948 9.97509 0.0882236 9.4258 0.320983C8.87651 0.553743 8.4291 0.976048 8.16503 1.51099L6.83203 4.21199V16.985H15.274C16.2605 16.9809 17.2127 16.6228 17.9575 15.9759C18.7022 15.329 19.19 14.4362 19.332 13.46L19.91 9.35999C19.9917 8.77867 19.9473 8.18659 19.7799 7.62393C19.6125 7.06127 19.3261 6.54119 18.94 6.09899L18.941 6.09999Z" fill="white"/><path d="M0.274414 8.79V12.89C0.274414 13.9774 0.706377 15.0202 1.47528 15.7891C2.24418 16.558 3.28703 16.99 4.37441 16.99H5.19441V4.69H4.37441C3.28703 4.69 2.24418 5.12197 1.47528 5.89086C0.706377 6.65976 0.274414 7.70262 0.274414 8.79Z" fill="white"/></svg></div></div>
                    <div className="flex items-center gap-2 text-sm flex-col-reverse">83% <div className="rounded-full bg-[#0CFF2C] flex items-center justify-center w-[40px] h-[40px]"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.558 0.195984C7.80318 0.198631 5.16198 1.29414 3.21405 3.24207C1.26612 5.19 0.170616 7.8312 0.167969 10.586C0.687969 24.353 20.429 24.347 20.948 10.586C20.9453 7.8312 19.8498 5.19 17.9019 3.24207C15.954 1.29414 13.3128 0.198631 10.558 0.195984ZM13.588 6.25698C15.288 6.27998 15.288 10.563 13.588 10.586C11.888 10.563 11.887 6.27998 13.588 6.25698ZM7.52697 6.25698C9.22697 6.27998 9.22697 10.563 7.52697 10.586C5.82697 10.563 5.82597 6.27998 7.52697 6.25698ZM10.568 16.647C9.34768 16.5913 8.17907 16.1382 7.24026 15.3566C6.30146 14.575 5.64395 13.508 5.36797 12.318C7.05237 12.848 8.8027 13.1395 10.568 13.184C12.3331 13.1386 14.0834 12.8471 15.768 12.318C15.4932 13.5086 14.836 14.5764 13.897 15.3582C12.9579 16.1399 11.7886 16.5926 10.568 16.647Z" fill="white"/></svg></div></div>
                    <div className="flex items-center gap-2 text-sm flex-col-reverse">10% <div className="rounded-full bg-[#FFC60C] flex items-center justify-center w-[40px] h-[40px]"><svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6644 0.195984C7.90963 0.198631 5.26843 1.29414 3.3205 3.24207C1.37257 5.19 0.277062 7.8312 0.274414 10.586C0.794414 24.353 20.5354 24.348 21.0544 10.586C21.0518 7.8312 19.9563 5.19 18.0083 3.24207C16.0604 1.29414 13.4192 0.198631 10.6644 0.195984ZM4.60341 9.91998C4.81841 5.34398 9.58441 5.34698 9.80341 9.91998C9.80341 10.1497 9.71217 10.3699 9.54977 10.5323C9.38736 10.6947 9.16709 10.786 8.93741 10.786C8.70774 10.786 8.48747 10.6947 8.32506 10.5323C8.16265 10.3699 8.07141 10.1497 8.07141 9.91998C8.07141 9.00698 7.48241 8.18798 7.20541 8.18798C6.92841 8.18798 6.33941 9.00698 6.33941 9.91998C6.33941 10.1497 6.24818 10.3699 6.08577 10.5323C5.92336 10.6947 5.70309 10.786 5.47341 10.786C5.24374 10.786 5.02347 10.6947 4.86106 10.5323C4.69865 10.3699 4.60741 10.1497 4.60741 9.91998H4.60341ZM15.5744 14.03C14.2363 15.2592 12.4854 15.9413 10.6684 15.9413C8.85138 15.9413 7.10055 15.2592 5.76241 14.03C5.59623 13.8757 5.49718 13.6625 5.48653 13.436C5.47587 13.2095 5.55448 12.9878 5.70545 12.8187C5.85642 12.6495 6.06771 12.5463 6.29395 12.5312C6.52019 12.5161 6.74332 12.5904 6.91541 12.738C7.9346 13.6876 9.27587 14.2157 10.6689 14.2157C12.062 14.2157 13.4032 13.6876 14.4224 12.738C14.595 12.5943 14.8167 12.5233 15.0407 12.5399C15.2646 12.5566 15.4734 12.6596 15.6228 12.8272C15.7723 12.9948 15.8508 13.214 15.8418 13.4384C15.8327 13.6628 15.7369 13.8749 15.5744 14.03ZM15.8634 10.787C15.6337 10.787 15.4135 10.6957 15.2511 10.5333C15.0887 10.3709 14.9974 10.1507 14.9974 9.92098C14.9974 9.00798 14.4084 8.18898 14.1314 8.18898C13.8544 8.18898 13.2654 9.00798 13.2654 9.92098C13.2654 10.1507 13.1742 10.3709 13.0118 10.5333C12.8494 10.6957 12.6291 10.787 12.3994 10.787C12.1697 10.787 11.9495 10.6957 11.7871 10.5333C11.6247 10.3709 11.5334 10.1507 11.5334 9.92098C11.5334 8.28298 12.6004 6.45798 14.1334 6.45798C15.6664 6.45798 16.7334 8.28298 16.7334 9.92098C16.7333 10.0353 16.7105 10.1485 16.6664 10.2539C16.6224 10.3594 16.5578 10.4551 16.4766 10.5355C16.3953 10.616 16.299 10.6795 16.193 10.7225C16.0871 10.7655 15.9737 10.787 15.8594 10.786L15.8634 10.787Z" fill="white"/></svg></div></div>
                    <div className="flex items-center gap-2 text-sm flex-col-reverse">7% <div className="rounded-full bg-[#FF0C0C] flex items-center justify-center w-[40px] h-[40px]"><svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7691 0.195984C8.72067 0.195786 6.71816 0.803045 5.01482 1.94097C3.31149 3.07889 1.98385 4.69636 1.1998 6.58884C0.415754 8.48132 0.210508 10.5638 0.610022 12.5729C1.00954 14.582 1.99587 16.4276 3.44428 17.8761C4.89269 19.3247 6.73813 20.3112 8.74722 20.7109C10.7563 21.1106 12.8388 20.9056 14.7314 20.1217C16.6239 19.3378 18.2415 18.0104 19.3796 16.3071C20.5177 14.6039 21.1251 12.6014 21.1251 10.553C21.1251 7.80631 20.0341 5.17212 18.092 3.22983C16.1499 1.28755 13.5158 0.196249 10.7691 0.195984ZM7.31214 7.09598C7.53964 7.09532 7.76503 7.13965 7.97534 7.2264C8.18566 7.31316 8.37674 7.44064 8.53761 7.60151C8.69848 7.76238 8.82596 7.95347 8.91272 8.16378C8.99947 8.37409 9.0438 8.59948 9.04314 8.82698C9.04314 9.68998 8.27114 9.68998 7.31714 9.68998C6.36314 9.68998 5.59114 9.68998 5.59114 8.82698C5.59048 8.60032 5.63447 8.37575 5.72061 8.16609C5.80674 7.95643 5.93332 7.76579 6.09313 7.60505C6.25294 7.44431 6.44285 7.31663 6.65201 7.22928C6.86116 7.14193 7.08548 7.09664 7.31214 7.09598ZM15.7231 15.439C15.5709 15.6094 15.3573 15.7125 15.1291 15.7256C14.901 15.7387 14.6769 15.6608 14.5061 15.509C13.4511 14.6206 12.1403 14.092 10.7641 14C9.388 14.0919 8.0771 14.6206 7.02214 15.509C6.9375 15.5844 6.83885 15.6423 6.7318 15.6796C6.62476 15.7168 6.51143 15.7326 6.39829 15.7261C6.28514 15.7195 6.17439 15.6908 6.07236 15.6414C5.97033 15.5921 5.87902 15.5231 5.80364 15.4385C5.72826 15.3538 5.67029 15.2552 5.63304 15.1482C5.59579 15.0411 5.57998 14.9278 5.58653 14.8146C5.59975 14.5861 5.70321 14.3722 5.87414 14.22C7.24457 13.0493 8.96405 12.3654 10.7641 12.275C12.5642 12.3654 14.2837 13.0493 15.6541 14.22C15.7387 14.2955 15.8077 14.3869 15.8569 14.489C15.9062 14.5911 15.9348 14.702 15.9412 14.8152C15.9477 14.9284 15.9317 15.0418 15.8943 15.1488C15.8568 15.2558 15.7987 15.3544 15.7231 15.439ZM14.2211 9.68998C13.2671 9.68998 12.4951 9.68998 12.4951 8.82698C12.4951 8.36922 12.677 7.93021 13.0007 7.60652C13.3244 7.28283 13.7634 7.10098 14.2211 7.10098C14.6789 7.10098 15.1179 7.28283 15.4416 7.60652C15.7653 7.93021 15.9471 8.36922 15.9471 8.82698C15.9471 9.68998 15.1741 9.68998 14.2211 9.68998Z" fill="white"/></svg></div></div>
                    </div>
                  </div>
                      )
                    })
                  }
               </div>
             </div>




             <div className="mt-12">
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

          :

          // Suggested Action Plan
          <div>
              <div className="mt-5 sm:-mt-3">
             <div className="sm:-translate-y-7 mb-3 sm:mb-0 flex items-center justify-end"><button onClick={()=> {setexpand(!expand)}} className="px-7 py-1.5 text-main rounded-full border-solid border border-main transition hover:bg-main hover:text-white">{expand === false ? "Expand" : "Shrink"}</button></div>
             <div className="cardShadow bg-white rounded-lg p-5 overflow-hidden">
              <div className="text-[19px] font-[500] mb-3">Suggested Action Plan</div>
               <div className={`relative transition-[height] max-h-[400px] leading-[28.5px] pr-1 overflow-y-auto ${expand === false ? "h-[70px]" : "h-auto"}`}>
               Based on the input provided, the sentiment and perception around the Tom Ford brand seem to be mostly positive. The brand identity is perceived as luxurious (34%) and high-quality (22%), which indicates that customers perceive the products to be of a high standard. However, there has been a 10% rise in negative mentions around the price, indicating that customers may perceive
               Based on the input provided, the sentiment and perception around the Tom Ford brand seem to be mostly positive. The brand identity is perceived as luxurious (34%) and high-quality (22%), which indicates that customers perceive the products to be of a high standard. However, there has been a 10% rise in negative mentions around the price, indicating that customers may perceive
               {expand === false ? <div className="whiteGradient fixed bottom-0 left-0 w-full h-[40px]"></div> : null}
               </div>
             </div>
             </div>
          </div>


             }
          </div>

        </div>
      </div>
      }
    </>
  )
}

export default KeyTakeAways;