document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!
  const buttonList = document.querySelector("#moves-container")
  const moveBtn = document.querySelector("#move-button")
  const arr = []
  moveBtn.addEventListener("click", function(e){
    console.log(arr)
    arr.forEach(e => move(e))
  })


  document.addEventListener("keydown", function(event){
    //console.log(event.keyCode)
    
    const button = document.createElement('li')

    button.addEventListener("click", function(e){
      console.log(button)
      button.remove()
    })

    switch(event.keyCode){
      case 37:
        //do sthing left
        button.innerText = 'left'
        arr.push('left')
        buttonList.appendChild(button)
        break;
      case 38:
        //do sthing up
        button.innerText = 'up'
        arr.push('up')
        buttonList.appendChild(button)
        break;
      case 39:
        //do sthing right
        button.innerText = 'right'
        arr.push('right')
        buttonList.appendChild(button)
        break;
      case 40:
        //do sthing down
        button.innerText = 'down'
        arr.push('down')
        buttonList.appendChild(button)
        break;   
    }
  })



});
