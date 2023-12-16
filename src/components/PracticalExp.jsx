import React from "react";

function PracticalExp({toggle}) {
  return (
    <section className="font-medium">
      <h1 className="font-bold">Practical Experience</h1>
      <label>
        Company Name :
        <input type="text" placeholder="Company Name" disabled={toggle} className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'/>
      </label>
      <br />
      <label>
        Position Title :
        <input type="text" placeholder="Position Title" disabled={toggle} className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'/>
      </label>
    </section>
  );
}

export default PracticalExp;
