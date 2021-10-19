
const Prihod = ({prihod,setPrihodi}) => {
    return(
        <div className = 'uneti' >
            <div className='uneti-prihodi'>
            <button className='mx-3 btn btn-danger btn-sm'
            onClick={() => {
                setPrihodi((prev) => {
                    let copy = [...prev]
                    let index = copy.indexOf(prihod)
                    copy.splice(index,1)
                    return copy
                })
            }}>X</button>
            <p className="mx-3 p-opis">{prihod.text}</p>
            <p className="mx-3 p-iznos iznos">+{prihod.price}</p>
            </div>
            <hr/>
        </div>
    )
}

export default Prihod