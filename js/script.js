
const dogs = [
    {
        name: 'Card1',
        desc: 'Rule 1',
        thumb: "images/img-1-thumb.jpg",
        img: "images/img-1.jpg"
    },
    {
        name: 'Chakra',
        desc: 'Doberman',
        thumb: "images/doberman-thumb.jpg",
        img: "images/doberman.jpg"
    },
    {
        name: 'Wolfie',
        desc: 'Husky',
        thumb: "images/husky-thumb.jpg",
        img: "images/husky.jpg"
    },
    {
        name: 'Alleman',
        desc: 'German Shepherd',
        thumb: "images/german-thumb.jpg",
        img: "images/german.jpg"
    },
    {
        name: 'Taxi',
        desc: 'Jack Russell Terrier',
        thumb: "images/russell-thumb.jpg",
        img: "images/russell.jpg"
    },
    {
        name: 'Max',
        desc: 'Golden Retriever',
        thumb: 'images/golden-thumb.jpg',
        img: "images/golden.jpg"
    },
    {
        name: 'Daisy',
        desc: 'Beagle',
        thumb: 'images/beagle-thumb.jpg',
        img: "images/beagle.jpg"
    },
    {
        name: 'Lola',
        desc: 'Poodle',
        thumb: 'images/poodle-thumb.jpg',
        img: "images/poodle.jpg"
    },
    {
        name: 'Rocky',
        desc: 'Boxer',
        thumb: 'images/boxer-thumb.jpg',
        img: "images/boxer.jpg"
    },
    {
        name: 'Buddy',
        desc: 'Labrador Retriever',
        thumb: 'images/labrador-thumb.jpg',
        img: "images/labrador.jpg"
    },
    {
        name: 'Bella',
        desc: 'Corgi',
        thumb: 'images/corgi-thumb.jpg',
        img: "images/corgi.jpg"
    },
    {
        name: 'Rusty',
        desc: 'Dachshund',
        thumb: 'images/dachshund-thumb.jpg',
        img: "images/dachshund.jpg"
    }
];

const gallery = document.getElementById("gallery");

const cards = [];

for (const dog of dogs) {
    const card = `
        <div class="card">
            <img src="${dog.thumb}" class="dog-img-top" data-fullimg="${dog.img}" data-desc="${dog.desc}">
        </div>
    `;
    
    cards.push(card);
};

gallery.innerHTML = cards.join('');

const modal = document.getElementById("modal");

const modalImg = document.getElementById("modal-img");

const modalDesc = document.getElementById("modal-desc")

const thumbnails = document.querySelectorAll('.dog-img-top');



thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = thumbnail.getAttribute('data-fullimg');
        modalDesc.textContent = thumbnail.getAttribute('data-desc');
    })
});

const closeButton = document.getElementsByClassName('close')[0];

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if(event.target === modal){
        modal.style.display = 'none';
    }
});
