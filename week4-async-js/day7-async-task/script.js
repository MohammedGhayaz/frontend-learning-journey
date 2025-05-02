const placeOrder = () => {
    return new Promise((resolve, reject) => {
        const orderIdd = Math.round(Math.random() * 3000);
        setTimeout(()=>{
            console.log('Order Placed');
            resolve(orderIdd);
        },1000);
    })
}

const prepareOrder =(orderId) => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`Order prepared for ${orderId}`);
            resolve('Prepared');
        },2000)
    })
}

const deliverOrder = (status) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(status == 'Prepared'){
                resolve('Order Delivered');
            }
            else{
                reject('Order Failed');
            }
        },1500)
    })
}



// placeOrder().then((res)=>{
//     return prepareOrder(res);
// })
// .then((res)=>{
//     return deliverOrder(res);
// })
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

(async function (){
    try{
        const orderId = await placeOrder();
        const status = await prepareOrder(orderId);
        console.log(await deliverOrder(status));
    }
    catch(err){
        console.log(err);
    }
})();