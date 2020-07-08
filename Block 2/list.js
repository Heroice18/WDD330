var pokemonList = [
    {
    "pokemonName": "",
    "pokemonDex": "",
    "pokemonSprite": "",
    "pokemonType": "",
    "pokemonAbility": "",
    "pokemonStat": ""
    }

]

var originalTablePokemon = document.getElementById("typePokemonTable").innerHTML;
var originalTableTypes = document.getElementById("typeListTable").innerHTML;
var originalTableMoves = document.getElementById("movePokemonTable").innerHTML;




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


  function getJSONMoves(url) {
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
        .then(text => populateMoveTable(text))
      .catch(function(error) {
        console.log(error);
      });

  }

  function getJSONPokemon(url) {
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
        .then(text => populatePokemonTable(text))
      .catch(function(error) {
        console.log(error);
      });

  }


 var base = "https://pokeapi.co/api/v2/type";
 

  function runTable(){
      console.log("UP AND RUNNING");
      var addon = document.getElementById("typeWheel");
      var pokeTypeNum = addon.selectedIndex;
      if(pokeTypeNum == 0)
      {
          return;
      }
      var text = addon.options[addon.selectedIndex].text;
      var typeNum = ""
      console.log("TEXT " + text);
      if(text == "Normal"){typeNum = "1";}
      else if(text == "Fighting"){typeNum = "2";}
      else if(text == "Flying"){typeNum = "3";}
      else if(text == "Poison"){typeNum = "4";}
      else if(text == "Ground"){typeNum = "5";}
      else if(text == "Rock"){typeNum = "6";}
      else if(text == "Bug"){typeNum = "7";}
      else if(text == "Ghost"){typeNum = "8";}
      else if(text == "Steel"){typeNum = "9";}
      else if(text == "Fire"){typeNum = "10";}
      else if(text == "Water"){typeNum = "11";}
      else if(text == "Grass"){typeNum = "12";}
      else if(text == "Electric"){typeNum = "13";}
      else if(text == "Psychic"){typeNum = "14";}
      else if(text == "Ice"){typeNum = "15";}
      else if(text == "Dragon"){typeNum = "16";}
      else if(text == "Dark"){typeNum = "17";}
      else if(text == "Fairy"){typeNum = "18";}
      console.log("CHECK " + typeNum);
      var newURL = base + "/" + typeNum;
      

      getJSON(newURL);
  }

  var rowIdIdent = 0;

  function populateTable(object){
    console.log("OBJ IS: " + object);
    
    var jsonList = JSON.parse(object);
    console.log(typeof(jsonList));
    console.log("STRING:" + jsonList );
    rowIdIdent = 0;
    var retroTablePokemon = document.getElementById("typePokemonTable");
    retroTablePokemon.innerHTML= originalTablePokemon;

    var retroTableType = document.getElementById("typeListTable");
    retroTableType.innerHTML= originalTableTypes;

    var retroTableMove = document.getElementById("movePokemonTable");
    retroTableMove.innerHTML= originalTableMoves;



    var weakTypes = "";
    var superEff = "";
    var resistTypes = "";
    var noEffect = "";

    for(var key in jsonList)
    {
        if(jsonList.hasOwnProperty(key))
        {
            
            // console.log("KEY " + jsonList.length);
             console.log(key +  jsonList[key]);
            //console.log("Data: " + jsonList[key]);

            if(jsonList["moves"])
            {
                //next = jsonList["next"];
                console.log("NEXT URL: ");
            }
            if(jsonList["previous"])
            {
                previous = jsonList["previous"];
            }
        }
        
    }

    var typeEff = jsonList["damage_relations"];
    
    for(var key in typeEff)
    {
        console.log("EACH KEY: " + key);
        var newT = typeEff[key];
        if(key == "double_damage_from")
        {
            for(var hey in newT)
            {
                
                    console.log("Weak to: " + newT[hey].name);  
                    if(weakTypes != "")
                    {
                        weakTypes = weakTypes + ", " + newT[hey].name;
                        console.log("WEAK CHECK: " + weakTypes);
                    }
                    else
                    {
                        weakTypes = newT[hey].name;
                        console.log("WEAK CHECK 2: " + weakTypes);
                    }
            }
        }
        if(key == "double_damage_to")
        {
            for(var hey in newT)
            {
                
                    console.log("Strong to: " + newT[hey].name);  
                    if(superEff != "")
                    {
                        superEff = superEff + ", " + newT[hey].name;
                        console.log("WEAK CHECK S: " + superEff);
                    }
                    else
                    {
                        superEff = newT[hey].name;
                        console.log("WEAK CHECK S2: " + superEff);
                    }
            }
        }
        if(key == "half_damage_from")
        {
            for(var hey in newT)
            {
                
                    console.log("Strong against these types: " + newT[hey].name);  
                    
            }
        }
        if(key == "half_damage_to")
        {
            for(var hey in newT)
            {
                
                    console.log("Weak against: " + newT[hey].name);  
                    if(resistTypes != "")
                    {
                        resistTypes = resistTypes + ", " + newT[hey].name;
                        console.log("WEAK CHECK R: " + resistTypes);
                    }
                    else
                    {
                        resistTypes = newT[hey].name;
                        console.log("WEAK CHECK R2: " + resistTypes);
                    }
            }
        }
        if(key == "no_damage_from")
        {
            for(var hey in newT)
            {
                
                    console.log("No Damage Against: " + newT[hey].name);  
            }
        }
        if(key == "no_damage_to")
        {
            for(var hey in newT)
            {
                
                    console.log("No Damage To: " + newT[hey].name);  
                    if(noEffect != "")
                    {
                        noEffect = noEffect + ", " + newT[hey].name;
                        console.log("WEAK CHECK N: " + noEffect);
                    }
                    else
                    {
                        noEffect = newT[hey].name;
                        console.log("WEAK CHECK N2: " + noEffect);
                    }
            }
        }
        
    }

   
    addRowType(weakTypes, superEff, resistTypes, noEffect);


    var moveInfo = jsonList["moves"];
    
    for(var key in moveInfo)
    {
        //console.log("EACH KEY in Moves: " + moveInfo[key]);
        var newM = moveInfo[key];
        
           // console.log("Weak to: " + newM[0]); 


        for(var hey in newM)
        {
                
                console.log("Weak to Moves: " + newM[hey]);
                if(newM[hey].includes("https"))
                {
                    var urlMove = newM[hey];
                    console.log("DODO " + urlMove);
                    getJSONMoves(urlMove);
                }  
        }
     
    }


    var pokemonInfo = jsonList["pokemon"];

        for(var key in pokemonInfo)
        {
            console.log("EACH KEY in Pokemon: " + pokemonInfo[key]);
            var newP = pokemonInfo[key];
            
             console.log("Single KEY to: " + key); 


            for(var hey in newP)
            {
                    var deepP = newP[hey];
                    for(var chop in deepP)
                    {
                        console.log("CHOP to Pokemon: " + deepP[chop]);
                        if(deepP[chop].includes("https"))
                            {
                                var urlMove = deepP[chop];
                                console.log("Pokemon DODO " + urlMove);
                                getJSONPokemon(urlMove);
                            }  
                   
                    }
                    console.log("Weak to Pokemon: " + newP[hey]);
                    
            }
        
        }
    
  }


function movesTable(moveURL)
{
    getJSONMoves(moveURL);

}

function pokemonTable(moveURLP)
{
    getJSONPokemon(moveURLP)
}

function populateMoveTable(mObject)
{
    console.log("Move Table IS: " + mObject + "/n");
    
    var jsonList = JSON.parse(mObject);
    console.log(typeof(jsonList));
    console.log("MOVE STRING:" + jsonList );


    var nameMove = "";
    var categoryMove = "";
    var powerMove = "";
    var accuracyMove = "";
    var ppMove = "";
    var effectMove = "";

    for(var key in jsonList)
    {
        if(jsonList.hasOwnProperty(key))
        {
            
            // console.log("KEY " + jsonList.length);
             console.log(key + " " +  jsonList[key]);
            //console.log("Data: " + jsonList[key]);

            
                //next = jsonList["next"];
                console.log("NEXT MOVE: " + jsonList[key]);
            
            if(jsonList["name"])
            {
                console.log(" MOVE KEY: " + jsonList["name"]);
                nameMove = jsonList["name"];
                if(jsonList["accuracy"])
                {
                    console.log(" MOVE Accuracy: " + jsonList["accuracy"]);
                    accuracyMove = jsonList["accuracy"];
                    if(jsonList["pp"])
                    {
                        console.log(" MOVE PP: " + jsonList["pp"]);
                        ppMove = jsonList["pp"];
                        if(jsonList["power"])
                        {
                            console.log(" MOVE Power: " + jsonList["power"]);
                            powerMove = jsonList["power"];
                                
                            if(jsonList["damage_class"])
                            {
                                var mClass = jsonList["damage_class"];
                                for(var mob in mClass)
                                {
                                    console.log("LOOP: " + mob);
                                    if(mob == "name")
                                    {
                                        console.log(" damage name: " + mClass[mob]);
                                        categoryMove = mClass[mob];
                                    }
                                }
                                
                                if(jsonList["effect_entries"])
                                {
                                    var eList = jsonList["effect_entries"];
                                    for(var got in eList)
                                    {
                                        var deepEffect = eList[0];
                                            for(var hot in deepEffect)
                                            {
                                                if(hot == "short_effect")
                                                {
                                                    console.log("DEEP EFFECT IS: " + deepEffect[hot]);
                                                    effectMove = deepEffect[hot];

                                                }
                                               
                                            }
                                        console.log("EFFECT IS: " + eList[got]);


                                    }
                                }



                            }
                        }

                    }
               
                }
            
            }
        }
        
    }

    addRowMove(nameMove, categoryMove, powerMove, accuracyMove, ppMove, effectMove);


}


function populatePokemonTable(mObject)
{
    console.log("Pokemon Table IS: " + mObject + "/n");
    
    var jsonList = JSON.parse(mObject);
    console.log(typeof(jsonList));
    console.log("Pokemon STRING:" + jsonList );

    var pokemonTableList;
    var pName = "";
    var pNum = "";
    var pSprite = "";
    var pType = "";
    var pAbil = "";
    var pStat = ""; 


    for(var key in jsonList)
    {
        if(jsonList.hasOwnProperty(key))
        {
            var baseTotal = 0;
            // console.log("KEY " + jsonList.length);
             console.log("Start " + key + " " +  jsonList[key]);
            //console.log("Data: " + jsonList[key]);
            if(jsonList["order"])
            {
            console.log("S ORDER " + jsonList["order"]);
                pNum = jsonList["order"];
                console.log("T NUM " + pNum);

                if(jsonList["types"])
                {
                    console.log("DO TYPES " + jsonList["types"]);
                    var typeL = jsonList["types"];
                    for(var tipe in typeL)
                    {
                        console.log("DO TYPES 2" + typeL[tipe]);
                        var typeIn = typeL[tipe];
                        for(var lip in typeIn)
                        {
                            console.log("DO TYPES 3 " + typeIn[lip]);
                            var typeDeep = typeIn[lip];
                            for(var stick in typeDeep)
                            {
                                console.log("DO TYPES 4 " + typeDeep[stick]);
                                var status = typeDeep[stick];
                                if(!status.includes("https"))
                                {
                                    if(pType != "")
                                    {
                                        pType = pType + ", " + typeDeep[stick];
                                        console.log("T Type 1 " + pType);
                                    }
                                    else{
                                        pType = typeDeep[stick];
                                        console.log("T Type 2 " + pType);
                                    }
                                    
                                     
                                }
                                
                           
                            }
                        }
                    }
                }

                if(jsonList["stats"])
                {
                console.log("STATs IN" + jsonList["stats"]);
                    
                var dive = jsonList["stats"];
                
                for(var tea in dive)
                {
                    var cup = dive[tea];
                    console.log("STATs INTO " + dive[tea]);
                    
                    for(var time in cup)
                    {
                        console.log("STATs INTO Deep " + cup[time]);

                        var cheeck = cup[time];
                        if(cup[time] != 0)
                        {
                            let isnum = /^\d+$/.test(cheeck);
                            if(isnum)
                            {
                                baseTotal = baseTotal + cup[time];
                                console.log("Adding to Stat Total " + baseTotal);
                            }
                        
                        }

                        var pot = cup[time];
                        for(var crack in  pot)
                        {
                            console.log("STATs INTO Deep Further " + pot[crack]);
                        }
                    }
                }
                pStat = baseTotal;
                console.log("T Stat " + pStat);

                if(jsonList["name"])
                {
                    console.log(" Pokemon KEY: " + jsonList["name"]);
                    pName = jsonList["name"];
                    console.log("T Name " + pName);

                    if(jsonList["sprites"])
                    {
                        var spriteList = jsonList["sprites"];
                        for(var kap in spriteList)
                        {
                            var frontS = spriteList[kap];
    
                            if(frontS != null)
                            {
                                if(frontS.includes("master") )
                                {
                                    if(!frontS.includes("back"))
                                    {
                                        if(!frontS.includes("shiny"))
                                        {
                                            console.log("CHECKA ROON " + frontS);
                                            pSprite = frontS;
                                            console.log("T Sprite " + pSprite);
                                        }
                                    
                                    }
                                    
                                }
                            }
                            
                            // console.log("POKEMON KAP: " + frontS);
    
    
    
                        }
    
                        if(jsonList["abilities"])
                        {
                            console.log("POKEMON ABILITY " + jsonList["abilities"]);
                            var abilityList = jsonList["abilities"];
                            for(var input in abilityList)
                            {
                                var hop = abilityList[input];
                                console.log("ABILITY CHECK: " + hop);
                                for(var skip in hop)
                                {
                                    console.log("ABILITY CHECKer: " + skip);
    
                                    if(hop["order"])
                                        {
                                            console.log("ORDERs " + hop["order"]);
        
                                        }
    
                                        if(hop["types"])
                                        {
                                            console.log("TYPES ARE " + hop["types"]);
        
                                        }
    
                                    if(hop["stats"])
                                    {
                                        console.log("STATs " + hop["stats"]);
                                        var dive = jsonList["stats"];
                                        for(var tea in dive)
                                        {
                                            console.log("STATs IN " + dive[tea]);
                                        }
        
                                        
        
                                    }
    
    
                                    if(skip == "ability")
                                    {
                                        var jock = hop[skip];
                                        console.log("ABILITY JOCK " + jock);
                                        for(var insert in jock)
                                        {
                                            var total = jock[insert];
                                             if(!total.includes("https"))
                                            {
                                                console.log("ABILITY INSERT " + jock[insert]);
                                                
                                                if(pAbil != "")
                                                {
                                                    pAbil = pAbil +  ", " + total;
                                                    console.log("T Ability  1 " + pAbil);
                                                }
                                                else{
                                                    pAbil = total;
                                                    console.log("T Ability  2 " + pAbil);
                                                }
                                                
                                                
                                                
                                                console.log("ABILITY INSERT 2 " + total);
                                               
                                                if(!jock[insert].includes(pName))
                                                {
                                                   
                                                }
                                                
        
                                            }
                                        }
                                    }
                                }
                                
                            }
    
                       /*
            Add all the variables to a list
            */
           
            var pString ="";
            pString = pName + ", " + pNum + ", " + pSprite + ", " + pType + ", "
            + pAbil + ", " + pStat + ", ";
            
            var addPokemon = {pokemonName: pName, pokemonDex:pNum,
            pokemonSprite: pSprite, pokemonType: pType, pokemonAbility:pAbil,
            pokemonStat: pStat};

            var newPokemonList = pokemonList;

            

            addRow(pName, pNum, pSprite, pType, pAbil, pStat);
            newPokemonList.push({"pokemonName": pName,
    "pokemonDex": pNum,
    "pokemonSprite": pSprite,
    "pokemonType": pType,
    "pokemonAbility": pAbil,
    "pokemonStat": pStat});
            

            console.log("JSON ARRAY: " + newPokemonList);

            //pokemonList.add(addPokemon);
            // var valuesSoFar = Object.create(null);
            //     for(var i = 0; i<newPokemonList.length; i++)
            //     {
                    
            //         var value = newPokemonList[i];
            //         console.log("DUPLICATES 1 " + value);
            //         if (value in valuesSoFar) {
            //             console.log("DUPLICATES 2 " + value);
            //         }
            //         //valuesSoFar[value] = true;
            //     }


            // for(keyP in newPokemonList)
            // {
            //     var valueName = newPokemonList[keyP].pokemonName;
            //     console.log("CHECKING NAME: " + valueName);
            //     console.log("CHECKING-Name: " + pName);
            //     if(valueName != null)
            //     {
            //         console.log("NOT EMPTY: " );
            //         if (valueName == pName)
            //         {
            //             console.log("Duplicates " + valueName);
                        

            //         }
            //         else{
            
            //         }
            //     }
                
            // }

            console.log("AFTER ALL THIS WE GET: " + pString);


            var testTable = document.getElementById("typePokemonTable");
var r=0; //start counting rows in table
while(row=table.rows[r++])
{
  var c=0; //start counting columns in row
  while(cell=row.cells[c++])
  {
    cell.innerHTML='[R'+r+'C'+c+']'; // do sth with cell
  }
}
            // for (var i = 1, cell; cell = testTable.cells[i]; i++) {
            //     //iterate through cells
            //     //cells would be accessed using the "cell" variable assigned in the for loop

            //     console.log("TESTING TABLE HERE: " + i);
            // }
            

            }
           
            
    
                                    
    
            }
            
                //next = jsonList["next"];
                console.log("NEXT Pokemon: " + jsonList[key]);
            
            
                        

                    }

                }          
            }

            




        }
        
    }
}


function addRowType(weakTypes, superEff, resistTypes, noEffect)
{

    var tablePokemon = document.getElementById("typeListTable");
    var insertRow = tablePokemon.insertRow();
    var weakCell = insertRow.insertCell(0);
    var superCell = insertRow.insertCell(1);
    var resistCell = insertRow.insertCell(2);
    var noEffCell = insertRow.insertCell(3);
    

    // for(var input in listInfo)
    // {
        
            //console.log("JOJOS " + listInfo);
            weakCell.innerHTML = weakTypes;
            superCell.innerHTML = superEff;
            
            resistCell.innerHTML = resistTypes;
            noEffCell.innerHTML = noEffect;
            
}




function addRowMove(nameMove, categoryMove, powerMove, accuracyMove, ppMove, effectMove)
{

    var tablePokemon = document.getElementById("movePokemonTable");
    var insertRow = tablePokemon.insertRow();
    var nameMCell = insertRow.insertCell(0);
    var categoryCell = insertRow.insertCell(1);
    var powerCell = insertRow.insertCell(2);
    var accuracyCell = insertRow.insertCell(3);
    var ppCell = insertRow.insertCell(4);
    var effectCell = insertRow.insertCell(5);
    

    // for(var input in listInfo)
    // {
        
            //console.log("JOJOS " + listInfo);
            nameMCell.innerHTML = nameMove;
            categoryCell.innerHTML = categoryMove;
            powerCell.innerHTML = powerMove;
            accuracyCell.innerHTML = accuracyMove;
            ppCell.innerHTML = ppMove;
            effectCell.innerHTML = effectMove;
            // Try to insert row
            var x = document.createElement("BR");
            tablePokemon.insert(x);
            
}




var idNum = 0;

function addRow(tName, tNum, tSprite, tType, tAbil, tStat)
{

    var tablePokemon = document.getElementById("typePokemonTable");
    var insertRow = tablePokemon.insertRow();
    insertRow.setAttribute("id", "pokemonId" + rowIdIdent);
    rowIdIdent = rowIdIdent + 1;
    var nameCell = insertRow.insertCell(0);
    var numberCell= insertRow.insertCell(1);
    var spriteCell = insertRow.insertCell(2);
    var typeCell = insertRow.insertCell(3);
    var abilityCell = insertRow.insertCell(4);
    var statCell = insertRow.insertCell(5);
    var checkFav = insertRow.insertCell(6);

    // for(var input in listInfo)
    // {
        
            //console.log("JOJOS " + listInfo);
            nameCell.innerHTML = tName;
            numberCell.innerHTML = tNum;
            var img = document.createElement("IMG");

            img.src = tSprite;
            
            spriteCell.appendChild(img);

            typeCell.innerHTML = tType;
            abilityCell.innerHTML = tAbil;
            statCell.innerHTML = tStat;

            var checkBox = document.createElement("INPUT");
            checkBox.type = "checkbox";
            checkBox.setAttribute("id", "checkBox" + idNum);
            console.log("CHECK BOX IS: " + checkBox);
            idNum = idNum + 1;

            checkFav.appendChild(checkBox);
}

function grabFromStorage()
{

}

var idCheck = 0;

function addFavorite()
{
    console.log("TAPIN");

    var table = document.getElementById("typePokemonTable");
    var rows = table.getElementsByTagName("tr");
    var td = table.getElementsByTagName("td");

    // for(var r = 0; r < table.rows.length; r++)
    // {
    //     console.log("TABLE CHECKING: " + table[r].cells[r]);
    // }

    // for (var i = 0, row; row = table.rows[i]; i++) {
    //     //iterate through rows
    //     //rows would be accessed using the "row" variable assigned in the for loop
    //     console.log("Row CHECKING: " + row[i]);
    //     for (var j = 0, col; col = row.cells[j]; j++) {
    //       //iterate through columns
    //       //columns would be accessed using the "col" variable assigned in the for loop
    //       console.log("Cell CHECKING: " + col[i]);
    //     }  
    // }


    //var table = document.getElementById("mytab1");
    // for (var i = 1, cell; cell = table.cells[i]; i++) {
    //      //iterate through cells
    //      //cells would be accessed using the "cell" variable assigned in the for loop
    //      console.log("CELL CHECKING: " + cell[i]);
    // }

    var tableLength = table.rows.length;
    console.log("ASA: " + tableLength);
    
    var favName = "";
    var favNum = "";
    var favSprite = "";
    var favType = "";
    var favAbil = "";
    var favStat = "";
    var favCheck = "";

    for(var j = 0; j <= idNum; j++)
    {
        var checkers = document.getElementById("checkBox" + j);
        if(checkers != null)
        {
            if(checkers.checked == true)
            {
                console.log("JOPA");
                var getRowIdentify = document.getElementById("pokemonId" + j);
                for(var i = 0; i < 7; i++)
                {
                    var dataIs = getRowIdentify.cells[i].innerHTML;
                    console.log("KOAP: " + dataIs);
                    if(i == 0){favName = dataIs;}
                    if(i ==1){favNum = dataIs;}
                    if(i ==2){favSprite = dataIs;}
                    if(i ==3){favType = dataIs;}
                    if(i ==4){favAbil = dataIs;}
                    if(i ==5){favStat = dataIs;}
                    if(i ==6){favCheck = dataIs;}
                    
                }

            }
        }
        
    }
    
    addFavoritePokemon(favName, favNum, favSprite, favType, favAbil, favStat, favCheck);

    for(var i = 0; i < tableLength; i++)
    {
        var idCheck = 0; 
        var x = table.rows[i].cells.length;
        console.log("DOA: " + x);

        if(table.rows[i].cells[6])
        {
            //var newID = 
            var checkers = document.getElementById("checkBox" + idCheck);
            if(checkers != null)
            {
                if(checkers.checked == true)
                {
                    console.log("JOPA");
                }
            }

            idCheck = idCheck + 1;
        }

    }



    // for(var i = 0; i < tableLength; i++)
    // {
    //     var idCheck = 0; 
    //     var x = table.rows[i].cells.length;
    //     console.log("DOA: " + x);

    //     if(table.rows[i].cells[6])
    //     {
    //         console.log("IM IN");
    //         // if(table.rows[i].cells[6] != null)
    //         // {
    //         //     var box = table.rows[i].cells[6];
    //         //     var doc = document.getElementsByTagName("input");

    //         //     if(doc.checked == false)
    //         //     {
    //         //         console.log("CHECKERING: ");
    //         //     }
    //         //     var y = table.rows[i].cells[6].checked;
    //         //     table.rows[i].cells[6].checked = true;
    //         //     console.log("FOG: " + y);
    //         // }
    //         // var y = table.rows[i].cells[6];
    //         // if(y.checked == true)
    //         // {
    //         //     console.log("FOG: " + y);
    //         // }
            

            
    //     }

    // }



    if (typeof(Storage) !== "undefined") 
    {
        // Store
        localStorage.setItem("lastname", "Sarah");
        //Retrieve
        //document.getElementById("result").innerHTML = localStorage.getItem("lastname");
        console.log("LOCAL STORAGE IS: " + localStorage.getItem("lastname"));

    } 
    else 
    {
        console.log("ERROR WITH: " +  "Sorry, your browser does not support Web Storage...");
        
    }


}

var favRowId = 0;

function addFavoritePokemon(favoName, favoNum, favoSprite, favoType, favoAbil, favoStat, favoCheck)
{

    console.log("ROOGA DUO: " + favoSprite);
    var pokemonStorage = {'Pokemon Name': favoName, 'Pokemon Number': favoNum,
    'Pokemon Sprite': favoSprite, 'Pokemon Type': favoType, 'Pokemon Ability':favoAbil,
    'Pokemon Stat': favoStat};

    localStorage.setItem(favoName, JSON.stringify(pokemonStorage));


    var favoriteTable = document.getElementById("pokemonFavoriteList");
    var newRow = favoriteTable.insertRow();
    newRow.setAttribute("id", "favoriteSelect" + favRowId);
    favRowId = favRowId + 1;
    var cellName = newRow.insertCell(0);
    var cellNum = newRow.insertCell(1);
    var cellSprite = newRow.insertCell(2);
    var cellType = newRow.insertCell(3);
    var cellAbil = newRow.insertCell(4);
    var cellStat = newRow.insertCell(5);
    var cellBox= newRow.insertCell(6);

    cellName.innerHTML = favoName;
    cellNum.innerHTML = favoNum;
    cellSprite.innerHTML = favoSprite;
    cellType.innerHTML = favoType;
    cellAbil.innerHTML = favoAbil;
    cellStat.innerHTML = favoStat;
    cellBox.innerHTML = favoCheck;
}



var fieldName = "lastname";
var fieldLength = "length";
var fieldKey = "key";
var fieldGItem = "getItem";
var fieldSItem = "setItem";
var fieldRemove = "removeItem";
var fieldClear = "clear";


var jsonName = "";
var jsonNum = "";
var jsonSprite = "";
var jsonType = "";
var jsonAbility = "";
var jsonStat = "";

var loadID = 0;

function loadStorage()
{
    for(var key in localStorage)
    {
        console.log("ZEE KEY: " + key);
        if(key != fieldName)
        {
            if(key != fieldLength)
            {
                if(key != fieldKey)
                {
                    if(key != fieldGItem)
                    {
                        if(key!= fieldSItem)
                        {
                            if(key != fieldRemove)
                            {
                                if(key != fieldClear)
                                {
                                    var objectR = localStorage.getItem(key);
                                    var restoredObject = JSON.parse(objectR);
                                    console.log("KOCA COLA: " + restoredObject);
                                    for(var item in restoredObject)
                                    {
                                        console.log("DROP IT: " + item);
                                        console.log("DROP IT ON: " + restoredObject[item]);

                                        if(item == "Pokemon Name"){jsonName = restoredObject[item];}
                                        if(item == "Pokemon Number"){jsonNum = restoredObject[item];}
                                        if(item == "Pokemon Sprite"){jsonSprite = restoredObject[item];
                                        console.log("ROGA: " + jsonSprite);}
                                        if(item == "Pokemon Type"){jsonType = restoredObject[item];}
                                        if(item == "Pokemon Ability"){jsonAbility = restoredObject[item];}
                                        if(item == "Pokemon Stat"){jsonStat = restoredObject[item];}
                                        


                                    }
                                    var checkboxY = "<input id='favoriteBox" + loadID + "' type='checkbox'> </input>";
                                    //checkboxY.setAttribute("id", "favoriteBox" + loadID);
                                    loadID = loadID + 1;
                                    addFavoritePokemon(jsonName, jsonNum, jsonSprite, jsonType, jsonAbility, jsonStat, checkboxY);

                                }
                            }
                        }
                    }
                }
            }
            
        }
    }
}



function removeFavorite()
{
    console.log("I TAPPED IT!");

    var lengthTable = document.getElementById("pokemonFavoriteList");
    var rowling = lengthTable.getElementsByTagName("tr");
    var count = 0;
    for (var i = 0; i < rowling.length; i++) {
        count++;
        if (rowling[i].getElementsByTagName("td").length > 0) {
            count++;
        }
    }




    for(var j = 0; j <= count; j++)
    {
        console.log("I TAPPED IT Soft!");
        var checkers = document.getElementById("favoriteBox" + j);
        if(checkers != null)
        {
            console.log("I TAPPED IT Hard!");
            if(checkers.checked == true)
            {

                console.log("JOPA KA");
                var k = j+1;
                console.log("Checking out J " + j );

                //localStorage.removeItem(name);
                document.getElementById("pokemonFavoriteList").deleteRow(j);
                
                var getRowIdentify = document.getElementById("favoriteSelect" + j);

                for(var i = 0; i < 7; i++)
                {
                    var dataIs = getRowIdentify.cells[i].innerHTML;
                    var nameDel = "";
                    console.log("KOAP: " + dataIs);
                    if(i == 0)
                    {
                        nameDel = dataIs;
                        localStorage.removeItem(nameDel);
                    }
                    
                //rowToDelete.deleteRow(j);

                // var getRowIdentify = document.getElementById("pokemonId" + j);
                // for(var i = 0; i < 7; i++)
                // {
                //     var dataIs = getRowIdentify.cells[i].innerHTML;
                //     console.log("KOAP: " + dataIs);
                //     if(i == 0){favName = dataIs;}
                //     if(i ==1){favNum = dataIs;}
                //     if(i ==2){favSprite = dataIs;}
                //     if(i ==3){favType = dataIs;}
                //     if(i ==4){favAbil = dataIs;}
                //     if(i ==5){favStat = dataIs;}
                //     if(i ==6){favCheck = dataIs;}
                    
                // }

            }
        }
        
    }

}

}
