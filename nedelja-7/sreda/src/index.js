import Countries from './components/Countries.js'
import { getAllCountries } from './service.js'
import { row, divSelect, inputSearch } from './constants.js';




let countries = []

getAllCountries().then((res) => {
    countries = res.data
    row.innerHTML = ''
    row.append(...Countries(countries))
    divSelect.append(Select(countries))

})
let select

const Select = (countries) => {
    let options = new Set(countries.map(country => country.region))
    select = document.createElement('select')
    select.classList.add('my-3','form-select')
    const defOpt = document.createElement('option')
    defOpt.value = '-1'
    defOpt.selected = true
    defOpt.disabled = true
    defOpt.hidden = true
    defOpt.innerHTML = 'Choose Region'
    select.append(defOpt)

    options.forEach(option => {
        const opt = document.createElement('option')
        if (!option == "") {
            opt.value = option
            opt.innerHTML = option
            select.append(opt)
        } else {
            opt.value = 'Other'
            opt.innerHTML = 'Other'
            select.append(opt)
        }
    });
    
    select.addEventListener('change', () => {
        let filterSelect = []
        if (select.value == 'Other') {
            filterSelect = countries.filter(country => country.region.length == 0)
            row.innerHTML = ""
            row.append(...Countries(filterSelect))
        } else {
            filterSelect = countries.filter(country => country.region.startsWith(select.value))
            row.innerHTML = ""
            row.append(...Countries(filterSelect))
        }
        if(filterSelect.length == 1){
            for (const key in filterSelect) {
                console.log(filterSelect[key]);
                row.innerHTML = `
                <div class="flag">
                <img src="${filterSelect[key].flag}" alt="" class="img-fluid">
                </div>
                <div class="name">
                <h4>${filterSelect[key].name}</h4>
                </div>
                <h6>Native name: ${filterSelect[key].nativeName}</h6>
                <h6>Population: ${filterSelect[key].population}</h6>
                <h6>Capital: ${filterSelect[key].capital}</h6>
                <h6>Internet domain: ${filterSelect[key].topLevelDomain}</h6>
                `
            }
        }
        
    })
    
    return select
}
    inputSearch.addEventListener('input',() => {
        row.innerHTML = ""
        let filter = countries.filter(country => country.name.toLowerCase().includes(inputSearch.value.toLowerCase()))
        row.append(...Countries(filter))
        divSelect.innerHTML = ""
        divSelect.append(Select(filter))
        
        if(filter.length == 1){
            for (const key in filter) {
                console.log(filter[key]);
                row.innerHTML = `
                <div class="flag">
                <img src="${filter[key].flag}" alt="" class="img-fluid">
                </div>
                <div class="name">
                <h4>${filter[key].name}</h4>
                </div>
                <h6>Native name: ${filter[key].nativeName}</h6>
                <h6>Population: ${filter[key].population}</h6>
                <h6>Capital: ${filter[key].capital}</h6>
                <h6>Internet domain: ${filter[key].topLevelDomain}</h6>
                `
            }
        }
    })

