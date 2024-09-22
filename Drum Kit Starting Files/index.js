// document.querySelector("button").addEventListener("click",handClick);
// while adding a event listener we  give 2 parameter first is type of event and second is listener which is  a function
// we just type  the name of function instead of handClick() in eventListioner because if we use this then it call the function before getting clicked
/*
function handClick(){
    alert("I got clicked")
}
*/
// so we use anonymous funtion instead of name it is quite similar to nrml function



 // how to add a sound in html
    //  var audio = new Audio('sounds/tom-1.mp3');
    //  audio.play();

// for detecting button press
var noOfDrum = document.querySelectorAll(".drum").length;
for(var i =0; i<noOfDrum;i++){
 
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    // alert("I got clicked")
    // console.log(e);
       var buttonInnerHTML = this.innerHTML;
    //    it means which one we cicked it save in buttoninn...  like we click on d then d is save in this
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    
       
});
}

// for detecting keyboard press
document.addEventListener("keydown",function(event){
    // this is a event whcih react when a key is pressed on keyboard
    // event is a parameter which give all the deatail about the event like which key the char code key code etc
     
    // event is only a name of parameter


    makeSound(event.key);
    // key is like a attriubute of event which tell which kety is present
    buttonAnimation(event.key);
    

    // we can check any listining even attribute by giving a parameter inside it and check on console
})

function makeSound(key){
    switch(key){
        case "w":
            var tom1 = new  Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new  Audio("sounds/tom-2.mp3");
            tom2.play();
            break;    
              
        case "s":
           var tom3 = new  Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
           
        case "d":
          var tom4 = new  Audio("sounds/tom-4.mp3");
          tom4.play();
          break;
          
        case "j":
            var crash = new  Audio("sounds/crash.mp3");
            crash.play();
            break; 
              
            
        case "k":
            var kick = new  Audio("sounds/kick-bass.mp3");
            kick.play();
            break;  
           
           
        case "l":
            var snare = new  Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        default:
            console.log();     
       }
}

function buttonAnimation(buttonKey){
 var animate =   document.querySelector("."+ buttonKey);
 animate.classList.add("pressed")
 setTimeout(function() {
    animate.classList.remove("pressed");
 }, 200);

}


// High order function
function multiply(num1,  num2){
    return num1*num2;
    }
    function add( num1,  num2){
    return num1+num2;
    }
    function calculator( num1,  num2, operator){
        return operator(num1,num2);
    }
    calculator(3,4,add);

    // highwer order fucntion tb ue ata h jb hme sme kaam ke function
    // ek se jyda bnane ho toh hm isme input dek or ek kisi bhi naam ka function bnake daal denge
    
    // basically it are the function which take another function as a input


    // how to add a sound in html
    var audio = new Audio('sounds/tom-1.mp3');