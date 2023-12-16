import React from 'react'



function GeneralInfo({toggle}) {
  return (
    <section className='font-medium	'>
      <h1 className='font-bold'>General Information</h1>
      <label>
        Name :
        <input type="text" placeholder='Name' disabled={toggle} className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'/>
      </label>
      <br />
      <label>
        Email :
        <input type="email" placeholder='Email' disabled={toggle} className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'/>
      </label>
      <br />
      <label>
        Phone :
        <input type="text" placeholder='Phone' disabled={toggle} className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'/>
      </label>
    </section>
  )
}

export default GeneralInfo