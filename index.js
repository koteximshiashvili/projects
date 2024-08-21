

const decreasebtn = document.getElementById('decreasebtn');
const resetbtn = document.getElementById('resetbtn');
const increasebtn = document.getElementById('increasebtn');
const countlabel = document.getElementById('countlabel');
const increasebytn = document.getElementById('increasebytn');
const increasebtna = document.getElementById('increasebtna');
const increasebtnb = document.getElementById('increasebtnb');
const increasebtnc = document.getElementById('increasebtnc');
const increasebtnd = document.getElementById('increasebtnd');
const increasebtne = document.getElementById('increasebtne');

const decreasebtn0 = document.getElementById('decreasebtn0');
const decreasebtna = document.getElementById('decreasebtna');
const decreasebtnb = document.getElementById('decreasebtnb');
const decreasebtnc = document.getElementById('decreasebtnc');
const decreasebtnd = document.getElementById('decreasebtnd');
const decreasebtne = document.getElementById('decreasebtne');
const p = document.getElementById('paragraph')
const buton = document.getElementById('buton');

let count = 0;

increasebtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}
decreasebtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}
resetbtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}
increasebytn.onclick = function(){
    count+= 20;
    countlabel.textContent = count;
}
increasebtna.onclick = function(){
    count+= 100;
    countlabel.textContent = count;
}
increasebtnb.onclick = function(){
    count+= 200;
    countlabel.textContent = count;
}
increasebtnc.onclick = function(){
    count+= 500;
    countlabel.textContent = count;
}
decreasebtn0.onclick = function(){
    count-= 20;
    countlabel.textContent = count;
}
decreasebtna.onclick = function(){
    count-= 100;
    countlabel.textContent = count;
}
decreasebtnb.onclick = function(){
    count-= 200;
    countlabel.textContent = count;
}
decreasebtnc.onclick = function(){
    count-= 500;
    countlabel.textContent = count;
}
decreasebtnd.onclick = function(){
    count-= 1000;
    countlabel.textContent = count;
}
increasebtnd.onclick = function(){
    count+= 1000;
    countlabel.textContent = count;
}
buton.onclick = function(){
    window.alert(`money goal set`);
}

decreasebtne.onclick = function(){
    count-= 1000000;
    countlabel.textContent = count;
}
increasebtne.onclick = function(){
    count+= 1000000;
    countlabel.textContent = count;
}

if(count >= 1000000){
    p.textContent = "Congratulations! You've reached your money goal!";
} else {
    p.textContent = "Keep working hard to reach your goal!";
}
