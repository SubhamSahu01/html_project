// import { reloadCard } from "./apppp";
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
// var data = JSON.parse(localStorage.getItem('myData'));

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'SteamWorld Bulid',
        image: '1.avif',
        price: "₹1,170",
        src: "../subpage/SteamWorldBulid.html",
        
    },
    {
        id: 2,
        name: 'Born of Bread',
        image: '2.avif',
        price: "₹1,683",
        src: "../subpage/Bornofbread.html"
    },
    {
        id: 3,
        name: 'Lifespace Traveler',
        image: '3.avif',
        price: "₹269.50",
        src: "../subpage/Lifespacetraveler.html"
    },
    {
        id: 4,
        name: 'Shadow Gambit: The Cursed Crew',
        image: '4.avif',
        price: "₹1,599",
        src: "../subpage/Shadowgambit.html"
    },
    {
        id: 5,
        name: 'Life Changer',
        image: '5.avif',
        price: "₹420.42",
        src: "../subpage/Lifechanger.html"
    },
    {
        id: 6,
        name: 'Sherlock Holmes The Awakened – Standard Edition',
        image: '6.avif',
        price: "₹1,099",
        src: "../subpage/SherlockHolmesTheAwakened.html"
    },
    {
        id: 7,
        name: 'Fishing: North Atlantic - Enhanced Edition',
        image: '7.avif',
        price: "₹359.60",
        src: "../subpage/Fishing-North Atlantic.html"
    },
    {
        id: 8,
        name: 'Dr. Fetus Mean Meat Machine',
        image: '8.avif',
        price: "₹268.80",
        src: "../subpage/Dr. Fetus.html"
    },
    {
        id: 9,
        name: 'Nihilsearch',
        image: '9.avif',
        price: "₹192.92",
        src: "../subpage/Nihilsearch.html"
    },
    {
        id: 10,
        name: 'PUBG: BATTLEGROUNDS',
        image: '10.jpg',
        price: "free",
        src: "../subpage/pubg.html"
    },
    {
        id: 11,
        name: 'Warframe: Whispers in the Walls',
        image: '11.avif',
        price: "free",
        src: "../subpage/Warframewhispers.html"
    },
    {
        id: 12,
        name: 'Warframe: Initiate Power Pack',
        image: '12.avif',
        price: "₹3,310",
        src: "../subpage/Warframeinitiate.html"
    },
    {
        id: 13,
        name: 'Avatar: Frontiers of Pandora',
        image: '13.avif',
        price: "₹3,499",
        src: "../subpage/Warframeinitiate.html"
    },
    {
        id: 14,
        name: 'Alan Wake 2',
        image: '14.avif',
        price: "₹2,748",
        src: "../subpage/Warframeinitiate.html"
    },
    {
        id: 15,
        name: 'The Lord of The Rings Return to Moria',
        image: '15.avif',
        price: "₹1,429",
        src: "../subpage/Warframeinitiate.html"
    },
    {
        id: 16,
        name: 'Grand Theft Auto V',
        image: '16.avif',
        price: "₹2321.44",
        src: "../subpage/Warframeinitiate.html"
    },
    {
        id: 17,
        name: 'Warhammer 40,000: Rogue Trader',
        image: '17.avif',
        price: "₹2,000",
        src: "../subpage/Warframeinitiate.html"
    },
    {
        id: 18,
        name: 'Fortnite',
        image: '18.avif',
        price: "free",
        src: "../subpage/Warframeinitiate.html"
    },
    {
        id: 19,
        name: 'Rocket League®',
        image: '19.avif',
        price: "free",
        src: "../subpage/Warframeinitiate.html"
    },
    {
        id: 20,
        name: 'Grand Theft Auto V',
        image: '20.avif',
        price: "₹2321.44",
        src: "../subpage/Warframeinitiate.html"
    },
    {
        id: 21,
        name: 'Genshin Impact',
        image: '21.avif',
        price: "free",
        src: "../subpage/Warframeinitiate.html"
    },
    {
        id: 22,
        name: 'VALORANT',
        image: '22.avif',
        price: "free",
        src: "../subpage/Warframeinitiate.html"
    },
    {
        id: 23,
        name: 'Black Myth: Wukong',
        image: '23.avif',
        price: "_"
    },
    {
        id: 24,
        name: 'Homeworld 3',
        image: '24.avif',
        price: "₹3,499",
        src: "../subpage/Warframeinitiate.html"
    },
    {
        id: 25,
        name: 'Skull and Bones',
        image: '25.avif',
        price: "₹2,499",
        src: "../subpage/Warframeinitiate.html"
    },
    {
        id: 26,
        name: 'The Wolf Among Us 2',
        image: '26.avif',
        price: "_"
    },
    {
        id: 27,
        name: 'Frostpunk 2',
        image: '27.avif',
        price: "_"
    }
];
let listCards  = [];
function initApp(){
        
        let newDiv = document.createElement('div');
        newDiv.classList.add('btnn');
        newDiv.innerHTML = `
            
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
   
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('div');
            newDiv.classList.add('car');
            newDiv.innerHTML = `
                    <a style="text-decoration: none;" href="${value.src}">
                        <div class="imgg"><img src="../Image/${value.image}"/></div>
                    </a>
                    <div class="nam">
                    <a style="text-decoration: none;" href="${value.src}">
                        ${value.name}<br>
                    </a>
                        <div class="bas"> Base Game</div>
                        <div class="pr">${value.price}</div>
                    </div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6 6L18 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                
                `;
                listCard.appendChild(newDiv);
        }
    })
    // total.innerText = totalPrice.toLocaleString();
    // quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
