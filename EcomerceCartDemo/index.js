const hamburger = document.getElementById('hamburger');
const navlink = document.getElementById('navlink');

hamburger.addEventListener('click', () => {
    navlink.classList.toggle('show');
});
const products=[
    {id:1, title: "art1", price:49},
    {id:2, title: "art2", price:49},
    {id:3, title: "art3", price:49},
    {id:4, title: "art4", price:49},
    {id:5, title: "art5", price:49}
];

const cart=[];
function renderProducts(){
    const productlist = document.getElementById('product-list');
    products.forEach(product => {
        const div = document.createElement('div');
        div.className='products';
        div.innerHTML=`<h3>${product.item}</h3>
        <p>Price:$${product.price}</p>
        <button onclick='addToCart(${product.id})">Add to cart</button>'
        `;
});
}
function addToCart(productId){
    const product= products.find(p=> p.id === productId);
    const existing =cart.find(item=item.id===productId);
    if (existing){
        existing.qty +=1;

    }else{
        cart.push({...product, qty:1});

    }
    updateCartIcon();
    renderCart();
}
function updateCartIcon(){
    const count= cart.reduce((sum,item)=>sum +item.qty, 0);
    document.getElementById('cart-count').textContent=count;
}
function renderCart(){
    const cartDiv=document.getElementById('cart');
    const totalSpan=document.getElementById('total');
    cartDiv.innerHTML='';
    let total=0;
    cart.forEach(item=>{
        total+=item.price *item.qty;
        const div=document.getElementById('div');
        div.className='cart-item';
        div.innerHTML=`<h4>${item.title}</h4>
        <p>Price:$${item.price}*${item.qty}</p>`;
        cartDiv.appendChild(div);

    });
    totalSpan.textContent=total;
     function toggleCart() {
      const cartSection = document.getElementById('cart-section');
      cartSection.style.display = cartSection.style.display === 'none' || cartSection.style.display === '' ? 'block' : 'none';
    }

    renderProducts();
}
