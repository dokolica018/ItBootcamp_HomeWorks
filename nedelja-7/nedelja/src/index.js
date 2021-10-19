import Countries from './components/Countries.js'
import { getAllCountries } from './service.js'
import { allBtn, nextBtn, prevBtn, row, } from './constants.js';
import Country from './components/Country.js';
export let countries = []
getAllCountries().then((res) => {
    countries = res.data.sort(() => Math.random() - Math.random()).slice(0, 16)
    row.innerHTML = ''
    row.append(...Countries(countries))
    
})

