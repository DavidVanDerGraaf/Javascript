var haar = [1,2,3,4,5,6,7,8,9];
var neus = [1,2,3,4,5,6,7,8,9];
var mond = [1,2,3,4,5,6,7,8,9];
var teller1 = 1;
var teller2 = 1;
var teller3 = 1;
var plaatje1 = document.getElementById("plaatje1");
var plaatje2 = document.getElementById("plaatje2");
var plaatje3 = document.getElementById("plaatje3");
plaatje1.style.backgroundImage = "url('img/snake1.jpg')";
plaatje2.style.backgroundImage = "url('img/snake1.jpg')";
plaatje3.style.backgroundImage = "url('img/snake1.jpg')";

plaatje1.addEventListener("click", function () {
    plaatje1.style.backgroundImage = "url('img/snake" + getHaar() + ".jpg')";
});

plaatje2.addEventListener("click", function () {
    plaatje2.style.backgroundImage = "url('img/snake" + getNeus() + ".jpg')";
});

plaatje3.addEventListener("click", function () {
    plaatje3.style.backgroundImage = "url('img/snake" + getMond() + ".jpg')";
});

function getHaar() {
    if (teller1 >= haar.length)  {
        teller1 = 1;
    } else{
        teller1++;
    }
    console.log(teller1);
    return teller1;
}

function getNeus() {
    if (teller2 >= neus.length)  {
        teller2 = 1;
    } else{
        teller2++;
    }
    console.log(teller2);
    return teller2;
}

function getMond() {
    if (teller3 >= mond.length)  {
        teller3 = 1;
    } else{
        teller3++;
    }
    console.log(teller3);
    return teller3;
}