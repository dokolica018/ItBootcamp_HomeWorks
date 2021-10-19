const Country = country => {
    const colDiv = document.createElement('div')
    colDiv.classList.add('countries-list', 'col-3','my-3')
    colDiv.innerHTML = `
    <div class="flag">
    <img src="${country.flag}" alt="" class="img-fluid">
    </div>
    <div class="name">
    <h4>${country.name}</h4>
    </div>
    `
    return colDiv
}
export default Country