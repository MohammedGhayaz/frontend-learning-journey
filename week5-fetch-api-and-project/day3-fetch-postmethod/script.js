// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     title: 'My New Post',
//     body: 'This is the content of the post',
//     userId: 1
//   })


const form = document.querySelector('form');
const titleInput = document.querySelector('.post-title-input');
const bodyInput = document.querySelector('.post-body-input');
const responsePara = document.querySelector('.response');

form.addEventListener('submit', async (e)=> {
    e.preventDefault();
    let response = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
                title: titleInput.value || 'my new title',
                body: bodyInput.value || 'my new post',
                userId : 1
            })
    });
    response = await response.json();
    responsePara.innerText = `${response.title}
     ${response.body}`;
})