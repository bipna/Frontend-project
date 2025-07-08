const hamburger = document.getElementById('hamburger');
const navlink = document.getElementById('navlink');

hamburger.addEventListener('click', () => {
    navlink.classList.toggle('show');
});
let cart=[];
 window.onload = () => {
      const stored = localStorage.getItem('cart');
      if (stored) {
        cart = JSON.parse(stored);
      }
      updateCartIcon();
    };
function addToCart(title, price, image){
 const existing =cart.find(item=>item.title===title);
    if (existing){
        existing.qty +=1;

    }else{
        cart.push({title, price,image, qty:1});

    }
    localStorage.setItem('cart', JSON.stringify(cart));

    updateCartIcon();
    renderCart();   
}
function updateCartIcon(){
    const count= cart.reduce((sum,item)=>sum +item.qty, 0);
    document.getElementById('cart-count').textContent=count;
}
