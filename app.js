let home = document.getElementById("home")
let about = document.getElementById("about")
let project = document.getElementById("projects")
let nav = document.getElementById("nav")
let div_clear = document.getElementById("div_clear")
let nav_drop_button = document.getElementById("nav_drop")
current = home
function change_Page(page){
    if (page == "about"){
        current.style.zIndex = 2
        about.style.zIndex = 10
        current = about
        return;
    }
    if (page == "home"){
        current.style.zIndex = 2
        home.style.zIndex = 10
        current = home
        return;
    }
    if (page == "projects"){
        current.style.zIndex = 2
        project.style.zIndex = 10
        current = project
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
        div_clear.style.zIndex = "19"
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