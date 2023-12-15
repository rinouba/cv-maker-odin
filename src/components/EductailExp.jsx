import React from 'react'

function EductailExp({toggle}) {
  return (
    <section>
      <h1>Educational Experience</h1>
      <label>
        School Name :
        <input type="text" placeholder='School Name' disabled={toggle}/>
      </label>
      <br />
      <label>
        Title of Study :
        <input type="text" placeholder='Title Of Study' disabled={toggle}/>
      </label>
      <br />
      <label>
        Date of Study :
        <input type="text" placeholder='Date of Study' disabled={toggle}/>
      </label>
      <br />
      </section>
  )
}

export default EductailExp