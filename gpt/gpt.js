const hobbies = ['Leer', 'Escuchar música', 'Ver películas', 'Jugar videojuegos', 'Caminar'];

const select1 = document.getElementById('select1');
const select2 = document.getElementById('select2');
const btnRight = document.getElementById('right');
const btnRightAll = document.getElementById('rightAll');
const btnLeft = document.getElementById('left');
const btnLeftAll = document.getElementById('leftAll');

window.addEventListener('load', () => {
  hobbies.forEach(hobby => {
    const option = document.createElement('option');
    option.value = hobby;
    option.text = hobby;
    select1.appendChild(option);
  });
});

btnRight.addEventListener('click', () => {
  const selectedOptions = [...select1.options].filter(option => option.selected);
  if (selectedOptions.length === 0) {
    alert('No hay aficiones seleccionadas en el select de la izquierda');
    return;
  }
  selectedOptions.forEach(option => {
    select1.removeChild(option);
    select2.appendChild(option);
  });
});

btnRightAll.addEventListener('click', () => {
  const options = [...select1.options];
  options.forEach(option => {
    select1.removeChild(option);
    select2.appendChild(option);
  });
});

btnLeft.addEventListener('click', () => {
  const selectedOptions = [...select2.options].filter(option => option.selected);
  if (selectedOptions.length === 0) {
    alert('No hay aficiones seleccionadas en el select de la derecha');
    return;
  }
  selectedOptions.forEach(option => {
    select2.removeChild(option);
    select1.appendChild(option);
  });
});

btnLeftAll.addEventListener('click', () => {
  const options = [...select2.options];
  options.forEach(option => {
    select2.removeChild(option);
    select1.appendChild(option);
  });
});