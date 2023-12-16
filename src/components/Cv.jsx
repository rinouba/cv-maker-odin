import React from 'react'

import GeneralInfo from './GeneralInfo'
import EductailExp from './EductailExp'
import PracticalExp from './PracticalExp'

function Cv({toggle,setToggle}) {
  return (
    <div className="cv bg-[#7dd3fc] container	mx-auto p-5 flex items-center flex-col">
        <GeneralInfo  toggle={toggle}/>
        <EductailExp toggle={toggle}/>
        <PracticalExp toggle={toggle}/>
        <button className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm outline outline-2 outline-offset-2 outline-blue-500 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent focus:p-2" onClick={() => { setToggle(!toggle) }}>Edit</button>
    </div>
  )
}

export default Cv