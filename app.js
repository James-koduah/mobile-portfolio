let body = document.getElementById("body")
let home = document.getElementById("home")
let about = document.getElementById("about")
let project = document.getElementById("projects")
let nav = document.getElementById("nav")
let div_clear = document.getElementById("div_clear")
let nav_drop_button = document.getElementById("nav_drop")
let hacker_Text_Display = document.getElementById("hacker")
currentPage = home

// if (screen.width > 450)
//   {
//     window.location = "https://james-koduah.github.io/Personal-Portfolio/";
//   }
if (screen.width > 400){
    body.innerHTML +=`
    <div class="middle">
    <p>Redirecting to webpage for larger screens</p>
    <div>
    `
    setTimeout(()=>{
        location.assign("https://james-koduah.github.io/Personal-Portfolio/")
    }, 4000)
}


//Changes which interface is shown : Homepage : About : Projects
function change_Page(page){
    if (page == "about"){
        currentPage.style.zIndex = 2
        about.style.zIndex = 10
        currentPage = about
        return;
    }
    if (page == "home"){
        currentPage.style.zIndex = 2
        home.style.zIndex = 10
        currentPage = home
        return;
    }
    if (page == "projects"){
        currentPage.style.zIndex = 2
        project.style.zIndex = 10
        currentPage = project
        return;
    }
}

let b = false
function nav_drop(){
    if (b == false)
    {
        nav.style.zIndex = "19";
        nav_drop_button.style.background = "url(images/side.png)"
        nav_drop_button.style.backgroundSize = "100% 100%"
        div_clear.style.zIndex = "15"
        b = true 
    }
    else{
        nav.style.zIndex = "0";
        nav_drop_button.style.background = "url(images/iconmonstr-text-23-240.png)"
        nav_drop_button.style.backgroundSize = "100% 100%"
        div_clear.style.zIndex = "0"
        b = false
    }
       
}

let textIterations = 0;
let original_word = "SOFTWARE DEVELOPER"
text_interval = setInterval(()=>{
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    hacker_Text_Display.innerText = hacker_Text_Display.innerText.split("")
    .map((letter, index) => {

        if (index < textIterations){
            return original_word[index];
        }
        return letters[Math.floor(Math.random() * 26)]
    })
    
    .join("");

    textIterations += 1/4
},30);