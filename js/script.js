
const rules = [
    {
        name: 'Card1',
        desc: 'Rule 1: Define love before you think it, feel it or say it.',
        thumb: "images/img-1-thumb.jpg",
        img: "images/img-1.jpg"
    },
    {
        name: 'Card2',
        desc: 'Rule 2: Let yourself be alone.',
        thumb: "images/img-2-thumb.jpg",
        img: "images/img-2.jpg"
    },
    {
        name: 'Card3',
        desc: 'Rule 3: Your purpose comes first',
        thumb: "images/img-3-thumb.jpg",
        img: "images/img-3.jpg"
    },
    {
        name: 'Card4',
        desc: 'Rule 4: Win or lose together.',
        thumb: "images/img-4-thumb.jpg",
        img: "images/img-4.jpg"
    },
    {
        name: 'Card5',
        desc: 'Rule 5: Do unto others as you would have them do unto you',
        thumb: "images/img-5-thumb.jpg",
        img: "images/img-5.jpg"
    },
    {
        name: 'Card6',
        desc: 'Rule 6: Never invalidate or erase the personal reality of someone you love',
        thumb: 'images/img-6-thumb.jpg',
        img: "images/img-6.Jjpg"
    },
    {
        name: 'Card7',
        desc: 'Rule 7: Bids for connection are always honored.',
        thumb: 'images/img-7-thumb.jpg',
        img: "images/img-7.jpg"
    },
    {
        name: 'Card8',
        desc: 'Rule 8: The partners in a great relationship are a team',
        thumb: 'images/img-8-thumb.jpg',
        img: "images/img-8.jpg"
    },
    {
        name: 'Card9',
        desc: 'Rule 9: People who love each other want to be the best they can be for the other.',
        thumb: 'images/img-9-thumb.jpg',
        img: "images/img-9.jpg"
    },
    {
        name: 'Card10',
        desc: 'Rule 10: Ownership or possessiveness is unacceptable',
        thumb: 'images/img-10-thumb.jpg',
        img: "images/img-10.jpg"
    },
    {
        name: 'Card11',
        desc: 'Rule 11: Never blame the other partner for what you cannot be, have, or achieve in your own life.',
        thumb: 'images/img-11-thumb.jpg',
        img: "images/img-11.jpg"
    },
    {
        name: 'Card12',
        desc: 'Rule 12: Love and love again',
        thumb: 'images/img-12-thumb.jpg',
        img: "images/img-12.jpg"
    }
];

const gallery = document.getElementById("gallery");

const cards = [];

for (const rule of rules) {
    const card = `
        <div class="card">
            <img src="${rule.thumb}" class="rule-img-top" data-fullimg="${rule.img}" data-desc="${rule.desc}">
        </div>
    `;
    
    cards.push(card);
};

gallery.innerHTML = cards.join('');

const modal = document.getElementById("modal");

const modalImg = document.getElementById("modal-img");

const modalDesc = document.getElementById("modal-desc")

const thumbnails = document.querySelectorAll('.rule-img-top');



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
