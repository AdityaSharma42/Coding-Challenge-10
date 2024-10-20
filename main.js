document.addEventListener('DOMContentLoaded',()=>{
    const sizeSelector= document.getElementById('size-selector');
    const productPrice= document.getElementById('product-price');
   
sizeSelector.addEventListener('change',()=>{
    const selectedOption= sizeSelector.options[sizeSelector.selectedIndex];
    const price= selectedOption.getAttribute('data-price');
    
    productPrice.textContent= `$${price}`;
});
});
