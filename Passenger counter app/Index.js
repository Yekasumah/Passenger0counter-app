let countEl= document.getElementById("count-el");
let Entries= document.getElementById("prev");
let count = 0;
let time= new Date();
function Time(){
    time.getDate();
}

function checkIn(){
    count += 1;
    countEl.innerText= + count;
}
function save(){
    Entries.innerText += " "+ count + " " +  time + "\n";
    count = 0;
    countEl.innerText= 0;
}


