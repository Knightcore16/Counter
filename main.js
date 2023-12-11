let countEL = document.getElementById('count')
let saveEL = document.getElementById('save')
let Incrementbtn = document.querySelector('.increment-btn')
let Savebtn = document.querySelector('.save-btn')

let count = 0 

Incrementbtn.addEventListener('click', () => {
    count += 1;
    countEL.textContent = count; 
});

Savebtn.addEventListener('click', () => {
    let countStr = count + " , ";
    saveEL.textContent += countStr;
    countEL.textContent = 0;
    count = 0;
});
 