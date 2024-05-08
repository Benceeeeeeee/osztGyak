class Szemely{
    constructor(vezeteknev, keresztnev, eletkor, hobby) {
        this.vezeteknev = vezeteknev;
        this.keresztnev = keresztnev;
        this.eletkor = eletkor;
        this.hobby = hobby;
    };

    setHobby(hobby){
        this.hobby = hobby;
    };

    getTeljesnev(){
        return this.vezeteknev + " " + this.keresztnev;
    };

    getEletkor(){
        return this.eletkor;
    }

    getHobby(){
        return this.hobby;
    }
};

let kissKati = new Szemely("Kiss", "Katalin", 28, "");
kissKati.setHobby("futás");

document.addEventListener("DOMContentLoaded", () => {
    let teljesnev = document.getElementById("teljesnev");
    let eletkor = document.getElementById("eletkor");
    let hobby = document.getElementById("hobby");

    teljesnev.textContent = "Teljes neve: " + kissKati.getTeljesnev();
    eletkor.textContent = "Életkora: " + kissKati.getEletkor();
    hobby.textContent = "Kedvenc elfoglaltsága: " + kissKati.getHobby();
});