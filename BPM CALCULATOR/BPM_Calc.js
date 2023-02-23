// Function to calculate the BPM up
function calc1() {

    let bpm = Number(prompt("Introduce the BPM of your track"));
    let res = Math.round((bpm / 0.75) * 100) / 100

    if(bpm)
    {
        alert("The BPM of the track to be changed is " + res);
    }

}

// Function to calculate the BPM down
function calc2() {

    let bpm = Number(prompt("Introduce the BPM of your track"));
    let res = Math.round(((bpm / 0.75) / 2) * 100) / 100;

    if(bpm)
    {
        alert("The BPM of the track to be changed is " + res);
    }

}

// Function to generate the chart dinamically
function show() {

    let tab = document.querySelector("#tab");
    let row1 = document.createElement("tr");
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    let th3 = document.createElement("th");

    th1.innerHTML = ("BPM");   th2.innerHTML = ("BPM +");   th3.innerHTML = ("BPM -");
    row1.appendChild(th1);   row1.appendChild(th2);   row1.appendChild(th3);
    tab.appendChild(row1);

    for (let i = 1; i <= 200; i++) {
        let row2 = document.createElement("tr");
        let cel1 = document.createElement("td");
        let cel2 = document.createElement("td");
        let cel3 = document.createElement("td");

            cel1.innerHTML = (i);
            cel1.style.backgroundColor="lightgray";
            row2.appendChild(cel1);
            cel2.innerHTML = Math.round((i / 0.75) * 100) / 100;
            row2.appendChild(cel2);
            cel3.innerHTML = Math.round(((i / 0.75) / 2) * 100) / 100;
            row2.appendChild(cel3);
            tab.appendChild(row2);
    }

    document.querySelector("#show").disabled = true;
    document.querySelector("#hide").disabled = false;

}

// Function to hide the chart
function hide() {

    let tab = document.querySelector("#tab");
    tab.innerHTML="";

    document.querySelector("#show").disabled = false;
    document.querySelector("#hide").disabled = true;

}