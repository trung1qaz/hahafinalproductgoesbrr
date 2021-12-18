
const inpName = document.getElementById("inpName");
const inpPlace = document.getElementById("inpPlace");
const inpNumber = document.getElementById("inpNumber");
const inpText = document.getElementById("inpText");
const submit = document.getElementById("submit");
const stuff = document.getElementById("stuff");

const nameOP = document.getElementById("nameOP");
const placeOP = document.getElementById("placeOP");
const textOP = document.getElementById("textOP");



submit.onclick = function () {
    const name = inpName.value;
    const place = inpPlace.value;
    const number = inpNumber.value;
    const text = inpText.value;

    console.log(name);
    console.log(place);
    console.log(number);
    console.log(text);


    nameOP.innerHTML += `${name}`;
    placeOP.innerHTML += `${place}`;
    textOP.innerHTML += `${text}`;
    
    this.addEventListener
    this.style.display = "none";
}