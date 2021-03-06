// 1. html 생성
// 아래 배열을 사용하여 html을 생성하는 함수를 작성하라.

const todos = [{
    id: 3,
    content: 'HTML',
    completed: false
  },
  {
    id: 2,
    content: 'CSS',
    completed: true
  },
  {
    id: 1,
    content: 'Javascript',
    completed: false
  }
];

function render() {
  let html = '';

  todos.forEach(todo => html +=
    `<li id="${todo.id}">
      <label><input type="checkbox" ${todo.completed ? 'checked' : ''}>${todo.content}</label> 
    </li>
    `);

  return html;
}

console.log(render());
/*
<li id="3">
  <label><input type="checkbox">HTML</label>
</li>
<li id="2">
  <label><input type="checkbox" checked>CSS</label>
</li>
<li id="1">
  <label><input type="checkbox">Javascript</label>
</li>
*/

// #2. 특정 프로퍼티 값 추출

// 요소의 프로퍼티(id, content, completed)를 문자열 인수로 전달하면 todos의 각 요소 중, 해당 프로퍼티의 값만을 추출한 배열을 반환하는 함수를 작성하라.



// 단, for 문이나 Array# forEach는 사용하지 않도록 하자.
// map?
const todos = [{
    id: 3,
    content: 'HTML',
    completed: false
  },
  {
    id: 2,
    content: 'CSS',
    completed: true
  },
  {
    id: 1,
    content: 'Javascript',
    completed: false
  }
];

function getValues(key) {
  return todos.map(todos => todos[key]);
}

console.log(getValues('id')); // [3, 2, 1]
console.log(getValues('content')); // [ 'HTML', 'CSS', 'Javascript' ]
console.log(getValues('completed')); // [ false, true, false ]

// #3. 프로퍼티 정렬

// 요소의 프로퍼티(id, content, completed)를 문자열 인수로 전달하면 todos의 요소를 정렬하는 함수를 작성하라.

// 단, todos는 변경되지 않도록 하자.

// 참고: Array.prototype.sort

// slice, sort

const todos = [{
  id: 3,
  content: 'HTML',
  completed: false
}, {
  id: 2,
  content: 'CSS',
  completed: true
}, {
  id: 1,
  content: 'Javascript',
  completed: false
}];

function sortBy(key) {
  return todos.sort((a, b) => a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0));
}

console.log(sortBy('id'));
/*
[
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false }
]
*/
// console.log(sortBy('content'));
/*
[
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/
// console.log(sortBy('completed'));
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true }
]
*/


// #4. 새로운 요소 추가

// 새로운 요소(예를 들어 { id: 4, content: 'Test', completed: false })를 인수로 전달하면 todos의 선두에 새로운 요소를 추가하는 함수를 작성하라. 단, Array# push는 사용하지 않도록 하자.

// concat


let todos = [{
    id: 3,
    content: 'HTML',
    completed: false
  },
  {
    id: 2,
    content: 'CSS',
    completed: true
  },
  {
    id: 1,
    content: 'Javascript',
    completed: false
  }
];

function addTodo(newTodo) {
  todos = Array.prototype.concat(newTodo, todos);
}

addTodo({
  id: 4,
  content: 'Test',
  completed: false
});

console.log(todos);
/*
[
  { id: 4, content: 'Test', completed: false },
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
]
*/
// #5. 특정 요소 삭제


// todos에서 삭제할 요소의 id를 인수로 전달하면 해당 요소를 삭제하는 함수를 작성하라.

// findIndex
// splice

// filter

let todos = [{
  id: 3,
  content: 'HTML',
  completed: false
}, {
  id: 2,
  content: 'CSS',
  completed: true
}, {
  id: 1,
  content: 'Javascript',
  completed: false
}];

function removeTodo(id) {
  todos = todos.filter(todos => todos.id !== id);
}


removeTodo(2);

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/
// #6. 특정 요소의 프로퍼티 값 반전


// todos에서 대상 요소의 id를 인수로 전달하면 해당 요소의 completed 프로퍼티 값을 반전하는 함수를 작성하라.


// 단, Object.assign를 사용하도록 한다.

// map
// 같은 값이 있으면 대체된다.
// 빈 객체가 없어도 되는가?

let todos = [{
  id: 3,
  content: 'HTML',
  completed: false
}, {
  id: 2,
  content: 'CSS',
  completed: true
}, {
  id: 1,
  content: 'Javascript',
  completed: false
}];

function toggleCompletedById(id) {
  todos = todos.map(item => item.id === id ? Object.assign({}, item, {
    completed: !item.completed
  }) : item);
}

toggleCompletedById(2);

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/
// #7. 모든 요소의 completed 프로퍼티 값을 true로 설정

// todos의 모든 요소의 completed 프로퍼티 값을 true로 설정하는 함수를 작성하라.

// 단, Object.assign를 사용하도록 한다.
// map


let todos = [{
  id: 3,
  content: 'HTML',
  completed: false
}, {
  id: 2,
  content: 'CSS',
  completed: true
}, {
  id: 1,
  content: 'Javascript',
  completed: false
}];

function toggleCompletedAll() {
  todos = todos.map(item => Object.assign({}, item, {
    completed: true
  }));
}

toggleCompletedAll();

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: true }
]
*/

// #8. completed 프로퍼티의 값이 true인 요소의 갯수 구하기

// todos에서 완료(completed: true)한 할일의 갯수를 구하는 함수를 작성하라.

// 단, for 문, Array# forEach는 사용하지 않도록 하자.

let todos = [{
    id: 3,
    content: 'HTML',
    completed: false
  },
  {
    id: 2,
    content: 'CSS',
    completed: true
  },
  {
    id: 1,
    content: 'Javascript',
    completed: false
  }
];

function countCompletedTodos() {
  return todos.filter(item => item.completed).length;

}

console.log(countCompletedTodos()); // 1
