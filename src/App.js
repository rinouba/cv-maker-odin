import './styles/style.css'
import Cv from './components/Cv';
import { useState } from 'react';

function App() {
  const [disabild, setdisabild] = useState(true);

  return (
    <div className="App">
      <Cv toggle={disabild} setToggle={setdisabild}/>
    </div>
  );
}

export default App;
