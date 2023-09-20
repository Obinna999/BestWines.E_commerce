// My database
const product = [
    {
        id: 0,
        image: 'images/duminda-perera-KKv5cgmhyRg-unsplash.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 1,
        image: 'images/gabriele-garanzelli-yqAk8NyqN3Y-unsplash.jpg',
        title: 'Air Pods Pro',
        price: 60,
    },
    {
        id: 2,
        image: 'images/jocelyn-morales-pXyNqLpNqAU-unsplash.jpg',
        title: '250D DSLR Camera',
        price: 230,
    },
    {
        id: 3,
        image: 'images/tony-flood-Ifm8MA4_4sw-unsplash.jpg',
        title: 'Head Phones',
        price: 100,
    }
];
// create an array called categories containing  items uses the Set object to automatically filter out duplicates
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('main').innerHTML = categories.map((item)=>
{
    let {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')
//initializes an empty array to store items that a user adds to their shopping cart as they click the "Add to cart" button for different products
let cart =[];
// funtion to add items to the cart
function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
//function to delete items from the cart
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}
//function to display items in the cart in a side tab + style
function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            let {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}