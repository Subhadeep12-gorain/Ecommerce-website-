const cartValue = document.querySelector("#cartValue")

export const updateCartValue = (products) =>{
   return (cartValue.innerHTML=`<i class="fa-solid fa-cart-shopping"> ${products.length} </i>`)
}