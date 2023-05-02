import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import SideBar from "../components/SideBar";
import Navigation from "../components/Navigation";

const VideoGallery = () => {
   const [leftMenu, setleftMenu] = useState(true);
   const [windowSize, setwindowSize] = useState(true);

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

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  const videos = [
    {
      video: 'https://youtube.com',
      title: 'Tom Ford Makeup Tutorial: Effortless Glam',
      views: "132K",
      likes: "53K",
      sentiment: 'Positive',
      coreEmotion: 'Happy',
      keywords: ['vulnerability', 'authenticity', 'shame'],
    },

    {
      video: 'https://youtube.com',
      title: 'Tom Ford Makeup Tutorial: Effortless Glam',
      views: "132K",
      likes: "53K",
      sentiment: 'Positive',
      coreEmotion: 'Happy',
      keywords: ['vulnerability', 'authenticity', 'shame'],
    },
    
    {
      video: 'https://youtube.com',
      title: 'Tom Ford Makeup Tutorial: Effortless Glam',
      views: "132K",
      likes: "53K",
      sentiment: 'Positive',
      coreEmotion: 'Happy',
      keywords: ['vulnerability', 'authenticity', 'shame'],
    },

    {
      video: 'https://youtube.com',
      title: 'Tom Ford Makeup Tutorial: Effortless Glam',
      views: "132K",
      likes: "53K",
      sentiment: 'Positive',
      coreEmotion: 'Happy',
      keywords: ['vulnerability', 'authenticity', 'shame'],
    },


    // Add more videos here...
  ];


  return (
    <>
      <div>
         <SideBar leftMenu={leftMenu} setleftMenu={setleftMenu}/>

        <div className={`px-5 pt-3 pb-5 ${leftMenu === true ? windowSize === true ? "ml-[240px]" : "ml-[60px]" : "ml-[60px]"}`}>
           <div className="flex items-center justify-between">
              <div className="text-[22px] text-[#3D3D3D] font-[800]">Dashboard</div>
              <Navigation leftMenu={leftMenu} setleftMenu={setleftMenu}/>
           </div>
    
          <div className="mt-8">
             <div className="flex items-center justify-between">
              <div>
               <div className="text-[19px] font-[500]">Weekly Report - Key Takeaways</div>
               <div className="text-[15px] text-not-gray mt-1">March 24, 2023</div>
              </div>

              {/* search bar */}
               <div className="w-full rounded-full bg-white border-solid border border-[#DEDEDE] focus-within:border-main flex items-center justify-between gap-2 h-[50px] px-3 max-w-[600px]">
                <div className="flex items-center gap-2.5 w-full">
                  <img src="/images/search.svg" alt="search" />
                  <input type="text" placeholder="Search for Keywords" className="w-full h-full border-none outline-none" />
                </div>

                <div className="flex items-center justify-end gap-1 w-fit h-full py-2 whitespace-nowrap">
                  <div className="flex items-center gap-2 bg-[#F8F8F8] text-[14px] px-4 pr-6 h-full rounded-full">
                  Tutorial Video
                  <img src="/images/cross.svg" alt="cross" className="cursor-pointer" />
                  </div>

                  <div className="flex items-center gap-2 bg-[#F8F8F8] text-[14px] px-4 pr-6 h-full rounded-full">
                  Tom Ford
                  <img src="/images/cross.svg" alt="cross" className="cursor-pointer" />
                  </div>
                </div>
               </div>
             </div>

            {/* main content */}
           <div className="mt-7">
           <div className="cardShadow bg-white rounded-xl overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-main text-white">
          <tr className="text-left">
            <th className="px-4 py-4 font-[500] whitespace-nowrap">Watch Video</th>
            <th className="px-[40px] py-4 font-[500] whitespace-nowrap">Title</th>
            <th className="px-[40px] py-4 font-[500] whitespace-nowrap">Views <img src="/images/sort.svg" alt="sort" className="inline self-center ml-2" /></th>
            <th className="px-[40px] py-4 font-[500] whitespace-nowrap">Likes <img src="/images/sort.svg" alt="sort" className="inline self-center ml-2" /></th>
            <th className="px-[40px] py-4 font-[500] whitespace-nowrap">Sentiment <img src="/images/bars.svg" alt="bars" className="inline self-center ml-2" /></th>
            <th className="px-[40px] py-4 font-[500] whitespace-nowrap">Core Emotion <img src="/images/bars.svg" alt="bars" className="inline self-center ml-2" /></th>
            <th className="px-[40px] py-4 font-[500] whitespace-nowrap">Keywords</th>
          </tr>
        </thead>
        <tbody className="font-[500] divide-y divide-[#C1C1C1]">
          {videos.map((video, index) => (
            <tr key={index} >
              <td className="px-4 py-2.5 text-center whitespace-nowrap">
                <a href={video.video} className="flex items-center justify-center w-[130px] h-[80px] bg-[#3A3A3A] rounded-lg"><img src="/images/play.svg" alt="play" /></a>
              </td>
              <td className="px-[40px] min-w-[300px]">{video.title}</td>
              <td className="px-[40px] whitespace-nowrap">{video.views}</td>
              <td className="px-[40px] whitespace-nowrap">{video.likes}</td>
              <td className="px-[40px] whitespace-nowrap">{video.sentiment}</td>
              <td className="px-[40px] whitespace-nowrap"><div className="px-5 pr-12 py-2 bg-[#FFE60029] font-[400] rounded-full flex items-center gap-3"><img src="/images/smiling-face.png" alt="smiling face" /> {video.coreEmotion}</div></td>
              <td className="px-[40px] whitespace-nowrap"><button className="px-7 py-1.5 font-[400] text-main rounded-full border-solid border border-main transition hover:bg-main hover:text-white">Check Keywords</button></td>
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

export default VideoGallery;