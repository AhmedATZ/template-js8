// check if there is local storage color option
let mainColor = localStorage.getItem("color-option");
if(mainColor !== null){
    document.documentElement.style.setProperty('--main-color', localStorage.getItem("color-option"));

    // check for active class
    // remove active class from all colors list itams

    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");

 // add active class on elment === local storage item
        if(element.dataset.color === mainColor){

            // add active class
            element.classList.add("active");
        };
    });
};

// background option
let backgroundOption = true;

// variable to control the intravel
let backgroundInterval;

// check if thir is local storage arndom background
let backgroundLocalItem = localStorage.getItem("background_option");

//check if random background local is not embty
if(backgroundLocalItem !== null){
console.log(backgroundLocalItem);
console.log(typeof(backgroundLocalItem));
if(backgroundLocalItem === 'true'){
backgroundOption = true;
}else{
    backgroundOption = false;
}
console.log(backgroundLocalItem);
};

//toggle spin classon icon
document.querySelector(".toggle-setting .fa-gear").onclick = function (){

    //toggle class fa-spin for rotation on self
    this.classList.toggle("fa-spin");

    //toggle class open on main box
    document.querySelector(".setting-box").classList.toggle("open");
};

//switch colors
const colorLi = document.querySelectorAll(".colors-list li");
colorLi.forEach(li => {
    li.addEventListener("click", (e) => {
        console.log(e.target.dataset.color);

        // set color on root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        // set color on local storage
        localStorage.setItem("color-option", e.target.dataset.color);

      handleActive(e);
    
    });
});

//switch background option
const randomBackLi = document.querySelectorAll(".random-backgrounds span");
randomBackLi.forEach(span => {
    span.addEventListener("click", (e) => {
        console.log(e.target.dataset.color);

        handleActive(e);
        
    });
});

// selact-landing-page-element
let landingPage = document.querySelector(".landing-page");

// get-array-of-imgs
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// function to randomize imgs
function randomizeImgs(){
    if(backgroundOption === true){

       backgroundInterval = setInterval(() => {

            // get random number
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            
            // change-background-image-url
            landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';
            
            }, 10000);
            
    };
};
randomizeImgs();



// select skills 
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

    // skills offset top
    let skillsOffsetTop = ourSkills.offsetTop;

    // outer height 
    let skillsOuterHeight = ourSkills.offsetHeight;

    // window hight
    let windowHeight = this.innerHeight;

    // window scroll top 
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(skill => {

            skill.style.width = skill.dataset.progress;
        });

    };
};


// create popup with image

let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {
    img.addEventListener('click', (e) => {

        // create overlay elemnt
        let overLay = document.createElement("div");

        // add class to over lay 
        overLay.className = 'popup-overlay';

        // append overlay to body 
        document.body.appendChild(overLay);

        // create popup
        
        let popupBox = document.createElement("div");

        popupBox.className = 'popup-box';

        
        if(img.alt !== null){

            // create heading
            let imgHeading = document.createElement("h3");

            let imgText = document.createTextNode(img.alt);

            imgHeading.appendChild(imgText);

            popupBox.appendChild(imgHeading);

        };

        let popupImage = document.createElement("img");

        popupImage.src = img.src;

        popupBox.appendChild(popupImage);

        document.body.appendChild(popupBox);

        // create the close span
        let closeButton = document.createElement("span");

        // create the close text
        let closeButtonText = document.createTextNode("x");

        // append text to close button 
        closeButton.appendChild(closeButtonText);

        closeButton.className = 'close-button';

        popupBox.appendChild(closeButton);

    });
});

// close popup
document.addEventListener("click", function(e){

if(e.target.className == 'close-button'){

    // remove the currant popup
    e.target.parentNode.remove();

    // remove over lay 
    document.querySelector(".popup-overlay").remove();
};
});

// select all bullets

const allBullets = document.querySelectorAll(".nav-bullets .bullet");

allBullets.forEach(bullet =>{
    bullet.addEventListener("click", (e) =>{

        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// select all links

const allLinks = document.querySelectorAll(".landing-page .container .header-area a");

allLinks.forEach(link =>{
    link.addEventListener("click", (e) =>{

        e.preventDefault();

        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// handale active state
function handleActive(ev){
    ev.target.parentElement.querySelectorAll(".active").forEach(element =>{
        element.classList.remove("active");
    });
    ev.target.classList.add("active");
};

// toggle menu 
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links")

toggleBtn.onclick = function (e){

    e.stopPropagation();

    this.classList.toggle("menu-active");

    tLinks.classList.toggle("open");
};

// click anywhere outside menu and toggle button
document.addEventListener("click", (e) =>{
    if (e.target !== toggleBtn && e.target !== tLinks){
        
        if(tLinks.classList.contains("open")){

            toggleBtn.classList.toggle("menu-active");

    tLinks.classList.toggle("open");

        };
    };
});

tLinks.onclick = function (e){
    e.stopPropagation();
};
