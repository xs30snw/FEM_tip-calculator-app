// Document nodes
let bill        = document.getElementById("bill");

let tip_radio   = document.getElementsByName("tip-radio");
let custom      = document.getElementById("custom");

let people      = document.getElementById("people");

let output1     = document.getElementById("output1");
let output2     = document.getElementById("output2");

let erMsg       = document.getElementById("erMsg");

// Variables
let billNum = 0;

let tipNum = 0;

let peopleNum = 0;

let tipAmount = 0;
let total = 0;

// Reset values at the beginning
resetValues();


// Read total bill number and assign it to a variable
bill.oninput = (e) => {
    billNum = Number(e.target.value);
    calculate();
}

// Remove custom tip value if click on a predefined tip
// Assign value of the predefined tip to a variable
for (let i = 0; i < 5; i++) {
    tip_radio[i].onclick = (e) => {
        custom.value = "";
        tipNum = Number(tip_radio[i].value);
        calculate();
    }
}

// Uncheck any predefined percentage if enter custom tip
custom.oninput = (e) => {
    for (let i = 0; i < 5; i++) {
        tip_radio[i].checked = false;
        tipNum = Number(custom.value);
    }
    calculate();
}

// Read total people number and assign it to a variable
people.oninput = (e) => {
    peopleNum = Number(e.target.value);
    calculate();
}

// Try calculating output values
function calculate () {
    erMsg.style.display = "none";
    console.log(
        "Bill input: ", billNum,
        "$; Tip input: ", tipNum,
        "%; People input ", peopleNum
    );

    if (peopleNum <= 0) {
        console.log("Error: People are less or equal to 0. Calculation abort.");
        erMsg.style.display = "block";
        return 0;
    };

    tipAmount = billNum * ( tipNum / 100 ) / peopleNum;
    total = billNum / peopleNum + tipAmount;
    console.log(
        "Tip calculated: ", tipAmount,
        "; Total calculated: ", total
    );

    output1.textContent = tipAmount.toFixed(2);
    output2.textContent = total.toFixed(2);
}

function resetValues () {
    billNum = tipNum = peopleNum = 0;
    bill.value = "";
    for (let i = 0; i < 5; i++) {
        tip_radio[i].checked = false;
    }
    custom.value = "";
    people.value = "";
    erMsg.style.display = "none";
    output1.textContent = "0.00";
    output2.textContent = "0.00";
}