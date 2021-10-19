// import { v1 as uuidv4 } from 'uuid'
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import {v1 as uuidv1} from 'uuid'
import Prihodi from './components/Prihodi';
import Rashodi from './components/Rashodi';
function App() {
  const [prihodi, setPrihodi] = useState([
    { id: uuidv1(),
      type:'prihod',
      text:'Плата',
      price:32125.34},

  ])
  const [rashodi, setRashodi] = useState([
    { id: uuidv1(), 
      type:'rashod',
      text:'Школарина',
      price:17060.35},
    { id: uuidv1(), 
      type:'rashod',
      text:'Непредвиђени трошкови',
      price:9571},
    
  ])
  console.log(prihodi,rashodi);
  
  return (
    <>
      <Header prihodi={prihodi} rashodi={rashodi}/>
      <Form setPrihodi={setPrihodi} setRashodi={setRashodi}/>
      <div className='container3'>
        <Prihodi prihodi={prihodi} setPrihodi={setPrihodi} setRashodi={setRashodi}/>
        <Rashodi prihodi ={prihodi} rashodi={rashodi} setPrihodi={setPrihodi} setRashodi={setRashodi}/>
      </div>
    </>
  );
}


export default App;
