import { Fragment, useState, useEffect, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper';

const MyBrandsSlider = () => {

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
  
  
    const [addClass, setaddClass] = useState('');
  
    useEffect(() => {
      setTimeout(() => {
        setaddClass('z-[99]');
      }, 1000);
    }, []);


   // for add brand modal
   let [modal, setmodal] = useState(false)

   function closeModal() {
     setmodal(false)
   }
 
   function openModal() {
     setmodal(true)
   }

  
    let data = [
      {
        brandName: "Brand 1",
        brandImage: "",
      },
      
      {
        brandName: "Brand 2",
        brandImage: "",
      },

      {
        brandName: "Brand 3",
        brandImage: "",
      },

      {
        brandName: "Brand 4",
        brandImage: "",
      },

      {
        brandName: "Brand 5",
        brandImage: "",
      },

      {
        brandName: "Brand 6",
        brandImage: "",
      },

      {
        brandName: "Brand 7",
        brandImage: "",
      },
      
      {
        brandName: "Brand 8",
        brandImage: "",
      },

      {
        brandName: "Brand 9",
        brandImage: "",
      },

      {
        brandName: "Brand 10",
        brandImage: "",
      },

      {
        brandName: "Brand 11",
        brandImage: "",
      },

      {
        brandName: "Brand 12",
        brandImage: "",
      },


    ];


  return (
    <>
   <div className="flex sm:items-center sm:justify-between flex-col sm:flex-row gap-3 sm:gap-0 mb-2">
      <div className="text-[19px] font-[500]">My Brands</div>
      <div className="flex items-center justify-end sm:justify-start w-full sm:w-auto"><button onClick={openModal} className="bg-main transition hover:bg-main-hover text-white px-6 py-3 rounded-full flex items-center gap-2.5 flex-row-reverse">Add Brand <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.1873 22.066H4.69834C4.64481 22.0501 4.59036 22.0374 4.53531 22.028C3.34248 21.8878 2.24082 21.3203 1.43412 20.4305C0.627416 19.5407 0.17028 18.3888 0.147312 17.188C0.127979 13.2227 0.127979 9.25601 0.147312 5.28801C0.164925 4.27457 0.493944 3.29108 1.08966 2.47102C1.68539 1.65097 2.51898 1.03404 3.47733 0.703995C3.85933 0.574995 4.26332 0.504017 4.65632 0.414017H17.2323C17.2772 0.430712 17.3234 0.443756 17.3703 0.453018C18.3317 0.571628 19.2376 0.968098 19.9771 1.59386C20.7165 2.21962 21.2573 3.04746 21.5333 3.976C21.6283 4.304 21.6773 4.645 21.7473 4.976V17.492C21.7343 17.552 21.7173 17.612 21.7073 17.673C21.6063 18.5728 21.2576 19.4269 20.6998 20.1402C20.1421 20.8535 19.3972 21.398 18.5483 21.713C18.1038 21.8633 17.6489 21.9813 17.1873 22.066ZM13.8103 12.173C14.3373 12.173 14.8653 12.173 15.3923 12.173C15.5193 12.1719 15.6448 12.1455 15.7614 12.0954C15.8781 12.0454 15.9837 11.9727 16.0721 11.8815C16.1605 11.7904 16.2299 11.6826 16.2763 11.5644C16.3227 11.4462 16.3451 11.3199 16.3423 11.193C16.3397 11.0604 16.3101 10.9298 16.2552 10.8091C16.2003 10.6884 16.1212 10.5802 16.023 10.4912C15.9248 10.4021 15.8094 10.3341 15.6839 10.2912C15.5584 10.2484 15.4255 10.2316 15.2933 10.242C14.2733 10.242 13.2543 10.242 12.2343 10.242C11.9343 10.242 11.9093 10.213 11.9093 9.91402C11.9093 8.88535 11.9093 7.85668 11.9093 6.82802C11.9174 6.67961 11.8915 6.53129 11.8337 6.39439C11.7758 6.25749 11.6874 6.13561 11.5753 6.03801C11.4407 5.91142 11.2708 5.82872 11.0881 5.80086C10.9054 5.773 10.7186 5.8013 10.5523 5.882C10.3745 5.95538 10.2238 6.08192 10.1207 6.24428C10.0176 6.40664 9.96714 6.5969 9.97632 6.78902C9.97632 7.81802 9.97632 8.84601 9.97632 9.87502C9.97632 10.221 9.96032 10.238 9.62232 10.238C8.60965 10.238 7.59699 10.238 6.58432 10.238C6.42907 10.2286 6.27378 10.2561 6.13123 10.3183C5.98868 10.3805 5.86293 10.4757 5.76432 10.596C5.64923 10.7367 5.57621 10.907 5.55365 11.0873C5.5311 11.2677 5.55994 11.4507 5.63685 11.6154C5.71375 11.7801 5.83562 11.9197 5.98838 12.0181C6.14114 12.1166 6.3186 12.17 6.50034 12.172C7.52734 12.179 8.55333 12.172 9.58033 12.172C9.96633 12.172 9.98032 12.182 9.98032 12.559C9.98032 13.5663 9.98032 14.574 9.98032 15.582C9.96976 15.8305 10.0493 16.0745 10.2043 16.269C10.3316 16.4237 10.5039 16.535 10.6973 16.5873C10.8907 16.6397 11.0956 16.6305 11.2836 16.5612C11.4715 16.4918 11.6333 16.3657 11.7463 16.2002C11.8593 16.0348 11.918 15.8383 11.9143 15.638C11.9143 14.581 11.9143 13.524 11.9143 12.467C11.9143 12.219 11.9613 12.173 12.2143 12.173C12.7413 12.172 13.2753 12.173 13.8103 12.173Z" fill="white"/></svg></button></div>
    </div>
        
        <div className="relative px-8">

        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            528: {
              slidesPerView: 2,
            },
            780: {
              slidesPerView: 3,
            },
            952: {
              slidesPerView: 4,
            },
            1542: {
              slidesPerView: 6,
            }
          }}
          slidesPerView={6}
          spaceBetween={20}
          rewind={true}
          pagination={{
            clickable: true,
            // el: 'swiper-pagination',
            type: 'bullets',
            bulletElement: 'span',
            bulletClass: 'timeline-icon',
            bulletActiveClass: 'timeline-icon-active',
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          // onSwiper={(swiper) => {
          //   // Delay execution for the refs to be defined
          //   setTimeout(() => {
          //     // Override prevEl & nextEl now that refs are defined
          //     swiper.params.navigation.prevEl = navigationPrevRef.current
          //     swiper.params.navigation.nextEl = navigationNextRef.current

          //     // Re-init navigation
          //     swiper.navigation.destroy()
          //     swiper.navigation.init()
          //     swiper.navigation.update()
          //   })
          // }}
          modules={[Navigation, Pagination]}
          className="w-full"
        >
          {data.map((ele) => {
            return (
              <SwiperSlide
                key={ele.id}
                className='relative transition cardShadow bg-white rounded-lg block overflow-hidden p-2 my-2'
              >
                <button className="w-full flex flex-col">
                 <div className='bg-[#C4C4C4] text-[#EFEFEF] rounded-md font-[700] text-[23px] w-full flex items-center justify-center flex-col text-center h-[130px] p-3 mb-3'>Brand</div>
                 <div className="w-full text-center">{ele.brandName}</div>
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* left and right arrows */}
        <div ref={navigationPrevRef} className='absolute top-1/2 -translate-y-1/2 -left-[10px] z-10 flex items-center justify-center w-[30px] h-[30px] cursor-pointer'><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5522 21.1528C10.6941 21.0121 10.8067 20.8447 10.8836 20.6603C10.9604 20.4759 11 20.2781 11 20.0783C11 19.8785 10.9604 19.6807 10.8836 19.4962C10.8067 19.3118 10.6941 19.1444 10.5522 19.0038L3.62018 12.0738C3.47829 11.9331 3.36566 11.7657 3.2888 11.5813C3.21194 11.3969 3.17237 11.1991 3.17237 10.9993C3.17237 10.7995 3.21194 10.6017 3.2888 10.4172C3.36566 10.2328 3.47829 10.0654 3.62018 9.92478L10.5522 2.99478C10.8372 2.7118 10.998 2.3272 10.9995 1.92559C11.0009 1.52398 10.8427 1.13826 10.5597 0.853284C10.2767 0.568309 9.8921 0.407422 9.49049 0.406015C9.08888 0.404609 8.70316 0.562798 8.41818 0.845784L1.47219 7.79178C0.62191 8.64288 0.1443 9.79673 0.1443 10.9998C0.1443 12.2028 0.62191 13.3567 1.47219 14.2078L8.41918 21.1538C8.70291 21.4351 9.08634 21.5929 9.48589 21.5927C9.88544 21.5925 10.2687 21.4344 10.5522 21.1528Z" fill="black"/></svg></div>
        <div ref={navigationNextRef} className='absolute top-1/2 -translate-y-1/2 -right-[10px] z-10 flex items-center justify-center w-[30px] h-[30px] cursor-pointer'><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.592114 21.1528C0.450222 21.0121 0.337595 20.8447 0.260734 20.6603C0.183872 20.4759 0.1443 20.2781 0.1443 20.0783C0.1443 19.8785 0.183872 19.6807 0.260734 19.4962C0.337595 19.3118 0.450222 19.1444 0.592114 19.0038L7.52311 12.0738C7.66501 11.9331 7.77763 11.7657 7.8545 11.5813C7.93136 11.3969 7.97093 11.1991 7.97093 10.9993C7.97093 10.7995 7.93136 10.6017 7.8545 10.4172C7.77763 10.2328 7.66501 10.0654 7.52311 9.92478L0.592114 2.99478C0.307139 2.7118 0.146252 2.3272 0.144845 1.92559C0.143438 1.52398 0.301629 1.13826 0.584615 0.853284C0.867601 0.568309 1.2522 0.407422 1.65381 0.406015C2.05542 0.404609 2.44114 0.562798 2.72611 0.845784L9.67211 7.79178C10.5224 8.64288 11 9.79673 11 10.9998C11 12.2028 10.5224 13.3567 9.67211 14.2078L2.72611 21.1538C2.44247 21.4357 2.05878 21.5938 1.65891 21.5936C1.25903 21.5934 0.87549 21.4349 0.592114 21.1528Z" fill="black"/></svg></div>
        </div>


{/* add product modal */}
<Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-white bg-opacity-[0.63]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[600px] transform overflow-hidden rounded-2xl bg-white p-4 pb-7 text-left align-middle buttonShadow transition-all">
                  
                 <div className="flex items-center justify-end">
                  <button onClick={closeModal}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#0C77FF" className="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></button>
                 </div>                  
                  
                  <div className="text-center mt-4">
                {/* Add Brand */}
           <div className="w-full">
              <div className='text-center mb-10'>
                 <div className='font-[800] text-[25px] sm:text-[30px] mb-2.5'>Add your Brand</div>
                 <div className='text-not-gray'>Allow the AI algorithm to become acquainted with your brand for a more sophisticated analysis.</div>
              </div>

              <div>
                <div className="relative w-full flex items-center rounded-md border-solid border border-[#AAAAAA] focus-within:border-main h-[60px]">
                    <div className="text-[#6E6E6E] text-[15px] font-[500] absolute -top-[10px] left-3 bg-white px-2">Brand name</div>
                    <input type="text" placeholder='Enter your Brand name' className='w-full border-none outline-none h-full text-[15px] px-5 rounded-md' />
                </div>

                <div className="relative w-full flex items-start rounded-md border-solid border border-[#AAAAAA] focus-within:border-main min-h-[150px] pb-2 mt-8">
                    <div className="text-[#6E6E6E] text-[15px] font-[500] absolute -top-[10px] left-3 bg-white px-2">Brand Description</div>
                    <textarea placeholder='Include information about what the brand does, what its values are, or any other relevant details.' className='w-full resize-none border-none outline-none min-h-[150px] text-[15px] px-5 rounded-md mt-4'></textarea>
                </div>

                <button onClick={closeModal} className='buttonShadow w-full flex items-center justify-center py-3 transition bg-main hover:bg-main-hover text-white rounded-full mt-7'>Add Brand</button>
              </div>
           </div>
                  
                  </div>
               
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default MyBrandsSlider