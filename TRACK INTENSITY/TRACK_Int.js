// Function that calculates the intensity of a track
function calcInt() {

    // When submit button gets clicked, the function receive the data.
    let name = document.getElementById("name").value;
    let genre = Number(document.getElementById("genre").value);
    let pitch = Number(document.getElementById("pitch").value);
    let int = Number(document.getElementById("int").value);    
    let cont = document.getElementById("cont");

        // Data gets validated
        if(name && genre && pitch && int)
        {
            // If everything is ok, the function resolves the ecuation and it creates a parragraph.
            let res = genre * (Math.pow(pitch, 2) + int); 
            let resP = document.createElement("p");

            // Finally, the function fills the parragraph with the track intensity and it's appended to the div "cont"
            name.trim();
            resP.innerHTML = ("The intensity of " + name + " is " + res+".\n"); 
            cont.appendChild(resP);
        }
        else 
        {
            // If there's an error, we create a parragraph that inform the user that something bad happened.
            let err = document.createElement("p");  err.style.color="red";
            
            err.innerHTML = ("Please, introduce the track data correctly.\n");
            cont.appendChild(err);
        }

}

// Function that erase the content in the div "cont"
function resetAll() {

    let cont = document.getElementById("cont");
    cont.innerHTML = "";

}