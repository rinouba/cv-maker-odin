import React from "react";

function PracticalExp({toggle}) {
  return (
    <section>
      <h1>Practical Experience</h1>
      <label>
        Company Name :
        <input type="text" placeholder="Company Name" disabled={toggle} />
      </label>
      <br />
      <label>
        Position Title :
        <input type="text" placeholder="Position Title" disabled={toggle} />
      </label>
    </section>
  );
}

export default PracticalExp;
