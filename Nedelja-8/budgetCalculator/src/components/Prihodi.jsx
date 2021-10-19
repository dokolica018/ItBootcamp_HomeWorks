import Prihod from './Prihod'
import './Prihodi_Rashodi.css'
const Prihodi = ({prihodi,setPrihodi}) => {
    

    return(
        <article className="prihodi">
            <h3>ПРИХОДИ</h3>
            <hr/>
            {prihodi.map(prihod=> <Prihod key={prihod.id} prihod={prihod} setPrihodi={setPrihodi}/>)}
        </article>
    )
}
export default Prihodi