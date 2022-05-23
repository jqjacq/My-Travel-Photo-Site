const contact = document.getElementById("contact")
const contactfont = document.getElementById("contactme")
const message = document.getElementById("message")
const submit = document.getElementById("submit")

submit.addEventListener("mouseover", mouseOver)
submit.addEventListener("mouseout", mouseOut)

function mouseOver() {
    submit.style.transform = "translateY(4px)"
    submit.style.boxShadow = "0 4px 8px 0"
    submit.style.fontWeight = "bold"
}
function mouseOut() {
    submit.style.color = "black"
    submit.style.transform = "none"
    submit.style.boxShadow = "0"
    submit.style.fontWeight = ""
}

function contacts() {
    contact.style.fontSize = "15px"
    contact.style.display = "block"
    contact.style.padding = "5px"
    contact.style.margin = "5px"
    contactfont.innerHTML = "CONTACT ME"
    contactfont.style.fontWeight = "bold"
    contactfont.style.marginLeft = "10px"
    submit.style.textTransform = "uppercase"
    submit.style.marginLeft = "50px"
    submit.style.backgroundColor = "rgba(250, 209, 77)"
    submit.style.borderRadius = "20px"
    message.style.height = "50px"
    message.style.width = "250px"
}

const listofplace = document.getElementById("listofplace")
const listhead = document.getElementById("listhead")
const photos = document.getElementById("photos")

function displayList() {
    listofplace.style.display = "block"
}

function hideList() {
    listofplace.style.display = "none"
}

function displayPhotos() {
    photos.style.display = "block"
}

