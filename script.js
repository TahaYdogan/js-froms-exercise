let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit', formHandler)
const alertDOM = document.querySelector('#alert')
 
const alertfunction = (tittle, message, className="warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${tittle}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(event) {
    event.preventDefault()

    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")
    if (USER_NAME.value && SCORE.value){
    addItem(USER_NAME.value, SCORE.value)  // godnertikten sonra sifirlama
    USER_NAME.value = ""
    SCORE.value = ""

    } else{
       alertDOM.innerHTML = alertfunction(
        "Kulllanici",
        "Eksik Bilgi Girdiniz",
        "danger"
        )
    }
}

let userlistDOM = document.querySelector('#userlist')

const addItem = (userName, score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `
    ${userName}
    <span class="badge bg-primary rounded-pill">${score}</span> `
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userlistDOM.append(liDOM)

}



