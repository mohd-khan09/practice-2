const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("nxt-btn")

let currentcard_index = 0;
let card_data = [];

const fetchData =async () => {
   try {
       const res = await axios.get('https://dummyjson.com/products')
       card_data = res.data.products
       console.log(card_data)
       updateCard(currentcard_index)
       
   } catch (error) {
    console.log("error fetching details from api :"+ error)
   }
}
fetchData()

const updateCard = (index) => {
    const card = document.querySelector('.card')
    const cardImg = card.querySelector('.card-img')
    const cardTitle = card.querySelector('.card-title')
    const cardBrand = card.querySelector('.card-brand')
    const cardPrice = card.querySelector('.card-price')
    const cardDesc = card.querySelector('.card-desc')
   

    const current_card = card_data[index]

    if (current_card) {
        cardImg.src = current_card.thumbnail
        cardTitle.textContent = current_card.title
        cardBrand.textContent = current_card.brand
        cardPrice.textContent = `price : $ ${current_card.price}`
        cardDesc.textContent = current_card.description
        cardDesc.textContent = `discount percentage ${current_card.discountPercentage}`
    }
    prevBtn.disabled = index === 0
    nextBtn.disabled = index === card_data.length - 1
}
prevBtn.addEventListener('click', () => {
    if (currentcard_index > 0) {
        currentcard_index--;
        updateCard(currentcard_index);
    }

})

nextBtn.addEventListener('click', () => {
    if (currentcard_index < card_data.length - 1) {
        currentcard_index++;
        updateCard(currentcard_index);
    }
})