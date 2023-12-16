import React from 'react'



function GeneralInfo({toggle}) {
  return (
    <section>
      <h1>General Information</h1>
      <label>
        Name :
        <input type="text" placeholder='Name' disabled={toggle}/>
      </label>
      <br />
      <label>
        Email :
        <input type="email" placeholder='Email' disabled={toggle}/>
      </label>
      <br />
      <label>
        Phone :
        <input type="text" placeholder='Phone' disabled={toggle}/>
      </label>
    </section>
  )
}

export default GeneralInfo