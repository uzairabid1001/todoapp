var a = document.getElementById('inp')
var b = document.getElementById('creatUl')



function foo(){
    var inpValue = a.value;
    var creaText = document.createTextNode(inpValue)
    var todoLi = document.createElement('li')
    todoLi.setAttribute('class','lodo')
    todoLi.appendChild(creaText)
    b.appendChild(todoLi)
   


    // delet.setAttribute('class', 'btn')
    var delet = document.createElement('button')
    var dlTxt = document.createTextNode('Delete')
    delet.setAttribute('onclick', 'deleteTodo(this)')
    delet.setAttribute('class', 'del')
    delet.appendChild(dlTxt)
    todoLi.appendChild(delet)

    // delet.setAttribute('class', 'btn')
    var ed = document.createElement('button')
    var edTxt = document.createTextNode('EDIT')
    ed.setAttribute('onclick', 'editTodo(this)')
    ed.setAttribute('class', 'de')
    ed.appendChild(edTxt)
    todoLi.appendChild(ed)

    inp.value=''
} 

function deleteTodo(ele){
    ele.parentNode.remove()
}
function editTodo(edit){
   edit.parentNode.firstChild.nodeValue = prompt('user edit',edit.parentNode.firstChild.nodeValue)
}

function ddele(){
 b.innerHTML = " ";
}