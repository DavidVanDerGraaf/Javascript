var plaatjes = document.getElementsByTagName("img");
var RNG = [];
var random = 0;

while(RNG.length < 9) {
    random = Math.floor(Math.random()*9)+1;
    if(RNG.lastIndexOf(random)== -1) {
    RNG.push(random);
    }
}

random = 0;
for(var plaatje in plaatjes) {
    plaatjes[plaatje].src = "img/snake" + RNG[random]+ ".jpg";
    random++;
}