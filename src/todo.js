import { createStore } from "redux";

const input = document.querySelector("input");
const form = document.querySelector("form");
const ul = document.querySelector("ul");

// 1. createStore
// 2. reducer
// 3. dispatch
// 4. subscribe
const ADD = "ADD";
const DELETE = "DELETE";
const addToDo = text => {
  return {
    type: ADD,
    text
  };
};
const deleteToDo = id => {
  return {
    type: DELETE,
    id
  };
};
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return [...state.filter(data => data.id !== action.id)];
    default:
      return state;
  }
};

const store = createStore(reducer);

const dispatchAddTodo = text => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteTodo = e => {
  const id = parseInt(e.currentTarget.parentElement.id, 10);
  store.dispatch(deleteToDo(id));
};

const onChange = () => {
  ul.innerHTML = "";
  const toDos = store.getState();
  toDos.forEach(data => {
    const li = document.createElement("li");
    const del = document.createElement("button");
    li.innerText = data.text;
    li.id = data.id;
    del.innerText = "DEL";
    del.addEventListener("click", dispatchDeleteTodo);
    li.appendChild(del);
    ul.appendChild(li);
  });
};

store.subscribe(onChange);

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddTodo(toDo);
};

form.addEventListener("submit", onSubmit);
