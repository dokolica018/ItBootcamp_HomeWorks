const Rashod = ({prihodi,rashod,setRashodi}) => {
    let ukupnoP = 0
    prihodi.forEach(prihod => {
        ukupnoP+=parseInt(prihod.price)
    });
    return(
        <div className = 'uneti'>
            <div className='uneti-rashodi'>
            <button className='mx-3 btn btn-danger btn-sm' onClick={() => {
                setRashodi((prev) => {
                    let copy = [...prev]
                    let index = copy.indexOf(rashod)
                    copy.splice(index,1)
                    return copy
                })
            }}>X</button>
            <p className="mx-3 p-opis">{rashod.text}</p>
            <p className="mx-3 p-iznos iznos">-{rashod.price}</p>
            <p className="r-procenat">{Math.round((rashod.price / ukupnoP) * 100)}%</p>
            </div>
            <hr/>
        </div>
    )
}

export default Rashod