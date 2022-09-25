let addBtn = document.getElementById('btn');
let inputField = document.getElementById('input');
let outField = document.getElementById('output');


addBtn.addEventListener('click', function(){
    const paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    outField.appendChild(paragraph);
})

function displayTime() {
    let dateTime = new Date;
    let hrs = dateTime.getHours();
    let mins = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let period = document.getElementById('period');

    if(hrs >= 12){
        period.innerHTML = 'PM';
    }else{
        period.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('min').innerHTML = mins;
    document.getElementById('sec').innerHTML = sec;
}

setInterval(displayTime, 10);