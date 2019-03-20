var mijnauto = {
    kleur: "blauw",
    merk: "Ford",
    snelheid: 0,

    gasgeven: function() {
        this.snelheid += 5
        console.log(this.snelheid);
    },

    toeteren: function() {
        console.log("Toet Toet!");
    }
}

console.log(mijnauto.kleur);
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.toeteren();