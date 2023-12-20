import React from "react";

function DashCardDoubleRow({ title, value }: { title?: any; value?: any }) {
  return (
    <>
      <div className="bg-white rounded-md p-3 flex shadow-md">
        <div className="w-20 h-20 bg-slate-300 rounded-md"></div>
        <div className="flex flex-col justify-between ms-2">
          <p className="text-base font-semibold">{title}</p>
          <p className="text-[35px] font-medium">{value}</p>
        </div>
      </div>
    </>
  );
}

export default DashCardDoubleRow;
