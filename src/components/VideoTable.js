import { useState, useEffect, useRef } from "react";

const VideoTable = () => {
  // for popups
  const [viewsPopupVisible, setViewsPopupVisible] = useState(false);
  const [likesPopupVisible, setLikesPopupVisible] = useState(false);
  const [sentimentPopupVisible, setSentimentPopupVisible] = useState(false);
  const [emotionPopupVisible, setEmotionPopupVisible] = useState(false);
  const [activeButtonIndex, setActiveButtonIndex] = useState(1); // index of the currently active button pagination
  
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
    if (
      viewsPopupRef.current &&
      !viewsPopupRef.current.contains(event.target)
    ) {
      setViewsPopupVisible(false);
    }
  };

  const handleLikesClickOutside = (event) => {
    if (
      likesPopupRef.current &&
      !likesPopupRef.current.contains(event.target)
    ) {
      setLikesPopupVisible(false);
    }
  };

  const handleSentimentClickOutside = (event) => {
    if (
      sentimentPopupRef.current &&
      !sentimentPopupRef.current.contains(event.target)
    ) {
      setSentimentPopupVisible(false);
    }
  };

  const handleEmotionClickOutside = (event) => {
    if (
      emotionPopupRef.current &&
      !emotionPopupRef.current.contains(event.target)
    ) {
      setEmotionPopupVisible(false);
    }
  };

  const toggleViewsPopup = () => {
    setViewsPopupVisible(!viewsPopupVisible);
    if (viewsPopupVisible === true) {
      return;
    }
    setViewsPopupVisible(true);
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


  const [activePopup, setActivePopup] = useState(null);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setActivePopup(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlePopupOpen = (index) => {
    setActivePopup(index);
  };

  const handlePopupClose = () => {
    setActivePopup(null);
  };

  //end

  // allow user to select 1 checkbox at a time
  const [selectedCheckboxViews, setSelectedCheckboxViews] = useState("ascending");
  const handleCheckboxChangeViews = (event) => {
    setSelectedCheckboxViews(event.target.value === selectedCheckboxViews ? null : event.target.value);
  };

  const [selectedCheckboxLikes, setSelectedCheckboxLikes] = useState("ascending");
  const handleCheckboxChangeLikes = (event) => {
    setSelectedCheckboxLikes(event.target.value === selectedCheckboxLikes ? null : event.target.value);
  };
  //end

  // active button function
  const [pagination, setpagination] = useState('1 to 5');
  const handleButtonClick = (index) => {
    setActiveButtonIndex(index);
  };
  //end


  const videos = [
    {
      video: "https://youtube.com",
      title: "Tom Ford Makeup Tutorial: Effortless Glam",
      views: "132K",
      likes: "53K",
      sentiment: "Positive",
      coreEmotion: "happy",
      keywords: [
        "Luxury",
        "Long Lasting",
        "Moisturizing",
        "Happy",
        "Heavy",
        "Unreliable",
        "Obsessed",
      ],
    },

    {
      video: "https://youtube.com",
      title: "Tom Ford Makeup Tutorial: Effortless Glam",
      views: "132K",
      likes: "53K",
      sentiment: "Positive",
      coreEmotion: "calm",
      keywords: [
        "Luxury",
        "Long Lasting",
        "Moisturizing",
        "Happy",
        "Heavy",
        "Unreliable",
        "Obsessed",
      ],
    },

    {
      video: "https://youtube.com",
      title: "Tom Ford Makeup Tutorial: Effortless Glam",
      views: "132K",
      likes: "53K",
      sentiment: "Positive",
      coreEmotion: "surprised",
      keywords: [
        "Luxury",
        "Long Lasting",
        "Moisturizing",
        "Happy",
        "Heavy",
        "Unreliable",
        "Obsessed",
      ],
    },

    {
      video: "https://youtube.com",
      title: "Tom Ford Makeup Tutorial: Effortless Glam",
      views: "132K",
      likes: "53K",
      sentiment: "Positive",
      coreEmotion: "confused",
      keywords: [
        "Luxury",
        "Long Lasting",
        "Moisturizing",
        "Happy",
        "Heavy",
        "Unreliable",
        "Obsessed",
      ],
    },

    {
      video: "https://youtube.com",
      title: "Tom Ford Makeup Tutorial: Effortless Glam",
      views: "132K",
      likes: "53K",
      sentiment: "Positive",
      coreEmotion: "angry",
      keywords: [
        "Luxury",
        "Long Lasting",
        "Moisturizing",
        "Happy",
        "Heavy",
        "Unreliable",
        "Obsessed",
      ],
    },

    {
      video: "https://youtube.com",
      title: "Tom Ford Makeup Tutorial: Effortless Glam",
      views: "132K",
      likes: "53K",
      sentiment: "Positive",
      coreEmotion: "sad",
      keywords: [
        "Luxury",
        "Long Lasting",
        "Moisturizing",
        "Happy",
        "Heavy",
        "Unreliable",
        "Obsessed",
      ],
    },

    {
      video: "https://youtube.com",
      title: "Tom Ford Makeup Tutorial: Effortless Glam",
      views: "132K",
      likes: "53K",
      sentiment: "Positive",
      coreEmotion: "disgusted",
      keywords: [
        "Luxury",
        "Long Lasting",
        "Moisturizing",
        "Happy",
        "Heavy",
        "Unreliable",
        "Obsessed",
      ],
    },

    {
      video: "https://youtube.com",
      title: "Tom Ford Makeup Tutorial: Effortless Glam",
      views: "132K",
      likes: "53K",
      sentiment: "Positive",
      coreEmotion: "happy",
      keywords: [
        "Luxury",
        "Long Lasting",
        "Moisturizing",
        "Happy",
        "Heavy",
        "Unreliable",
        "Obsessed",
      ],
    },

    // Add more videos here...
  ];

  return (
    <>
      <div className="cardShadow bg-white rounded-xl overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-main text-white">
            <tr className="text-left">
              <th className="px-4 py-4 font-[500] whitespace-nowrap">
                Watch Video
              </th>
              <th className="px-[40px] py-4 font-[500] whitespace-nowrap">
                Title
              </th>
              <th className="px-[40px] py-4 font-[500] whitespace-nowrap">
                <div className="relative inline w-fit">
                  Views
                  <button
                    className="inline self-center ml-2"
                    onClick={toggleViewsPopup}
                  >
                    <img src="/images/sort.svg" className="inline" alt="sort" />
                  </button>
                  {viewsPopupVisible && (
                    <div
                      className="dropDownShadow flex flex-col divide-y divide-[#E6E6E6] rounded-md bg-white px-4 py-2 absolute top-[calc(100%+10px)] -right-[26px]"
                      ref={viewsPopupRef}
                    >
                      <div className="flex items-center justify-between gap-10 py-2">
                     <div className="text-[15px] text-black">Ascending</div>
                     <input
                       type="checkbox"
                       className="cursor-pointer w-[15px] h-[15px] accent-main"
                       value="ascending"
                       checked={selectedCheckboxViews === "ascending"}
                       onChange={handleCheckboxChangeViews}
                     />
                   </div>

                   <div className="flex items-center justify-between gap-10 py-2">
                     <div className="text-[15px] text-black">Descending</div>
                     <input
                       type="checkbox"
                       className="cursor-pointer w-[15px] h-[15px] accent-main"
                       value="descending"
                       checked={selectedCheckboxViews === "descending"}
                       onChange={handleCheckboxChangeViews}
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
                  Likes
                  <button
                    className="inline self-center ml-2"
                    onClick={toggleLikesPopup}
                  >
                    <img src="/images/sort.svg" className="inline" alt="sort" />
                  </button>
                  {likesPopupVisible && (
                    <div
                      className="dropDownShadow flex flex-col divide-y divide-[#E6E6E6] rounded-md bg-white px-4 py-2 absolute top-[calc(100%+10px)] -right-[26px]"
                      ref={likesPopupRef}
                    >
                      <div className="flex items-center justify-between gap-10 py-2">
                     <div className="text-[15px] text-black">Ascending</div>
                     <input
                       type="checkbox"
                       className="cursor-pointer w-[15px] h-[15px] accent-main"
                       value="ascending"
                       checked={selectedCheckboxLikes === "ascending"}
                       onChange={handleCheckboxChangeLikes}
                     />
                   </div>

                   <div className="flex items-center justify-between gap-10 py-2">
                     <div className="text-[15px] text-black">Descending</div>
                     <input
                       type="checkbox"
                       className="cursor-pointer w-[15px] h-[15px] accent-main"
                       value="descending"
                       checked={selectedCheckboxLikes === "descending"}
                       onChange={handleCheckboxChangeLikes}
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
                  Sentiment
                  <button
                    className="inline self-center ml-2"
                    onClick={toggleSentimentPopup}
                  >
                    <img src="/images/bars.svg" className="inline" alt="bars" />
                  </button>
                  {sentimentPopupVisible && (
                    <div
                      className="dropDownShadow flex flex-col divide-y divide-[#E6E6E6] rounded-md bg-white px-4 py-2 absolute top-[calc(100%+10px)] -right-[26px]"
                      ref={sentimentPopupRef}
                    >
                      <div className="flex items-center justify-between gap-10 py-2">
                        <div className="text-[15px] text-black">Positive</div>
                        <input
                          type="checkbox"
                          className="cursor-pointer w-[15px] h-[15px] accent-main"
                        />
                      </div>

                      <div className="flex items-center justify-between gap-10 py-2">
                        <div className="text-[15px] text-black">Negative</div>
                        <input
                          type="checkbox"
                          className="cursor-pointer w-[15px] h-[15px] accent-main"
                        />
                      </div>

                      <div className="flex items-center justify-between gap-10 py-2">
                        <div className="text-[15px] text-black">Mixed</div>
                        <input
                          type="checkbox"
                          className="cursor-pointer w-[15px] h-[15px] accent-main"
                        />
                      </div>

                      <div className="flex items-center justify-between gap-10 py-2">
                        <div className="text-[15px] text-black">Neutral</div>
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
                  Emotion
                  <button
                    className="inline self-center ml-2"
                    onClick={toggleEmotionPopup}
                  >
                    <img src="/images/bars.svg" className="inline" alt="bars" />
                  </button>
                  {emotionPopupVisible && (
                    <div
                      className="dropDownShadow flex flex-col divide-y divide-[#E6E6E6] rounded-md bg-white px-4 py-2 absolute top-[calc(100%+10px)] -right-[26px]"
                      ref={emotionPopupRef}
                    >
                      <div className="flex items-center justify-between gap-10 py-2">
                        <div className="text-[15px] text-black">Happy</div>
                        <input
                          type="checkbox"
                          className="cursor-pointer w-[15px] h-[15px] accent-main"
                        />
                      </div>

                      <div className="flex items-center justify-between gap-10 py-2">
                        <div className="text-[15px] text-black">Sad</div>
                        <input
                          type="checkbox"
                          className="cursor-pointer w-[15px] h-[15px] accent-main"
                        />
                      </div>

                      <div className="flex items-center justify-between gap-10 py-2">
                        <div className="text-[15px] text-black">Calm</div>
                        <input
                          type="checkbox"
                          className="cursor-pointer w-[15px] h-[15px] accent-main"
                        />
                      </div>

                      <div className="flex items-center justify-between gap-10 py-2">
                        <div className="text-[15px] text-black">Angry</div>
                        <input
                          type="checkbox"
                          className="cursor-pointer w-[15px] h-[15px] accent-main"
                        />
                      </div>

                      <div className="flex items-center justify-between gap-10 py-2">
                        <div className="text-[15px] text-black">Surprised</div>
                        <input
                          type="checkbox"
                          className="cursor-pointer w-[15px] h-[15px] accent-main"
                        />
                      </div>

                      <div className="flex items-center justify-between gap-10 py-2">
                        <div className="text-[15px] text-black">Disgusted</div>
                        <input
                          type="checkbox"
                          className="cursor-pointer w-[15px] h-[15px] accent-main"
                        />
                      </div>

                      <div className="flex items-center justify-between gap-10 py-2">
                        <div className="text-[15px] text-black">Confused</div>
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
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="font-[500] divide-y divide-[#C1C1C1]">
            {videos.map((video, index) => (
              <tr key={index}>
                <td className="px-4 py-2.5 text-center whitespace-nowrap">
                  <a
                    href={video.video}
                    className="flex items-center justify-center w-[130px] h-[80px] bg-[#3A3A3A] rounded-lg"
                  >
                    <img src="/images/play.svg" alt="play" />
                  </a>
                </td>
                <td className="px-[40px] min-w-[300px]">{video.title}</td>
                <td className="px-[40px] whitespace-nowrap">{video.views}</td>
                <td className="px-[40px] whitespace-nowrap">{video.likes}</td>
                <td className="px-[40px] whitespace-nowrap">
                  {video.sentiment}
                </td>
                <td className="px-[40px] whitespace-nowrap">
                  <div className={`px-5 pr-12 py-2 font-[400] rounded-full flex items-center gap-3 capitalize ${video.coreEmotion === "happy" ? "bg-[#FFE60029]" : video.coreEmotion === "calm" ? "bg-[#00B9FF0D]" : video.coreEmotion === "surprised" ? "bg-[#FF72F60D]" : video.coreEmotion === "confused" ? "bg-[#FFC4000D]" : video.coreEmotion === "angry" ? "bg-[#FF00000D]" : video.coreEmotion === "sad" ? "bg-[#DEDEDE2B]" : video.coreEmotion === "disgusted" ? "bg-[#00FF330D]" : ""}`}>
                    <img src={`/images/emotions/${video.coreEmotion}.png`} alt="emotion" />
                    {video.coreEmotion}
                  </div>
                </td>
                <td className="px-[40px] whitespace-nowrap">
                  <div className="relative w-fit">
                    <button
                      className="checkKeywordsButton px-7 py-1.5 font-[400] text-main rounded-full border-solid border border-main transition hover:bg-main hover:text-white"
                      onClick={() => handlePopupOpen(index)}
                    >
                      Check Keywords
                    </button>
                    {activePopup === index && (
                      <div
                        className={`dropDownShadow z-10 flex items-center justify-center flex-wrap gap-x-3 gap-5 w-[450px] rounded-md bg-white px-3 py-5 absolute right-14 ${index === videos.length - 1 || index === videos.length - 2 ? "bottom-[calc(100%+20px)]" : "top-[calc(100%+20px)]"}`}
                        ref={popupRef}
                      >
                        {video.keywords.map((keyword, keywordIndex) => (
                          <button
                            key={keywordIndex}
                            className="px-7 py-2 bg-[#F8F8F8] text-[15px] rounded-full"
                          >
                            {keyword}
                          </button>
                        ))}
                        <svg
                          className={`border-none absolute right-5 ${index === videos.length - 1 || index === videos.length - 2 ? "top-[calc(100%-1px)] rotate-180" : "bottom-[calc(100%-1px)]"}`}
                          width="26"
                          height="10"
                          viewBox="0 0 35 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M34.5 18.5H0L16.5 0L34.5 18.5Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-center sm:justify-between flex-col-reverse sm:flex-row gap-3 mt-5">
        <div className="hidden lg3:flex opacity-0 invisible">.</div>
        <div className="flex items-center justify-center gap-3">
          <button onClick={()=> {setpagination("1 to 5")}}  className="hidden sm3:flex p-2 previousButton">
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
          <button onClick={()=> {setpagination("6 to 10")}} className="hidden sm3:flex p-2 forwardButton">
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
        <div className="text-[15px] font-[500]">1 - 6 of 1,475 videos</div>
      </div>
    </>
  );
};

export default VideoTable;
