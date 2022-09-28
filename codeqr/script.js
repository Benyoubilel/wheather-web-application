const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    var lien= `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
         pos= document.querySelector(".lien");
    pos.setAttribute("href",lien+".png");
       elem = document.createElement("button");
       elem.setAttribute("style","background-color:green");
       elem.setAttribute("class","down");
       pos.appendChild(elem);
       elem.textContent="Download";
    });
   
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});
// function download(){

// //creantion d'une balise <a></a> avec ses attribute


// //get pos of <a></a>

// pos= document.getElementsByClassName("lien");
   
// pos.setAttribute("href",lien);
//    elem = document.createElement("button");
//    elem.setAttribute("style","background-color:green");
//    elem.setAttribute("class","down");
//    pos.appendChild(elem);
//    elem.textContent="Download";
  
// }

