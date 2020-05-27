
var taskArray = [
{
"rowId": "taskElement",
"buttonId": "markDone"
},
{
"rowId": "taskElement1",
"buttonId": "markDone1"
}


]


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
    var rowDelete = document.getElementById(row);

    console.log("ID IS: " + row);
    
    var jsonString = JSON.stringify(taskArray);
    console.log("JSON: " + jsonString);

    for(key in taskArray)
    {
        console.log("HEYO: " + taskArray[key].rowId);

        if (taskArray.hasOwnProperty(key) && taskArray[key].rowId == row) {
        console.log("I Think?");
        delete taskArray[key];
        var testor = JSON.stringify(taskArray);
        console.log("YEP: " + testor); 
        }
        // if (taskArray[key] === null || taskArray[key] === undefined) { 
        //     console.log("DID DELETE");

        //     delete taskArray[key]; 
        // } 
    }

    // Object.keys(taskArray).forEach((key) => (taskArray[key] == null) && delete taskArray[key]);

   //taskArray.filter(function(val) { return val !== null; }).join(", ")
    
    var jsonCheck = JSON.stringify(taskArray);
    console.log("FINAL: " + jsonCheck);

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
    '\')">X</button>' + '<span id=\'taskText' + idNumber + '\'>'+ title +'</span>' +
    '<button id=\'removeTask\' onclick="deleteTask(\'taskElement' + idNumber 
    + '\')">Remove</button>';


    rowing = "taskElement" + idNumber;
    buttoning = "markDone" + idNumber; 
    var jsonObj = taskArray;
    jsonObj.push({"rowId":rowing, "buttonId":buttoning})

    document.getElementById(inputText).innerHTML = "";
    idNumber = idNumber + 1;

}


function filter(filterType){
    
    
   
    var brug = JSON.stringify(taskArray);

    console.log("Array is like: " + brug);

    
  for(var i = 0; i < taskArray.length; i++)
  {
      if(taskArray[i] == null)
      {
          console.log("ERROR!");
      }
      else
      {
        console.log("ROWID IS: " + taskArray[i].rowId);
    rowName = taskArray[i].rowId;
    console.log("element is: " + taskArray[i].rowId);
      var id = document.getElementById(taskArray[i].buttonId).textContent;
    console.log("id is: " + id);

    
    if(filterType == "Completed")
    {
        if(id == "✓")
        {
          document.getElementById(rowName).style.visibility = "visible";      
        }
        if(id == "X")
        {                
            document.getElementById(rowName).style.visibility = "hidden";             
        }
            
    }

    else if(filterType == "Active")
    {
        if(id == "✓")
        {
          document.getElementById(rowName).style.visibility = "hidden";      
        }
        if(id == "X")
        {                
            document.getElementById(rowName).style.visibility = "visible";             
        }
            
    }

    else if(filterType == "All")
    {
        document.getElementById(rowName).style.visibility = "visible";             
    }
      }
      

    
  }
    
    
    

}

