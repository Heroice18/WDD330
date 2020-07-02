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
            }
        }
        if(key == "double_damage_to")
        {
            for(var hey in newT)
            {
                
                    console.log("Strong to: " + newT[hey].name);  
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
            }
        }
        
    }


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
                if(jsonList["accuracy"])
                {
                    console.log(" MOVE Accuracy: " + jsonList["accuracy"]);

                    if(jsonList["pp"])
                    {
                        console.log(" MOVE PP: " + jsonList["pp"]);
                        if(jsonList["power"])
                        {
                            console.log(" MOVE Power: " + jsonList["power"]);
                                
                            if(jsonList["damage_class"])
                            {
                                var mClass = jsonList["damage_class"];
                                for(var mob in mClass)
                                {
                                    console.log("LOOP: " + mob);
                                    if(mob == "name")
                                    {
                                        console.log(" damage name: " + mClass[mob]);
                                
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
}


function populatePokemonTable(mObject)
{
    console.log("Pokemon Table IS: " + mObject + "/n");
    
    var jsonList = JSON.parse(mObject);
    console.log(typeof(jsonList));
    console.log("Pokemon STRING:" + jsonList );
    for(var key in jsonList)
    {
        if(jsonList.hasOwnProperty(key))
        {
            
            // console.log("KEY " + jsonList.length);
             console.log(key + " " +  jsonList[key]);
            //console.log("Data: " + jsonList[key]);

            
                //next = jsonList["next"];
                console.log("NEXT Pokemon: " + jsonList[key]);
            
            if(jsonList["name"])
            {
                console.log(" Pokemon KEY: " + jsonList["name"]);

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

                                if(hop["slot"])
                                {
                                    console.log("SLOTS " + hop["slot"]);
        
                                    if(hop["stats"])
                                    {
                                        console.log("STATs " + hop["stats"]);
                                        var dive = jsonList["stats"];
                                        for(var tea in dive)
                                        {
                                            console.log("STATs IN " + dive[tea]);
                                        }
        
                                        if(jsonList["order"])
                                        {
                                            console.log("ORDER " + jsonList["order"]);
        
                                        }
        
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
    
                                        }
                                    }
                                }
                            }
                            
                        }

                        

                    }

                }          
            }
        }
        
    }
}


