async function fetchData(){
 const response = await fetch('https://supersimplebackend.dev/greeting', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      },
    body:JSON.stringify({
      'name': 'Ghayaz',
    })
 })

 const greetResponse = await response.text();
 console.log(greetResponse);
}
fetchData();



