window.addEventListener('DOMContentLoaded', (event) => {
    outputTodo();
});

var task = {
    name: "Halas task",
    done: false
};
var taskList = [];
taskList.push(task);

function tasks(){
    return taskList;
}
 
function submit(){
    var inputRef = document.getElementById("nameId");
    
   createTask(inputRef.value,false);
   outputTodo();

}

function createTask(name,done){
    let task = {name,done};
    taskList.push(task);

}

function outputTodo(){
    document.body.style.marginLeft = 20;
     showOutput = "";
    for(let i=0; i< taskList.length; i++){
        showOutput += (i+1) + " Name: "+ taskList[i].name + " Done:"+ taskList[i].done + " <br>";

    }
    document.getElementById('todoOutput').innerHTML = showOutput;
}

function deleteTodo(){
    let deleteId = document.getElementById('delete');
    taskList.splice((deleteId.nodeValue-1), 1);
    outputTodo();
}