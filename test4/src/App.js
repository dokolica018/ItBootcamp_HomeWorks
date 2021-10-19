import { useEffect, useState } from "react";
import Launches from "./components/Launches";
import Select from "./components/Select";
import { getAllLaunches } from "./service";



function App() {
  const [launches, setLaunches] = useState([])
  const [select, setSelect] = useState('')
  let filter = launches.slice(0,Number(select))
  console.log(filter);

  useEffect(() => {
    getAllLaunches().then((res) => {
      setLaunches(res.data)
    })
  }, [])
  return (
    <div className="App">
      <Select setSelect={setSelect} />
      <Launches launches={launches} filter={filter} />
    </div>
  );
}

export default App;
