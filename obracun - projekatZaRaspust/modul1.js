function bookKeeping() {

    let submitBtn = document.querySelector('#submit')

    let ukupanPrihod = document.querySelector('.ukupan-prihod')
    let ukupanRashod = document.querySelector('.ukupan-rashod')
    let ukupanProcenat = document.querySelector('.ukupan-procenat')

    let form = document.querySelector('.form')

    let select = document.querySelector('.form-select')
    let opisInput = document.querySelector('#opis')
    let iznosInput = document.querySelector('#iznos')

    let error1 = document.querySelector('.error1')
    let error2 = document.querySelector('.error2')
    let error3 = document.querySelector('.error3')

    let prihodiDiv = document.querySelector('.prihodi')
    let rashodiDiv = document.querySelector('.rashodi')

    let h1 = document.querySelector('h1')

    submitBtn.addEventListener('click', checkValues)

    function checkValues(e) {
        e.preventDefault()
        let selectVal = select.value
        let opisVal = opisInput.value
        let iznosVal = iznosInput.value

        if (selectVal == "" || opisVal == "" || iznosVal <= 0) {
            if (selectVal == "") {
                error1.innerHTML = `Молимо<BR> изаберите шта уносите <BR> (приход/расход)`
            } else {
                error1.innerHTML = ""
            }
            if (opisVal == "") {
                error2.innerHTML = `Поље за опис не сме бити празно`
            } else {
                error2.innerHTML = ""
            }
            if (iznosVal == "" || iznosVal <= 0) {
                error3.innerHTML = 'Износ мора бити већи од нуле'
            } else {
                error3.innerHTML = ""
            }
        } else {
            form.reset()
            addToDom(selectVal, opisVal, Number(iznosVal))
        }
    }
    let prihod = 0
    let rashod = 0
    let prihodi = []
    let rashodi = []
    let rIznos
    let pIznos
    let rProcenat


    function addToDom(select, opis, iznos) {

        error1.innerHTML = ""
        error2.innerHTML = ""
        error3.innerHTML = ""
        if (select == 'prihod') {
            prihod = prihod + iznos
            prihodiDiv.innerHTML += `
            <div class="uneti">
                <div class="uneti-prihodi">
                <button class="mx-3 btn btn-danger btn-sm">Обриши</button>
                <p class="mx-3 p-opis">${opis}</p>
                <p class="mx-3 p-iznos iznos">+${iznos}</p>
                </div>
                <hr>
            </div>
            `
            pIznos = document.querySelectorAll('.p-iznos')
            let unosP = {
                opis: opis,
                iznos: iznos
            }
            prihodi.push(unosP)
            if (rashodiDiv.innerHTML != "") {
                rProcenat = document.querySelectorAll('.r-procenat')
                rIznos = document.querySelectorAll('.r-iznos')
                rIznos.forEach((prc, i) => {
                    rProcenat[i].innerHTML = `${Math.round((((parseInt(Math.abs(prc.innerHTML)))) / prihod) * 100)}%`
                });
            }
        } else if (select == 'rashod') {
            rashod += iznos
            rashodiDiv.innerHTML += `
        <div class="uneti">
        <div class="uneti-rashodi">
        <button class="mx-3 btn btn-danger btn-sm">Обриши</button>
        <p class="mx-3 r-opis">${opis} </p>
        <p class="mx-3 iznos r-iznos">-${iznos}</p>
        <p class="r-procenat">${Math.round((iznos / prihod) * 100)}%</p>
        </div>
        <hr>
        </div>

        `
            let unosR = {
                opis: opis,
                iznos: iznos
            }
            rashodi.push(unosR)
        }
        ukupanPrihod.innerHTML = `+${prihod}`
        ukupanRashod.innerHTML = `-${rashod}`
        ukupanProcenat.innerHTML = `${Math.round((rashod / prihod) * 100)}%`

        h1.innerHTML = ` ${(prihod - rashod).toFixed(2)} РСД`

        let uneti = document.querySelectorAll('.uneti')
        let delBtns = document.querySelectorAll('.btn')
        uneti.forEach((el, i) => {
            el.addEventListener('mouseenter', () => {
                delBtns[i].style.display = 'block'

            })
            el.addEventListener('mouseleave', () => {
                delBtns[i].style.display = 'none'

            })
        });
        delBtns.forEach((del, i) => {
            del.addEventListener('click', () => {
                uneti[i].remove()
                pIznos = document.querySelectorAll('.p-iznos')
                rIznos = document.querySelectorAll('.r-iznos')
                rProcenat = document.querySelectorAll('.r-procenat')
                let noviPrihod = 0
                let noviRashod = 0
                pIznos.forEach(p => {
                    noviPrihod += parseInt(p.innerHTML)
                });
                rIznos.forEach((rp, i) => {
                    noviRashod += parseInt(rp.innerHTML)
                    rProcenat[i].innerHTML = `${Math.round((((parseInt(Math.abs(rp.innerHTML)))) / noviPrihod) * 100)}%`
                });
                ukupanPrihod.innerHTML = `+${noviPrihod}`
                ukupanRashod.innerHTML = `${noviRashod}`
                ukupanProcenat.innerHTML = `${Math.round((noviRashod / noviPrihod) * 100)}%`
                h1.innerHTML = ` ${(noviPrihod + noviRashod).toFixed(2)} РСД`
                if (noviPrihod == 0 && noviRashod == 0) {
                    ukupanProcenat.innerHTML = ""
                    ukupanPrihod.innerHTML = ""
                    ukupanRashod.innerHTML = ""
                }
                prihod = noviPrihod
                rashod = noviPrihod
            })
        });
    }
}
export { bookKeeping }

