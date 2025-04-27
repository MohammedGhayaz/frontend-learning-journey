const startButton = document.querySelector('.startButton');
const resetButton = document.querySelector('.resetButton');
let taskMessage = document.querySelector('.status');
const inputElement = document.querySelector('.inputElement');

let delay = 2000;


startButton.addEventListener('click',()=>{
    startButton.disabled = true;
    if(inputElement.value > 0){
        delay = inputElement.value;
        delay = delay * 1000;
        performTask();
    }
    else{
        performTask();
    }
});

function performTask(){
    // setTimeout(()=>{
    //     taskMessage.textContent = 'Data Fetched';
    //     setTimeout(()=>{
    //         taskMessage.textContent = 'Data Processed!';
    //         setTimeout(()=>{
    //             taskMessage.textContent = 'Completed';
    //             taskMessage.style.color = 'green';
    //             startButton.disabled = false;
    //         },delay)
    //     },1500)
    // },1000);
    runTask('Data Fetched',2000, ()=>{
        runTask('Data Processed',1500,()=>{
            runTask('Completed',delay,()=>{
                taskMessage.style.color = 'green';
                startButton.disabled = false;
            })
        })
    })
}

resetButton.addEventListener('click',()=>{
    inputElement.value = '';
    taskMessage.style.color = 'black';
    taskMessage.textContent = 'Waiting';
})

function runTask(message, delay, callback){
    setTimeout(()=>{
        taskMessage.textContent = message;
        callback();
    }, delay);
}

