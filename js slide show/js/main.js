let myImages = document.getElementById('slideshow');

let image = ["images/1.jpg","images/2.png","images/3.jpg"];
let i = 0;

function Slideshow(){
    myImages.setAttribute('src',image[i]);
    if(i==image.length-1){
        i = 0;
    }else{
        i++;
    }
    setTimeout(()=>{
        Slideshow();
    },2000)
}
Slideshow();

// كود م/حمزه

// let myImage = document.getElementById("slideshow");
// let images = ["images/1.jpg", "images/2.png", "images/3.jpg"];
// let i = 0;

// function slideshow() {
//     myImage.setAttribute('src', images[i]); // images[2]

//     if(i == images.length - 1) {
//         i = 0;
//     } else {
//         i++; // i = 2
//     }

//     setTimeout(function() {
//         slideshow();
//     }, 2000)
// }

// slideshow();