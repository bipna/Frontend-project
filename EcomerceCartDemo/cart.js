let cart=[];
 window.onload = () => {
      const stored = localStorage.getItem('cart');
      if (stored) {
        cart = JSON.parse(stored);
      }
      renderCart();
    };

    function renderCart(){
    const cartDiv=document.getElementById('cart');
    const totalSpan=document.getElementById('total');
    cartDiv.innerHTML='';
    if(cart.length===0){
        cartDiv.innerHTML='<p>ypur cart is empty.</p>';
        totalSpan.textContent='0';
        return;
    }
    let total=0;
    cart.forEach(item=>{
        total+=item.price *item.qty;
        const div=document.createElement('div');
        div.className='cart-item';
        div.innerHTML=`
        <img src="${item.image}" alt="${item.title}">
        <div class="list">
        <h4>${item.title}</h4>
        <p>Price:$${item.price}*${item.qty}</p>
        </div>
        `;
        cartDiv.appendChild(div);

    });
    totalSpan.textContent=total;
    
    }
      function toggleCart() {
      const cartSection = document.getElementById('cart-section');
      cartSection.style.display = cartSection.style.display === 'none' || cartSection.style.display === '' ? 'block' : 'none';
    }
