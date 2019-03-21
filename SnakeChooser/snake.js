pics = document.getElementById("pics");
createPicsHolders();
createSnakeImages();

function createPicsHolders() {
    for (var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }
}

function createSnakeImages() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    for (var i = 0; i < pictureHolders.length; i++) {
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet_" + (i+1);
        snakefoto = document.createElement("img");
        snakefoto.src = "img/snake" + (i+1) + ".jpg";
        snakefoto.id = (i+1);
        snakefoto.addEventListener("click", function(){
            maakFavoriet(this.id);
        });
        pictureHolders[i].appendChild(favoriet);
        pictureHolders[i].appendChild(snakefoto);
    }
}

function maakFavoriet(id) {
    console.log("Maak mij favoriet! Het gaat om snake... " + id );
    notsofavoriet = document.getElementsByClassName("favoriet");
    for (var i = 0; i < notsofavoriet.length; i++) {
        notsofavoriet[i].style.backgroundImage = "none";
    }
    
    favoriet = document.getElementById("favoriet_" + id);
    favoriet.style.backgroundImage = "url('img/heart.png')";
}
//picsHolders komen hier
//picsHolder bevat plaatje onderaan en ruimte voor een hart bovenaan

//plaatjes toevoegen aan picsHolders
//hartjes toevoegen aan picsHolders
