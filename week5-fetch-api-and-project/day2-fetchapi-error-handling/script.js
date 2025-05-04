const buttonElement = document.querySelector('button');

const fetchPosts = async () => {
  try{
    let unorderedList = '';
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const posts = await response.json();
    posts.forEach(element => {
      unorderedList += `<li class='list'>${element.id}: ${element.title} </li>`;  
    })
    document.querySelector('.posts-list').innerHTML = unorderedList;
  }
  catch(err){
    console.log(err);
  }
}

buttonElement.addEventListener('click', fetchPosts);