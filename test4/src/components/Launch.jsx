import { useEffect, useState } from "react"
import { getOneRocket } from "../service"

const Launch = ({ launch }) => {
    const [click,setClick] = useState(false)
    const [rocket, setRocket] = useState([])
    const [id,setId] = useState('')
    

    function timeC (unix){
        let d = new Date(launch.date_unix*1000)
        let month = d.getMonth()
        let year = d.getFullYear()
        let date = d.getDate()
        let time = date+". "+month+'. '+year+'.'
        return time
    }
    useEffect(() => {
        getOneRocket(id?id:'').then((res) => {
            console.log(res.data);
            setRocket(res.data)
        })
      }, [id])
    return !click ? ( 
        <div style={{cursor:'pointer'}} className='col-3 text-center' onClick={() => {
            setClick(true)
            setId(launch.rocket)
        }}>
            <h6>{launch.name}</h6>
            <img className='img-fluid' src={launch.links.patch.small} alt="" />
            <p>{timeC(launch.date_unix)}</p>
        </div>
     ):
     <div style={{cursor:'pointer'}} className='col-3 text-center' onClick={() => {
         setClick(true)
         
        }}>
            <h6>{launch.name}</h6>
            <img className='img-fluid' src={launch.links.patch.small} alt="" />
            <p>{timeC(launch.date_unix)}</p>
            <h5>{rocket.name}</h5>
            <p>Active status:{rocket.active?"True":"False"}</p>
        </div>
}

export default Launch;