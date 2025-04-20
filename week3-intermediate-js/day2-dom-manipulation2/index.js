const parentElement = document.querySelector('.parent')



function createChild(){
  const createdChild = document.createElement('div');
  createdChild.classList.add('dynamic-child');
  createdChild.innerHTML = `Dynamically created child <button onclick="removeeDynamicChild();"> Remove </button>`
  
  document.querySelector('.btn').insertAdjacentElement('beforebegin',createdChild);
}

function removeeChild(){
  const childElements = document.querySelectorAll('.child');
  const removingElement = childElements[0];
  removingElement.remove();
}

function removeeDynamicChild(){
  const dynamicChildElements =  document.querySelectorAll('.dynamic-child');
  const removingDynamicElement = dynamicChildElements[0];
  removingDynamicElement.remove();
}

