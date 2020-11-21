let delay = 3000,
    currentImageIndex = 0,
    images = document.querySelectorAll('#slide-show img.slide')
    max = images.length

function nextImage() {
    
    images[currentImageIndex].classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0;

    images[currentImageIndex].classList.add("selected")
}

function start() {
    //executa função a cada time
    setInterval(() => {
        //troca de imagem
        nextImage()
    }, delay)
}

window.addEventListener("load", start)