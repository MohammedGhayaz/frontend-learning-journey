// const myPromise = new Promise((resolve, reject)=>{
//     let username = 'admin';
//     let password = 1234;
//     if(username == 'admin' && password == 1234){
//         resolve('Login Succesfull');
//     }
//     else{
//         reject('Invalid Credentials');
//     }
// });

// setTimeout(()=>{
//     myPromise.then((message)=>{
//     console.log(message)}).catch((message)=>{
//      console.log(message);
//     })},5000);


// const myPromise = new Promise((resolve,reject)=>{
//     resolve('User Data Fetched');
// })
// myPromise.then((message)=>{
//     console.log(message);
// }).then((message)=>{
//     console.log('User posts')
// }).then((message)=>{
//     console.log('Success');
// })

const username = 'admin';
const password = 1234;

const loginUser = () => {
return new Promise((resolve,reject)=>{
    console.log('Logging in');
    if(username == 'admin' && password == 1234){
        resolve('Login Successful');
    }
    else{
        reject('Login Failed');
    }
})};

const userProfile = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let success = Math.round(Math.random() * 100);
            if(success>=50){
                resolve('User Profile Fetched');
            }
            else{
                reject('Unable to fetch User');
            }
        },2000)
    })
}


loginUser().then((res)=>{
    console.log(res);
    console.log('Fetching Profile');
    return userProfile(); 
    })
    .then((res)=>{
    console.log(res);
    console.log('Welcome, Admin');
})
.catch((err)=>{
    console.log(err);
})