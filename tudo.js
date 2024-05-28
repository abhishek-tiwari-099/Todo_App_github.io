let todoList=[
    {
    item:'Bye Milk',
    dueDate:'24/02/2024'
    },
    
    {
    item:'Go to College',
    dueDate:'24/02/2024'
    }
    ];
displayItems();
function getAdd(){
   let inputElement=document.getElementById("tudo-input");
   let todoDateItem=document.querySelector('#todo-date');
  let todoDate= todoDateItem.value;
  let todoItems= inputElement.value;
  todoList.push({item:todoItems,dueDate:todoDate});
  inputElement.value='';
  todoDate.value='';
  displayItems();
 
 
 
}
function displayItems(){

    let conatainerElelmet=document.querySelector(".todo-container");

    let newHtml='';

    for(let i=0;i<todoList.length;i++){
        let items=todoList[i].item;
        let dueDate=todoList[i].dueDate;
        newHtml=newHtml+`
        
        <span>${items}</span>
        <span>${dueDate}</span>
        <button onClick="todoList.splice(${i},1);displayItems();
        " class="todo-delete">Delete</button>
       
        `;
    }
    conatainerElelmet.innerHTML=newHtml;
    
}





