import { useState, useEffect, useRef } from "react";


const VideoTable = () => {

     // for popups
  const [viewsPopupVisible, setViewsPopupVisible] = useState(false);
  const [likesPopupVisible, setLikesPopupVisible] = useState(false);
  const [sentimentPopupVisible, setSentimentPopupVisible] = useState(false);
  const [emotionPopupVisible, setEmotionPopupVisible] = useState(false);

  const viewsPopupRef = useRef(null);
  const likesPopupRef = useRef(null);
  const sentimentPopupRef = useRef(null);
  const emotionPopupRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleViewsClickOutside);
    document.addEventListener("mousedown", handleLikesClickOutside);
    document.addEventListener("mousedown", handleSentimentClickOutside);
    document.addEventListener("mousedown", handleEmotionClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleViewsClickOutside);
      document.removeEventListener("mousedown", handleLikesClickOutside);
      document.removeEventListener("mousedown", handleSentimentClickOutside);
      document.removeEventListener("mousedown", handleEmotionClickOutside);
    };
  }, []);

  const handleViewsClickOutside = (event) => {
    if (viewsPopupRef.current && !viewsPopupRef.current.contains(event.target)) {
      setViewsPopupVisible(false);
    }
  };

  const handleLikesClickOutside = (event) => {
    if (likesPopupRef.current && !likesPopupRef.current.contains(event.target)) {
      setLikesPopupVisible(false);
    }
  };

  const handleSentimentClickOutside = (event) => {
    if (sentimentPopupRef.current && !sentimentPopupRef.current.contains(event.target)) {
      setSentimentPopupVisible(false);
    }
  };

  const handleEmotionClickOutside = (event) => {
    if (emotionPopupRef.current && !emotionPopupRef.current.contains(event.target)) {
      setEmotionPopupVisible(false);
    }
  };

  const toggleViewsPopup = () => {
    setViewsPopupVisible(!viewsPopupVisible);
  };

  const toggleLikesPopup = () => {
    setLikesPopupVisible(!likesPopupVisible);
  };

  const toggleSentimentPopup = () => {
    setSentimentPopupVisible(!sentimentPopupVisible);
  };

  const toggleEmotionPopup = () => {
    setEmotionPopupVisible(!emotionPopupVisible);
  };

  //popups end


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
      <div className="cardShadow bg-white rounded-xl overflow-x-auto">
      <table className="w-full border-collapse">
      <thead className="bg-main text-white">
      <tr className="text-left">
        <th className="px-4 py-4 font-[500] whitespace-nowrap">Watch Video</th>
        <th className="px-[40px] py-4 font-[500] whitespace-nowrap">Title</th>
        <th className="relative px-[40px] py-4 font-[500] whitespace-nowrap">
          Views 
          <button className="PopupButton inline self-center ml-2" onClick={toggleViewsPopup}>
            <img src="/images/sort.svg" className="inline" alt="sort" />
          </button>
          {viewsPopupVisible && (
             <div
             className="Popup dropDownShadow flex flex-col divide-y divide-[#E6E6E6] rounded-md bg-white px-4 py-2 absolute top-[calc(100%-5px)] right-0"
             ref={viewsPopupRef}
           >
             <svg className="absolute bottom-[calc(100%-1px)] right-5" width="26" height="10" viewBox="0 0 35 19" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M34.5 18.5H0L16.5 0L34.5 18.5Z" fill="white"/>
             </svg>
             <div className="flex items-center justify-between gap-10 py-2">
               <div className="text-[15px] text-black">Ascending</div>
               <input type="checkbox" className="cursor-pointer w-[15px] h-[15px] accent-main" />
             </div>
   
             <div className="flex items-center justify-between gap-10 py-2">
               <div className="text-[15px] text-black">Descending</div>
               <input type="checkbox" className="cursor-pointer w-[15px] h-[15px] accent-main" />
             </div>
           </div>
          )}
        </th>
        <th className="relative px-[40px] py-4 font-[500] whitespace-nowrap">
          Likes 
          <button className="PopupButton inline self-center ml-2" onClick={toggleLikesPopup}>
<img src="/images/sort.svg" className="inline" alt="sort" />
</button>
{likesPopupVisible && (
 <div
 className="Popup dropDownShadow flex flex-col divide-y divide-[#E6E6E6] rounded-md bg-white px-4 py-2 absolute top-[calc(100%-5px)] right-0"
 ref={likesPopupRef}
>
 
 <div className="flex items-center justify-between gap-10 py-2">
   <div className="text-[15px] text-black">Ascending</div>
   <input type="checkbox" className="cursor-pointer w-[15px] h-[15px] accent-main" />
 </div>

 <div className="flex items-center justify-between gap-10 py-2">
   <div className="text-[15px] text-black">Descending</div>
   <input type="checkbox" className="cursor-pointer w-[15px] h-[15px] accent-main" />
 </div>

 <svg className="border-none absolute bottom-[calc(100%-1px)] right-5" width="26" height="10" viewBox="0 0 35 19" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M34.5 18.5H0L16.5 0L34.5 18.5Z" fill="white"/>
 </svg>
</div>
)}
</th>
<th className="relative px-[40px] py-4 font-[500] whitespace-nowrap">
Sentiment
<button className="PopupButton inline self-center ml-2" onClick={toggleSentimentPopup}>
<img src="/images/sort.svg" className="inline" alt="sort" />
</button>
{sentimentPopupVisible && (
 <div
 className="Popup dropDownShadow flex flex-col divide-y divide-[#E6E6E6] rounded-md bg-white px-4 py-2 absolute top-[calc(100%-5px)] right-0"
 ref={sentimentPopupRef}
>

 <div className="flex items-center justify-between gap-10 py-2">
   <div className="text-[15px] text-black">Positive</div>
   <input type="checkbox" className="cursor-pointer w-[15px] h-[15px] accent-main" />
 </div>

 <div className="flex items-center justify-between gap-10 py-2">
   <div className="text-[15px] text-black">Negative</div>
   <input type="checkbox" className="cursor-pointer w-[15px] h-[15px] accent-main" />
 </div>

 <div className="flex items-center justify-between gap-10 py-2">
   <div className="text-[15px] text-black">Mixed</div>
   <input type="checkbox" className="cursor-pointer w-[15px] h-[15px] accent-main" />
 </div>

 <div className="flex items-center justify-between gap-10 py-2">
   <div className="text-[15px] text-black">Neutral</div>
   <input type="checkbox" className="cursor-pointer w-[15px] h-[15px] accent-main" />
 </div>


 <svg className="border-none absolute bottom-[calc(100%-1px)] right-5" width="26" height="10" viewBox="0 0 35 19" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M34.5 18.5H0L16.5 0L34.5 18.5Z" fill="white"/>
 </svg>
</div>
)}
</th>
<th className="relative px-[40px] py-4 font-[500] whitespace-nowrap">
Emotion
<button className="PopupButton inline self-center ml-2" onClick={toggleEmotionPopup}>
<img src="/images/sort.svg" className="inline" alt="sort" />
</button>
{emotionPopupVisible && (
 <div
 className="Popup dropDownShadow flex flex-col divide-y divide-[#E6E6E6] rounded-md bg-white px-4 py-2 absolute top-[calc(100%-5px)] right-14"
 ref={emotionPopupRef}
>
 
 <div className="flex items-center justify-between gap-10 py-2">
   <div className="text-[15px] text-black">Happy</div>
   <input type="checkbox" className="cursor-pointer w-[15px] h-[15px] accent-main" />
 </div>

 <div className="flex items-center justify-between gap-10 py-2">
   <div className="text-[15px] text-black">Sad</div>
   <input type="checkbox" className="cursor-pointer w-[15px] h-[15px] accent-main" />
 </div>

 <div className="flex items-center justify-between gap-10 py-2">
   <div className="text-[15px] text-black">Calm</div>
   <input type="checkbox" className="cursor-pointer w-[15px] h-[15px] accent-main" />
 </div>

 <div className="flex items-center justify-between gap-10 py-2">
   <div className="text-[15px] text-black">Angry</div>
   <input type="checkbox" className="cursor-pointer w-[15px] h-[15px] accent-main" />
 </div>

 <div className="flex items-center justify-between gap-10 py-2">
   <div className="text-[15px] text-black">Surprised</div>
   <input type="checkbox" className="cursor-pointer w-[15px] h-[15px] accent-main" />
 </div>

 <div className="flex items-center justify-between gap-10 py-2">
   <div className="text-[15px] text-black">Disgusted</div>
   <input type="checkbox" className="cursor-pointer w-[15px] h-[15px] accent-main" />
 </div>

 <div className="flex items-center justify-between gap-10 py-2">
   <div className="text-[15px] text-black">Confused</div>
   <input type="checkbox" className="cursor-pointer w-[15px] h-[15px] accent-main" />
 </div>

 <svg className="border-none absolute bottom-[calc(100%-1px)] right-5" width="26" height="10" viewBox="0 0 35 19" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M34.5 18.5H0L16.5 0L34.5 18.5Z" fill="white"/>
 </svg>

 <svg className="border-none absolute bottom-[calc(100%-1px)] right-5" width="26" height="10" viewBox="0 0 35 19" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M34.5 18.5H0L16.5 0L34.5 18.5Z" fill="white"/>
 </svg>
</div>
)}
</th>
<th className="px-[40px] py-4 font-[500] whitespace-nowrap">Actions</th>
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
    </>
  )
}

export default VideoTable