

const loginUser = () => {
    const username = 'admin';
    const password = 1234;
    return new Promise((resolve, reject)=>{
        if(username == 'admin' && password == 1234){
            resolve("Login Succesfull");
        }
        else{
            reject("Login Failed");
        }
    })
}

const fetchUserProfile = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const randomNumber = Math.round(Math.random() * 100);
            if (randomNumber >= 50){
                resolve('User Profile Fetched');
            }
            else{
                reject('Unable to fetch user');
            }
        },2000)
    })
}

const fetchUserPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const randomNumber = Math.round(Math.random() * 100);
            if (randomNumber >= 40){
                resolve('User Posts Fetched');
            }
            else{
                reject('Unable to fetch user posts');
            }
        },2000)
    })
};


loginUser().then((res) => {
    console.log(res);
    console.log('Fetching user profile..');
    return fetchUserProfile();
})
.then((res)=>{
    console.log(res);
    console.log('Fetching user posts...');
    return fetchUserPosts();
})
.then((res)=>{
    console.log(res);
})
.catch((err) => {
    console.log(err);
})