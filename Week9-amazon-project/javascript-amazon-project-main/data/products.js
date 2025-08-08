import { formatCurrency } from "../scripts/utils/money.js";

export function getProducts(productId){
let matchingProduct;

products.forEach((product) => {
  if(productId === product.id){
    matchingProduct = product;
  }
})
return matchingProduct;
}

export class Product{
  id;
  image;
  name;
  rating;
  priceCents;

  constructor(productDetails){
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating  = productDetails.rating;
    this.priceCents = productDetails.priceCents;
  }

  getStars(){
   return `images/ratings/rating-${this.rating.stars * 10}.png`;
  }

  getPrice(){
    return  `$${formatCurrency(this.priceCents)}`;
  }

  extraInfoHTML(){
    return '';
  }
}


export class Clothing extends Product{
  sizeChartLink;

  constructor(productDetails){
    super(productDetails);
    this.sizeChartLink = productDetails.sizeChartLink;
  }
  
  extraInfoHTML(){
    return `<a
    href="${this.sizeChartLink}" target="_blank"> Size Chart
    </a>`;
  }
} 

export class Appliance extends Product{ 
  instructionsLink;
  warrantyLink;
  constructor(productDetails){
    super(productDetails);
    this.instructionsLink = productDetails.instructionsLink;
    this.warrantyLink = productDetails.warrantyLink;
  }
  
  extraInfoHTML(){
    return `<div><a
    href="${this.instructionsLink}" target="_blank"> Instructions
    </a></div>
    <div><a
    href="${this.warrantyLink}" target="_blank"> Warranty
    </a></div>`
    ;
  }
}

export let products = [];

export async function loadProductsFetch(){

  try{

    const response = await fetch('https://supersimplebackend.dev/products');
    const productsData = await response.json();
      
  products = productsData.map((productDetails)=>{
    if(productDetails.sizeChartLink){
      return new Clothing(productDetails);
    }
    else if(productDetails.instructionsLink && productDetails.warrantyLink){
      return new Appliance(productDetails);
    }
    else{
      return new Product(productDetails)
    }
  })
}catch(error){
  console.log('An unexpexted error occured. Please try again later');
}
}


// export function loadProducts(fun){

//   const xhr = new XMLHttpRequest();

//   xhr.addEventListener('load',()=>{
//     products = JSON.parse(xhr.response).map((productDetails)=>{
//       if(productDetails.sizeChartLink){
//         return new Clothing(productDetails);
//       }
//       else if(productDetails.instructionsLink && productDetails.warrantyLink){
//         return new Appliance(productDetails);
//       }
//       else{
//         return new Product(productDetails)
//       }
//     })

//     fun();
//   })

//   xhr.open('GET', 'https://supersimplebackend.dev/products');
//   xhr.send();
// }
