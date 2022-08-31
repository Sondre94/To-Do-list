// delete list-item

document.querySelector('ul').addEventListener('click', (e) => {
    const deleteLi = e.target.nodeName === 'BUTTON';
    if (!deleteLi) {
      return;
    } 
    e.target.closest('li').remove()
  
  })
  
  // button to add a to-do
  
  document.querySelector('.btnAdd').addEventListener('click', function() {
          addNewListItem()
  })
  
  
  // Enter keypress to add a to-do
  
  document.querySelector('.inputField').addEventListener('keydown', function(e) {
      if (e.code === "Enter"){
          addNewListItem()
      }
          })
  
  // Delete All button
  
  document.querySelector('.btnDelete').addEventListener('click', function() {
      ul = document.querySelector('ul')
      
      while (ul.firstChild) {
          ul.removeChild(ul.firstChild)
      }
      document.querySelector('.inputField').value = ""
      document.querySelector('.inputField').focus()
  })
  
  // main function
  function addNewListItem() {
  
      // create Li
      newLi = document.createElement('li')
      inputField = document.querySelector('.inputField')
      newLi.appendChild(document.createTextNode((inputField).value))
      document.querySelector('ul').appendChild(newLi)
      newLi.classList.add('styling')

      // error on submitting empty inputfield

      if (inputField.value === "") {
        alert('write something!')
        return false
      }
  
      // create deleteBtn
      let deleteBtn = document.createElement('button')
      deleteBtn.appendChild(document.createTextNode('X'))
      newLi.appendChild(deleteBtn)
      deleteBtn.classList.add('deleteLi')
  

      inputField.value = ""
      document.querySelector('.inputField').focus()

      }
  
  