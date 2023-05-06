import React from 'react'

const OngoingReports = () => {

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
                <td className="px-[40px] py-3.5"><button className='rounded-full px-8 py-3 bg-[#FF0C0C] text-white'>Delete</button></td>
              </tr>
            ))}
          </tbody>

              </table>
    </div>
    </>
  )
}

export default OngoingReports