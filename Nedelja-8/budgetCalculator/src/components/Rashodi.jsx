import './Prihodi_Rashodi.css'
import Rashod from './Rashod'
const Rashodi = ({prihodi,rashodi,setRashodi}) => {
    

    return(
        <article className="rashodi">
            <h3>РАСХОДИ</h3>
            <hr/>
            {rashodi.map(rashod=> 
            <Rashod key={rashod.id} prihodi={prihodi} rashod={rashod} setRashodi={setRashodi}/>)}
            
        </article>
    )
}
export default Rashodi