import './Header.css'

const Header = ({prihodi,rashodi}) => {
    let ukupnoR = 0
    let ukupnoP = 0
    prihodi.forEach(prihod => {
        ukupnoP+=Number(prihod.price)
    });
    rashodi.forEach(rashod => {
        ukupnoR+= Number(rashod.price)
    });
    return (
        <header className="text-center">
            <p>Доступан буџет у Септембру 2021.</p>
            <h1>{(ukupnoP-ukupnoR).toFixed(2)} РСД</h1>
            <section className="container">
                <article className="prihod">
                    <h6>ПРИХОД</h6>
                    <h5 className="ukupan-prihod">{ukupnoP} РСД</h5>
                </article>
                <article className="rashod">
                    <h6>РАСХОД</h6>
                    <div>
                        <h5 className="ukupan-rashod">{ukupnoR} РСД</h5>
                        <div className="ukupan-procenat">{Math.round((ukupnoR/ukupnoP)*100)}%</div>
                    </div>
                </article>
            </section>
        </header>
    )
}
export default Header