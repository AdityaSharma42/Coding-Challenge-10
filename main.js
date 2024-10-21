document.addEventListener('DOMContentLoaded',()=>{
    const sizeSelector= document.getElementById('size-selector');
    const productPrice= document.getElementById('product-price');
    const purchaseButton= document.getElementById('purchase-button');

    updatePrice();
    updateButtonState();
    
//task 2
 sizeSelector.addEventListener('change',()=>{
        updatePrice();
        updateButtonState();
});

function updatePrice(){
    const selectedOption = sizeSelector.options[sizeSelector.selectedIndex];
    const price = selectedOption.dataset.price;
    productPrice.textContent= `$${price}`;
}


//task 3
purchaseButton.addEventListener('click',()=>{
    const selectedOption = sizeSelector.options[sizeSelector.selectedIndex];    
    const stockStatus = selectedOption.dataset.stock;
 
    if (purchaseButton.disabled){
        alert ('This size is currently out of stock and cannot be purchased');
    }else if (stockStatus=== 'in-stock') {
        alert('Thank you for your purchase.');
    }else{
        alert ('Sorry, this size is currently out of stock.');
    }
    });
});



