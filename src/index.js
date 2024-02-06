console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch("https://dog.ceo/api/breeds/image/random/4")
.then(res => res.json())
.then(data => {
    const dogImages = document.getElementById('dog-image-container')
    data.message.forEach(imgUrl => {
        const img = document.createElement('img')
        img.src = imgUrl
        dogImages.appendChild(img)
    })

})

const breedUrl = "https://dog.ceo/api/breeds/list/all"
let allBreeds = []

fetch("https://dog.ceo/api/breeds/list/all")
.then(res => res.json())
.then(data => {
    const dogBreeds = document.getElementById('dog-breeds')
    let allBreeds = Object.keys(data.message)
    for(const breed in data.message){
        const dogList = document.createElement('li')
        dogList.textContent = breed
        dogBreeds.appendChild(dogList)
        dogList.addEventListener('click', () => {
            dogList.style.color = 'blue'
        })
    }
    // console.log(allBreeds)
    const selectElement = document.getElementById('breed-dropdown')
    selectElement.addEventListener('change', () => {
        // console.log(allBreeds)
        // console.log(selectElement.value)
        const filteredBreeds = allBreeds.filter((breeds) => {
            console.log(breeds.split(''))
           return breeds.split('')[0] === selectElement.value

        })
        // console.log(filteredBreeds)
        dogBreeds.innerHTML = ""
        for(const breed of filteredBreeds){
            // console.log(breed)
            const filterDogList = document.createElement('li')
            filterDogList.textContent = breed
            dogBreeds.appendChild(filterDogList)
            // console.log(filterDogList)
        }
    })
})
