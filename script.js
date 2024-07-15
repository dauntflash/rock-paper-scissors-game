const text_display=document.getElementById("text-display");
var my_image=document.getElementById("myImage")
var computer_image=document.getElementById("computerImage")

const first_rock_image="assets/fist 1.svg"
const rock_image="assets/fist-cross-dictator-bang-svgrepo-com.svg"
const scissor_image="assets/hand-two-finger-icon.svg"
const paper_image="assets/hand-line-icon.svg"
let computer_choice;
let user_choice;

function shaker(mySource) {
    document.querySelectorAll('.image1 img, .image2 img').forEach(img => {
        img.classList.add('shake-animation');
    });
    text_display.textContent= "Wait.."
    setTimeout( function(){stopShaker(mySource);}, 1500);
    my_image.src=rock_image
    computer_image.src=first_rock_image
}
function reset(){
    computer_image.src=first_rock_image
    my_image.src=rock_image
    text_display.textContent= "Play again !!"

}
function stopShaker(mySource) {
    if(mySource==rock_image){
        user_choice='1'
    }
    if(mySource==paper_image){
        user_choice='2'
    }
    if(mySource==scissor_image){
        user_choice='3'
    }
    computer_function()

    document.querySelectorAll('.image1 img, .image2 img').forEach(img => {
        img.classList.remove('shake-animation');
    });
    my_image.src= mySource

    game()

}

function computer_function(){
    computer_choice=Math.floor(Math.random()*3) +1;
    if (computer_choice =='1'){
        computer_image.src= first_rock_image
    }
    if(computer_choice=='2'){
        computer_image.src= paper_image
    }
    if (computer_choice=='3'){
        computer_image.src=scissor_image
    }
    console.log(computer_choice)
}


function game(){
    if (computer_choice == user_choice){
        text_display.textContent="Draw"
    }
    else if (computer_choice != user_choice){
        if (computer_choice == '1' && user_choice=='2' ||computer_choice=='2' && user_choice =='3' || computer_choice=='3' && user_choice == '1'){
                text_display.textContent="You win !!"
            }
        else {
                text_display.textContent="You lose !!"
            }
    }
}