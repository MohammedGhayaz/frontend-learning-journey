const inputElement = document.querySelector('input');
const addButtonElement  =   document.querySelector('.add-button');
const deleteButtonElement = document.querySelector('.delete-button');
const todoList = document.querySelector('.task-container');
let taskList = [];

addButtonElement.addEventListener('click',()=>{
    if(!inputElement.value){
        alert("Enter a new task to add it to your list");
    }
    else{
        taskList.push(inputElement.value);
        displayTodoList();
    }
});

function displayTodoList(){
    let html =` <div>Sl No</div>
    <div>Name of the Task</div>
    <div>Action</div>`;
    for(let i=0; i<taskList.length; i++){
        html += `<div>${i+1}</div>
        <div>${taskList[i]}</div>
        <div><button class="delete-button data-index=${i}">Delete</button></div>
        `;
    }
    todoList.innerHTML = html;
    todoList.style.display = 'grid';
}

   todoList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-button')) {
            const index = event.target.getAttribute('data-index');
            taskList.splice(index, 1);
            displayTodoList();
        }
    });
