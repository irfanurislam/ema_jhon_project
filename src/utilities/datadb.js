const addingDb = (id) =>{
    let shoopingcart = getShoppingCart();
    const quantity = shoopingcart[id];
    console.log(quantity);
    if(!quantity){
        shoopingcart[id] = 1

    } 
    else{
        const newquantity = quantity + 1;
        shoopingcart[id] = newquantity
    }
    localStorage.setItem('shooping-cart',JSON.stringify(shoopingcart))
}

const getShoppingCart = () =>{
    let shoopingcart = {};
    const storedcart = localStorage.getItem('shooping-cart');
    if(storedcart){
        shoopingcart = JSON.parse(storedcart)
    }
    
     return shoopingcart
}









export {addingDb,getShoppingCart}