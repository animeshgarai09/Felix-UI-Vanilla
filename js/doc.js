hljs.highlightAll()

const sections = document.querySelectorAll("section")
const link = document.querySelectorAll(".link")
window.onscroll = () => {
    var current = ""

    sections.forEach((section) => {
        const sectionTop = section.offsetTop
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id")
        }
    })

    link.forEach((item) => {
        item.classList.remove("active")
        if (item.href.includes(current)) {
            item.classList.add("active")
        }
    })
}
document.querySelectorAll("code.html").forEach((element) => {
    element.innerHTML = element.innerHTML.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
})

// Get the modal
var modal = document.getElementById("myModal")

// Get the button that opens the modal
var btn = document.getElementById("myBtn")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0]

// When the user clicks the button, open the modal
btn.onclick = () => {
    modal.style.display = "block"
    document.body.style.overflow = "hidden"
}

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
    modal.style.display = "none"
    document.body.style.overflow = "visible"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none"
        document.body.style.overflow = "visible"
    }
}

const range = document.querySelector(".range")
const thumb = document.querySelector(".thumb")
const track = document.querySelector(".track-inner")

const updateSlider = (value) => {
    thumb.style.left = `${value}%`
    thumb.style.transform = `translate(-${value}%, -50%)`
    track.style.width = `${value}%`
}

range.oninput = (e) => updateSlider(e.target.value)

updateSlider(50)


// Menu toggle

const menuBtn = document.getElementById("menuToggle")
const menuIcon = menuBtn.querySelector('i')
const menu = document.getElementById("menu")

menuBtn.addEventListener("click", () => {
    menu.classList.toggle('open')
    document.body.classList.toggle('no-scroll')
    menuIcon.classList.toggle('fa-bars')
    menuIcon.classList.toggle('fa-times')
})

menu.querySelectorAll("a").forEach(elm => {
    elm.addEventListener("click", () => {
        menuBtn.click();
    })
})