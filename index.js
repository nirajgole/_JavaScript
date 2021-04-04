const container = document.querySelector('.container');
const inputValue = document.querySelector('.input');
const add = document.querySelector('.add');
const search = document.querySelector('.search');
const timeDisplay = document.querySelector('.time');
const taskCount = document.querySelector('.task-no');

if (window.localStorage.getItem('toDos') === null) {
  const toDos = [];
  window.localStorage.setItem('toDos', JSON.stringify(toDos));
}

const toDosEX = window.localStorage.getItem('toDos');
const toDos = JSON.parse(toDosEX);

const countTasks = () => {
  taskCount.innerHTML = String(toDos.length);
};

const updateTime = () => {
  const formatDate = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };

  timeDisplay.innerHTML = new Date().toLocaleString('en-In', formatDate);
};

const createItem = name => {
  const itemBox = document.createElement('div');
  itemBox.classList.add('item');

  const input = document.createElement('input');
  input.type = 'text';
  input.disabled = true;

  input.value = name;
  input.classList.add('item_input');

  const editButton = document.createElement('button');
  editButton.classList.add('edit');
  editButton.setAttribute('title', 'edit list');
  editButton.innerHTML = `<i class='fas fa-edit'></i>`;
  editButton.addEventListener('click', () => edit(itemBox, input, name));

  const removeButton = document.createElement('button');
  removeButton.classList.add('remove');
  removeButton.setAttribute('title', 'remove item');
  removeButton.innerHTML = `<i class="far fa-window-close"></i>`;
  removeButton.addEventListener('click', () => remove(itemBox, name));

  const doneButton = document.createElement('button');
  doneButton.classList.add('done');
  doneButton.setAttribute('title', 'Mark as completed');
  doneButton.innerHTML = `<i class="fas fa-check"></i>`;
  doneButton.addEventListener('click', () => markAsDone(itemBox, input, name));

  container.appendChild(itemBox);

  itemBox.appendChild(input);
  itemBox.appendChild(editButton);
  itemBox.appendChild(removeButton);
  itemBox.appendChild(doneButton);
  updateTime();
  countTasks();
};

const edit = (itemBox, input, name) => {
  itemBox.children[1].children[0].classList.toggle('fa-pen');
  if (input.disabled === true) {
    input.disabled = !input.disabled;
  } else {
    input.disabled = !input.disabled;
    const indexOf = toDos.indexOf(name);
    toDos[indexOf] = input.value;
    window.localStorage.setItem('toDos', JSON.stringify(toDos));
    updateTime();
  }
};

const remove = (itemBox, name) => {
  itemBox.parentNode.removeChild(itemBox);
  const index = toDos.indexOf(name);
  toDos.splice(index, 1);
  window.localStorage.setItem('toDos', JSON.stringify(toDos));
  updateTime();
  countTasks();
};

const markAsDone = (itemBox, input, name) => {
  itemBox.children[3].children[0].classList.toggle('fa-check-double');
  const indexOf = toDos.indexOf(name);
  toDos[indexOf] = input.classList.toggle('completed');
  toDos[indexOf] = input.value;
  updateTime();
};

const check = () => {
  if (inputValue.value !== '') {
    createItem(inputValue.value);
    toDos.push(inputValue.value);
    window.localStorage.setItem('toDos', JSON.stringify(toDos));
    inputValue.value = '';
  }
};

add.addEventListener('click', check);

window.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    check();
  }
});

const searchItem = () => {
  container.innerHTML = '';
  const keyWord = inputValue.value;
  const regex = new RegExp(keyWord, 'gi');
  const arr = toDos.filter(item => String(item).match(regex));
  for (const toDo of arr) {
    createItem(toDo);
  }
};

search.addEventListener('click', searchItem);

const displayList = () => {
  if (toDos === null) {
    createItem('Buy Milk');
  }
  for (const toDo of toDos) {
    createItem(toDo);
  }
};
displayList();
