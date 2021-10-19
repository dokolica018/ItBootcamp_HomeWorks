import { useState } from 'react';
import Button from './components/Button';


function App() {
  const [count, setCount] = useState(0)
  const [inp, setInp] = useState('')
  const [p, setP] = useState([])

  return (

    <div style={{ border: '1px solid black', width: '45%', margin: 'auto', borderRadius: '10px' }} className="App container container-fluid my-5">
      <h1 className='text-center my-3'>Calculator</h1>
      <div className='input-group d-flex mx-auto'>
        <input disabled value={count} type='number' />
        <input value={inp} type='number' onChange={(e) => {
          setInp(e.target.value)
        }} />
        <Button sign={'+'} btn={'warning'} p={p} setP={setP} inp={inp} setInp={setInp} count={count} setCount={setCount} />
        <Button sign={'-'} btn={'warning'} p={p} setP={setP} inp={inp} setInp={setInp} count={count} setCount={setCount} />
        <Button sign={'*'} btn={'warning'} p={p} setP={setP} inp={inp} setInp={setInp} count={count} setCount={setCount} />
        <Button sign={'/'} btn={'warning'} p={p} setP={setP} inp={inp} setInp={setInp} count={count} setCount={setCount} />
        <Button sign={'C'} btn={'danger'} p={p} setP={setP} inp={inp} setInp={setInp} count={count} setCount={setCount} />
      </div>
      <p className ="py-3">{[...p]}</p>
    </div>
  );
}

export default App;
