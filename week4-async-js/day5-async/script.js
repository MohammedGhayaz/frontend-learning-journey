const loginUser = () => {
    return new Promise((resolve, reject) => {
        const username = 'admin';
        const password = 1234;

        if(username == 'admin' && password == 1234){
            console.log('User Logged in');
            resolve('Success');
        }
        else{
            console.log('Invalid Credentials');
            reject('Failed');
        }
    })
};

const fethUserProfile = () => {
    return new Promise((resolve, reject)=>{
        
        const randomNumber = Math.round( Math.random() * 100 );
        setTimeout(()=>{
            if(randomNumber => 40){
                console.log('User profile fetched');
                resolve('Success');
            }
            else{
                console.log('Unable to fetch user profile');
                reject('Failed');
            }
        },2000);

    })
}

async function loginProcess(){
    await loginUser();
    console.log('Fetching User Profile');
    await fethUserProfile();
}