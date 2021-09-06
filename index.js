const displayProductFromLocalStorage=()=>{
    const cart =getcart();
    for(const name in cart)
    displayProduct(name);

}

// input and button 
const addItem=()=>{
    const nameFiled=document.getElementById('product-name');
    const name=nameFiled.value;
    if(!name){
        return;

    };
    
// display in ul function call here
displayProduct(name);


// add to localStorage function call here
addProductToCart(name);
    nameFiled.value='';
}
// display Product
const displayProduct=name=>{
    const ul=document.getElementById("product")
    const li =document.createElement('li')
    li.innerText=name;
    ul.appendChild(li);
};
// add to localStorage
const getcart= ()=>{
    const cart =localStorage.getItem('cart')
    let cartObject;
    if(cart){
        cartObject=JSON.parse(cart);
    }
    else{
        cartObject={};
    }
    return cartObject;

};
// add to localStorage 
const addProductToCart=name=>{
    const cart =getcart();
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    }
    else {
        cart[name] = 1;
    }
    
    const cartStrigfy=JSON.stringify(cart)
    localStorage.setItem('cart',cartStrigfy);

};

const placeOrder=()=>{
    document.getElementById('product').textContent='';
    localStorage.removeItem('cart')
};


displayProductFromLocalStorage();