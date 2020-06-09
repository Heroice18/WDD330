function getJSON(url) {
    return fetch(url)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
            // var jsonObj = response.json()
            // .then(populateTable(response))
            // console.log("CHECK: " + response.json());
            // populateTable(jsonObj);
            
          return response;
          
        }
      })
      .then(response => response.text())
        .then(text => populateTable(text))
      .catch(function(error) {
        console.log(error);
      });

  }

  var next;
  var previous;

  function populateTable(object){
    console.log("OBJ IS: " + object);
    
    var jsonList = JSON.parse(object);
    console.log(typeof(jsonList));
    console.log("STRING:" + jsonList );
    for(var key in jsonList)
    {
        if(jsonList.hasOwnProperty(key))
        {
            
            // console.log("KEY " + jsonList.length);
             console.log(key +  jsonList[key]);
            console.log("Data: " + jsonList[key]);

            if(jsonList["next"])
            {
                next = jsonList["next"];
                console.log("NEXT URL: " + next);
            }
            if(jsonList["previous"])
            {
                previous = jsonList["previous"];
            }
        }
        
    }
    var people = jsonList["results"];
    
    var adder = 1;
    var table = document.getElementById("infoTable");
                var row = table.insertRow(0);
                var cell1 = row.insertCell(0);
                cell1.innerHTML = "Name";
                var cell2 = row.insertCell(1);
                cell2.innerHTML = "Height";
                var cell3 = row.insertCell(2);
                cell3.innerHTML = "Mass";
                var cell4 = row.insertCell(3);
                cell4.innerHTML = "Hair Color";
                var cell5 = row.insertCell(4);
                cell5.innerHTML = "Skin Color";
                var cell6 = row.insertCell(5);
                cell6.innerHTML = "Eye Color";
                var cell7 = row.insertCell(6);
                cell7.innerHTML = "Birth Year";
                var cell8 = row.insertCell(7);
                cell8.innerHTML = "Gender";

    for(var key in people)
    {
        
            console.log("Value: " + people[key].name);
            if( people[key].name)
            {
                

                var table = document.getElementById("infoTable");
                var row = table.insertRow(adder);
                
                var cell1 = row.insertCell(0);
                cell1.innerHTML = people[key].name;
                if( people[key].height)
                {
                    var cell2 = row.insertCell(1);
                    cell2.innerHTML = people[key].height;
                    if( people[key].mass)
                    {
                        var cell3 = row.insertCell(2);
                        cell3.innerHTML = people[key].mass;
                        if( people[key].hair_color)
                        {
                            var cell4 = row.insertCell(3);
                            cell4.innerHTML = people[key].hair_color;
                                if( people[key].skin_color)
                                {
                                    var cell5 = row.insertCell(4);
                                    cell5.innerHTML = people[key].skin_color;
                                    if( people[key].eye_color)
                                    {
                                        var cell6 = row.insertCell(5);
                                        cell6.innerHTML = people[key].eye_color;
                                        if( people[key].birth_year)
                                        {
                                            var cell7 = row.insertCell(6);
                                            cell7.innerHTML = people[key].birth_year;
                                            if( people[key].gender)
                                            {
                                                var cell8 = row.insertCell(7);
                                                cell8.innerHTML = people[key].gender;
                                            }
                                        }
                                    }
                                }
                        }
                    }

                }
                

            }

        
    }

    // console.log("VALUE: " + value);

    // for(var i = 0; i < value.length; i++)
    // {
    //     console.log("to HTML: " + value.name);
    // }




  }


function nextData(){
//empty table
var table = document.getElementById("infoTable");
for (var i = 0, row; row = table.rows[i]; i++) {
    //iterate through rows
    //rows would be accessed using the "row" variable assigned in the for loop
    for (var j = 0, col; col = row.cells[j]; j++) {
      //iterate through columns
      //columns would be accessed using the "col" variable assigned in the for loop
      
    }  
    document.getElementById("infoTable").deleteRow(i);
 }
 //console.log("next in here: " + next);
getJSON(next)
    
}

function prevData(){
    var table = document.getElementById("infoTable");
for (var i = 0, row; row = table.rows[i]; i++) {
    //iterate through rows
    //rows would be accessed using the "row" variable assigned in the for loop
    for (var j = 0, col; col = row.cells[j]; j++) {
      //iterate through columns
      //columns would be accessed using the "col" variable assigned in the for loop
      
    }  
    document.getElementById("infoTable").deleteRow(i);
 }
getJSON(previous)

}
