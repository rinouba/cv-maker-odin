import React from 'react'

import GeneralInfo from './GeneralInfo'
import EductailExp from './EductailExp'
import PracticalExp from './PracticalExp'

function Cv({toggle,setToggle}) {
  return (
    <div className="cv">
        <GeneralInfo toggle={toggle}/>
        <EductailExp toggle={toggle}/>
        <PracticalExp toggle={toggle}/>
        <button onClick={() => { setToggle(!toggle) }}>Edit</button>
    </div>
  )
}

export default Cv