// querySelector - selects first item only
// querySelectorAll - selects all the items

// constructor - function which produces objects(men/woman) with same properties(name,age,phone...)
// function Person (name , age , phone , languages){
//   this.name = name;
//   this.age = age;
//   this.phone = phone;
//   this.languages = languages;
//   this.dance = function() {
//     alert("turn on the music");
//     putyourhandsup();
//     move();
//   }
// }

// n Objects can be created using above function...  person1 , person2 , ...
// var person1 = new Person ("d",20,100,"english");
// var person2 = new Person ("c",21,101,"hindi");
// console.log(person1.name);  --> property
// person1.dance();  --> method()


// var numberOfDrumButtons = $(".drum").length;
//
// for (var i = 0; i < numberOfDrumButtons; i++) {
//
//   $(".drum")[i].addEventListener("click", function() {
//
//     var buttonInnerHTML = this.innerHTML;
//
//     makeSound(buttonInnerHTML);
//
//     buttonAnimation(buttonInnerHTML);
//
//   });
//
// }

// Callback function called by buttons when clicked
// for (var i = 0; i < numberOfDrumButtons; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function(e) {
//     alert("clicked");
//     console.log(e);
//   });
// }

$(".drum").click(function(event){
  console.log(event);
  var buttonInnerHTML = this.innerHTML;

  makeSound(buttonInnerHTML);

  buttonAnimation(buttonInnerHTML);
});

// document.addEventListener("keydown", function(event) {
//   //console.log(event);
//   makeSound(event.key);
//
//   buttonAnimation(event.key);
//
// });

// Callback function called by keys when pressed
// document.addEventListener("keydown", function(e) {
//   alert("pressed");
//   console.log(e);
// });


$(document).keydown(function(event){
  console.log(event);

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


// function buttonAnimation(currentKey) {
//
//   var activeButton = document.querySelector("." + currentKey);
//
//   activeButton.classList.add("pressed");  // add css when pressed
//
//   setTimeout(function() {
//     activeButton.classList.remove("pressed");
//   }, 100);
//
// }



function buttonAnimation(currentKey) {
  $("." + currentKey).addClass("pressed");
  setTimeout(function() {
    $("." + currentKey).removeClass("pressed");
  }, 100);
}


// ===================== jquery commands ==============================
// document.querySelectorAll --> $
// $("h1") or $(".class") or $("#id") or $(document) --> document means anywhere/body

// $("h1").css("color","purple");
// $(".drum").addClass("pressed");
// $("h1").addClass("classname");
// $("h1").removeClass("classname");

// $("h1").text("Bye");
// $("button").text("ClickMe");
// $("button").html("<em>click</em>");

// $("img").attr("src");
// $("a").attr("href","https://www.google.com");
// $("h1").attr("class");

// $("h1").click(function(event){
//   console.log(event);
// });

// $("button").keydown(function(event){
//   console.log(event);
// });

// $("h1").on("click",function(){
//   $("h1").html("Clicked");
//   $("h1").css("color","purple");
//   $("h1").hide();
//   $("h1").show();
//   $("h1").toggle();
//   $("h1").fadeOut();
//   $("h1").fadeIn();
//   $("h1").fadeToggle();
//   $("h1").slideUp();
//   $("h1").slideDown();
//   $("h1").slideToggle();
//   $("h1").animate({opacity: 0.5});
//   $("h1").hide().show();
// });

// $("h1").before("<button>New</button>");
// $("h1").after("<button>New</button>");
// $("h1").prepend("<button>New</button>");
// $("h1").append("<button>New</button>");
// $("h1").remove();
