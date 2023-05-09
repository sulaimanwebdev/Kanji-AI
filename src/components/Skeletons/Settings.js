import Navigation from '../Navigation';

const Settings = () => {
   let array = [1,2,3,4,5,6,7,8,9,10,11,12];
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


        <div className={`px-5 pt-3 pb-5 lg3:ml-[240px]`}>
           <div className="flex items-center justify-between">
              <div className="text-[22px] text-[#3D3D3D] font-[800]">Settings</div>
              <Navigation/>
           </div>

           <div className="mt-8">
               <div>
               <div className="w-[190px] py-3 bg-[#F3F1F1] skeleton-box rounded-full mb-5"></div>
               <div className="cardShadow bg-white rounded-xl flex items-center flex-col md:flex-row gap-8 p-7 mb-8">
                <div className="bg-[#F3F1F1] skeleton-box rounded-full md:min-w-[200px] md:min-h-[200px] overflow-hidden"></div>
                <div className="w-full">
                <div className="bg-[#F3F1F1] skeleton-box w-full rounded-md h-[60px]"></div>
                <div className="bg-[#F3F1F1] skeleton-box w-full rounded-md h-[60px] mt-5"></div>
              </div>
             </div>
           </div>


           <div className="flex items-center justify-between gap-3 mt-7 mb-3">
            <div className="w-[190px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>
            <div className="w-[120px] py-6 bg-[#F3F1F1] skeleton-box rounded-full"></div>
           </div>
               
               <div className="hidden md:block">
               <div className="relative px-8 grid grid-cols-4">
               {
                  array.slice(0,4).map((ele, index) =>{
                     return(
                        <div
                        key={index}
                className='relative transition cardShadow bg-white rounded-lg block overflow-hidden p-2 my-2'
              >
                <div className="w-full flex flex-col">
                 <div className='bg-[#F3F1F1] skeleton-box rounded-md w-full h-[130px] mb-3'></div>
                 <div className="w-full text-center"><div className="w-[100px] mx-auto py-2 bg-[#F3F1F1] skeleton-box rounded-full"></div></div>
                </div>
              </div>
                     )
                  })
               }


        <div className='absolute top-1/2 -translate-y-1/2 -left-[10px] z-10 flex items-center justify-center w-[30px] h-[30px]'><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5522 21.1528C10.6941 21.0121 10.8067 20.8447 10.8836 20.6603C10.9604 20.4759 11 20.2781 11 20.0783C11 19.8785 10.9604 19.6807 10.8836 19.4962C10.8067 19.3118 10.6941 19.1444 10.5522 19.0038L3.62018 12.0738C3.47829 11.9331 3.36566 11.7657 3.2888 11.5813C3.21194 11.3969 3.17237 11.1991 3.17237 10.9993C3.17237 10.7995 3.21194 10.6017 3.2888 10.4172C3.36566 10.2328 3.47829 10.0654 3.62018 9.92478L10.5522 2.99478C10.8372 2.7118 10.998 2.3272 10.9995 1.92559C11.0009 1.52398 10.8427 1.13826 10.5597 0.853284C10.2767 0.568309 9.8921 0.407422 9.49049 0.406015C9.08888 0.404609 8.70316 0.562798 8.41818 0.845784L1.47219 7.79178C0.62191 8.64288 0.1443 9.79673 0.1443 10.9998C0.1443 12.2028 0.62191 13.3567 1.47219 14.2078L8.41918 21.1538C8.70291 21.4351 9.08634 21.5929 9.48589 21.5927C9.88544 21.5925 10.2687 21.4344 10.5522 21.1528Z" fill="black"/></svg></div>
        <div className='absolute top-1/2 -translate-y-1/2 -right-[10px] z-10 flex items-center justify-center w-[30px] h-[30px]'><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.592114 21.1528C0.450222 21.0121 0.337595 20.8447 0.260734 20.6603C0.183872 20.4759 0.1443 20.2781 0.1443 20.0783C0.1443 19.8785 0.183872 19.6807 0.260734 19.4962C0.337595 19.3118 0.450222 19.1444 0.592114 19.0038L7.52311 12.0738C7.66501 11.9331 7.77763 11.7657 7.8545 11.5813C7.93136 11.3969 7.97093 11.1991 7.97093 10.9993C7.97093 10.7995 7.93136 10.6017 7.8545 10.4172C7.77763 10.2328 7.66501 10.0654 7.52311 9.92478L0.592114 2.99478C0.307139 2.7118 0.146252 2.3272 0.144845 1.92559C0.143438 1.52398 0.301629 1.13826 0.584615 0.853284C0.867601 0.568309 1.2522 0.407422 1.65381 0.406015C2.05542 0.404609 2.44114 0.562798 2.72611 0.845784L9.67211 7.79178C10.5224 8.64288 11 9.79673 11 10.9998C11 12.2028 10.5224 13.3567 9.67211 14.2078L2.72611 21.1538C2.44247 21.4357 2.05878 21.5938 1.65891 21.5936C1.25903 21.5934 0.87549 21.4349 0.592114 21.1528Z" fill="black"/></svg></div>
               </div>





               <div className="flex items-center justify-between gap-3 mt-7 mb-3">
            <div className="w-[190px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>
            <div className="w-[120px] py-6 bg-[#F3F1F1] skeleton-box rounded-full"></div>
           </div>
               
               <div className="relative px-8 grid grid-cols-4 gap-5">
               {
                  array.slice(0,4).map((ele, index) =>{
                     return(
                        <div
                        key={index}
                className='relative transition cardShadow bg-white rounded-lg block overflow-hidden p-2 my-2'
              >
                <div className="w-full flex flex-col">
                 <div className='bg-[#F3F1F1] skeleton-box rounded-md w-full h-[130px] mb-3'></div>
                 <div className="w-full text-center"><div className="w-[100px] mx-auto py-2 bg-[#F3F1F1] skeleton-box rounded-full"></div></div>
                </div>
              </div>
                     )
                  })
               }


        <div className='absolute top-1/2 -translate-y-1/2 -left-[10px] z-10 flex items-center justify-center w-[30px] h-[30px]'><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5522 21.1528C10.6941 21.0121 10.8067 20.8447 10.8836 20.6603C10.9604 20.4759 11 20.2781 11 20.0783C11 19.8785 10.9604 19.6807 10.8836 19.4962C10.8067 19.3118 10.6941 19.1444 10.5522 19.0038L3.62018 12.0738C3.47829 11.9331 3.36566 11.7657 3.2888 11.5813C3.21194 11.3969 3.17237 11.1991 3.17237 10.9993C3.17237 10.7995 3.21194 10.6017 3.2888 10.4172C3.36566 10.2328 3.47829 10.0654 3.62018 9.92478L10.5522 2.99478C10.8372 2.7118 10.998 2.3272 10.9995 1.92559C11.0009 1.52398 10.8427 1.13826 10.5597 0.853284C10.2767 0.568309 9.8921 0.407422 9.49049 0.406015C9.08888 0.404609 8.70316 0.562798 8.41818 0.845784L1.47219 7.79178C0.62191 8.64288 0.1443 9.79673 0.1443 10.9998C0.1443 12.2028 0.62191 13.3567 1.47219 14.2078L8.41918 21.1538C8.70291 21.4351 9.08634 21.5929 9.48589 21.5927C9.88544 21.5925 10.2687 21.4344 10.5522 21.1528Z" fill="black"/></svg></div>
        <div className='absolute top-1/2 -translate-y-1/2 -right-[10px] z-10 flex items-center justify-center w-[30px] h-[30px]'><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.592114 21.1528C0.450222 21.0121 0.337595 20.8447 0.260734 20.6603C0.183872 20.4759 0.1443 20.2781 0.1443 20.0783C0.1443 19.8785 0.183872 19.6807 0.260734 19.4962C0.337595 19.3118 0.450222 19.1444 0.592114 19.0038L7.52311 12.0738C7.66501 11.9331 7.77763 11.7657 7.8545 11.5813C7.93136 11.3969 7.97093 11.1991 7.97093 10.9993C7.97093 10.7995 7.93136 10.6017 7.8545 10.4172C7.77763 10.2328 7.66501 10.0654 7.52311 9.92478L0.592114 2.99478C0.307139 2.7118 0.146252 2.3272 0.144845 1.92559C0.143438 1.52398 0.301629 1.13826 0.584615 0.853284C0.867601 0.568309 1.2522 0.407422 1.65381 0.406015C2.05542 0.404609 2.44114 0.562798 2.72611 0.845784L9.67211 7.79178C10.5224 8.64288 11 9.79673 11 10.9998C11 12.2028 10.5224 13.3567 9.67211 14.2078L2.72611 21.1538C2.44247 21.4357 2.05878 21.5938 1.65891 21.5936C1.25903 21.5934 0.87549 21.4349 0.592114 21.1528Z" fill="black"/></svg></div>
               </div>
               </div>




               <div className="hidden sm:block md:hidden">
               <div className="relative px-8 grid grid-cols-3">
               {
                  array.slice(0,3).map((ele, index) =>{
                     return(
                        <div
                        key={index}
                className='relative transition cardShadow bg-white rounded-lg block overflow-hidden p-2 my-2'
              >
                <div className="w-full flex flex-col">
                 <div className='bg-[#F3F1F1] skeleton-box rounded-md w-full h-[130px] mb-3'></div>
                 <div className="w-full text-center"><div className="w-[100px] mx-auto py-2 bg-[#F3F1F1] skeleton-box rounded-full"></div></div>
                </div>
              </div>
                     )
                  })
               }


        <div className='absolute top-1/2 -translate-y-1/2 -left-[10px] z-10 flex items-center justify-center w-[30px] h-[30px]'><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5522 21.1528C10.6941 21.0121 10.8067 20.8447 10.8836 20.6603C10.9604 20.4759 11 20.2781 11 20.0783C11 19.8785 10.9604 19.6807 10.8836 19.4962C10.8067 19.3118 10.6941 19.1444 10.5522 19.0038L3.62018 12.0738C3.47829 11.9331 3.36566 11.7657 3.2888 11.5813C3.21194 11.3969 3.17237 11.1991 3.17237 10.9993C3.17237 10.7995 3.21194 10.6017 3.2888 10.4172C3.36566 10.2328 3.47829 10.0654 3.62018 9.92478L10.5522 2.99478C10.8372 2.7118 10.998 2.3272 10.9995 1.92559C11.0009 1.52398 10.8427 1.13826 10.5597 0.853284C10.2767 0.568309 9.8921 0.407422 9.49049 0.406015C9.08888 0.404609 8.70316 0.562798 8.41818 0.845784L1.47219 7.79178C0.62191 8.64288 0.1443 9.79673 0.1443 10.9998C0.1443 12.2028 0.62191 13.3567 1.47219 14.2078L8.41918 21.1538C8.70291 21.4351 9.08634 21.5929 9.48589 21.5927C9.88544 21.5925 10.2687 21.4344 10.5522 21.1528Z" fill="black"/></svg></div>
        <div className='absolute top-1/2 -translate-y-1/2 -right-[10px] z-10 flex items-center justify-center w-[30px] h-[30px]'><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.592114 21.1528C0.450222 21.0121 0.337595 20.8447 0.260734 20.6603C0.183872 20.4759 0.1443 20.2781 0.1443 20.0783C0.1443 19.8785 0.183872 19.6807 0.260734 19.4962C0.337595 19.3118 0.450222 19.1444 0.592114 19.0038L7.52311 12.0738C7.66501 11.9331 7.77763 11.7657 7.8545 11.5813C7.93136 11.3969 7.97093 11.1991 7.97093 10.9993C7.97093 10.7995 7.93136 10.6017 7.8545 10.4172C7.77763 10.2328 7.66501 10.0654 7.52311 9.92478L0.592114 2.99478C0.307139 2.7118 0.146252 2.3272 0.144845 1.92559C0.143438 1.52398 0.301629 1.13826 0.584615 0.853284C0.867601 0.568309 1.2522 0.407422 1.65381 0.406015C2.05542 0.404609 2.44114 0.562798 2.72611 0.845784L9.67211 7.79178C10.5224 8.64288 11 9.79673 11 10.9998C11 12.2028 10.5224 13.3567 9.67211 14.2078L2.72611 21.1538C2.44247 21.4357 2.05878 21.5938 1.65891 21.5936C1.25903 21.5934 0.87549 21.4349 0.592114 21.1528Z" fill="black"/></svg></div>
               </div>





               <div className="flex items-center justify-between gap-3 mt-7 mb-3">
            <div className="w-[190px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>
            <div className="w-[120px] py-6 bg-[#F3F1F1] skeleton-box rounded-full"></div>
           </div>
               
               <div className="relative px-8 grid grid-cols-3 gap-5">
               {
                  array.slice(0,3).map((ele, index) =>{
                     return(
                        <div
                        key={index}
                className='relative transition cardShadow bg-white rounded-lg block overflow-hidden p-2 my-2'
              >
                <div className="w-full flex flex-col">
                 <div className='bg-[#F3F1F1] skeleton-box rounded-md w-full h-[130px] mb-3'></div>
                 <div className="w-full text-center"><div className="w-[100px] mx-auto py-2 bg-[#F3F1F1] skeleton-box rounded-full"></div></div>
                </div>
              </div>
                     )
                  })
               }


        <div className='absolute top-1/2 -translate-y-1/2 -left-[10px] z-10 flex items-center justify-center w-[30px] h-[30px]'><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5522 21.1528C10.6941 21.0121 10.8067 20.8447 10.8836 20.6603C10.9604 20.4759 11 20.2781 11 20.0783C11 19.8785 10.9604 19.6807 10.8836 19.4962C10.8067 19.3118 10.6941 19.1444 10.5522 19.0038L3.62018 12.0738C3.47829 11.9331 3.36566 11.7657 3.2888 11.5813C3.21194 11.3969 3.17237 11.1991 3.17237 10.9993C3.17237 10.7995 3.21194 10.6017 3.2888 10.4172C3.36566 10.2328 3.47829 10.0654 3.62018 9.92478L10.5522 2.99478C10.8372 2.7118 10.998 2.3272 10.9995 1.92559C11.0009 1.52398 10.8427 1.13826 10.5597 0.853284C10.2767 0.568309 9.8921 0.407422 9.49049 0.406015C9.08888 0.404609 8.70316 0.562798 8.41818 0.845784L1.47219 7.79178C0.62191 8.64288 0.1443 9.79673 0.1443 10.9998C0.1443 12.2028 0.62191 13.3567 1.47219 14.2078L8.41918 21.1538C8.70291 21.4351 9.08634 21.5929 9.48589 21.5927C9.88544 21.5925 10.2687 21.4344 10.5522 21.1528Z" fill="black"/></svg></div>
        <div className='absolute top-1/2 -translate-y-1/2 -right-[10px] z-10 flex items-center justify-center w-[30px] h-[30px]'><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.592114 21.1528C0.450222 21.0121 0.337595 20.8447 0.260734 20.6603C0.183872 20.4759 0.1443 20.2781 0.1443 20.0783C0.1443 19.8785 0.183872 19.6807 0.260734 19.4962C0.337595 19.3118 0.450222 19.1444 0.592114 19.0038L7.52311 12.0738C7.66501 11.9331 7.77763 11.7657 7.8545 11.5813C7.93136 11.3969 7.97093 11.1991 7.97093 10.9993C7.97093 10.7995 7.93136 10.6017 7.8545 10.4172C7.77763 10.2328 7.66501 10.0654 7.52311 9.92478L0.592114 2.99478C0.307139 2.7118 0.146252 2.3272 0.144845 1.92559C0.143438 1.52398 0.301629 1.13826 0.584615 0.853284C0.867601 0.568309 1.2522 0.407422 1.65381 0.406015C2.05542 0.404609 2.44114 0.562798 2.72611 0.845784L9.67211 7.79178C10.5224 8.64288 11 9.79673 11 10.9998C11 12.2028 10.5224 13.3567 9.67211 14.2078L2.72611 21.1538C2.44247 21.4357 2.05878 21.5938 1.65891 21.5936C1.25903 21.5934 0.87549 21.4349 0.592114 21.1528Z" fill="black"/></svg></div>
               </div>
               </div>






               <div className="block sm:hidden">
               <div className="relative px-8 grid grid-cols-1">
               {
                  array.slice(0,1).map((ele, index) =>{
                     return(
                        <div
                        key={index}
                className='relative transition cardShadow bg-white rounded-lg block overflow-hidden p-2 my-2'
              >
                <div className="w-full flex flex-col">
                 <div className='bg-[#F3F1F1] skeleton-box rounded-md w-full h-[130px] mb-3'></div>
                 <div className="w-full text-center"><div className="w-[100px] mx-auto py-2 bg-[#F3F1F1] skeleton-box rounded-full"></div></div>
                </div>
              </div>
                     )
                  })
               }


        <div className='absolute top-1/2 -translate-y-1/2 -left-[10px] z-10 flex items-center justify-center w-[30px] h-[30px]'><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5522 21.1528C10.6941 21.0121 10.8067 20.8447 10.8836 20.6603C10.9604 20.4759 11 20.2781 11 20.0783C11 19.8785 10.9604 19.6807 10.8836 19.4962C10.8067 19.3118 10.6941 19.1444 10.5522 19.0038L3.62018 12.0738C3.47829 11.9331 3.36566 11.7657 3.2888 11.5813C3.21194 11.3969 3.17237 11.1991 3.17237 10.9993C3.17237 10.7995 3.21194 10.6017 3.2888 10.4172C3.36566 10.2328 3.47829 10.0654 3.62018 9.92478L10.5522 2.99478C10.8372 2.7118 10.998 2.3272 10.9995 1.92559C11.0009 1.52398 10.8427 1.13826 10.5597 0.853284C10.2767 0.568309 9.8921 0.407422 9.49049 0.406015C9.08888 0.404609 8.70316 0.562798 8.41818 0.845784L1.47219 7.79178C0.62191 8.64288 0.1443 9.79673 0.1443 10.9998C0.1443 12.2028 0.62191 13.3567 1.47219 14.2078L8.41918 21.1538C8.70291 21.4351 9.08634 21.5929 9.48589 21.5927C9.88544 21.5925 10.2687 21.4344 10.5522 21.1528Z" fill="black"/></svg></div>
        <div className='absolute top-1/2 -translate-y-1/2 -right-[10px] z-10 flex items-center justify-center w-[30px] h-[30px]'><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.592114 21.1528C0.450222 21.0121 0.337595 20.8447 0.260734 20.6603C0.183872 20.4759 0.1443 20.2781 0.1443 20.0783C0.1443 19.8785 0.183872 19.6807 0.260734 19.4962C0.337595 19.3118 0.450222 19.1444 0.592114 19.0038L7.52311 12.0738C7.66501 11.9331 7.77763 11.7657 7.8545 11.5813C7.93136 11.3969 7.97093 11.1991 7.97093 10.9993C7.97093 10.7995 7.93136 10.6017 7.8545 10.4172C7.77763 10.2328 7.66501 10.0654 7.52311 9.92478L0.592114 2.99478C0.307139 2.7118 0.146252 2.3272 0.144845 1.92559C0.143438 1.52398 0.301629 1.13826 0.584615 0.853284C0.867601 0.568309 1.2522 0.407422 1.65381 0.406015C2.05542 0.404609 2.44114 0.562798 2.72611 0.845784L9.67211 7.79178C10.5224 8.64288 11 9.79673 11 10.9998C11 12.2028 10.5224 13.3567 9.67211 14.2078L2.72611 21.1538C2.44247 21.4357 2.05878 21.5938 1.65891 21.5936C1.25903 21.5934 0.87549 21.4349 0.592114 21.1528Z" fill="black"/></svg></div>
               </div>





               <div className="flex items-center justify-between gap-3 mt-7 mb-3">
            <div className="w-[190px] py-3 bg-[#F3F1F1] skeleton-box rounded-full"></div>
            <div className="w-[120px] py-6 bg-[#F3F1F1] skeleton-box rounded-full"></div>
           </div>
               
               <div className="relative px-8 grid grid-cols-1 gap-5">
               {
                  array.slice(0,1).map((ele, index) =>{
                     return(
                        <div
                        key={index}
                className='relative transition cardShadow bg-white rounded-lg block overflow-hidden p-2 my-2'
              >
                <div className="w-full flex flex-col">
                 <div className='bg-[#F3F1F1] skeleton-box rounded-md w-full h-[130px] mb-3'></div>
                 <div className="w-full text-center"><div className="w-[100px] mx-auto py-2 bg-[#F3F1F1] skeleton-box rounded-full"></div></div>
                </div>
              </div>
                     )
                  })
               }


        <div className='absolute top-1/2 -translate-y-1/2 -left-[10px] z-10 flex items-center justify-center w-[30px] h-[30px]'><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5522 21.1528C10.6941 21.0121 10.8067 20.8447 10.8836 20.6603C10.9604 20.4759 11 20.2781 11 20.0783C11 19.8785 10.9604 19.6807 10.8836 19.4962C10.8067 19.3118 10.6941 19.1444 10.5522 19.0038L3.62018 12.0738C3.47829 11.9331 3.36566 11.7657 3.2888 11.5813C3.21194 11.3969 3.17237 11.1991 3.17237 10.9993C3.17237 10.7995 3.21194 10.6017 3.2888 10.4172C3.36566 10.2328 3.47829 10.0654 3.62018 9.92478L10.5522 2.99478C10.8372 2.7118 10.998 2.3272 10.9995 1.92559C11.0009 1.52398 10.8427 1.13826 10.5597 0.853284C10.2767 0.568309 9.8921 0.407422 9.49049 0.406015C9.08888 0.404609 8.70316 0.562798 8.41818 0.845784L1.47219 7.79178C0.62191 8.64288 0.1443 9.79673 0.1443 10.9998C0.1443 12.2028 0.62191 13.3567 1.47219 14.2078L8.41918 21.1538C8.70291 21.4351 9.08634 21.5929 9.48589 21.5927C9.88544 21.5925 10.2687 21.4344 10.5522 21.1528Z" fill="black"/></svg></div>
        <div className='absolute top-1/2 -translate-y-1/2 -right-[10px] z-10 flex items-center justify-center w-[30px] h-[30px]'><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.592114 21.1528C0.450222 21.0121 0.337595 20.8447 0.260734 20.6603C0.183872 20.4759 0.1443 20.2781 0.1443 20.0783C0.1443 19.8785 0.183872 19.6807 0.260734 19.4962C0.337595 19.3118 0.450222 19.1444 0.592114 19.0038L7.52311 12.0738C7.66501 11.9331 7.77763 11.7657 7.8545 11.5813C7.93136 11.3969 7.97093 11.1991 7.97093 10.9993C7.97093 10.7995 7.93136 10.6017 7.8545 10.4172C7.77763 10.2328 7.66501 10.0654 7.52311 9.92478L0.592114 2.99478C0.307139 2.7118 0.146252 2.3272 0.144845 1.92559C0.143438 1.52398 0.301629 1.13826 0.584615 0.853284C0.867601 0.568309 1.2522 0.407422 1.65381 0.406015C2.05542 0.404609 2.44114 0.562798 2.72611 0.845784L9.67211 7.79178C10.5224 8.64288 11 9.79673 11 10.9998C11 12.2028 10.5224 13.3567 9.67211 14.2078L2.72611 21.1538C2.44247 21.4357 2.05878 21.5938 1.65891 21.5936C1.25903 21.5934 0.87549 21.4349 0.592114 21.1528Z" fill="black"/></svg></div>
               </div>
               </div>



           
           </div>
    
         
      </div>
      </div>
    </>
  )
}

export default Settings