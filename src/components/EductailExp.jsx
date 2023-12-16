import React from 'react'

function EductailExp({toggle}) {
  return (
    <section className='font-medium	'>
      <h1 className='font-bold'>Educational Experience</h1>
      <label>
        School Name :
        <input type="text" placeholder='School Name' disabled={toggle} className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'/>
      </label>
      <br />
      <label>
        Title of Study :
        <input type="text" placeholder='Title Of Study' disabled={toggle} className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'/>
      </label>
      <br />
      <label>
        Date of Study :
        <input type="text" placeholder='Date of Study' disabled={toggle} className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'/>
      </label>
      <br />
      </section>
  )
}

export default EductailExp