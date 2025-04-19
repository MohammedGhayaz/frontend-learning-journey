function changeText() {
 const text = document.querySelector('#myText');
 if(text.innerHTML== 'Original Text')
 {
    text.innerHTML = 'Thank you for clicking the button!  Click again to change the text';
    document.createElement();
 }
 else{
    text.innerHTML = 'Great Job!';
 }
}