const galleryContainer = document.querySelector(".gallery-filter")
for(const galleryContainer of galleryContainers) {
    galleryContainer.addEventListener("click", openModal)
}

function openModal () {
    console.log(this.getAttribute("src"))
    const fullImage = this.dataset.fullimg
    const modalBody = document.querySelector(".modal-body")
  
    modalBody.innerHTML = `<img src="${fullImage}" alt="placeholder">`
  }

