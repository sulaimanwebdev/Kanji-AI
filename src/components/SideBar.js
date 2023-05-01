import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SideBar = (props) => {
    const location = useLocation();
    const [dropDown, setdropDown] = useState(location.pathname.startsWith('/dashboard') ? true : false);

  return (
    <>
    <div className={`transition ${props.leftMenu === false ? "-translate-x-full" : "translate-x-0"} sidebarShadow fixed top-0 left-0 z-50 bg-white p-5 pb-0 h-screen max-h-screen overflow-y-auto overflow-x-hidden`}>
         <div className="flex items-center justify-between border-solid border-b border-[#CFCFCF] pb-4 mb-[26px]">
          <Link to="/dashboard/key-takeaways"><img src="/images/logo.svg" alt="logo" /></Link>
          <button onClick={()=> {props.setleftMenu(!props.leftMenu)}}><svg width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.26465 1.5H21.4996" stroke="black" stroke-width="2.5" stroke-linecap="round"/><path d="M1.26465 12.114H21.4996" stroke="black" stroke-width="2.5" stroke-linecap="round"/></svg></button>
         </div>

         <div className="flex justify-between flex-col gap-7 h-[calc(100%-78px)]">
            <div className="flex flex-col gap-7">
             <div className={`overflow-hidden transition-[height] ${dropDown === false ? "h-[24px]" : "h-[143px]"}`}>
                <button onClick={()=> {setdropDown(!dropDown)}} className={`grid grid-cols-[35px,1fr] font-[500] w-full ${location.pathname.startsWith('/dashboard') ? "text-main" : "text-black"}`}><img src="/images/active-icons/dashboard.svg" alt="icon" className={location.pathname.startsWith('/dashboard') ? "" : "hidden"} />  <img src="/images/non-active-icons/dashboard.svg" alt="icon" className={location.pathname.startsWith('/dashboard') ? "hidden" : ""}/> <div className="flex items-center justify-between">Dashboard <svg className={`transition ${dropDown === false ? "-rotate-[90deg]" : ""}`} width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5383 0.276004C13.4515 0.188384 13.3483 0.118829 13.2345 0.0713597C13.1207 0.0238908 12.9986 -0.000550173 12.8753 -0.000550173C12.752 -0.000550173 12.6299 0.0238908 12.5161 0.0713597C12.4023 0.118829 12.299 0.188384 12.2123 0.276004L7.93829 4.552C7.85154 4.63963 7.74828 4.70918 7.63448 4.75665C7.52068 4.80412 7.3986 4.82856 7.27529 4.82856C7.15199 4.82856 7.02991 4.80412 6.91611 4.75665C6.80231 4.70918 6.69905 4.63963 6.61229 4.552L2.33829 0.276004C2.16365 0.099768 1.92615 0.000127772 1.67804 -0.000997446C1.42993 -0.00212266 1.19153 0.0953598 1.01529 0.270005C0.839057 0.44465 0.739416 0.682152 0.738291 0.930262C0.737166 1.17837 0.834648 1.41677 1.00929 1.593L5.29429 5.878C5.81932 6.40256 6.53113 6.69721 7.27329 6.69721C8.01546 6.69721 8.72727 6.40256 9.25229 5.878L13.5383 1.593C13.7125 1.41813 13.8103 1.18135 13.8103 0.934505C13.8103 0.687661 13.7125 0.450875 13.5383 0.276004Z" fill={location.pathname.startsWith('/dashboard') ? "#0C77FF" : "#828282"}/></svg></div></button>
                <Link to="/dashboard/key-takeaways" className={`flex font-[500] w-full pl-[35px] mt-4 ${location.pathname === "/dashboard/key-takeaways" ? "text-main" : "text-[#828282]"}`}>Key Takeaways</Link>
                <Link to="/dashboard/video-gallery" className={`flex font-[500] w-full pl-[35px] mt-4 ${location.pathname === "/dashboard/video-gallery" ? "text-main" : "text-[#828282]"}`}>Video Gallery</Link>
                <Link to="/dashboard/customer-viewpoint" className={`flex font-[500] w-full pl-[35px] mt-4 ${location.pathname === "/dashboard/video-gallery" ? "text-main" : "text-[#828282]"}`}>Customer Viewpoint</Link>
             </div>
            <Link to="/reports" className={`grid grid-cols-[35px,1fr] text-black font-[500] w-full ${location.pathname === "/reports" ? "text-main" : "text-black"}`}><img src="/images/active-icons/dashboard.svg" alt="icon" className={location.pathname === "/reports" ? "" : "hidden"} /> <img src="/images/non-active-icons/reports.svg" alt="icon" className={location.pathname === "/reports" ? "hidden" : ""}/> Reports</Link>
            <Link to="/settings" className={`grid grid-cols-[35px,1fr] text-black font-[500] w-full ${location.pathname === "/settings" ? "text-main" : "text-black"}`}><img src="/images/active-icons/dashboard.svg" alt="icon" className={location.pathname === "/settings" ? "" : "hidden"} /> <img src="/images/non-active-icons/settings.svg" alt="icon" className={location.pathname === "/settings" ? "hidden" : ""}/> Settings</Link>
                
            </div>

            <Link to="/" className="grid grid-cols-[35px,1fr] text-[#FF7474] font-[500] w-full pb-5"><svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.40212 19.602H3.27112C3.17361 19.6018 3.08016 19.5629 3.0112 19.4939C2.94225 19.425 2.90339 19.3315 2.90313 19.234V3.77003C2.90339 3.67251 2.94225 3.57906 3.0112 3.5101C3.08016 3.44115 3.17361 3.40229 3.27112 3.40203H7.40212C7.76017 3.40203 8.10355 3.25979 8.35672 3.00662C8.60989 2.75345 8.75213 2.41007 8.75213 2.05203C8.75213 1.69398 8.60989 1.35061 8.35672 1.09743C8.10355 0.844258 7.76017 0.702026 7.40212 0.702026H3.27112C2.45768 0.702821 1.67779 1.02631 1.1026 1.6015C0.527409 2.17669 0.203919 2.95659 0.203125 3.77003V19.231C0.203125 20.045 0.526264 20.8257 1.10154 21.4015C1.67681 21.9773 2.45716 22.3012 3.27112 22.302H7.40212C7.76017 22.302 8.10355 22.1598 8.35672 21.9066C8.60989 21.6534 8.75213 21.3101 8.75213 20.952C8.75213 20.594 8.60989 20.2506 8.35672 19.9974C8.10355 19.7443 7.76017 19.602 7.40212 19.602Z" fill="#FF7474"/><path d="M20.6132 8.63702L17.1202 5.14601C16.9948 5.02066 16.8459 4.92125 16.6821 4.85344C16.5182 4.78563 16.3426 4.75075 16.1653 4.75079C15.988 4.75084 15.8124 4.78581 15.6486 4.85371C15.4848 4.9216 15.336 5.0211 15.2107 5.14651C15.0853 5.27193 14.9859 5.4208 14.9181 5.58463C14.8503 5.74847 14.8154 5.92405 14.8155 6.10136C14.8155 6.27868 14.8505 6.45425 14.9184 6.61805C14.9863 6.78185 15.0858 6.93067 15.2112 7.05602L18.2812 10.125L6.05117 10.15C5.69313 10.15 5.34975 10.2922 5.09658 10.5454C4.84341 10.7986 4.70117 11.142 4.70117 11.5C4.70117 11.8581 4.84341 12.2014 5.09658 12.4546C5.34975 12.7078 5.69313 12.85 6.05117 12.85L18.3312 12.828L15.2112 15.948C14.9728 16.2041 14.8432 16.5426 14.8495 16.8923C14.8559 17.2421 14.9978 17.5757 15.2452 17.8229C15.4927 18.0701 15.8265 18.2116 16.1762 18.2176C16.526 18.2236 16.8644 18.0936 17.1202 17.855L20.6112 14.364C20.9873 13.988 21.2856 13.5416 21.4892 13.0503C21.6928 12.559 21.7975 12.0323 21.7975 11.5005C21.7975 10.9687 21.6928 10.4421 21.4892 9.95075C21.2856 9.45943 20.9873 9.01302 20.6112 8.63702H20.6132Z" fill="#FF7474"/></svg> Logout</Link>
         </div>
        </div>

        <div onClick={()=> {props.setleftMenu(!props.leftMenu)}} className={`flex lg3:hidden w-full h-screen fixed top-0 left-0 bg-white bg-opacity-90 transition z-30 ${props.leftMenu === false ? "opacity-0 invisible" : "opacity-100 visible"}`}></div>
    </>
  )
}

export default SideBar