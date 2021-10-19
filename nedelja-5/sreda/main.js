// Napisati validaciju za formu koja sadrzi polja: 
// input-text(name, surname, password, passwordConfirm) 
// checkbox(courses)
// select(city)
// radiobutton(gender)
// Za polje name => obavezno, minimum 5 karaktera, maksimum 15
// Za polje surname => obavezno, minimum 5 karaktera, maksimum 20
// Za polje password => obavezno, minimum 8 karaktera, da sadrzi broj i veliko slovo
// Za polje passwordConfirm => da je isto kao i password
// Za polje course => obavezno

//klikom na register ako validacija ne prodje ispisati greske ispod polja (za svako polje ponaosob)
//ako validacija prodje, kreirati objekat user ubaciti ga u niz users i ispisati ga na ekranu (ispisati ceo niz)
//kada se kreira user: 1. ime i prezime mora biti trimovano i setovati samo prvo slovo kao veliko a sva ostala da budu mala
//nakon svakog unosa potrebno je ispisati novog user-a i obrisati sve inpute (staviti ih na pocetne vrednosti)

//HTML I CSS po sopstvenom izboru!!!!!!!!!!!!!!!
formCreate()
function formCreate() {

let nameInp = document.querySelector('#name')
let lastNameInp = document.querySelector('#last-name')
let emailInp = document.querySelector('#email')
let passInp = document.querySelector('#pass')
let passCInp = document.querySelector('#passC')
let genderInp = document.getElementsByName('gender')
let courseInp = document.getElementsByName('course')
let cityInp = document.getElementsByName('city')[0]
let registerBtn = document.querySelector('.btn')
let usersDiv = document.querySelector('.users')
let form = document.querySelector('form')
let naslov = document.querySelector('.naslov')
let users = []


registerBtn.addEventListener('click', check)
function check(e) {
    e.preventDefault()
    // define user
    let firstNameVal = nameInp.value.trim()
    let lastNameVal = lastNameInp.value.trim()
    let emailVal = emailInp.value.trim()
    let passVal = passInp.value
    let passCVal = passCInp.value
    // let genderVal = document.querySelector('input[name="gender"]:checked').value
    let genderVal = (function () {
        for (let i = 0; i < genderInp.length; i++) {
            const gen = genderInp[i];
            if (gen.checked) {
                return gen.value
            }
        }
    })() //this also WORKS()()
    let courses = document.querySelectorAll('input[name="course"]:checked')
    let coursesVal = []
    courses.forEach(c => coursesVal.push(c.value));
    let cityVal = document.getElementsByName('city')[0].value

    let userData = {
        firstName: firstNameVal,
        lastName: lastNameVal,
        email: emailVal,
        password: passVal,
        passwordConfirm: passCVal,
        gender: genderVal,
        courses: coursesVal,
        city: cityVal
    }

    validateUser(userData)
}

function validateUser(user) {
    let pname = document.querySelector('.p-name')
    let plastname = document.querySelector('.p-last-name')
    let pemail = document.querySelector('.p-email')
    let ppassword = document.querySelector('.p-password')
    let ppasswordConfirm = document.querySelector('.p-password-confirm')
    let pgender = document.querySelector('.p-gender')
    let pcourses = document.querySelector('.p-courses')
    let pcity = document.querySelector('.p-city')



    if (user.firstName.length < 5 || user.firstName.length > 15 || user.lastName.length < 5 || user.lastName.length > 20 || user.email.indexOf('@') == -1 || user.email == "" || user.email.length < 5 || user.password.length < 8 || user.password == user.password.toLowerCase() || !/\d/.test(user.password) || user.password != user.passwordConfirm || !user.gender || !user.courses.length || user.city == 'Choose city') {
        naslov.style.color = "tomato"
        if (user.firstName.length < 5 || user.firstName.length > 15) {
            if (user.firstName.length < 5) {
                pname.innerHTML = 'First name should be at least 5 characters long'
                nameInp.style.outline = "1px solid red"
            } else if (user.firstName.length > 15) {
                pname.innerHTML = 'First name should be longer then 15 characters'
                nameInp.style.outline = "1px solid red"

            }
        } else {
            user.firstName = user.firstName.replace(/^.{1}/g, user.firstName[0].toUpperCase())
            pname.innerHTML = ""
            nameInp.style.outline = "none"
        }
        if (user.lastName.length < 5 || user.lastName.length > 20) {
            if (user.lastName.length < 5) {
                plastname.innerHTML = 'Last name should be at least 5 characters long'
                lastNameInp.style.outline = "1px solid red"
            } else {
                plastname.innerHTML = 'Last name should not exceed 20 characters'
                lastNameInp.style.outline = "1px solid red"

            }
        } else {
            user.lastName = user.lastName.replace(/^.{1}/g, user.lastName[0].toUpperCase())
            plastname.innerHTML = ""
            lastNameInp.style.outline = "none"
        }
        if (user.email.indexOf('@') == -1 || user.email == "" || user.email.length < 5) {
            pemail.innerHTML = "Please enter valid email"
            emailInp.style.outline = "1px solid red"
        } else {
            pemail.innerHTML = ""
            emailInp.style.outline = "none"
        }
        if (user.password.length < 8 || user.password == user.password.toLowerCase() || !/\d/.test(user.password)) {
            if (user.password.length < 8) {
                ppassword.innerHTML = 'Password should be at least 8 characters long'
                passInp.style.outline = '1px solid red'
            } else if (user.password == user.password.toLowerCase()) {
                ppassword.innerHTML = 'Password should contains at least 1 upper case character'
                passInp.style.outline = '1px solid red'
            } else if (!/\d/.test(user.password)) {
                ppassword.innerHTML = 'Password should contains at least 1 number'
                passInp.style.outline = '1px solid red'

            }
        } else {
            ppassword.innerHTML = ''
            passInp.style.outline = 'none'
        }
        if (user.password != user.passwordConfirm) {
            ppasswordConfirm.innerHTML = 'Your passwords do not match'
            passInp.style.outline = '1px solid red'
            passCInp.style.outline = '1px solid red'
        } else if (user.password == user.passwordConfirm && (user.password != "" && user.passwordConfirm != "")) {
            ppasswordConfirm.innerHTML = ''
            passInp.style.outline = 'none'
            passCInp.style.outline = 'none'

        }
        if (!user.gender) {
            pgender.innerHTML = 'Please select your gender'
            genderInp.forEach(gen => {
                gen.style.outline = '1px solid red'
            });
        } else {
            pgender.innerHTML = ''
            genderInp.forEach(gen => {
                gen.style.outline = 'none'
            });
        }

        if (!user.courses.length) {
            pcourses.innerHTML = 'Please select your course/courses'
            courseInp.forEach(cor => {
                cor.style.outline = '1px solid red'
            });
        } else {
            pcourses.innerHTML = ''
            courseInp.forEach(cor => {
                cor.style.outline = 'none'
            });
        }
        if (user.city == 'Choose city') {
            cityInp.style.outline = '1px solid red'
            pcity.innerHTML = 'Please select your city'
        } else {
            cityInp.style.outline = 'none'
            pcity.innerHTML = ''

        }
    } else {
        naslov.style.color = "darkgreen"
        user.firstName = user.firstName.replace(/^.{1}/g, user.firstName[0].toUpperCase())
        user.lastName = user.lastName.replace(/^.{1}/g, user.lastName[0].toUpperCase())
        pname.innerHTML = ""
        nameInp.style.outline = "none"
        plastname.innerHTML = ""
        lastNameInp.style.outline = "none"
        pemail.innerHTML = ""
        emailInp.style.outline = "none"
        ppassword.innerHTML = ''
        passInp.style.outline = 'none'
        ppasswordConfirm.innerHTML = ''
        passInp.style.outline = 'none'
        passCInp.style.outline = 'none'
        pgender.innerHTML = ''
        genderInp.forEach(gen => {
            gen.style.outline = 'none'
        });
        pcourses.innerHTML = ''
        courseInp.forEach(cor => {
            cor.style.outline = 'none'
        });
        cityInp.style.outline = 'none'
        pcity.innerHTML = ''

        users.push(user)
        console.log(users);
        form.reset()
        createUser(user)
        
    }
}
function createUser(user) {
    usersDiv.innerHTML += `
            <div class="col-4 my-3">
                <h5>Name: ${user.firstName}</h5>
                <h5>Last name: ${user.lastName}</h5>
                <h5>Email: ${user.email}</h5>
                <h5>Password: ${user.password}</h5>
                <h5>Gender: ${user.gender}</h5>
                <h5>Courses: ${user.courses}</h5>
                <h5>City: ${user.city}</h5>
            </div>
            `
}

}