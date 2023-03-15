let typingText = document.querySelector('.change-txt')
let Designation = ['Back End Developer', 'Data Scientist',];

let arrayIndex = 1;

function ChangingTxt(){
    if(arrayIndex<Designation.length){
        typingText.innerHTML = Designation[arrayIndex];
        arrayIndex = arrayIndex + 1;
    }
    else{
        arrayIndex = 0;
        typingText.innerHTML = Designation[arrayIndex];
        arrayIndex = arrayIndex + 1;
    }
}
ChangingTxt()
setInterval(ChangingTxt,5000);