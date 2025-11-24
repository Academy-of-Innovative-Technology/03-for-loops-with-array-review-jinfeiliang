let arrayItems = ["Apple", "Banana", "Cherry", "Dragonfruit", "Pear", "Watermelon", "Grapes"];

let Output_DOM = document.querySelector("#output");
let Current_Array_DOM = document.querySelector("#arrayDisplay");

let Output = [];


function Update_Current(){
    Current_Array_DOM.innerHTML = arrayItems;
}

function Update_Output(){
    Output_DOM.innerHTML = Output;
}

function showArray(){
    Output = arrayItems;
    Update_Output();
}
function showReverse(){
    Output = [];
    arrayItems.forEach( (x) => {
        Output.unshift(x);
    })
    Update_Output();
}



function addUnshift(){
    let Value = document.querySelector("#addValue").Value;
    console.log(Value);
    if (!Value || Value === undefined || Value === null || Value === NaN){
        console.log("Error: Argument Missing");
        return;
    }
    let Formatted_Value = toString(Value);
    arrayItems.unshift(Formatted_Value);
    Update_Current();
}
function addPush(){
    let Value = document.querySelector("#addValue").Value;
    if (!Value || Value === undefined || Value === null || Value === NaN){
        console.log("Error: Argument Missing");
        return;
    }
    let Formatted_Value = toString(Value);
    arrayItems.push(Formatted_Value);
    Update_Current();
}


function removeShift(){
    arrayItems.shift();
    Update_Current();
}
function removePop(){
    arrayItems.pop();
    Update_Current();
}


// Start Updated
Update_Current();
Update_Output();

