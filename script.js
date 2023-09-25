const error = document.querySelector('.msg')
const btn = document.querySelector('.btn')
const inputValue = document.querySelector('.input')
const emailPattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i

btn.addEventListener('click', (e) => {
    e.preventDefault()
    if (inputValue.value === 0 || !inputValue.value.match(emailPattern)) {
        error.style.color = 'red'
        error.innerText = 'Please Enter the valid email address'
    } else {
        error.style.color = 'green'
        error.innerText = 'Thank you for subscribing'
        inputValue.value = ''
    }
})