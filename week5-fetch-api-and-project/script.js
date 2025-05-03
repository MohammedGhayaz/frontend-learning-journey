fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(response => {
      console.log(`Post ${response.id}: ${response.title}`);
  })
  .catch(error => console.log('Error:', error));
