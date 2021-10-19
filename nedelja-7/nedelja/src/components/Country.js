import { row, allBtn, prevBtn, nextBtn } from "../constants.js"
import { countries } from "../index.js"
import Countries from "./Countries.js"


const Country = country => {
    const colDiv = document.createElement('div')
    colDiv.classList.add('countries-list', 'col-3','my-3')
    colDiv.innerHTML = `
    <div class="flag">
    <img src="${country.flag}" alt="" class="slika img-fluid">
    </div>
    <div class="name">
    <h4>${country.name}</h4>
    <h6>Capital: ${country.capital}</h6>
    </div>
    `
    colDiv.addEventListener('click',function show() {
        one(country)
    }) 
    function one(country) {
        row.innerHTML = ''
            row.classList.add('text-center')
            row.innerHTML = `
            <h1 class="my-3">${country.name}</h1>
            <div class="flag">
            <img src="${country.flag}" alt="" class="slika1 img-fluid">
            </div>
            <h2>Capital: ${country.capital}</h2>
            <h4 class ="lan">Language/Languages: </h4>
            `
            let lan = document.querySelector('.lan')
            country.languages.forEach(language => {
                lan.innerHTML += language.name+","
            });
            row.innerHTML+=`
            <h4 class="time">Time zone/Time zones: </h4>
            <h4>Population: ${country.population}</h4>
            `
            let time = document.querySelector('.time')
            country.timezones.forEach((tz) => {
                time.innerHTML += tz+","
                
            })
            const btns = document.querySelector('.btns')
            btns.style.visibility = 'visible'
            allBtn.addEventListener('click',() => {
                row.innerHTML = ""
                row.append(...Countries(countries))
            })
            nextBtn.addEventListener('click',() => {
                if (countries.indexOf(country) == countries.length-1) {
                    one(countries[0])
                }else{

                    one(countries[countries.indexOf(country)+1])
                }
            })
            prevBtn.addEventListener('click',() => {
                console.log(countries.indexOf(country));
                if (countries.indexOf(country) == 0) {
                    one(countries[countries.length-1])
                }else{
                    
                    one(countries[countries.indexOf(country)-1])
                }
                
            })
        }
        
    return colDiv
}
export default Country
