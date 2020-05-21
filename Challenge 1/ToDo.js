

function lineThrough(name, text) {
    var checking = document.getElementById(name).innerHTML;
    if(checking == "X")
        {
            document.getElementById(name).innerHTML = "✓";
            document.getElementById(text).style.textDecoration = "line-through";
        }
    if(checking == "✓")
        {
            document.getElementById(name).innerHTML = "X";
            document.getElementById(text).style.textDecoration = "none";
        }

    
}


function deleteTask(row){

    document.getElementById(row).remove();

}

var idNumber = 2;

function addTask(inputText, tablename){
    var table = document.getElementById(tablename);
    var title = document.getElementById(inputText).value;

    var row = table.insertRow();
    //row.id = "taskElement" + idNumber.toString();
    
    var cell1 = row.insertCell(0);
    cell1.id = "taskElement" + idNumber.toString();


// Add some text to the new cells:
cell1.innerHTML = '<button id= "markDone' + idNumber +'" onclick="lineThrough(\'markDone' 
+ idNumber + '\', \'taskText' + idNumber + 
'\')">X</button>' + '<span id=\'taskText' + idNumber + '\'>Task</span>' +
'<button id=\'removeTask\' onclick="deleteTask(\'taskElement' + idNumber 
+ '\')">Remove</button>';


document.getElementById(inputText).innerHTML = "";
idNumber = idNumber + 1;

}


function showActive(loopName){
    var tableloop = document.getElementById(loopName);
    for (var i = 0, cell; cell = tableloop.cells[i]; i++) {
        console.log(cell);
        //cells would be accessed using the "cell" variable assigned in the for loop
   }
}

