
const images = document.querySelector(".images")
const imagesCollection = document.querySelectorAll(".image")
const btnPrev = document.querySelector(".btn-prev")
const btnNext = document.querySelector(".btn-next")

btnPrev.addEventListener("click", prevSlide)
btnNext.addEventListener("click", nextSlide)

let index = 0 

let interval = setInterval(startInterval, 3000)

function startInterval() {
    index++
    moveCarousel()
}

function resetInterval() {
    clearInterval(interval)
}

function moveCarousel(){
    if (index > imagesCollection.length-1) {
       index = 0
    } else if (index < 0) {
       index = imagesCollection.length-1
    }
    images.style.transform = `translateX(-${index*800}px)`
}

function prevSlide() {
    index--
    resetInterval()
    moveCarousel()
}
function nextSlide() {
    index++
    resetInterval()
    moveCarousel()
}
