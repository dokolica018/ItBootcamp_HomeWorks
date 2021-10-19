import axios from 'axios';
const upcomingBtn = document.querySelector('#btn-upcoming')
const row = document.querySelector('.row')
const selectDiv = document.querySelector('#select')
const headerDiv = document.querySelector('#header')
const BASE = 'https://api.spacexdata.com'
const VERSION = '/v4'
const LAUNCHES = '/launches'
const NEXTLAUNCHES = '/next' 
const COMPANY = '/company'
const STARLINKS = '/starlink'
const ROCKETS = '/rockets'

const getAllRockets = () => {
    return axios.get(BASE+VERSION+ROCKETS)
}


let rocket = '5e9d0d95eda69974db09d1ed'
upcomingBtn.addEventListener('click',() => {
    let next = []
    getNextLaunches().then((res) => {
        next = res.data
        row.innerHTML = ''
        row.innerHTML = `
            <div class = "col-4">
                <img src="${next.links.patch.small ? next.links.patch.small : 'https://images2.imgbox.com/53/22/dh0XSLXO_o.png'}" alt="" class="img-fluid">
                <h2>Name: ${next.name} </h2>
            </div>
        `
        getAllRockets().then((res) => {
            let rockets = res.data
            rockets.forEach(rocket => {
                if (rocket.id == next.rocket) {
                    row.innerHTML +=`
                        <div class="col-4">
                            <img src="${rocket.flickr_images[0]}" alt="" class="img-fluid">
                            <h2>Rocket name: ${rocket.name}</h2>
                        </div>
                    `
                }
            });
        })
    })
})
const getNextLaunches = () => {
    return axios.get(BASE+VERSION+LAUNCHES+NEXTLAUNCHES)
}
const getAllCompanieInfo = () => {
    return axios.get(BASE+VERSION+COMPANY)
}
let company =[]
getAllCompanieInfo().then(res => {
    company = res.data
    headerDiv.innerHTML = `
        <h1>Name: ${company.name}</h1>
        <h6>Founding year: ${company.founded}</h6>
        <ul>
            <li>Address: ${company.headquarters.address}</li>
            <li>City: ${company.headquarters.city}</li>
            <li>State: ${company.headquarters.state}</li>
        </ul>
    `
})
const getAllSatelites = () => {
    return axios.get(BASE+VERSION+STARLINKS)
}
let satelites = []
const Satelite = (satelite) => {
    const colDiv = document.createElement('div')
    colDiv.classList.add('satelite-list', 'col-2')
    colDiv.innerHTML =`
        <h5>Name: ${satelite.spaceTrack.TLE_LINE0}</h5>
        <p>Version: ${satelite.version}</p>
    `
    return colDiv
}
const Satelites = satelites => satelites.map(satelite => Satelite(satelite))

getAllSatelites().then((res) => {
    satelites = res.data
    row.append(...Satelites(satelites))
    selectDiv.innerHTML = ''
    selectDiv.append(Select(satelites))
})

const Select = (satelites) => {
    let options = new Set(satelites.map(satelite => satelite.version))
    const select = document.createElement('select')
    select.classList.add('my-3')
    const defOpt = document.createElement('option')
    defOpt.value = '-1'
    defOpt.selected = true
    defOpt.disabled = true
    defOpt.hidden = true
    defOpt.innerHTML = 'Choose version'
    select.append(defOpt)
    options.forEach(option => {
        const opt  = document.createElement('option')
        opt.value = option
        opt.innerHTML = option
        select.append(opt)
    });
    select.addEventListener('change',() => {
        let filterSatelites = satelites.filter(satelite=>satelite.version == select.value)
        console.log(filterSatelites);
        row.innerHTML = ''
        row.append(...Satelites(filterSatelites))

    })

    return select
}
