console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
document.addEventListener("DOMContentLoaded",
function() {
    fetchDogImages()
})

function fetchDogImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(data => {
        let image = data.message
        fetchDogImages.forEach(image => {
            loadImagestoDOM(image)
        });

        function loadImagestoDOM(image) {
            let dogsCont = document.getElementById("dog-i")
            let ourImage = document.createElement('image')
            ourImage.src = image
            dogsCont.appendChild(ourImage)
        }
    })
}