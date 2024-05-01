document.addEventListener('DOMContentLoaded', () => {
  let userInput = 16;
  createGrid(userInput);
  
  const btn = document.querySelector('.js-create-grid');
  
  btn.addEventListener('click', ()=>{
    userInput = prompt('Enter the number of squares per side');
    if (userInput && userInput >= 1 && userInput <= 100){
      createGrid(userInput);
    }
  });

  function createGrid(size){
      const mainGrid = document.getElementById('mainGrid');
      mainGrid.innerHTML = '';
      mainGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
      for (let i = 0; i < size*size; i++){
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      mainGrid.appendChild(gridItem);
      gridItem.addEventListener('mouseover', ()=>{
        const randomRed = Math.floor(Math.random() * 256);
        const randomGreen = Math.floor(Math.random() * 256);
        const randomBlue = Math.floor(Math.random() * 256);
        gridItem.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
      });
      }
  }
  
});  



