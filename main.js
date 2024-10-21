document.addEventListener('DOMContentLoaded',()=>{
    const sizeSelector= document.getElementById('size-selector'); //dropdown for selecting size
    const productPrice= document.getElementById('product-price'); //displaying product price
    const purchaseButton= document.getElementById('purchase-button');//purchase button

    updatePrice();
    updateButtonState();
    
//Task 2: Add Event Listeners for Product Selection
 sizeSelector.addEventListener('change',()=>{ //when a user selects a size
        updatePrice();
        updateButtonState();// the price and state of the button are updated based on what was selected
});

function updatePrice(){
    const selectedOption = sizeSelector.options[sizeSelector.selectedIndex];//option that was just selected
    const price = selectedOption.dataset.price; //the price of it is obtained
    productPrice.textContent= `$${price}`; //this displays the price of the selected product
}

//Task 4: Create a Checkout Event 
function updateButtonState(){
    const stockStatus= sizeSelector.options[sizeSelector.selectedIndex].dataset.stock;//checks if the product of the size is in stock
    purchaseButton.disabled= (stockStatus=== 'out-of-stock');//the button to purchase is disabled if it is out of stock
}

//Task 3: Handle Stock Availability
purchaseButton.addEventListener('click',()=>{
    const selectedOption = sizeSelector.options[sizeSelector.selectedIndex];    
    const stockStatus = selectedOption.dataset.stock; //obtains the stock status
 
    if (purchaseButton.disabled){
        alert ('This size is currently out of stock and cannot be purchased'); //out of stock alert
    }else if (stockStatus=== 'in-stock') {
        alert('Thank you for your purchase.'); //purchase confirmation
    }else{
        alert ('Sorry, this size is currently out of stock.');
    }
    });
});



