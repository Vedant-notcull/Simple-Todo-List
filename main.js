let todoList = JSON.parse(localStorage.getItem('list')) ||
[ {name:'',
  duedate:''}
];
outputScreen();



function todo() {
  const inputButton = document.querySelector('.inputbar')
  let name = inputButton.value
  
  const dateInputButton = document.querySelector('.Dates')
  const duedate = dateInputButton.value
  
  todoList.push({name: name,
  duedate: duedate})
  
  localStorage.setItem('list', JSON.stringify(todoList))
  inputButton.value = '';
  
  console.log(todoList)
  outputScreen();
}


//this displays our code onto the screen
function outputScreen() {
  displaycode = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i]
    const name = todoObject.name;
    const duedate= todoObject.duedate
    
    if(name !== ''){
    const htmlcode =
`   <div class="box1" > ${name}</div> 
    <div class="box2" > ${duedate}</div> 
    <div class="box3"> <button
    class ="delete-button" 
    onclick=" todoList.splice(${i},1);
    outputScreen();
    localStorage.setItem('list', JSON.stringify(todoList))
    "
    >delete</button> </div>
 `
    
    displaycode += htmlcode}
  
    
  }document.querySelector('.screen').innerHTML = displaycode
    
}

function displayKey(event) {
  if (event.key === 'Enter') {
    todo();
    return;
  }}
