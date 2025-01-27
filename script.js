const scriptURL = 'https://script.google.com/macros/s/AKfycbz5NRujgP49MSCT9MSj4LuV7E9_PsNpC-Za8iqkDDoqvzYb54dP-BfRV5VkZwNxHoHHjw/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Connection failed! Try again";
        msg.style.color = "orange";
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
