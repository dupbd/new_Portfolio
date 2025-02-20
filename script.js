// //BOUNCE BELOW
// var myText = document.getElementById("bounceTxt").innerHTML,
//     wrapText = "";

// for (var i = 0; i < myText.length; i++) {
//     if (myText[i] === " ") {
//         // If the character is a space, just add it to wrapText without wrapping it in <em> tags
//         wrapText += " ";
//     } else {
//         // If the character is not a space, wrap it in <em> tags
//         wrapText += "<em>" + myText.charAt(i) + "</em>";
//     }
// }

// document.getElementById("bounceTxt").innerHTML = wrapText;

// var myLetters = document.getElementsByTagName("em"),
//     j = 0;

// function applyBounce() {
//     setTimeout(function() {
//         myLetters[j].className = "bounce-me";
//         j++;
        
//         if (j < myLetters.length) {
//             applyBounce();
//         }
//     }, 20);
// }

// applyBounce();

// //END Bounce

//Modal Windows Below
const designIcon = document.querySelectorAll('.design-icon');
const codeIcon = document.querySelectorAll('.code-icon');
const modal1 = document.querySelector('.modalWindow1');
const modal2 = document.querySelector('.modalWindow2');
const overlay = document.querySelector('.overlay');
const btnCloseModal1 = document.querySelector('.close-modal1');
const btnCloseModal2 = document.querySelector('.close-modal2');

const openModal1 = function () {
    modal1.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const openModal2 = function () {
    modal2.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal1 = function () {
    modal1.classList.add('hidden');
    overlay.classList.add('hidden');
}
const closeModal2 = function () {
    modal2.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < designIcon.length; i++) {
    designIcon[i].addEventListener('click', openModal1);
}
for (let i = 0; i < codeIcon.length; i++) {
    codeIcon[i].addEventListener('click', openModal2);
}

overlay.addEventListener('click', closeModal1);
overlay.addEventListener('click', closeModal2);
btnCloseModal1.addEventListener('click', closeModal1);
btnCloseModal2.addEventListener('click', closeModal2);

//END MODALS

