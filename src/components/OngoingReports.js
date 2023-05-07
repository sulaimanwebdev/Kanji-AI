import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const OngoingReports = () => {
  
  // for delete modal
  let [deleteModal, setdeleteModal] = useState(false)

  function closeModalDelete() {
    setdeleteModal(false)
  }

  function openModalDelete() {
    setdeleteModal(true)
  }



  // for create new report modal
  let [reportModal, setreportModal] = useState(false)

  function closeModalReport() {
    setreportModal(false)
  }

  function openModalReport() {
    setreportModal(true)
  }

  let reports = [
        {
            type: "Daily",
            createdIn: "19 May, 2021 : 10:10 AM",
            createdBy: "Jack",
            analyzing: "Product A",
        },

        {
            type: "Weekly ",
            createdIn: "18 May, 2021 : 3:12 PM",
            createdBy: "Jack",
            analyzing: "Brand A",
        },

        {
            type: "Monthly",
            createdIn: "19 May, 2021 : 10:10 AM",
            createdBy: "Jack",
            analyzing: "Product B",
        },

        {
            type: "Custom (Every 2 weeks)",
            createdIn: "19 May, 2021 : 10:10 AM",
            createdBy: "Tal",
            analyzing: "Product C",
        },
  ];

  return (
    <>
    <div className="flex items-center justify-between mb-3">
      <div className="text-[19px] font-[500]">Ongoing Reports</div>
      <div><button onClick={openModalReport} className="bg-main transition hover:bg-main-hover text-white px-6 py-3 rounded-full flex items-center gap-2.5 flex-row-reverse">Create Report <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.1873 22.066H4.69834C4.64481 22.0501 4.59036 22.0374 4.53531 22.028C3.34248 21.8878 2.24082 21.3203 1.43412 20.4305C0.627416 19.5407 0.17028 18.3888 0.147312 17.188C0.127979 13.2227 0.127979 9.25601 0.147312 5.28801C0.164925 4.27457 0.493944 3.29108 1.08966 2.47102C1.68539 1.65097 2.51898 1.03404 3.47733 0.703995C3.85933 0.574995 4.26332 0.504017 4.65632 0.414017H17.2323C17.2772 0.430712 17.3234 0.443756 17.3703 0.453018C18.3317 0.571628 19.2376 0.968098 19.9771 1.59386C20.7165 2.21962 21.2573 3.04746 21.5333 3.976C21.6283 4.304 21.6773 4.645 21.7473 4.976V17.492C21.7343 17.552 21.7173 17.612 21.7073 17.673C21.6063 18.5728 21.2576 19.4269 20.6998 20.1402C20.1421 20.8535 19.3972 21.398 18.5483 21.713C18.1038 21.8633 17.6489 21.9813 17.1873 22.066ZM13.8103 12.173C14.3373 12.173 14.8653 12.173 15.3923 12.173C15.5193 12.1719 15.6448 12.1455 15.7614 12.0954C15.8781 12.0454 15.9837 11.9727 16.0721 11.8815C16.1605 11.7904 16.2299 11.6826 16.2763 11.5644C16.3227 11.4462 16.3451 11.3199 16.3423 11.193C16.3397 11.0604 16.3101 10.9298 16.2552 10.8091C16.2003 10.6884 16.1212 10.5802 16.023 10.4912C15.9248 10.4021 15.8094 10.3341 15.6839 10.2912C15.5584 10.2484 15.4255 10.2316 15.2933 10.242C14.2733 10.242 13.2543 10.242 12.2343 10.242C11.9343 10.242 11.9093 10.213 11.9093 9.91402C11.9093 8.88535 11.9093 7.85668 11.9093 6.82802C11.9174 6.67961 11.8915 6.53129 11.8337 6.39439C11.7758 6.25749 11.6874 6.13561 11.5753 6.03801C11.4407 5.91142 11.2708 5.82872 11.0881 5.80086C10.9054 5.773 10.7186 5.8013 10.5523 5.882C10.3745 5.95538 10.2238 6.08192 10.1207 6.24428C10.0176 6.40664 9.96714 6.5969 9.97632 6.78902C9.97632 7.81802 9.97632 8.84601 9.97632 9.87502C9.97632 10.221 9.96032 10.238 9.62232 10.238C8.60965 10.238 7.59699 10.238 6.58432 10.238C6.42907 10.2286 6.27378 10.2561 6.13123 10.3183C5.98868 10.3805 5.86293 10.4757 5.76432 10.596C5.64923 10.7367 5.57621 10.907 5.55365 11.0873C5.5311 11.2677 5.55994 11.4507 5.63685 11.6154C5.71375 11.7801 5.83562 11.9197 5.98838 12.0181C6.14114 12.1166 6.3186 12.17 6.50034 12.172C7.52734 12.179 8.55333 12.172 9.58033 12.172C9.96633 12.172 9.98032 12.182 9.98032 12.559C9.98032 13.5663 9.98032 14.574 9.98032 15.582C9.96976 15.8305 10.0493 16.0745 10.2043 16.269C10.3316 16.4237 10.5039 16.535 10.6973 16.5873C10.8907 16.6397 11.0956 16.6305 11.2836 16.5612C11.4715 16.4918 11.6333 16.3657 11.7463 16.2002C11.8593 16.0348 11.918 15.8383 11.9143 15.638C11.9143 14.581 11.9143 13.524 11.9143 12.467C11.9143 12.219 11.9613 12.173 12.2143 12.173C12.7413 12.172 13.2753 12.173 13.8103 12.173Z" fill="white"/></svg></button></div>
    </div>

    <div className="cardShadow bg-white rounded-xl overflow-x-auto">
        <table className="w-full border-collapse whitespace-nowrap">
          <thead className="bg-main text-white">
            <tr className="text-left">
              <th className="px-5 py-4 font-[500] whitespace-nowrap">
               Type 
              </th>

              <th className="px-[40px] py-4 font-[500] whitespace-nowrap">
                Created In
              </th>

              <th className="px-[40px] py-4 font-[500] whitespace-nowrap">
                Created By
              </th>

              <th className="px-[40px] py-4 font-[500] whitespace-nowrap">
                Analyzing
              </th>

              <th className="px-[40px] py-4 font-[500] whitespace-nowrap">
                Delete
              </th>

              </tr>
              </thead>
              
              <tbody className="font-[500] divide-y divide-[#C1C1C1]">
            {reports.map((ele, index) => (
              <tr key={index}>
                <td className="px-5 py-2">{ele.type}</td>
                <td className="px-[40px] py-3.5"><span>{ele.createdIn}</span></td>
                <td className="px-[40px] py-3.5"><span>{ele.createdBy}</span></td>
                <td className="px-[40px] py-3.5"><span>{ele.analyzing}</span></td>
                <td className="px-[40px] py-3.5"><button onClick={openModalDelete} className='rounded-full px-8 py-3 bg-[#FF0C0C] text-white'>Delete</button></td>
              </tr>
            ))}
          </tbody>
          </table>
    </div>



    {/* delete modal */}
   <Transition appear show={deleteModal} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={closeModalDelete}>
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
                  <button onClick={closeModalDelete}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#0C77FF" className="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></button>
                 </div>                  
                  
                  <div className="text-center mt-4">
                    <div className="max-w-[400px] mx-auto mb-10">
                     <div className="font-bold text-[27px] mb-2">Are you sure?</div>
                     <div className='text-[#8D8D8D]'>Are you sure you want to delete this report? All the analysis done so far will be lost.</div>
                    </div>
                  
                    <div className="flex flex-col gap-3 mt-5 max-w-[500px] mx-auto">
                     <button className="w-full py-3 bg-[#FF5858] rounded-full text-white">Yes, delete the report</button>
                     <button onClick={closeModalDelete} className="w-full py-3 bg-main hover:bg-main-hover rounded-full text-white">Cancel</button>
                    </div>
                  
                  </div>
               
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>






      {/* create report modal */}
   <Transition appear show={reportModal} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={closeModalReport}>
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
                  <button onClick={closeModalReport}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#0C77FF" className="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></button>
                 </div>                  
                  
                  <div className="text-center mt-4">
                  <div className="w-full">
              <div className='text-center mb-10'>
                 <div className='font-[800] text-[25px] sm:text-[30px] mb-2.5'>Create your first report</div>
                 <div className='text-not-gray'>Customize your analysis report by selecting your preferred  topic, duration, and report frequency.</div>
              </div>

              <div>
                <div className="relative w-full flex items-center rounded-md border-solid border border-[#AAAAAA] focus-within:border-main h-[60px]">
                    <div className="text-[#6E6E6E] text-[15px] font-[500] absolute -top-[10px] left-3 bg-white px-2">Analysis Topic</div>
                    <select style={{backgroundImage: "url(/images/arrow.svg)"}} className="cursor-pointer bg-white text-[#9CA3AF] w-full px-5 rounded-md h-full outline-none">
                     <option>What would you like to analyze?</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    </select>
                </div>

                <div className="relative w-full flex items-center rounded-md border-solid border border-[#AAAAAA] focus-within:border-main h-[60px] mt-8">
                    <div className="text-[#6E6E6E] text-[15px] font-[500] absolute -top-[10px] left-3 bg-white px-2">Duration</div>
                    <select style={{backgroundImage: "url(/images/arrow.svg)"}} className="cursor-pointer bg-white text-[#9CA3AF] w-full px-5 rounded-md h-full outline-none">
                     <option>How long would you like the analysis to run?</option>
                     <option>One Day</option>
                     <option>One Week</option>
                     <option>One Month</option>
                    </select>
                </div>

                <div className="relative w-full flex items-center rounded-md border-solid border border-[#AAAAAA] focus-within:border-main h-[60px] mt-8">
                    <div className="text-[#6E6E6E] text-[15px] font-[500] absolute -top-[10px] left-3 bg-white px-2">Frequency</div>
                    <select style={{backgroundImage: "url(/images/arrow.svg)"}} className="cursor-pointer bg-white text-[#9CA3AF] w-full px-5 rounded-md h-full outline-none">
                     <option>How many times should we repeat the analysis?</option>
                     <option>Doesn’t repeat</option>
                     <option>Repeats twice</option>
                     <option>Repeats forever</option>
                    </select>
                </div>

                <button onClick={closeModalReport} className='buttonShadow w-full flex items-center justify-center py-3 transition bg-main hover:bg-main-hover text-white rounded-full mt-10'>Create Report</button>
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

export default OngoingReports