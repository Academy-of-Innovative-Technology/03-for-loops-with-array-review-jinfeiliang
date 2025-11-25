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
    let Value = document.querySelector("#addValue").value;
    console.log(Value);
    if (!Value || Value === undefined || Value === null || Value === NaN){
        console.log("Error: Argument Missing");
        alert("Error: Argument Missing");
        return;
    }
    let Formatted_Value = String(Value);
    arrayItems.unshift(Formatted_Value);
    Update_Current();
    Output_DOM.innerHTML = `The element '${Value}' has been added at the start`;
}
function addPush(){
    let Value = document.querySelector("#addValue").value;
    if (!Value || Value === undefined || Value === null || Value === NaN){
        console.log("Error: Argument Missing");
        alert("Error: Argument Missing");
        return;
    }
    let Formatted_Value = String(Value);
    arrayItems.push(Formatted_Value);
    Update_Current();
    Output_DOM.innerHTML = `The element '${Value}' has been added at the end`;
}


function removeShift(){
    let Shift = arrayItems.shift();
    Update_Current();
    Output_DOM.innerHTML = `The element '${Shift}' has been deleted`;
}
function removePop(){
    let Pop = arrayItems.pop();
    Update_Current();
    Output_DOM.innerHTML = `The element '${Pop}' has been deleted`;
}


// Start Updated
Update_Current();
Update_Output();

